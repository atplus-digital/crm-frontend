/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TIPO_RELACIONAMENTO_CONTATO_TABLE_NAME =
	"tipo_relacionamento_contato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tipo_relacionamento_contatoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tipo_relacionamento_contatoSchema =
	tipo_relacionamento_contatoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tipo_relacionamento_contatoCreateSchema =
	tipo_relacionamento_contatoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tipo_relacionamento_contatoUpdateSchema =
	tipo_relacionamento_contatoCreateSchema.partial();
