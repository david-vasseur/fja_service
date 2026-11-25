import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { CryptoService } from '../common/crypto.service.js';

@Global()
@Module({
  providers: [PrismaService, CryptoService],
  exports: [PrismaService, CryptoService],
})
export class PrismaModule {}
