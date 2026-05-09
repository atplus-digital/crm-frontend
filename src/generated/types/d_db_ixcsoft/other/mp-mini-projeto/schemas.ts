/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	mp_mini_projetoStatusSchema,
	mp_mini_projetoTipoSchema,
} from "./labels";

export const MP_MINI_PROJETO_TABLE_NAME = "mp_mini_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const mp_mini_projetoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_colaborador: z.number(),
	id_estrutura: z.number(),
	id_funcionario: z.number(),
	id_projeto: z.number(),
	id_usuario: z.number(),
	status: mp_mini_projetoStatusSchema,
	tipo: mp_mini_projetoTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const mp_mini_projetoSchema = mp_mini_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const mp_mini_projetoCreateSchema = mp_mini_projetoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const mp_mini_projetoUpdateSchema =
	mp_mini_projetoCreateSchema.partial();
