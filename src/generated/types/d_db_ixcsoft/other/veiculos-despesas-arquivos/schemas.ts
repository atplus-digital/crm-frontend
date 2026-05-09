/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_DESPESAS_ARQUIVOS_TABLE_NAME =
	"veiculos_despesas_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_despesas_arquivosBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data: z.string(),
	descricao: z.string(),
	extensao: z.string(),
	id_usuario: z.number(),
	id_veiculos_despesas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_despesas_arquivosSchema =
	veiculos_despesas_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_despesas_arquivosCreateSchema =
	veiculos_despesas_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_despesas_arquivosUpdateSchema =
	veiculos_despesas_arquivosCreateSchema.partial();
