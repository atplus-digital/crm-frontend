/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	funcionario_motivo_horarioAtivoSchema,
	funcionario_motivo_horarioTipoSchema,
} from "./labels";

export const FUNCIONARIO_MOTIVO_HORARIO_TABLE_NAME =
	"funcionario_motivo_horario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionario_motivo_horarioBaseSchema = z.object({
	id: z.number(),
	ativo: funcionario_motivo_horarioAtivoSchema,
	motivo: z.string(),
	obs: z.string(),
	tipo: funcionario_motivo_horarioTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionario_motivo_horarioSchema =
	funcionario_motivo_horarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionario_motivo_horarioCreateSchema =
	funcionario_motivo_horarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionario_motivo_horarioUpdateSchema =
	funcionario_motivo_horarioCreateSchema.partial();
