/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_apagar_remessa_loteTipoRemessaSchema } from "./labels";

export const FN_APAGAR_REMESSA_LOTE_TABLE_NAME = "fn_apagar_remessa_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_remessa_loteBaseSchema = z.object({
	id: z.number(),
	data_fin: z.string(),
	data_geracao: z.string(),
	data_ini: z.string(),
	descricao: z.string(),
	id_contas: z.number(),
	numero_sequencia: z.number(),
	tipo_remessa: fn_apagar_remessa_loteTipoRemessaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_remessa_loteSchema = fn_apagar_remessa_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_remessa_loteCreateSchema =
	fn_apagar_remessa_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_remessa_loteUpdateSchema =
	fn_apagar_remessa_loteCreateSchema.partial();
