/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_tipo_moduloExibirTituloSchema,
	hs_tipo_moduloHabilitadoSchema,
	hs_tipo_moduloMenusSchema,
} from "./labels";

export const HS_TIPO_MODULO_TABLE_NAME = "hs_tipo_modulo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_tipo_moduloBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	exibir_titulo: hs_tipo_moduloExibirTituloSchema,
	habilitado: hs_tipo_moduloHabilitadoSchema,
	menus: hs_tipo_moduloMenusSchema,
	nivel_acesso: z.string(),
	ordem: z.string(),
	posicao: z.number(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_tipo_moduloSchema = hs_tipo_moduloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_tipo_moduloCreateSchema = hs_tipo_moduloSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_tipo_moduloUpdateSchema = hs_tipo_moduloCreateSchema.partial();
