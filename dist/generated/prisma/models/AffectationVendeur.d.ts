import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AffectationVendeurModel = runtime.Types.Result.DefaultSelection<Prisma.$AffectationVendeurPayload>;
export type AggregateAffectationVendeur = {
    _count: AffectationVendeurCountAggregateOutputType | null;
    _avg: AffectationVendeurAvgAggregateOutputType | null;
    _sum: AffectationVendeurSumAggregateOutputType | null;
    _min: AffectationVendeurMinAggregateOutputType | null;
    _max: AffectationVendeurMaxAggregateOutputType | null;
};
export type AffectationVendeurAvgAggregateOutputType = {
    fraisJournalier: number | null;
    commission: number | null;
};
export type AffectationVendeurSumAggregateOutputType = {
    fraisJournalier: number | null;
    commission: number | null;
};
export type AffectationVendeurMinAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    vendeurId: string | null;
    role: $Enums.RoleMission | null;
    dateDebut: string | null;
    dateFin: string | null;
    fraisJournalier: number | null;
    commission: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AffectationVendeurMaxAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    vendeurId: string | null;
    role: $Enums.RoleMission | null;
    dateDebut: string | null;
    dateFin: string | null;
    fraisJournalier: number | null;
    commission: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AffectationVendeurCountAggregateOutputType = {
    id: number;
    operationId: number;
    vendeurId: number;
    role: number;
    dateDebut: number;
    dateFin: number;
    fraisJournalier: number;
    commission: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AffectationVendeurAvgAggregateInputType = {
    fraisJournalier?: true;
    commission?: true;
};
export type AffectationVendeurSumAggregateInputType = {
    fraisJournalier?: true;
    commission?: true;
};
export type AffectationVendeurMinAggregateInputType = {
    id?: true;
    operationId?: true;
    vendeurId?: true;
    role?: true;
    dateDebut?: true;
    dateFin?: true;
    fraisJournalier?: true;
    commission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AffectationVendeurMaxAggregateInputType = {
    id?: true;
    operationId?: true;
    vendeurId?: true;
    role?: true;
    dateDebut?: true;
    dateFin?: true;
    fraisJournalier?: true;
    commission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AffectationVendeurCountAggregateInputType = {
    id?: true;
    operationId?: true;
    vendeurId?: true;
    role?: true;
    dateDebut?: true;
    dateFin?: true;
    fraisJournalier?: true;
    commission?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AffectationVendeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AffectationVendeurWhereInput;
    orderBy?: Prisma.AffectationVendeurOrderByWithRelationInput | Prisma.AffectationVendeurOrderByWithRelationInput[];
    cursor?: Prisma.AffectationVendeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AffectationVendeurCountAggregateInputType;
    _avg?: AffectationVendeurAvgAggregateInputType;
    _sum?: AffectationVendeurSumAggregateInputType;
    _min?: AffectationVendeurMinAggregateInputType;
    _max?: AffectationVendeurMaxAggregateInputType;
};
export type GetAffectationVendeurAggregateType<T extends AffectationVendeurAggregateArgs> = {
    [P in keyof T & keyof AggregateAffectationVendeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAffectationVendeur[P]> : Prisma.GetScalarType<T[P], AggregateAffectationVendeur[P]>;
};
export type AffectationVendeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AffectationVendeurWhereInput;
    orderBy?: Prisma.AffectationVendeurOrderByWithAggregationInput | Prisma.AffectationVendeurOrderByWithAggregationInput[];
    by: Prisma.AffectationVendeurScalarFieldEnum[] | Prisma.AffectationVendeurScalarFieldEnum;
    having?: Prisma.AffectationVendeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AffectationVendeurCountAggregateInputType | true;
    _avg?: AffectationVendeurAvgAggregateInputType;
    _sum?: AffectationVendeurSumAggregateInputType;
    _min?: AffectationVendeurMinAggregateInputType;
    _max?: AffectationVendeurMaxAggregateInputType;
};
export type AffectationVendeurGroupByOutputType = {
    id: string;
    operationId: string;
    vendeurId: string;
    role: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier: number;
    commission: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AffectationVendeurCountAggregateOutputType | null;
    _avg: AffectationVendeurAvgAggregateOutputType | null;
    _sum: AffectationVendeurSumAggregateOutputType | null;
    _min: AffectationVendeurMinAggregateOutputType | null;
    _max: AffectationVendeurMaxAggregateOutputType | null;
};
export type GetAffectationVendeurGroupByPayload<T extends AffectationVendeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AffectationVendeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AffectationVendeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AffectationVendeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AffectationVendeurGroupByOutputType[P]>;
}>>;
export type AffectationVendeurWhereInput = {
    AND?: Prisma.AffectationVendeurWhereInput | Prisma.AffectationVendeurWhereInput[];
    OR?: Prisma.AffectationVendeurWhereInput[];
    NOT?: Prisma.AffectationVendeurWhereInput | Prisma.AffectationVendeurWhereInput[];
    id?: Prisma.StringFilter<"AffectationVendeur"> | string;
    operationId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    vendeurId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    role?: Prisma.EnumRoleMissionFilter<"AffectationVendeur"> | $Enums.RoleMission;
    dateDebut?: Prisma.StringFilter<"AffectationVendeur"> | string;
    dateFin?: Prisma.StringFilter<"AffectationVendeur"> | string;
    fraisJournalier?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    commission?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    createdAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
    vendeur?: Prisma.XOR<Prisma.VendeurScalarRelationFilter, Prisma.VendeurWhereInput>;
};
export type AffectationVendeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    vendeurId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    operation?: Prisma.OperationOrderByWithRelationInput;
    vendeur?: Prisma.VendeurOrderByWithRelationInput;
};
export type AffectationVendeurWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AffectationVendeurWhereInput | Prisma.AffectationVendeurWhereInput[];
    OR?: Prisma.AffectationVendeurWhereInput[];
    NOT?: Prisma.AffectationVendeurWhereInput | Prisma.AffectationVendeurWhereInput[];
    operationId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    vendeurId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    role?: Prisma.EnumRoleMissionFilter<"AffectationVendeur"> | $Enums.RoleMission;
    dateDebut?: Prisma.StringFilter<"AffectationVendeur"> | string;
    dateFin?: Prisma.StringFilter<"AffectationVendeur"> | string;
    fraisJournalier?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    commission?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    createdAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
    vendeur?: Prisma.XOR<Prisma.VendeurScalarRelationFilter, Prisma.VendeurWhereInput>;
}, "id">;
export type AffectationVendeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    vendeurId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AffectationVendeurCountOrderByAggregateInput;
    _avg?: Prisma.AffectationVendeurAvgOrderByAggregateInput;
    _max?: Prisma.AffectationVendeurMaxOrderByAggregateInput;
    _min?: Prisma.AffectationVendeurMinOrderByAggregateInput;
    _sum?: Prisma.AffectationVendeurSumOrderByAggregateInput;
};
export type AffectationVendeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.AffectationVendeurScalarWhereWithAggregatesInput | Prisma.AffectationVendeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.AffectationVendeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AffectationVendeurScalarWhereWithAggregatesInput | Prisma.AffectationVendeurScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AffectationVendeur"> | string;
    operationId?: Prisma.StringWithAggregatesFilter<"AffectationVendeur"> | string;
    vendeurId?: Prisma.StringWithAggregatesFilter<"AffectationVendeur"> | string;
    role?: Prisma.EnumRoleMissionWithAggregatesFilter<"AffectationVendeur"> | $Enums.RoleMission;
    dateDebut?: Prisma.StringWithAggregatesFilter<"AffectationVendeur"> | string;
    dateFin?: Prisma.StringWithAggregatesFilter<"AffectationVendeur"> | string;
    fraisJournalier?: Prisma.FloatWithAggregatesFilter<"AffectationVendeur"> | number;
    commission?: Prisma.FloatWithAggregatesFilter<"AffectationVendeur"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AffectationVendeur"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AffectationVendeur"> | Date | string;
};
export type AffectationVendeurCreateInput = {
    id?: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operation: Prisma.OperationCreateNestedOneWithoutAffectationsInput;
    vendeur: Prisma.VendeurCreateNestedOneWithoutAffectationsInput;
};
export type AffectationVendeurUncheckedCreateInput = {
    id?: string;
    operationId: string;
    vendeurId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.OperationUpdateOneRequiredWithoutAffectationsNestedInput;
    vendeur?: Prisma.VendeurUpdateOneRequiredWithoutAffectationsNestedInput;
};
export type AffectationVendeurUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurCreateManyInput = {
    id?: string;
    operationId: string;
    vendeurId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurListRelationFilter = {
    every?: Prisma.AffectationVendeurWhereInput;
    some?: Prisma.AffectationVendeurWhereInput;
    none?: Prisma.AffectationVendeurWhereInput;
};
export type AffectationVendeurOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AffectationVendeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    vendeurId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AffectationVendeurAvgOrderByAggregateInput = {
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type AffectationVendeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    vendeurId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AffectationVendeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    vendeurId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AffectationVendeurSumOrderByAggregateInput = {
    fraisJournalier?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type AffectationVendeurCreateNestedManyWithoutVendeurInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput> | Prisma.AffectationVendeurCreateWithoutVendeurInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput | Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput[];
    createMany?: Prisma.AffectationVendeurCreateManyVendeurInputEnvelope;
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
};
export type AffectationVendeurUncheckedCreateNestedManyWithoutVendeurInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput> | Prisma.AffectationVendeurCreateWithoutVendeurInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput | Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput[];
    createMany?: Prisma.AffectationVendeurCreateManyVendeurInputEnvelope;
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
};
export type AffectationVendeurUpdateManyWithoutVendeurNestedInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput> | Prisma.AffectationVendeurCreateWithoutVendeurInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput | Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput[];
    upsert?: Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutVendeurInput | Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutVendeurInput[];
    createMany?: Prisma.AffectationVendeurCreateManyVendeurInputEnvelope;
    set?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    disconnect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    delete?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    update?: Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutVendeurInput | Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutVendeurInput[];
    updateMany?: Prisma.AffectationVendeurUpdateManyWithWhereWithoutVendeurInput | Prisma.AffectationVendeurUpdateManyWithWhereWithoutVendeurInput[];
    deleteMany?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
};
export type AffectationVendeurUncheckedUpdateManyWithoutVendeurNestedInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput> | Prisma.AffectationVendeurCreateWithoutVendeurInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput | Prisma.AffectationVendeurCreateOrConnectWithoutVendeurInput[];
    upsert?: Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutVendeurInput | Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutVendeurInput[];
    createMany?: Prisma.AffectationVendeurCreateManyVendeurInputEnvelope;
    set?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    disconnect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    delete?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    update?: Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutVendeurInput | Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutVendeurInput[];
    updateMany?: Prisma.AffectationVendeurUpdateManyWithWhereWithoutVendeurInput | Prisma.AffectationVendeurUpdateManyWithWhereWithoutVendeurInput[];
    deleteMany?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
};
export type AffectationVendeurCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput> | Prisma.AffectationVendeurCreateWithoutOperationInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput | Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.AffectationVendeurCreateManyOperationInputEnvelope;
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
};
export type AffectationVendeurUncheckedCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput> | Prisma.AffectationVendeurCreateWithoutOperationInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput | Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.AffectationVendeurCreateManyOperationInputEnvelope;
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
};
export type AffectationVendeurUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput> | Prisma.AffectationVendeurCreateWithoutOperationInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput | Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutOperationInput | Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.AffectationVendeurCreateManyOperationInputEnvelope;
    set?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    disconnect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    delete?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    update?: Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutOperationInput | Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.AffectationVendeurUpdateManyWithWhereWithoutOperationInput | Prisma.AffectationVendeurUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
};
export type AffectationVendeurUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput> | Prisma.AffectationVendeurCreateWithoutOperationInput[] | Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput | Prisma.AffectationVendeurCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutOperationInput | Prisma.AffectationVendeurUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.AffectationVendeurCreateManyOperationInputEnvelope;
    set?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    disconnect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    delete?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    connect?: Prisma.AffectationVendeurWhereUniqueInput | Prisma.AffectationVendeurWhereUniqueInput[];
    update?: Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutOperationInput | Prisma.AffectationVendeurUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.AffectationVendeurUpdateManyWithWhereWithoutOperationInput | Prisma.AffectationVendeurUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
};
export type EnumRoleMissionFieldUpdateOperationsInput = {
    set?: $Enums.RoleMission;
};
export type AffectationVendeurCreateWithoutVendeurInput = {
    id?: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operation: Prisma.OperationCreateNestedOneWithoutAffectationsInput;
};
export type AffectationVendeurUncheckedCreateWithoutVendeurInput = {
    id?: string;
    operationId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurCreateOrConnectWithoutVendeurInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput>;
};
export type AffectationVendeurCreateManyVendeurInputEnvelope = {
    data: Prisma.AffectationVendeurCreateManyVendeurInput | Prisma.AffectationVendeurCreateManyVendeurInput[];
    skipDuplicates?: boolean;
};
export type AffectationVendeurUpsertWithWhereUniqueWithoutVendeurInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.AffectationVendeurUpdateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedUpdateWithoutVendeurInput>;
    create: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedCreateWithoutVendeurInput>;
};
export type AffectationVendeurUpdateWithWhereUniqueWithoutVendeurInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateWithoutVendeurInput, Prisma.AffectationVendeurUncheckedUpdateWithoutVendeurInput>;
};
export type AffectationVendeurUpdateManyWithWhereWithoutVendeurInput = {
    where: Prisma.AffectationVendeurScalarWhereInput;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateManyMutationInput, Prisma.AffectationVendeurUncheckedUpdateManyWithoutVendeurInput>;
};
export type AffectationVendeurScalarWhereInput = {
    AND?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
    OR?: Prisma.AffectationVendeurScalarWhereInput[];
    NOT?: Prisma.AffectationVendeurScalarWhereInput | Prisma.AffectationVendeurScalarWhereInput[];
    id?: Prisma.StringFilter<"AffectationVendeur"> | string;
    operationId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    vendeurId?: Prisma.StringFilter<"AffectationVendeur"> | string;
    role?: Prisma.EnumRoleMissionFilter<"AffectationVendeur"> | $Enums.RoleMission;
    dateDebut?: Prisma.StringFilter<"AffectationVendeur"> | string;
    dateFin?: Prisma.StringFilter<"AffectationVendeur"> | string;
    fraisJournalier?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    commission?: Prisma.FloatFilter<"AffectationVendeur"> | number;
    createdAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AffectationVendeur"> | Date | string;
};
export type AffectationVendeurCreateWithoutOperationInput = {
    id?: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vendeur: Prisma.VendeurCreateNestedOneWithoutAffectationsInput;
};
export type AffectationVendeurUncheckedCreateWithoutOperationInput = {
    id?: string;
    vendeurId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurCreateOrConnectWithoutOperationInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput>;
};
export type AffectationVendeurCreateManyOperationInputEnvelope = {
    data: Prisma.AffectationVendeurCreateManyOperationInput | Prisma.AffectationVendeurCreateManyOperationInput[];
    skipDuplicates?: boolean;
};
export type AffectationVendeurUpsertWithWhereUniqueWithoutOperationInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.AffectationVendeurUpdateWithoutOperationInput, Prisma.AffectationVendeurUncheckedUpdateWithoutOperationInput>;
    create: Prisma.XOR<Prisma.AffectationVendeurCreateWithoutOperationInput, Prisma.AffectationVendeurUncheckedCreateWithoutOperationInput>;
};
export type AffectationVendeurUpdateWithWhereUniqueWithoutOperationInput = {
    where: Prisma.AffectationVendeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateWithoutOperationInput, Prisma.AffectationVendeurUncheckedUpdateWithoutOperationInput>;
};
export type AffectationVendeurUpdateManyWithWhereWithoutOperationInput = {
    where: Prisma.AffectationVendeurScalarWhereInput;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateManyMutationInput, Prisma.AffectationVendeurUncheckedUpdateManyWithoutOperationInput>;
};
export type AffectationVendeurCreateManyVendeurInput = {
    id?: string;
    operationId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurUpdateWithoutVendeurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.OperationUpdateOneRequiredWithoutAffectationsNestedInput;
};
export type AffectationVendeurUncheckedUpdateWithoutVendeurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurUncheckedUpdateManyWithoutVendeurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurCreateManyOperationInput = {
    id?: string;
    vendeurId: string;
    role?: $Enums.RoleMission;
    dateDebut: string;
    dateFin: string;
    fraisJournalier?: number;
    commission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AffectationVendeurUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vendeur?: Prisma.VendeurUpdateOneRequiredWithoutAffectationsNestedInput;
};
export type AffectationVendeurUncheckedUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurUncheckedUpdateManyWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleMissionFieldUpdateOperationsInput | $Enums.RoleMission;
    dateDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateFin?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisJournalier?: Prisma.FloatFieldUpdateOperationsInput | number;
    commission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AffectationVendeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    vendeurId?: boolean;
    role?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    fraisJournalier?: boolean;
    commission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["affectationVendeur"]>;
export type AffectationVendeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    vendeurId?: boolean;
    role?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    fraisJournalier?: boolean;
    commission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["affectationVendeur"]>;
export type AffectationVendeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    vendeurId?: boolean;
    role?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    fraisJournalier?: boolean;
    commission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["affectationVendeur"]>;
export type AffectationVendeurSelectScalar = {
    id?: boolean;
    operationId?: boolean;
    vendeurId?: boolean;
    role?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    fraisJournalier?: boolean;
    commission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AffectationVendeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "operationId" | "vendeurId" | "role" | "dateDebut" | "dateFin" | "fraisJournalier" | "commission" | "createdAt" | "updatedAt", ExtArgs["result"]["affectationVendeur"]>;
export type AffectationVendeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
};
export type AffectationVendeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
};
export type AffectationVendeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    vendeur?: boolean | Prisma.VendeurDefaultArgs<ExtArgs>;
};
export type $AffectationVendeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AffectationVendeur";
    objects: {
        operation: Prisma.$OperationPayload<ExtArgs>;
        vendeur: Prisma.$VendeurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        operationId: string;
        vendeurId: string;
        role: $Enums.RoleMission;
        dateDebut: string;
        dateFin: string;
        fraisJournalier: number;
        commission: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["affectationVendeur"]>;
    composites: {};
};
export type AffectationVendeurGetPayload<S extends boolean | null | undefined | AffectationVendeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload, S>;
export type AffectationVendeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AffectationVendeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AffectationVendeurCountAggregateInputType | true;
};
export interface AffectationVendeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AffectationVendeur'];
        meta: {
            name: 'AffectationVendeur';
        };
    };
    findUnique<T extends AffectationVendeurFindUniqueArgs>(args: Prisma.SelectSubset<T, AffectationVendeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AffectationVendeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AffectationVendeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AffectationVendeurFindFirstArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AffectationVendeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AffectationVendeurFindManyArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AffectationVendeurCreateArgs>(args: Prisma.SelectSubset<T, AffectationVendeurCreateArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AffectationVendeurCreateManyArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AffectationVendeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AffectationVendeurDeleteArgs>(args: Prisma.SelectSubset<T, AffectationVendeurDeleteArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AffectationVendeurUpdateArgs>(args: Prisma.SelectSubset<T, AffectationVendeurUpdateArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AffectationVendeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, AffectationVendeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AffectationVendeurUpdateManyArgs>(args: Prisma.SelectSubset<T, AffectationVendeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AffectationVendeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AffectationVendeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AffectationVendeurUpsertArgs>(args: Prisma.SelectSubset<T, AffectationVendeurUpsertArgs<ExtArgs>>): Prisma.Prisma__AffectationVendeurClient<runtime.Types.Result.GetResult<Prisma.$AffectationVendeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AffectationVendeurCountArgs>(args?: Prisma.Subset<T, AffectationVendeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AffectationVendeurCountAggregateOutputType> : number>;
    aggregate<T extends AffectationVendeurAggregateArgs>(args: Prisma.Subset<T, AffectationVendeurAggregateArgs>): Prisma.PrismaPromise<GetAffectationVendeurAggregateType<T>>;
    groupBy<T extends AffectationVendeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AffectationVendeurGroupByArgs['orderBy'];
    } : {
        orderBy?: AffectationVendeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AffectationVendeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffectationVendeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AffectationVendeurFieldRefs;
}
export interface Prisma__AffectationVendeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    operation<T extends Prisma.OperationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationDefaultArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendeur<T extends Prisma.VendeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendeurDefaultArgs<ExtArgs>>): Prisma.Prisma__VendeurClient<runtime.Types.Result.GetResult<Prisma.$VendeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AffectationVendeurFieldRefs {
    readonly id: Prisma.FieldRef<"AffectationVendeur", 'String'>;
    readonly operationId: Prisma.FieldRef<"AffectationVendeur", 'String'>;
    readonly vendeurId: Prisma.FieldRef<"AffectationVendeur", 'String'>;
    readonly role: Prisma.FieldRef<"AffectationVendeur", 'RoleMission'>;
    readonly dateDebut: Prisma.FieldRef<"AffectationVendeur", 'String'>;
    readonly dateFin: Prisma.FieldRef<"AffectationVendeur", 'String'>;
    readonly fraisJournalier: Prisma.FieldRef<"AffectationVendeur", 'Float'>;
    readonly commission: Prisma.FieldRef<"AffectationVendeur", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"AffectationVendeur", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AffectationVendeur", 'DateTime'>;
}
export type AffectationVendeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    where: Prisma.AffectationVendeurWhereUniqueInput;
};
export type AffectationVendeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    where: Prisma.AffectationVendeurWhereUniqueInput;
};
export type AffectationVendeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AffectationVendeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AffectationVendeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AffectationVendeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AffectationVendeurCreateInput, Prisma.AffectationVendeurUncheckedCreateInput>;
};
export type AffectationVendeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AffectationVendeurCreateManyInput | Prisma.AffectationVendeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AffectationVendeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    data: Prisma.AffectationVendeurCreateManyInput | Prisma.AffectationVendeurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AffectationVendeurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AffectationVendeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateInput, Prisma.AffectationVendeurUncheckedUpdateInput>;
    where: Prisma.AffectationVendeurWhereUniqueInput;
};
export type AffectationVendeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateManyMutationInput, Prisma.AffectationVendeurUncheckedUpdateManyInput>;
    where?: Prisma.AffectationVendeurWhereInput;
    limit?: number;
};
export type AffectationVendeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AffectationVendeurUpdateManyMutationInput, Prisma.AffectationVendeurUncheckedUpdateManyInput>;
    where?: Prisma.AffectationVendeurWhereInput;
    limit?: number;
    include?: Prisma.AffectationVendeurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AffectationVendeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    where: Prisma.AffectationVendeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AffectationVendeurCreateInput, Prisma.AffectationVendeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AffectationVendeurUpdateInput, Prisma.AffectationVendeurUncheckedUpdateInput>;
};
export type AffectationVendeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
    where: Prisma.AffectationVendeurWhereUniqueInput;
};
export type AffectationVendeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AffectationVendeurWhereInput;
    limit?: number;
};
export type AffectationVendeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AffectationVendeurSelect<ExtArgs> | null;
    omit?: Prisma.AffectationVendeurOmit<ExtArgs> | null;
    include?: Prisma.AffectationVendeurInclude<ExtArgs> | null;
};
