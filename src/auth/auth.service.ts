import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { UserRole } from '../generated/prisma/browser.js';

export const SESSION_COOKIE_NAME = 'fja_session';
export const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  hashValue(raw: string): string {
    return crypto.createHash('sha256').update(raw).digest('hex');
  }

  computeFingerprintHash(clientFp: string, userAgent: string): string {
    const salt = process.env.FINGERPRINT_SALT || 'fja-default-salt';
    return this.hashValue(`${salt}:${clientFp}:${userAgent}`);
  }

  async loginAdmin(
    email: string,
    password: string,
    clientFp: string,
    userAgent: string,
    ipAddress?: string,
  ) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
      throw new UnauthorizedException('Identifiants administrateur invalides');
    }

    const token = await this.createSession({
      role: UserRole.ADMIN,
      adminId: admin.id,
      clientFp,
      userAgent,
      ipAddress,
    });

    return {
      token,
      user: {
        role: 'admin' as const,
        email: admin.email,
        nom: admin.nom,
      },
    };
  }

  async loginOperation(
    loginId: string,
    loginPassword: string,
    clientFp: string,
    userAgent: string,
    ipAddress?: string,
  ) {
    const operation = await this.prisma.operation.findUnique({
      where: { loginId: loginId.trim() },
    });

    if (!operation || operation.loginPassword !== loginPassword) {
      throw new UnauthorizedException('Identifiants opération invalides');
    }

    const token = await this.createSession({
      role: UserRole.OPERATION,
      operationSlug: operation.slug,
      clientFp,
      userAgent,
      ipAddress,
    });

    return {
      token,
      user: {
        role: 'operation' as const,
        operationSlug: operation.slug,
        nomOperation: operation.nomOperation,
      },
    };
  }

  private async createSession(params: {
    role: UserRole;
    adminId?: string;
    operationSlug?: string;
    clientFp: string;
    userAgent: string;
    ipAddress?: string;
  }): Promise<string> {
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = this.hashValue(rawToken);
    const fingerprintHash = this.computeFingerprintHash(
      params.clientFp,
      params.userAgent,
    );
    const now = new Date();

    await this.prisma.sessionFingerprint.create({
      data: {
        tokenHash,
        fingerprintHash,
        role: params.role,
        adminId: params.adminId,
        operationSlug: params.operationSlug,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        lastActivityAt: now,
        expiresAt: new Date(now.getTime() + INACTIVITY_TIMEOUT_MS),
      },
    });

    return rawToken;
  }

  async validateSession(rawToken: string, clientFp: string, userAgent: string) {
    const tokenHash = this.hashValue(rawToken);
    const session = await this.prisma.sessionFingerprint.findUnique({
      where: { tokenHash },
    });

    if (!session) {
      throw new UnauthorizedException('Session introuvable');
    }

    const now = Date.now();
    const inactiveDuration = now - session.lastActivityAt.getTime();

    if (
      inactiveDuration > INACTIVITY_TIMEOUT_MS ||
      session.expiresAt.getTime() < now
    ) {
      await this.prisma.sessionFingerprint.delete({ where: { id: session.id } });
      throw new UnauthorizedException('Session expirée après inactivité');
    }

    const expectedFpHash = this.computeFingerprintHash(clientFp, userAgent);
    if (session.fingerprintHash !== expectedFpHash) {
      await this.prisma.sessionFingerprint.delete({ where: { id: session.id } });
      throw new UnauthorizedException('Empreinte navigateur non reconnue');
    }

    // Prolonge la session de 10 minutes à chaque requête valide
    const updated = await this.prisma.sessionFingerprint.update({
      where: { id: session.id },
      data: {
        lastActivityAt: new Date(now),
        expiresAt: new Date(now + INACTIVITY_TIMEOUT_MS),
      },
    });

    return updated;
  }

  async logout(rawToken?: string) {
    if (!rawToken) return;
    const tokenHash = this.hashValue(rawToken);
    await this.prisma.sessionFingerprint
      .delete({ where: { tokenHash } })
      .catch(() => null);
  }
}
