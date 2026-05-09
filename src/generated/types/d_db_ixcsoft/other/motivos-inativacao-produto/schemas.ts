/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { motivos_inativacao_produtoAtivoSchema } from "./labels";

export const MOTIVOS_INATIVACAO_PRODUTO_TABLE_NAME =
	"motivos_inativacao_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const motivos_inativacao_produtoBaseSchema = z.object({
	id: z.number(),
	ativo: motivos_inativacao_produtoAtivoSchema,
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const motivos_inativacao_produtoSchema =
	motivos_inativacao_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const motivos_inativacao_produtoCreateSchema =
	motivos_inativacao_produtoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const motivos_inativacao_produtoUpdateSchema =
	motivos_inativacao_produtoCreateSchema.partial();
