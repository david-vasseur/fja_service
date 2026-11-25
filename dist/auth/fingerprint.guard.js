var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, SetMetadata, UnauthorizedException, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service.js';
export const ROLES_KEY = 'roles';
export const Roles = (...roles) => SetMetadata(ROLES_KEY, roles);
let FingerprintGuard = class FingerprintGuard {
    authService;
    reflector;
    constructor(authService, reflector) {
        this.authService = authService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const internalKey = req.headers['x-internal-api-key'];
        if (!internalKey || internalKey !== process.env.INTERNAL_API_KEY) {
            throw new UnauthorizedException('Accès interne non autorisé');
        }
        const rawToken = req.headers['x-session-token'];
        if (!rawToken) {
            throw new UnauthorizedException('Session manquante');
        }
        const clientFp = req.headers['x-client-fingerprint'] || '';
        const userAgent = req.headers['x-forwarded-user-agent'] ||
            req.headers['user-agent'] ||
            '';
        const session = await this.authService.validateSession(rawToken, clientFp, userAgent);
        req.sessionUser = session;
        const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (requiredRoles && !requiredRoles.includes(session.role)) {
            throw new ForbiddenException('Droits insuffisants');
        }
        return true;
    }
};
FingerprintGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService,
        Reflector])
], FingerprintGuard);
export { FingerprintGuard };
//# sourceMappingURL=fingerprint.guard.js.map