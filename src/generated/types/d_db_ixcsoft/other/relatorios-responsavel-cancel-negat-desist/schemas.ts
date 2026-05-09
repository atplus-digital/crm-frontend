/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { relatorios_responsavel_cancel_negat_desistTipoDataSchema } from "./labels";

export const RELATORIOS_RESPONSAVEL_CANCEL_NEGAT_DESIST_TABLE_NAME =
	"relatorios_responsavel_cancel_negat_desist";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorios_responsavel_cancel_negat_desistBaseSchema = z.object({
	id: z.number(),
	data_final_periodo: z.number(),
	data_inicial_periodo: z.number(),
	data_periodo: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	tipo_data: relatorios_responsavel_cancel_negat_desistTipoDataSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorios_responsavel_cancel_negat_desistSchema =
	relatorios_responsavel_cancel_negat_desistBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorios_responsavel_cancel_negat_desistCreateSchema =
	relatorios_responsavel_cancel_negat_desistSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorios_responsavel_cancel_negat_desistUpdateSchema =
	relatorios_responsavel_cancel_negat_desistCreateSchema.partial();
