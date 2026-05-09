/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { nfe_carta_correcaoEmitidaSchema } from "./labels";

export const NFE_CARTA_CORRECAO_TABLE_NAME = "nfe_carta_correcao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nfe_carta_correcaoBaseSchema = z.object({
	id: z.number(),
	emitida: nfe_carta_correcaoEmitidaSchema,
	id_entrada: z.number(),
	id_saida: z.number(),
	motivo_carta: z.string(),
	sequencia: z.number(),
	xml_carta: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nfe_carta_correcaoSchema = nfe_carta_correcaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nfe_carta_correcaoCreateSchema = nfe_carta_correcaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nfe_carta_correcaoUpdateSchema =
	nfe_carta_correcaoCreateSchema.partial();
