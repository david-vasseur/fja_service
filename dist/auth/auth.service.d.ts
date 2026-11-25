import { PrismaService } from '../prisma/prisma.service.js';
import { UserRole } from '../generated/prisma/browser.js';
export declare const SESSION_COOKIE_NAME = "fja_session";
export declare const INACTIVITY_TIMEOUT_MS: number;
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    hashValue(raw: string): string;
    computeFingerprintHash(clientFp: string, userAgent: string): string;
    loginAdmin(email: string, password: string, clientFp: string, userAgent: string, ipAddress?: string): Promise<{
        token: string;
        user: {
            role: "admin";
            email: string;
            nom: string | null;
        };
    }>;
    loginOperation(loginId: string, loginPassword: string, clientFp: string, userAgent: string, ipAddress?: string): Promise<{
        token: string;
        user: {
            role: "operation";
            operationSlug: string;
            nomOperation: string;
        };
    }>;
    private createSession;
    validateSession(rawToken: string, clientFp: string, userAgent: string): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        fingerprintHash: string;
        role: UserRole;
        adminId: string | null;
        operationSlug: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        lastActivityAt: Date;
        expiresAt: Date;
    }>;
    logout(rawToken?: string): Promise<void>;
}
