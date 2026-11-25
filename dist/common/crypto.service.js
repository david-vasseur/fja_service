var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
let CryptoService = class CryptoService {
    algorithm = 'aes-256-gcm';
    key;
    constructor() {
        const hexKey = process.env.ENCRYPTION_KEY;
        if (!hexKey || hexKey.length !== 64) {
            throw new Error('ENCRYPTION_KEY manquante ou invalide dans .env (64 caractères hex requis)');
        }
        this.key = Buffer.from(hexKey, 'hex');
    }
    encryptNir(plainNir) {
        const cleaned = plainNir.replace(/\s+/g, '');
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
        const encrypted = Buffer.concat([
            cipher.update(cleaned, 'utf8'),
            cipher.final(),
        ]);
        const authTag = cipher.getAuthTag();
        const nirEncrypted = `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted.toString('hex')}`;
        const nirLast4 = cleaned.slice(-4);
        return { nirEncrypted, nirLast4 };
    }
    decryptNir(nirEncrypted) {
        const [ivHex, authTagHex, encryptedHex] = nirEncrypted.split(':');
        if (!ivHex || !authTagHex || !encryptedHex) {
            throw new Error('Format NIR chiffré invalide');
        }
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, Buffer.from(ivHex, 'hex'));
        decipher.setAuthTag(Buffer.from(authTagHex, 'hex'));
        const decrypted = Buffer.concat([
            decipher.update(Buffer.from(encryptedHex, 'hex')),
            decipher.final(),
        ]);
        return decrypted.toString('utf8');
    }
};
CryptoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CryptoService);
export { CryptoService };
//# sourceMappingURL=crypto.service.js.map