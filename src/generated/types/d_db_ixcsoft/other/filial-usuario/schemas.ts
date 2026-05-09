/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	filial_usuarioAtivoSchema,
	filial_usuarioFilialPadraoSchema,
} from "./labels";

export const FILIAL_USUARIO_TABLE_NAME = "filial_usuario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const filial_usuarioBaseSchema = z.object({
	id: z.number(),
	ativo: filial_usuarioAtivoSchema,
	filial_id: z.number(),
	filial_padrao: filial_usuarioFilialPadraoSchema,
	usuario_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const filial_usuarioSchema = filial_usuarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const filial_usuarioCreateSchema = filial_usuarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const filial_usuarioUpdateSchema = filial_usuarioCreateSchema.partial();
