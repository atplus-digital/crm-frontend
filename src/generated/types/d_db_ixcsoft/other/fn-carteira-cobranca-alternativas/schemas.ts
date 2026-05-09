/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_CARTEIRA_COBRANCA_ALTERNATIVAS_TABLE_NAME =
	"fn_carteira_cobranca_alternativas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_carteira_cobranca_alternativasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_alt_cartao: z.number(),
	id_alt_gateway: z.number(),
	id_alt_pix: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_carteira_cobranca_alternativasSchema =
	fn_carteira_cobranca_alternativasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_alternativasCreateSchema =
	fn_carteira_cobranca_alternativasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_alternativasUpdateSchema =
	fn_carteira_cobranca_alternativasCreateSchema.partial();
