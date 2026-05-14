/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import {
	modulos_sfpAlcanceSchema,
	modulos_sfpComprimentoOndaRxSchema,
	modulos_sfpComprimentoOndaTxSchema,
	modulos_sfpConectorFibraSchema,
	modulos_sfpFibrasSchema,
	modulos_sfpFormatoSchema,
	modulos_sfpInterfaceSchema,
	modulos_sfpStatusSchema,
	modulos_sfpTaxaSchema,
} from "./labels";

export const T_MODULOS_SFP_TABLE_NAME = "t_modulos_sfp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const modulos_sfpBaseSchema = z.object({
	id: z.number(),
	f_alcance: modulos_sfpAlcanceSchema,
	f_comprimento_onda_rx: modulos_sfpComprimentoOndaRxSchema,
	f_comprimento_onda_tx: modulos_sfpComprimentoOndaTxSchema,
	f_conector_fibra: modulos_sfpConectorFibraSchema,
	f_descricao: z.string(),
	f_fabricante: z.string(),
	f_fibras: modulos_sfpFibrasSchema,
	f_formato: modulos_sfpFormatoSchema,
	f_id_modulo: z.string(),
	f_interface: modulos_sfpInterfaceSchema,
	f_local: z.string(),
	f_obs: z.string(),
	f_pn: z.string(),
	f_sn: z.string(),
	f_status: modulos_sfpStatusSchema,
	f_taxa: modulos_sfpTaxaSchema,
	f_tipo_fibra: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const modulos_sfpRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const modulos_sfpSchema = modulos_sfpBaseSchema.extend(
	modulos_sfpRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const modulos_sfpCreateSchema = modulos_sfpSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const modulos_sfpUpdateSchema = modulos_sfpCreateSchema.partial();
