/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CODIGOS_CLASSIFICACAO_TRIBUTARIA_CBS_IBS_TABLE_NAME =
	"codigos_classificacao_tributaria_cbs_ibs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const codigos_classificacao_tributaria_cbs_ibsBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	forma_tributacao: z.number(),
	projeto: z.string(),
	reducao_aliquota: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const codigos_classificacao_tributaria_cbs_ibsSchema =
	codigos_classificacao_tributaria_cbs_ibsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const codigos_classificacao_tributaria_cbs_ibsCreateSchema =
	codigos_classificacao_tributaria_cbs_ibsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const codigos_classificacao_tributaria_cbs_ibsUpdateSchema =
	codigos_classificacao_tributaria_cbs_ibsCreateSchema.partial();
