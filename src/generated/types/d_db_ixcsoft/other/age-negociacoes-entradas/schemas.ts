/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGE_NEGOCIACOES_ENTRADAS_TABLE_NAME = "age_negociacoes_entradas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_negociacoes_entradasBaseSchema = z.object({
	id: z.number(),
	id_fornecedor: z.number(),
	id_negociacao: z.number(),
	id_veiculo: z.number(),
	valor_bruto: z.number(),
	valor_liquido: z.number(),
	valor_multas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_negociacoes_entradasSchema =
	age_negociacoes_entradasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_negociacoes_entradasCreateSchema =
	age_negociacoes_entradasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_negociacoes_entradasUpdateSchema =
	age_negociacoes_entradasCreateSchema.partial();
