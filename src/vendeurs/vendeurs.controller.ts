import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { FingerprintGuard, Roles } from '../auth/fingerprint.guard.js';
import * as vendeursService from './vendeurs.service.js';
import { UserRole } from '../generated/prisma/browser.js';
@Controller('vendeurs')
@UseGuards(FingerprintGuard)
@Roles(UserRole.ADMIN)
export class VendeursController {
  constructor(private readonly vendeursService: vendeursService.VendeursService) {}

  @Get()
  findAll() {
    return this.vendeursService.findAll();
  }

  @Get(':id/contrat-data')
  findOneForContract(@Param('id') id: string) {
    return this.vendeursService.findOneForContract(id);
  }

  @Post()
  create(@Body() body: vendeursService.UpsertVendeurDto) {
    return this.vendeursService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<vendeursService.UpsertVendeurDto>) {
    return this.vendeursService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendeursService.remove(id);
  }
}
