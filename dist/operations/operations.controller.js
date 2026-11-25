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
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, } from '@nestjs/common';
import { FingerprintGuard } from '../auth/fingerprint.guard.js';
import { OperationsService } from './operations.service.js';
let OperationsController = class OperationsController {
    operationsService;
    constructor(operationsService) {
        this.operationsService = operationsService;
    }
    getSession(req) {
        return req.sessionUser;
    }
    findAll(req) {
        return this.operationsService.findAll(this.getSession(req));
    }
    findBySlug(req, slug) {
        return this.operationsService.findBySlug(this.getSession(req), slug);
    }
    create(req, body) {
        return this.operationsService.create(this.getSession(req), body);
    }
    update(req, slug, body) {
        return this.operationsService.update(this.getSession(req), slug, body);
    }
    remove(req, id) {
        return this.operationsService.remove(this.getSession(req), id);
    }
    addVente(req, slug, body) {
        return this.operationsService.addVente(this.getSession(req), slug, body);
    }
    updateVente(req, slug, venteId, body) {
        return this.operationsService.updateVente(this.getSession(req), slug, venteId, body);
    }
    deleteVente(req, slug, venteId) {
        return this.operationsService.deleteVente(this.getSession(req), slug, venteId);
    }
};
__decorate([
    Get(),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "findAll", null);
__decorate([
    Get(':slug'),
    __param(0, Req()),
    __param(1, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "findBySlug", null);
__decorate([
    Post(),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "create", null);
__decorate([
    Patch(':slug'),
    __param(0, Req()),
    __param(1, Param('slug')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "remove", null);
__decorate([
    Post(':slug/ventes'),
    __param(0, Req()),
    __param(1, Param('slug')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "addVente", null);
__decorate([
    Patch(':slug/ventes/:venteId'),
    __param(0, Req()),
    __param(1, Param('slug')),
    __param(2, Param('venteId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "updateVente", null);
__decorate([
    Delete(':slug/ventes/:venteId'),
    __param(0, Req()),
    __param(1, Param('slug')),
    __param(2, Param('venteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "deleteVente", null);
OperationsController = __decorate([
    Controller('operations'),
    UseGuards(FingerprintGuard),
    __metadata("design:paramtypes", [OperationsService])
], OperationsController);
export { OperationsController };
//# sourceMappingURL=operations.controller.js.map