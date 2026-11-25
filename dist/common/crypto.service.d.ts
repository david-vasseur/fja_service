export declare class CryptoService {
    private readonly algorithm;
    private readonly key;
    constructor();
    encryptNir(plainNir: string): {
        nirEncrypted: string;
        nirLast4: string;
    };
    decryptNir(nirEncrypted: string): string;
}
