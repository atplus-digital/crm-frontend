/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VD_SAIDA_TRANSPORTE_VOLUMES_TABLE_NAME =
	"vd_saida_transporte_volumes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_saida_transporte_volumesBaseSchema = z.object({
	id: z.number(),
	esp: z.string(),
	id_mv_produtos: z.number(),
	id_vd_saida: z.number(),
	marca: z.string(),
	nvol: z.string(),
	pesob: z.number(),
	pesol: z.number(),
	qvol: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_saida_transporte_volumesSchema =
	vd_saida_transporte_volumesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_saida_transporte_volumesCreateSchema =
	vd_saida_transporte_volumesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_saida_transporte_volumesUpdateSchema =
	vd_saida_transporte_volumesCreateSchema.partial();
