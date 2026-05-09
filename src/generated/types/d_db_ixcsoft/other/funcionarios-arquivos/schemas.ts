/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FUNCIONARIOS_ARQUIVOS_TABLE_NAME = "funcionarios_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionarios_arquivosBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data: z.string(),
	descricao: z.string(),
	extensao: z.string(),
	id_funcionario: z.number(),
	id_usuario: z.number(),
	tipo_doc: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionarios_arquivosSchema = funcionarios_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionarios_arquivosCreateSchema =
	funcionarios_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionarios_arquivosUpdateSchema =
	funcionarios_arquivosCreateSchema.partial();
