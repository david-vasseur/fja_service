import { Module } from '@nestjs/common';
import { VendeursController } from './vendeurs.controller.js';
import { VendeursService } from './vendeurs.service.js';

@Module({
  controllers: [VendeursController],
  providers: [VendeursService],
  exports: [VendeursService],
})
export class VendeursModule {}
