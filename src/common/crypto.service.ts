import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CryptoService {
  private readonly algorithm = 'aes-256-gcm';
  private readonly key: Buffer;

  constructor() {
    const hexKey = process.env.ENCRYPTION_KEY;
    if (!hexKey || hexKey.length !== 64) {
      throw new Error(
        'ENCRYPTION_KEY manquante ou invalide dans .env (64 caractères hex requis)',
      );
    }
    this.key = Buffer.from(hexKey, 'hex');
  }

  encryptNir(plainNir: string): { nirEncrypted: string; nirLast4: string } {
    const cleaned = plainNir.replace(/\s+/g, '');
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    const encrypted = Buffer.concat([
      cipher.update(cleaned, 'utf8'),
      cipher.final(),
    ]);
    const authTag = cipher.getAuthTag();

    // Format stocké en base : iv:authTag:ciphertext (hex)
    const nirEncrypted = `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted.toString('hex')}`;
    const nirLast4 = cleaned.slice(-4);

    return { nirEncrypted, nirLast4 };
  }

  decryptNir(nirEncrypted: string): string {
    const [ivHex, authTagHex, encryptedHex] = nirEncrypted.split(':');
    if (!ivHex || !authTagHex || !encryptedHex) {
      throw new Error('Format NIR chiffré invalide');
    }

    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(ivHex, 'hex'),
    );
    decipher.setAuthTag(Buffer.from(authTagHex, 'hex'));

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedHex, 'hex')),
      decipher.final(),
    ]);

    return decrypted.toString('utf8');
  }
}
