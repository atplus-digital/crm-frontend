/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	funcionario_setoresAtivoSchema,
	funcionario_setoresListarAgendaSchema,
} from "./labels";

export const FUNCIONARIO_SETORES_TABLE_NAME = "funcionario_setores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionario_setoresBaseSchema = z.object({
	id: z.number(),
	ativo: funcionario_setoresAtivoSchema,
	listar_agenda: funcionario_setoresListarAgendaSchema,
	setor: z.number(),
	usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionario_setoresSchema = funcionario_setoresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionario_setoresCreateSchema = funcionario_setoresSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionario_setoresUpdateSchema =
	funcionario_setoresCreateSchema.partial();
