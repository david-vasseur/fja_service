import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service.js';
import { OperationsController } from './operations.controller.js';
import { PushModule } from '../push/push.module.js';

@Module({
  imports: [PushModule],
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
