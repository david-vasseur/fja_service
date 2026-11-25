import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { FingerprintGuard } from './fingerprint.guard.js';
import { AuthController } from './auth.controller.js';

@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService, FingerprintGuard],
  exports: [AuthService, FingerprintGuard],
})
export class AuthModule {}
