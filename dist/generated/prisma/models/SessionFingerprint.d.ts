import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SessionFingerprintModel = runtime.Types.Result.DefaultSelection<Prisma.$SessionFingerprintPayload>;
export type AggregateSessionFingerprint = {
    _count: SessionFingerprintCountAggregateOutputType | null;
    _min: SessionFingerprintMinAggregateOutputType | null;
    _max: SessionFingerprintMaxAggregateOutputType | null;
};
export type SessionFingerprintMinAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    fingerprintHash: string | null;
    role: $Enums.UserRole | null;
    adminId: string | null;
    operationSlug: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    lastActivityAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type SessionFingerprintMaxAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    fingerprintHash: string | null;
    role: $Enums.UserRole | null;
    adminId: string | null;
    operationSlug: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    lastActivityAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type SessionFingerprintCountAggregateOutputType = {
    id: number;
    tokenHash: number;
    fingerprintHash: number;
    role: number;
    adminId: number;
    operationSlug: number;
    ipAddress: number;
    userAgent: number;
    lastActivityAt: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type SessionFingerprintMinAggregateInputType = {
    id?: true;
    tokenHash?: true;
    fingerprintHash?: true;
    role?: true;
    adminId?: true;
    operationSlug?: true;
    ipAddress?: true;
    userAgent?: true;
    lastActivityAt?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type SessionFingerprintMaxAggregateInputType = {
    id?: true;
    tokenHash?: true;
    fingerprintHash?: true;
    role?: true;
    adminId?: true;
    operationSlug?: true;
    ipAddress?: true;
    userAgent?: true;
    lastActivityAt?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type SessionFingerprintCountAggregateInputType = {
    id?: true;
    tokenHash?: true;
    fingerprintHash?: true;
    role?: true;
    adminId?: true;
    operationSlug?: true;
    ipAddress?: true;
    userAgent?: true;
    lastActivityAt?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type SessionFingerprintAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionFingerprintWhereInput;
    orderBy?: Prisma.SessionFingerprintOrderByWithRelationInput | Prisma.SessionFingerprintOrderByWithRelationInput[];
    cursor?: Prisma.SessionFingerprintWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessionFingerprintCountAggregateInputType;
    _min?: SessionFingerprintMinAggregateInputType;
    _max?: SessionFingerprintMaxAggregateInputType;
};
export type GetSessionFingerprintAggregateType<T extends SessionFingerprintAggregateArgs> = {
    [P in keyof T & keyof AggregateSessionFingerprint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSessionFingerprint[P]> : Prisma.GetScalarType<T[P], AggregateSessionFingerprint[P]>;
};
export type SessionFingerprintGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionFingerprintWhereInput;
    orderBy?: Prisma.SessionFingerprintOrderByWithAggregationInput | Prisma.SessionFingerprintOrderByWithAggregationInput[];
    by: Prisma.SessionFingerprintScalarFieldEnum[] | Prisma.SessionFingerprintScalarFieldEnum;
    having?: Prisma.SessionFingerprintScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionFingerprintCountAggregateInputType | true;
    _min?: SessionFingerprintMinAggregateInputType;
    _max?: SessionFingerprintMaxAggregateInputType;
};
export type SessionFingerprintGroupByOutputType = {
    id: string;
    tokenHash: string;
    fingerprintHash: string;
    role: $Enums.UserRole;
    adminId: string | null;
    operationSlug: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    lastActivityAt: Date;
    expiresAt: Date;
    createdAt: Date;
    _count: SessionFingerprintCountAggregateOutputType | null;
    _min: SessionFingerprintMinAggregateOutputType | null;
    _max: SessionFingerprintMaxAggregateOutputType | null;
};
export type GetSessionFingerprintGroupByPayload<T extends SessionFingerprintGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessionFingerprintGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessionFingerprintGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessionFingerprintGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessionFingerprintGroupByOutputType[P]>;
}>>;
export type SessionFingerprintWhereInput = {
    AND?: Prisma.SessionFingerprintWhereInput | Prisma.SessionFingerprintWhereInput[];
    OR?: Prisma.SessionFingerprintWhereInput[];
    NOT?: Prisma.SessionFingerprintWhereInput | Prisma.SessionFingerprintWhereInput[];
    id?: Prisma.StringFilter<"SessionFingerprint"> | string;
    tokenHash?: Prisma.StringFilter<"SessionFingerprint"> | string;
    fingerprintHash?: Prisma.StringFilter<"SessionFingerprint"> | string;
    role?: Prisma.EnumUserRoleFilter<"SessionFingerprint"> | $Enums.UserRole;
    adminId?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    operationSlug?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    ipAddress?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    lastActivityAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
};
export type SessionFingerprintOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprintHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    operationSlug?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SessionFingerprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.SessionFingerprintWhereInput | Prisma.SessionFingerprintWhereInput[];
    OR?: Prisma.SessionFingerprintWhereInput[];
    NOT?: Prisma.SessionFingerprintWhereInput | Prisma.SessionFingerprintWhereInput[];
    fingerprintHash?: Prisma.StringFilter<"SessionFingerprint"> | string;
    role?: Prisma.EnumUserRoleFilter<"SessionFingerprint"> | $Enums.UserRole;
    adminId?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    operationSlug?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    ipAddress?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"SessionFingerprint"> | string | null;
    lastActivityAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"SessionFingerprint"> | Date | string;
}, "id" | "tokenHash">;
export type SessionFingerprintOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprintHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    operationSlug?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SessionFingerprintCountOrderByAggregateInput;
    _max?: Prisma.SessionFingerprintMaxOrderByAggregateInput;
    _min?: Prisma.SessionFingerprintMinOrderByAggregateInput;
};
export type SessionFingerprintScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessionFingerprintScalarWhereWithAggregatesInput | Prisma.SessionFingerprintScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessionFingerprintScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessionFingerprintScalarWhereWithAggregatesInput | Prisma.SessionFingerprintScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SessionFingerprint"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"SessionFingerprint"> | string;
    fingerprintHash?: Prisma.StringWithAggregatesFilter<"SessionFingerprint"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"SessionFingerprint"> | $Enums.UserRole;
    adminId?: Prisma.StringNullableWithAggregatesFilter<"SessionFingerprint"> | string | null;
    operationSlug?: Prisma.StringNullableWithAggregatesFilter<"SessionFingerprint"> | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"SessionFingerprint"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"SessionFingerprint"> | string | null;
    lastActivityAt?: Prisma.DateTimeWithAggregatesFilter<"SessionFingerprint"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"SessionFingerprint"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SessionFingerprint"> | Date | string;
};
export type SessionFingerprintCreateInput = {
    id?: string;
    tokenHash: string;
    fingerprintHash: string;
    role: $Enums.UserRole;
    adminId?: string | null;
    operationSlug?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    lastActivityAt?: Date | string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SessionFingerprintUncheckedCreateInput = {
    id?: string;
    tokenHash: string;
    fingerprintHash: string;
    role: $Enums.UserRole;
    adminId?: string | null;
    operationSlug?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    lastActivityAt?: Date | string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SessionFingerprintUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprintHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    operationSlug?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionFingerprintUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprintHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    operationSlug?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionFingerprintCreateManyInput = {
    id?: string;
    tokenHash: string;
    fingerprintHash: string;
    role: $Enums.UserRole;
    adminId?: string | null;
    operationSlug?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    lastActivityAt?: Date | string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type SessionFingerprintUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprintHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    operationSlug?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionFingerprintUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprintHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    operationSlug?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastActivityAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionFingerprintCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprintHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    operationSlug?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SessionFingerprintMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprintHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    operationSlug?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SessionFingerprintMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprintHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    operationSlug?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    lastActivityAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type SessionFingerprintSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    fingerprintHash?: boolean;
    role?: boolean;
    adminId?: boolean;
    operationSlug?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    lastActivityAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sessionFingerprint"]>;
export type SessionFingerprintSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    fingerprintHash?: boolean;
    role?: boolean;
    adminId?: boolean;
    operationSlug?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    lastActivityAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sessionFingerprint"]>;
export type SessionFingerprintSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    fingerprintHash?: boolean;
    role?: boolean;
    adminId?: boolean;
    operationSlug?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    lastActivityAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sessionFingerprint"]>;
export type SessionFingerprintSelectScalar = {
    id?: boolean;
    tokenHash?: boolean;
    fingerprintHash?: boolean;
    role?: boolean;
    adminId?: boolean;
    operationSlug?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    lastActivityAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type SessionFingerprintOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tokenHash" | "fingerprintHash" | "role" | "adminId" | "operationSlug" | "ipAddress" | "userAgent" | "lastActivityAt" | "expiresAt" | "createdAt", ExtArgs["result"]["sessionFingerprint"]>;
export type $SessionFingerprintPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SessionFingerprint";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tokenHash: string;
        fingerprintHash: string;
        role: $Enums.UserRole;
        adminId: string | null;
        operationSlug: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        lastActivityAt: Date;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["sessionFingerprint"]>;
    composites: {};
};
export type SessionFingerprintGetPayload<S extends boolean | null | undefined | SessionFingerprintDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload, S>;
export type SessionFingerprintCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessionFingerprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionFingerprintCountAggregateInputType | true;
};
export interface SessionFingerprintDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SessionFingerprint'];
        meta: {
            name: 'SessionFingerprint';
        };
    };
    findUnique<T extends SessionFingerprintFindUniqueArgs>(args: Prisma.SelectSubset<T, SessionFingerprintFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SessionFingerprintFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessionFingerprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SessionFingerprintFindFirstArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SessionFingerprintFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SessionFingerprintFindManyArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SessionFingerprintCreateArgs>(args: Prisma.SelectSubset<T, SessionFingerprintCreateArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SessionFingerprintCreateManyArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SessionFingerprintCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SessionFingerprintDeleteArgs>(args: Prisma.SelectSubset<T, SessionFingerprintDeleteArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SessionFingerprintUpdateArgs>(args: Prisma.SelectSubset<T, SessionFingerprintUpdateArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SessionFingerprintDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessionFingerprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SessionFingerprintUpdateManyArgs>(args: Prisma.SelectSubset<T, SessionFingerprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SessionFingerprintUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SessionFingerprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SessionFingerprintUpsertArgs>(args: Prisma.SelectSubset<T, SessionFingerprintUpsertArgs<ExtArgs>>): Prisma.Prisma__SessionFingerprintClient<runtime.Types.Result.GetResult<Prisma.$SessionFingerprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SessionFingerprintCountArgs>(args?: Prisma.Subset<T, SessionFingerprintCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessionFingerprintCountAggregateOutputType> : number>;
    aggregate<T extends SessionFingerprintAggregateArgs>(args: Prisma.Subset<T, SessionFingerprintAggregateArgs>): Prisma.PrismaPromise<GetSessionFingerprintAggregateType<T>>;
    groupBy<T extends SessionFingerprintGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessionFingerprintGroupByArgs['orderBy'];
    } : {
        orderBy?: SessionFingerprintGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessionFingerprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionFingerprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SessionFingerprintFieldRefs;
}
export interface Prisma__SessionFingerprintClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SessionFingerprintFieldRefs {
    readonly id: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly fingerprintHash: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly role: Prisma.FieldRef<"SessionFingerprint", 'UserRole'>;
    readonly adminId: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly operationSlug: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly ipAddress: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly userAgent: Prisma.FieldRef<"SessionFingerprint", 'String'>;
    readonly lastActivityAt: Prisma.FieldRef<"SessionFingerprint", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"SessionFingerprint", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SessionFingerprint", 'DateTime'>;
}
export type SessionFingerprintFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where: Prisma.SessionFingerprintWhereUniqueInput;
};
export type SessionFingerprintFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where: Prisma.SessionFingerprintWhereUniqueInput;
};
export type SessionFingerprintFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where?: Prisma.SessionFingerprintWhereInput;
    orderBy?: Prisma.SessionFingerprintOrderByWithRelationInput | Prisma.SessionFingerprintOrderByWithRelationInput[];
    cursor?: Prisma.SessionFingerprintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionFingerprintScalarFieldEnum | Prisma.SessionFingerprintScalarFieldEnum[];
};
export type SessionFingerprintFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where?: Prisma.SessionFingerprintWhereInput;
    orderBy?: Prisma.SessionFingerprintOrderByWithRelationInput | Prisma.SessionFingerprintOrderByWithRelationInput[];
    cursor?: Prisma.SessionFingerprintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionFingerprintScalarFieldEnum | Prisma.SessionFingerprintScalarFieldEnum[];
};
export type SessionFingerprintFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where?: Prisma.SessionFingerprintWhereInput;
    orderBy?: Prisma.SessionFingerprintOrderByWithRelationInput | Prisma.SessionFingerprintOrderByWithRelationInput[];
    cursor?: Prisma.SessionFingerprintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionFingerprintScalarFieldEnum | Prisma.SessionFingerprintScalarFieldEnum[];
};
export type SessionFingerprintCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionFingerprintCreateInput, Prisma.SessionFingerprintUncheckedCreateInput>;
};
export type SessionFingerprintCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SessionFingerprintCreateManyInput | Prisma.SessionFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessionFingerprintCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    data: Prisma.SessionFingerprintCreateManyInput | Prisma.SessionFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessionFingerprintUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionFingerprintUpdateInput, Prisma.SessionFingerprintUncheckedUpdateInput>;
    where: Prisma.SessionFingerprintWhereUniqueInput;
};
export type SessionFingerprintUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SessionFingerprintUpdateManyMutationInput, Prisma.SessionFingerprintUncheckedUpdateManyInput>;
    where?: Prisma.SessionFingerprintWhereInput;
    limit?: number;
};
export type SessionFingerprintUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionFingerprintUpdateManyMutationInput, Prisma.SessionFingerprintUncheckedUpdateManyInput>;
    where?: Prisma.SessionFingerprintWhereInput;
    limit?: number;
};
export type SessionFingerprintUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where: Prisma.SessionFingerprintWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionFingerprintCreateInput, Prisma.SessionFingerprintUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SessionFingerprintUpdateInput, Prisma.SessionFingerprintUncheckedUpdateInput>;
};
export type SessionFingerprintDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
    where: Prisma.SessionFingerprintWhereUniqueInput;
};
export type SessionFingerprintDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionFingerprintWhereInput;
    limit?: number;
};
export type SessionFingerprintDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionFingerprintSelect<ExtArgs> | null;
    omit?: Prisma.SessionFingerprintOmit<ExtArgs> | null;
};
