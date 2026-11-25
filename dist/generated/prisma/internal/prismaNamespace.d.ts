import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Admin: "Admin";
    readonly SessionFingerprint: "SessionFingerprint";
    readonly PushSubscription: "PushSubscription";
    readonly Vendeur: "Vendeur";
    readonly Operation: "Operation";
    readonly AffectationVendeur: "AffectationVendeur";
    readonly Vente: "Vente";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "admin" | "sessionFingerprint" | "pushSubscription" | "vendeur" | "operation" | "affectationVendeur" | "vente";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Admin: {
            payload: Prisma.$AdminPayload<ExtArgs>;
            fields: Prisma.AdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findFirst: {
                    args: Prisma.AdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findMany: {
                    args: Prisma.AdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                create: {
                    args: Prisma.AdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                createMany: {
                    args: Prisma.AdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                delete: {
                    args: Prisma.AdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                update: {
                    args: Prisma.AdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin>;
                };
                groupBy: {
                    args: Prisma.AdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminCountAggregateOutputType> | number;
                };
            };
        };
        SessionFingerprint: {
            payload: Prisma.$SessionFingerprintPayload<ExtArgs>;
            fields: Prisma.SessionFingerprintFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFingerprintFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFingerprintFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFingerprintFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFingerprintFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                findMany: {
                    args: Prisma.SessionFingerprintFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>[];
                };
                create: {
                    args: Prisma.SessionFingerprintCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                createMany: {
                    args: Prisma.SessionFingerprintCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionFingerprintCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>[];
                };
                delete: {
                    args: Prisma.SessionFingerprintDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                update: {
                    args: Prisma.SessionFingerprintUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionFingerprintDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionFingerprintUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionFingerprintUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>[];
                };
                upsert: {
                    args: Prisma.SessionFingerprintUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionFingerprintPayload>;
                };
                aggregate: {
                    args: Prisma.SessionFingerprintAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessionFingerprint>;
                };
                groupBy: {
                    args: Prisma.SessionFingerprintGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionFingerprintGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionFingerprintCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionFingerprintCountAggregateOutputType> | number;
                };
            };
        };
        PushSubscription: {
            payload: Prisma.$PushSubscriptionPayload<ExtArgs>;
            fields: Prisma.PushSubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
                };
                create: {
                    args: Prisma.PushSubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                update: {
                    args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePushSubscription>;
                };
                groupBy: {
                    args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PushSubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PushSubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PushSubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        Vendeur: {
            payload: Prisma.$VendeurPayload<ExtArgs>;
            fields: Prisma.VendeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VendeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VendeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                findFirst: {
                    args: Prisma.VendeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VendeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                findMany: {
                    args: Prisma.VendeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>[];
                };
                create: {
                    args: Prisma.VendeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                createMany: {
                    args: Prisma.VendeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VendeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>[];
                };
                delete: {
                    args: Prisma.VendeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                update: {
                    args: Prisma.VendeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                deleteMany: {
                    args: Prisma.VendeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VendeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VendeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>[];
                };
                upsert: {
                    args: Prisma.VendeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendeurPayload>;
                };
                aggregate: {
                    args: Prisma.VendeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVendeur>;
                };
                groupBy: {
                    args: Prisma.VendeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VendeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VendeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VendeurCountAggregateOutputType> | number;
                };
            };
        };
        Operation: {
            payload: Prisma.$OperationPayload<ExtArgs>;
            fields: Prisma.OperationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OperationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findFirst: {
                    args: Prisma.OperationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findMany: {
                    args: Prisma.OperationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                create: {
                    args: Prisma.OperationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                createMany: {
                    args: Prisma.OperationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                delete: {
                    args: Prisma.OperationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                update: {
                    args: Prisma.OperationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                deleteMany: {
                    args: Prisma.OperationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OperationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                upsert: {
                    args: Prisma.OperationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                aggregate: {
                    args: Prisma.OperationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOperation>;
                };
                groupBy: {
                    args: Prisma.OperationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OperationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationCountAggregateOutputType> | number;
                };
            };
        };
        AffectationVendeur: {
            payload: Prisma.$AffectationVendeurPayload<ExtArgs>;
            fields: Prisma.AffectationVendeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AffectationVendeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AffectationVendeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                findFirst: {
                    args: Prisma.AffectationVendeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AffectationVendeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                findMany: {
                    args: Prisma.AffectationVendeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>[];
                };
                create: {
                    args: Prisma.AffectationVendeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                createMany: {
                    args: Prisma.AffectationVendeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AffectationVendeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>[];
                };
                delete: {
                    args: Prisma.AffectationVendeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                update: {
                    args: Prisma.AffectationVendeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                deleteMany: {
                    args: Prisma.AffectationVendeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AffectationVendeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AffectationVendeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>[];
                };
                upsert: {
                    args: Prisma.AffectationVendeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AffectationVendeurPayload>;
                };
                aggregate: {
                    args: Prisma.AffectationVendeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAffectationVendeur>;
                };
                groupBy: {
                    args: Prisma.AffectationVendeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AffectationVendeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AffectationVendeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AffectationVendeurCountAggregateOutputType> | number;
                };
            };
        };
        Vente: {
            payload: Prisma.$VentePayload<ExtArgs>;
            fields: Prisma.VenteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VenteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VenteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                findFirst: {
                    args: Prisma.VenteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VenteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                findMany: {
                    args: Prisma.VenteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>[];
                };
                create: {
                    args: Prisma.VenteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                createMany: {
                    args: Prisma.VenteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VenteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>[];
                };
                delete: {
                    args: Prisma.VenteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                update: {
                    args: Prisma.VenteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                deleteMany: {
                    args: Prisma.VenteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VenteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VenteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>[];
                };
                upsert: {
                    args: Prisma.VenteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentePayload>;
                };
                aggregate: {
                    args: Prisma.VenteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVente>;
                };
                groupBy: {
                    args: Prisma.VenteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VenteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenteCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly nom: "nom";
    readonly telephone: "telephone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const SessionFingerprintScalarFieldEnum: {
    readonly id: "id";
    readonly tokenHash: "tokenHash";
    readonly fingerprintHash: "fingerprintHash";
    readonly role: "role";
    readonly adminId: "adminId";
    readonly operationSlug: "operationSlug";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly lastActivityAt: "lastActivityAt";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type SessionFingerprintScalarFieldEnum = (typeof SessionFingerprintScalarFieldEnum)[keyof typeof SessionFingerprintScalarFieldEnum];
export declare const PushSubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly endpoint: "endpoint";
    readonly p256dh: "p256dh";
    readonly auth: "auth";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum];
export declare const VendeurScalarFieldEnum: {
    readonly id: "id";
    readonly prenom: "prenom";
    readonly nom: "nom";
    readonly email: "email";
    readonly telephone: "telephone";
    readonly adresse: "adresse";
    readonly codePostal: "codePostal";
    readonly ville: "ville";
    readonly dateNaissance: "dateNaissance";
    readonly lieuNaissance: "lieuNaissance";
    readonly nationalite: "nationalite";
    readonly nirEncrypted: "nirEncrypted";
    readonly nirLast4: "nirLast4";
    readonly tauxCommissionBase: "tauxCommissionBase";
    readonly fraisJournalierDef: "fraisJournalierDef";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VendeurScalarFieldEnum = (typeof VendeurScalarFieldEnum)[keyof typeof VendeurScalarFieldEnum];
export declare const OperationScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly nomOperation: "nomOperation";
    readonly magasin: "magasin";
    readonly ville: "ville";
    readonly loginId: "loginId";
    readonly loginPassword: "loginPassword";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
    readonly coefOperation: "coefOperation";
    readonly tva: "tva";
    readonly vendeursEnPied: "vendeursEnPied";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum];
export declare const AffectationVendeurScalarFieldEnum: {
    readonly id: "id";
    readonly operationId: "operationId";
    readonly vendeurId: "vendeurId";
    readonly role: "role";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
    readonly fraisJournalier: "fraisJournalier";
    readonly commission: "commission";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AffectationVendeurScalarFieldEnum = (typeof AffectationVendeurScalarFieldEnum)[keyof typeof AffectationVendeurScalarFieldEnum];
export declare const VenteScalarFieldEnum: {
    readonly id: "id";
    readonly operationId: "operationId";
    readonly date: "date";
    readonly numBL: "numBL";
    readonly client: "client";
    readonly prixVenteTTC: "prixVenteTTC";
    readonly acompte: "acompte";
    readonly prixAchatHT: "prixAchatHT";
    readonly modele: "modele";
    readonly vendeurId: "vendeurId";
    readonly finisseurId: "finisseurId";
    readonly paiement: "paiement";
    readonly livraisonTTC: "livraisonTTC";
    readonly creditAccepte: "creditAccepte";
    readonly observations: "observations";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VenteScalarFieldEnum = (typeof VenteScalarFieldEnum)[keyof typeof VenteScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumRoleMissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleMission'>;
export type ListEnumRoleMissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleMission[]'>;
export type EnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement'>;
export type ListEnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement[]'>;
export type EnumStatutCreditFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCredit'>;
export type ListEnumStatutCreditFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCredit[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    admin?: Prisma.AdminOmit;
    sessionFingerprint?: Prisma.SessionFingerprintOmit;
    pushSubscription?: Prisma.PushSubscriptionOmit;
    vendeur?: Prisma.VendeurOmit;
    operation?: Prisma.OperationOmit;
    affectationVendeur?: Prisma.AffectationVendeurOmit;
    vente?: Prisma.VenteOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
