/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { dc_servidoresBaseSchema } from "../dc-servidores/schemas";
import {
	datacenter_memoriasCapacidadeSchema,
	datacenter_memoriasStatusSchema,
	datacenter_memoriasTipoSchema,
} from "./labels";

export const T_DATACENTER_MEMORIAS_TABLE_NAME = "t_datacenter_memorias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const datacenter_memoriasBaseSchema = z.object({
	id: z.number(),
	f_fk_memorias: z.number(),
	f_capacidade: datacenter_memoriasCapacidadeSchema,
	f_fabricante: z.string(),
	f_sn: z.string(),
	f_status: datacenter_memoriasStatusSchema,
	f_tipo: datacenter_memoriasTipoSchema,
	f_valor_locacao: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const datacenter_memoriasRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fk_servidor: z.lazy(() => dc_servidoresBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const datacenter_memoriasSchema = datacenter_memoriasBaseSchema.extend(
	datacenter_memoriasRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const datacenter_memoriasCreateSchema = datacenter_memoriasSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_fk_servidor: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const datacenter_memoriasUpdateSchema =
	datacenter_memoriasCreateSchema.partial();
