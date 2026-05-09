/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VD_SAIDA_TRANSPORTE_REBOQUE_TABLE_NAME =
	"vd_saida_transporte_reboque";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_saida_transporte_reboqueBaseSchema = z.object({
	id: z.number(),
	balsa: z.string(),
	id_reboque: z.number(),
	id_vd_saida: z.number(),
	placa: z.string(),
	rntc: z.string(),
	uf: z.string(),
	vagao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_saida_transporte_reboqueSchema =
	vd_saida_transporte_reboqueBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_saida_transporte_reboqueCreateSchema =
	vd_saida_transporte_reboqueSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_saida_transporte_reboqueUpdateSchema =
	vd_saida_transporte_reboqueCreateSchema.partial();
