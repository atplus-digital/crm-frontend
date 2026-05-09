/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rad_hardwareAtivoSchema, rad_hardwareTipoSchema } from "./labels";

export const RAD_HARDWARE_TABLE_NAME = "rad_hardware";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_hardwareBaseSchema = z.object({
	id: z.number(),
	ativo: rad_hardwareAtivoSchema,
	fabricante: z.string(),
	hardware: z.string(),
	hardware_tipo: z.string(),
	imagem: z.string(),
	login: z.string(),
	obs: z.string(),
	porta_ssh: z.number(),
	porta_telnet: z.number(),
	qtd_portas: z.number(),
	script: z.string(),
	tipo: rad_hardwareTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_hardwareSchema = rad_hardwareBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_hardwareCreateSchema = rad_hardwareSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_hardwareUpdateSchema = rad_hardwareCreateSchema.partial();
