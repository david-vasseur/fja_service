import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { FingerprintGuard } from '../auth/fingerprint.guard.js';
import { OperationsService, SessionContext } from './operations.service.js';

@Controller('operations')
@UseGuards(FingerprintGuard)
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  private getSession(req: Request): SessionContext {
    return (req as Request & { sessionUser: SessionContext }).sessionUser;
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.operationsService.findAll(this.getSession(req));
  }

  @Get(':slug')
  findBySlug(@Req() req: Request, @Param('slug') slug: string) {
    return this.operationsService.findBySlug(this.getSession(req), slug);
  }

  @Post()
  create(@Req() req: Request, @Body() body: any) {
    return this.operationsService.create(this.getSession(req), body);
  }

  @Patch(':slug')
  update(
    @Req() req: Request,
    @Param('slug') slug: string,
    @Body() body: any,
  ) {
    return this.operationsService.update(this.getSession(req), slug, body);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.operationsService.remove(this.getSession(req), id);
  }

  // --- VENTES ---

  @Post(':slug/ventes')
  addVente(
    @Req() req: Request,
    @Param('slug') slug: string,
    @Body() body: any,
  ) {
    return this.operationsService.addVente(this.getSession(req), slug, body);
  }

  @Patch(':slug/ventes/:venteId')
  updateVente(
    @Req() req: Request,
    @Param('slug') slug: string,
    @Param('venteId') venteId: string,
    @Body() body: any,
  ) {
    return this.operationsService.updateVente(
      this.getSession(req),
      slug,
      venteId,
      body,
    );
  }

  @Delete(':slug/ventes/:venteId')
  deleteVente(
    @Req() req: Request,
    @Param('slug') slug: string,
    @Param('venteId') venteId: string,
  ) {
    return this.operationsService.deleteVente(
      this.getSession(req),
      slug,
      venteId,
    );
  }
}
