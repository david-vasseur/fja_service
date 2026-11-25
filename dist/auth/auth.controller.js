var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Headers, Post, Req, UnauthorizedException, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { FingerprintGuard } from './fingerprint.guard.js';
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    assertInternalKey(internalKey) {
        if (!internalKey || internalKey !== process.env.INTERNAL_API_KEY) {
            throw new UnauthorizedException('Accès interne non autorisé');
        }
    }
    async loginAdmin(internalKey, body, clientFp = '', userAgent = '', ip = '') {
        this.assertInternalKey(internalKey);
        return this.authService.loginAdmin(body.email, body.password, clientFp, userAgent, ip);
    }
    async loginOperation(internalKey, body, clientFp = '', userAgent = '', ip = '') {
        this.assertInternalKey(internalKey);
        return this.authService.loginOperation(body.loginId, body.loginPassword, clientFp, userAgent, ip);
    }
    me(req) {
        const s = req.sessionUser;
        return {
            role: s.role === 'ADMIN' ? 'admin' : 'operation',
            operationSlug: s.operationSlug ?? null,
        };
    }
    async logout(internalKey, rawToken) {
        this.assertInternalKey(internalKey);
        await this.authService.logout(rawToken);
        return { ok: true };
    }
};
__decorate([
    Post('login-admin'),
    __param(0, Headers('x-internal-api-key')),
    __param(1, Body()),
    __param(2, Headers('x-client-fingerprint')),
    __param(3, Headers('x-forwarded-user-agent')),
    __param(4, Headers('x-forwarded-for')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAdmin", null);
__decorate([
    Post('login-operation'),
    __param(0, Headers('x-internal-api-key')),
    __param(1, Body()),
    __param(2, Headers('x-client-fingerprint')),
    __param(3, Headers('x-forwarded-user-agent')),
    __param(4, Headers('x-forwarded-for')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginOperation", null);
__decorate([
    Get('me'),
    UseGuards(FingerprintGuard),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
__decorate([
    Post('logout'),
    __param(0, Headers('x-internal-api-key')),
    __param(1, Headers('x-session-token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map