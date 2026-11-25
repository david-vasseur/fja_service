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
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, } from '@nestjs/common';
import { FingerprintGuard, Roles } from '../auth/fingerprint.guard.js';
import * as vendeursService from './vendeurs.service.js';
import { UserRole } from '../generated/prisma/browser.js';
let VendeursController = class VendeursController {
    vendeursService;
    constructor(vendeursService) {
        this.vendeursService = vendeursService;
    }
    findAll() {
        return this.vendeursService.findAll();
    }
    findOneForContract(id) {
        return this.vendeursService.findOneForContract(id);
    }
    create(body) {
        return this.vendeursService.create(body);
    }
    update(id, body) {
        return this.vendeursService.update(id, body);
    }
    remove(id) {
        return this.vendeursService.remove(id);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendeursController.prototype, "findAll", null);
__decorate([
    Get(':id/contrat-data'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendeursController.prototype, "findOneForContract", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VendeursController.prototype, "create", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VendeursController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendeursController.prototype, "remove", null);
VendeursController = __decorate([
    Controller('vendeurs'),
    UseGuards(FingerprintGuard),
    Roles(UserRole.ADMIN),
    __metadata("design:paramtypes", [vendeursService.VendeursService])
], VendeursController);
export { VendeursController };
//# sourceMappingURL=vendeurs.controller.js.map