import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { VendeursModule } from './vendeurs/vendeurs.module.js';
import { OperationsModule } from './operations/operations.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [PrismaModule, AuthModule, VendeursModule, OperationsModule],
})
export class AppModule {}
