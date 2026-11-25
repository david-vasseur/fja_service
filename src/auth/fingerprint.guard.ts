import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthService } from './auth.service.js';
import { UserRole } from '../generated/prisma/browser.js';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class FingerprintGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    // 1. Vérifie que la requête vient bien du conteneur Next.js
    const internalKey = req.headers['x-internal-api-key'] as string;
    if (!internalKey || internalKey !== process.env.INTERNAL_API_KEY) {
      throw new UnauthorizedException('Accès interne non autorisé');
    }

    // 2. Récupère le jeton de session et l'empreinte client relayés par la Server Action
    const rawToken = req.headers['x-session-token'] as string;
    if (!rawToken) {
      throw new UnauthorizedException('Session manquante');
    }

    const clientFp = (req.headers['x-client-fingerprint'] as string) || '';
    const userAgent =
      (req.headers['x-forwarded-user-agent'] as string) ||
      req.headers['user-agent'] ||
      '';

    const session = await this.authService.validateSession(
      rawToken,
      clientFp,
      userAgent,
    );

    (req as Request & { sessionUser?: typeof session }).sessionUser = session;

    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (requiredRoles && !requiredRoles.includes(session.role)) {
      throw new ForbiddenException('Droits insuffisants');
    }

    return true;
  }
}
