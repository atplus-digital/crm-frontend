/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	view_funcionarios_setorAtivoFuncionarioSetorSchema,
	view_funcionarios_setorAtivoSchema,
} from "./labels";

export const VIEW_FUNCIONARIOS_SETOR_TABLE_NAME = "view_funcionarios_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_funcionarios_setorBaseSchema = z.object({
	id: z.number(),
	ativo: view_funcionarios_setorAtivoSchema,
	ativo_funcionario_setor: view_funcionarios_setorAtivoFuncionarioSetorSchema,
	funcionario: z.string(),
	id_funcionario: z.number(),
	setor: z.number(),
	usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_funcionarios_setorSchema = view_funcionarios_setorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_funcionarios_setorCreateSchema =
	view_funcionarios_setorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_funcionarios_setorUpdateSchema =
	view_funcionarios_setorCreateSchema.partial();
