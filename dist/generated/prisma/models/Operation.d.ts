import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OperationModel = runtime.Types.Result.DefaultSelection<Prisma.$OperationPayload>;
export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null;
    _avg: OperationAvgAggregateOutputType | null;
    _sum: OperationSumAggregateOutputType | null;
    _min: OperationMinAggregateOutputType | null;
    _max: OperationMaxAggregateOutputType | null;
};
export type OperationAvgAggregateOutputType = {
    coefOperation: number | null;
    tva: number | null;
};
export type OperationSumAggregateOutputType = {
    coefOperation: number | null;
    tva: number | null;
};
export type OperationMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    nomOperation: string | null;
    magasin: string | null;
    ville: string | null;
    loginId: string | null;
    loginPassword: string | null;
    dateDebut: string | null;
    dateFin: string | null;
    coefOperation: number | null;
    tva: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OperationMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    nomOperation: string | null;
    magasin: string | null;
    ville: string | null;
    loginId: string | null;
    loginPassword: string | null;
    dateDebut: string | null;
    dateFin: string | null;
    coefOperation: number | null;
    tva: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OperationCountAggregateOutputType = {
    id: number;
    slug: number;
    nomOperation: number;
    magasin: number;
    ville: number;
    loginId: number;
    loginPassword: number;
    dateDebut: number;
    dateFin: number;
    coefOperation: number;
    tva: number;
    vendeursEnPied: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OperationAvgAggregateInputType = {
    coefOperation?: true;
    tva?: true;
};
export type OperationSumAggregateInputType = {
    coefOperation?: true;
    tva?: true;
};
export type OperationMinAggregateInputType = {
    id?: true;
    slug?: true;
    nomOperation?: true;
    magasin?: true;
    ville?: true;
    loginId?: true;
    loginPassword?: true;
    dateDebut?: true;
    dateFin?: true;
    coefOperation?: true;
    tva?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OperationMaxAggregateInputType = {
    id?: true;
    slug?: true;
    nomOperation?: true;
    magasin?: true;
    ville?: true;
    loginId?: true;
    loginPassword?: true;
    dateDebut?: true;
    dateFin?: true;
    coefOperation?: true;
    tva?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OperationCountAggregateInputType = {
    id?: true;
    slug?: true;
    nomOperation?: true;
    magasin?: true;
    ville?: true;
    loginId?: true;
    loginPassword?: true;
    dateDebut?: true;
    dateFin?: true;
    coefOperation?: true;
    tva?: true;
    vendeursEnPied?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OperationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OperationCountAggregateInputType;
    _avg?: OperationAvgAggregateInputType;
    _sum?: OperationSumAggregateInputType;
    _min?: OperationMinAggregateInputType;
    _max?: OperationMaxAggregateInputType;
};
export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
    [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOperation[P]> : Prisma.GetScalarType<T[P], AggregateOperation[P]>;
};
export type OperationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithAggregationInput | Prisma.OperationOrderByWithAggregationInput[];
    by: Prisma.OperationScalarFieldEnum[] | Prisma.OperationScalarFieldEnum;
    having?: Prisma.OperationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OperationCountAggregateInputType | true;
    _avg?: OperationAvgAggregateInputType;
    _sum?: OperationSumAggregateInputType;
    _min?: OperationMinAggregateInputType;
    _max?: OperationMaxAggregateInputType;
};
export type OperationGroupByOutputType = {
    id: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation: number;
    tva: number;
    vendeursEnPied: string[];
    createdAt: Date;
    updatedAt: Date;
    _count: OperationCountAggregateOutputType | null;
    _avg: OperationAvgAggregateOutputType | null;
    _sum: OperationSumAggregateOutputType | null;
    _min: OperationMinAggregateOutputType | null;
    _max: OperationMaxAggregateOutputType | null;
};
export type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OperationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]>;
}>>;
export type OperationWhereInput = {
    AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    OR?: Prisma.OperationWhereInput[];
    NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    id?: Prisma.StringFilter<"Operation"> | string;
    slug?: Prisma.StringFilter<"Operation"> | string;
    nomOperation?: Prisma.StringFilter<"Operation"> | string;
    magasin?: Prisma.StringFilter<"Operation"> | string;
    ville?: Prisma.StringFilter<"Operation"> | string;
    loginId?: Prisma.StringFilter<"Operation"> | string;
    loginPassword?: Prisma.StringFilter<"Operation"> | string;
    dateDebut?: Prisma.StringFilter<"Operation"> | string;
    dateFin?: Prisma.StringFilter<"Operation"> | string;
    coefOperation?: Prisma.FloatFilter<"Operation"> | number;
    tva?: Prisma.FloatFilter<"Operation"> | number;
    vendeursEnPied?: Prisma.StringNullableListFilter<"Operation">;
    createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    affectations?: Prisma.AffectationVendeurListRelationFilter;
    ventes?: Prisma.VenteListRelationFilter;
};
export type OperationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nomOperation?: Prisma.SortOrder;
    magasin?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    loginId?: Prisma.SortOrder;
    loginPassword?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    vendeursEnPied?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    affectations?: Prisma.AffectationVendeurOrderByRelationAggregateInput;
    ventes?: Prisma.VenteOrderByRelationAggregateInput;
};
export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    loginId?: string;
    AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    OR?: Prisma.OperationWhereInput[];
    NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    nomOperation?: Prisma.StringFilter<"Operation"> | string;
    magasin?: Prisma.StringFilter<"Operation"> | string;
    ville?: Prisma.StringFilter<"Operation"> | string;
    loginPassword?: Prisma.StringFilter<"Operation"> | string;
    dateDebut?: Prisma.StringFilter<"Operation"> | string;
    dateFin?: Prisma.StringFilter<"Operation"> | string;
    coefOperation?: Prisma.FloatFilter<"Operation"> | number;
    tva?: Prisma.FloatFilter<"Operation"> | number;
    vendeursEnPied?: Prisma.StringNullableListFilter<"Operation">;
    createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    affectations?: Prisma.AffectationVendeurListRelationFilter;
    ventes?: Prisma.VenteListRelationFilter;
}, "id" | "slug" | "loginId">;
export type OperationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nomOperation?: Prisma.SortOrder;
    magasin?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    loginId?: Prisma.SortOrder;
    loginPassword?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    vendeursEnPied?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OperationCountOrderByAggregateInput;
    _avg?: Prisma.OperationAvgOrderByAggregateInput;
    _max?: Prisma.OperationMaxOrderByAggregateInput;
    _min?: Prisma.OperationMinOrderByAggregateInput;
    _sum?: Prisma.OperationSumOrderByAggregateInput;
};
export type OperationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OperationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    nomOperation?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    magasin?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    ville?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    loginId?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    loginPassword?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    dateDebut?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    dateFin?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    coefOperation?: Prisma.FloatWithAggregatesFilter<"Operation"> | number;
    tva?: Prisma.FloatWithAggregatesFilter<"Operation"> | number;
    vendeursEnPied?: Prisma.StringNullableListFilter<"Operation">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string;
};
export type OperationCreateInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    affectations?: Prisma.AffectationVendeurCreateNestedManyWithoutOperationInput;
    ventes?: Prisma.VenteCreateNestedManyWithoutOperationInput;
};
export type OperationUncheckedCreateInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    affectations?: Prisma.AffectationVendeurUncheckedCreateNestedManyWithoutOperationInput;
    ventes?: Prisma.VenteUncheckedCreateNestedManyWithoutOperationInput;
};
export type OperationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    affectations?: Prisma.AffectationVendeurUpdateManyWithoutOperationNestedInput;
    ventes?: Prisma.VenteUpdateManyWithoutOperationNestedInput;
};
export type OperationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    affectations?: Prisma.AffectationVendeurUncheckedUpdateManyWithoutOperationNestedInput;
    ventes?: Prisma.VenteUncheckedUpdateManyWithoutOperationNestedInput;
};
export type OperationCreateManyInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OperationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OperationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type OperationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nomOperation?: Prisma.SortOrder;
    magasin?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    loginId?: Prisma.SortOrder;
    loginPassword?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    vendeursEnPied?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperationAvgOrderByAggregateInput = {
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
};
export type OperationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nomOperation?: Prisma.SortOrder;
    magasin?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    loginId?: Prisma.SortOrder;
    loginPassword?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nomOperation?: Prisma.SortOrder;
    magasin?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    loginId?: Prisma.SortOrder;
    loginPassword?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperationSumOrderByAggregateInput = {
    coefOperation?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
};
export type OperationScalarRelationFilter = {
    is?: Prisma.OperationWhereInput;
    isNot?: Prisma.OperationWhereInput;
};
export type OperationCreatevendeursEnPiedInput = {
    set: string[];
};
export type OperationUpdatevendeursEnPiedInput = {
    set?: string[];
    push?: string | string[];
};
export type OperationCreateNestedOneWithoutAffectationsInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutAffectationsInput, Prisma.OperationUncheckedCreateWithoutAffectationsInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutAffectationsInput;
    connect?: Prisma.OperationWhereUniqueInput;
};
export type OperationUpdateOneRequiredWithoutAffectationsNestedInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutAffectationsInput, Prisma.OperationUncheckedCreateWithoutAffectationsInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutAffectationsInput;
    upsert?: Prisma.OperationUpsertWithoutAffectationsInput;
    connect?: Prisma.OperationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperationUpdateToOneWithWhereWithoutAffectationsInput, Prisma.OperationUpdateWithoutAffectationsInput>, Prisma.OperationUncheckedUpdateWithoutAffectationsInput>;
};
export type OperationCreateNestedOneWithoutVentesInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutVentesInput, Prisma.OperationUncheckedCreateWithoutVentesInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutVentesInput;
    connect?: Prisma.OperationWhereUniqueInput;
};
export type OperationUpdateOneRequiredWithoutVentesNestedInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutVentesInput, Prisma.OperationUncheckedCreateWithoutVentesInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutVentesInput;
    upsert?: Prisma.OperationUpsertWithoutVentesInput;
    connect?: Prisma.OperationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperationUpdateToOneWithWhereWithoutVentesInput, Prisma.OperationUpdateWithoutVentesInput>, Prisma.OperationUncheckedUpdateWithoutVentesInput>;
};
export type OperationCreateWithoutAffectationsInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ventes?: Prisma.VenteCreateNestedManyWithoutOperationInput;
};
export type OperationUncheckedCreateWithoutAffectationsInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ventes?: Prisma.VenteUncheckedCreateNestedManyWithoutOperationInput;
};
export type OperationCreateOrConnectWithoutAffectationsInput = {
    where: Prisma.OperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationCreateWithoutAffectationsInput, Prisma.OperationUncheckedCreateWithoutAffectationsInput>;
};
export type OperationUpsertWithoutAffectationsInput = {
    update: Prisma.XOR<Prisma.OperationUpdateWithoutAffectationsInput, Prisma.OperationUncheckedUpdateWithoutAffectationsInput>;
    create: Prisma.XOR<Prisma.OperationCreateWithoutAffectationsInput, Prisma.OperationUncheckedCreateWithoutAffectationsInput>;
    where?: Prisma.OperationWhereInput;
};
export type OperationUpdateToOneWithWhereWithoutAffectationsInput = {
    where?: Prisma.OperationWhereInput;
    data: Prisma.XOR<Prisma.OperationUpdateWithoutAffectationsInput, Prisma.OperationUncheckedUpdateWithoutAffectationsInput>;
};
export type OperationUpdateWithoutAffectationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ventes?: Prisma.VenteUpdateManyWithoutOperationNestedInput;
};
export type OperationUncheckedUpdateWithoutAffectationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ventes?: Prisma.VenteUncheckedUpdateManyWithoutOperationNestedInput;
};
export type OperationCreateWithoutVentesInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    affectations?: Prisma.AffectationVendeurCreateNestedManyWithoutOperationInput;
};
export type OperationUncheckedCreateWithoutVentesInput = {
    id?: string;
    slug: string;
    nomOperation: string;
    magasin: string;
    ville: string;
    loginId: string;
    loginPassword: string;
    dateDebut: string;
    dateFin: string;
    coefOperation?: number;
    tva?: number;
    vendeursEnPied?: Prisma.OperationCreatevendeursEnPiedInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    affectations?: Prisma.AffectationVendeurUncheckedCreateNestedManyWithoutOperationInput;
};
export type OperationCreateOrConnectWithoutVentesInput = {
    where: Prisma.OperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationCreateWithoutVentesInput, Prisma.OperationUncheckedCreateWithoutVentesInput>;
};
export type OperationUpsertWithoutVentesInput = {
    update: Prisma.XOR<Prisma.OperationUpdateWithoutVentesInput, Prisma.OperationUncheckedUpdateWithoutVentesInput>;
    create: Prisma.XOR<Prisma.OperationCreateWithoutVentesInput, Prisma.OperationUncheckedCreateWithoutVentesInput>;
    where?: Prisma.OperationWhereInput;
};
export type OperationUpdateToOneWithWhereWithoutVentesInput = {
    where?: Prisma.OperationWhereInput;
    data: Prisma.XOR<Prisma.OperationUpdateWithoutVentesInput, Prisma.OperationUncheckedUpdateWithoutVentesInput>;
};
export type OperationUpdateWithoutVentesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    affectations?: Prisma.AffectationVendeurUpdateManyWithoutOperationNestedInput;
};
export type OperationUncheckedUpdateWithoutVentesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nomOperation?: Prisma.StringFieldUpdateOperationsInput | string;
    magasin?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    loginId?: Prisma.StringFieldUpdateOperationsInput | string;
    loginPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    coefOperation?: Prisma.FloatFieldUpdateOperationsInput | number;
    tva?: Prisma.FloatFieldUpdateOperationsInput | number;
    vendeursEnPied?: Prisma.OperationUpdatevendeursEnPiedInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    affectations?: Prisma.AffectationVendeurUncheckedUpdateManyWithoutOperationNestedInput;
};
export type OperationCountOutputType = {
    affectations: number;
    ventes: number;
};
export type OperationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    affectations?: boolean | OperationCountOutputTypeCountAffectationsArgs;
    ventes?: boolean | OperationCountOutputTypeCountVentesArgs;
};
export type OperationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationCountOutputTypeSelect<ExtArgs> | null;
};
export type OperationCountOutputTypeCountAffectationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AffectationVendeurWhereInput;
};
export type OperationCountOutputTypeCountVentesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VenteWhereInput;
};
export type OperationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nomOperation?: boolean;
    magasin?: boolean;
    ville?: boolean;
    loginId?: boolean;
    loginPassword?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    coefOperation?: boolean;
    tva?: boolean;
    vendeursEnPied?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    affectations?: boolean | Prisma.Operation$affectationsArgs<ExtArgs>;
    ventes?: boolean | Prisma.Operation$ventesArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nomOperation?: boolean;
    magasin?: boolean;
    ville?: boolean;
    loginId?: boolean;
    loginPassword?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    coefOperation?: boolean;
    tva?: boolean;
    vendeursEnPied?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nomOperation?: boolean;
    magasin?: boolean;
    ville?: boolean;
    loginId?: boolean;
    loginPassword?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    coefOperation?: boolean;
    tva?: boolean;
    vendeursEnPied?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectScalar = {
    id?: boolean;
    slug?: boolean;
    nomOperation?: boolean;
    magasin?: boolean;
    ville?: boolean;
    loginId?: boolean;
    loginPassword?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    coefOperation?: boolean;
    tva?: boolean;
    vendeursEnPied?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OperationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "nomOperation" | "magasin" | "ville" | "loginId" | "loginPassword" | "dateDebut" | "dateFin" | "coefOperation" | "tva" | "vendeursEnPied" | "createdAt" | "updatedAt", ExtArgs["result"]["operation"]>;
export type OperationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    affectations?: boolean | Prisma.Operation$affectationsArgs<ExtArgs>;
    ventes?: boolean | Prisma.Operation$ventesArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OperationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OperationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OperationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Operation";
    objects: {
        affectations: Prisma.$AffectationVendeurPayload<ExtArgs>[];
        ventes: Prisma.$VentePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        nomOperation: string;
        magasin: string;
        ville: string;
        loginId: string;
        loginPassword: string;
        dateDebut: string;
        dateFin: string;
        coefOperation: number;
        tva: number;
        vendeursEnPied: string[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["operation"]>;
    composites: {};
};
export type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OperationPayload, S>;
export type OperationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OperationCountAggregateInputType | true;
};
export interface OperationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Operation'];
        meta: {
            name: 'Operation';
        };
    };
    findUnique<T extends OperationFindUniqueArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OperationFindFirstArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OperationFindManyArgs>(args?: Prisma.SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OperationCreateArgs>(args: Prisma.SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OperationCreateManyArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OperationDeleteArgs>(args: Prisma.SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OperationUpdateArgs>(args: Prisma.SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OperationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OperationUpdateManyArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OperationUpsertArgs>(args: Prisma.SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OperationCountArgs>(args?: Prisma.Subset<T, OperationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OperationCountAggregateOutputType> : number>;
    aggregate<T extends OperationAggregateArgs>(args: Prisma.Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>;
    groupBy<T extends OperationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OperationGroupByArgs['orderBy'];
    } : {
        orderBy?: OperationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OperationFieldRefs;
}
export interface Prisma__OperationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    affectations<T extends Prisma.Operation$affectationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operation$affectationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ventes<T extends Prisma.Operation$ventesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operation$ventesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OperationFieldRefs {
    readonly id: Prisma.FieldRef<"Operation", 'String'>;
    readonly slug: Prisma.FieldRef<"Operation", 'String'>;
    readonly nomOperation: Prisma.FieldRef<"Operation", 'String'>;
    readonly magasin: Prisma.FieldRef<"Operation", 'String'>;
    readonly ville: Prisma.FieldRef<"Operation", 'String'>;
    readonly loginId: Prisma.FieldRef<"Operation", 'String'>;
    readonly loginPassword: Prisma.FieldRef<"Operation", 'String'>;
    readonly dateDebut: Prisma.FieldRef<"Operation", 'String'>;
    readonly dateFin: Prisma.FieldRef<"Operation", 'String'>;
    readonly coefOperation: Prisma.FieldRef<"Operation", 'Float'>;
    readonly tva: Prisma.FieldRef<"Operation", 'Float'>;
    readonly vendeursEnPied: Prisma.FieldRef<"Operation", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"Operation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Operation", 'DateTime'>;
}
export type OperationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>;
};
export type OperationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>;
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type OperationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>;
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type OperationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>;
};
export type OperationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type Operation$affectationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    where?: Prisma.AffectationVendeurWhereInput;
    orderBy?: Prisma.AffectationVendeurOrderByWithRelationInput | Prisma.AffectationVendeurOrderByWithRelationInput[];
    cursor?: Prisma.AffectationVendeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AffectationVendeurScalarFieldEnum | Prisma.AffectationVendeurScalarFieldEnum[];
};
export type Operation$ventesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenteSelect<ExtArgs> | null;
    omit?: Prisma.VenteOmit<ExtArgs> | null;
    include?: Prisma.VenteInclude<ExtArgs> | null;
    where?: Prisma.VenteWhereInput;
    orderBy?: Prisma.VenteOrderByWithRelationInput | Prisma.VenteOrderByWithRelationInput[];
    cursor?: Prisma.VenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenteScalarFieldEnum | Prisma.VenteScalarFieldEnum[];
};
export type OperationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
};
