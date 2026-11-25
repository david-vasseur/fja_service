import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { FingerprintGuard } from './fingerprint.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private assertInternalKey(internalKey?: string) {
    if (!internalKey || internalKey !== process.env.INTERNAL_API_KEY) {
      throw new UnauthorizedException('Accès interne non autorisé');
    }
  }

  @Post('login-admin')
  async loginAdmin(
    @Headers('x-internal-api-key') internalKey: string,
    @Body() body: { email: string; password: string },
    @Headers('x-client-fingerprint') clientFp = '',
    @Headers('x-forwarded-user-agent') userAgent = '',
    @Headers('x-forwarded-for') ip = '',
  ) {
    this.assertInternalKey(internalKey);
    return this.authService.loginAdmin(
      body.email,
      body.password,
      clientFp,
      userAgent,
      ip,
    );
  }

  @Post('login-operation')
  async loginOperation(
    @Headers('x-internal-api-key') internalKey: string,
    @Body() body: { loginId: string; loginPassword: string },
    @Headers('x-client-fingerprint') clientFp = '',
    @Headers('x-forwarded-user-agent') userAgent = '',
    @Headers('x-forwarded-for') ip = '',
  ) {
    this.assertInternalKey(internalKey);
    return this.authService.loginOperation(
      body.loginId,
      body.loginPassword,
      clientFp,
      userAgent,
      ip,
    );
  }

  @Get('me')
  @UseGuards(FingerprintGuard)
  me(@Req() req: Request & { sessionUser?: any }) {
    const s = req.sessionUser;
    return {
      role: s.role === 'ADMIN' ? 'admin' : 'operation',
      operationSlug: s.operationSlug ?? null,
    };
  }

  @Post('logout')
  async logout(
    @Headers('x-internal-api-key') internalKey: string,
    @Headers('x-session-token') rawToken?: string,
  ) {
    this.assertInternalKey(internalKey);
    await this.authService.logout(rawToken);
    return { ok: true };
  }
}
