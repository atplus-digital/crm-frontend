/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_MOTIVO_INUTILIZACAO_TABLE_NAME =
	"patrimonio_motivo_inutilizacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_motivo_inutilizacaoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_motivo_inutilizacaoSchema =
	patrimonio_motivo_inutilizacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_motivo_inutilizacaoCreateSchema =
	patrimonio_motivo_inutilizacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_motivo_inutilizacaoUpdateSchema =
	patrimonio_motivo_inutilizacaoCreateSchema.partial();
