import type { Request } from 'express';
import { AuthService } from './auth.service.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    private assertInternalKey;
    loginAdmin(internalKey: string, body: {
        email: string;
        password: string;
    }, clientFp?: string, userAgent?: string, ip?: string): Promise<{
        token: string;
        user: {
            role: "admin";
            email: string;
            nom: string | null;
        };
    }>;
    loginOperation(internalKey: string, body: {
        loginId: string;
        loginPassword: string;
    }, clientFp?: string, userAgent?: string, ip?: string): Promise<{
        token: string;
        user: {
            role: "operation";
            operationSlug: string;
            nomOperation: string;
        };
    }>;
    me(req: Request & {
        sessionUser?: any;
    }): {
        role: string;
        operationSlug: any;
    };
    logout(internalKey: string, rawToken?: string): Promise<{
        ok: boolean;
    }>;
}
