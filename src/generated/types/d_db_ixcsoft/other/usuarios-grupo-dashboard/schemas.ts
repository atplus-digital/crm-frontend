/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuarios_grupo_dashboardAtivoSchema,
	usuarios_grupo_dashboardPermissaoSchema,
} from "./labels";

export const USUARIOS_GRUPO_DASHBOARD_TABLE_NAME = "usuarios_grupo_dashboard";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_grupo_dashboardBaseSchema = z.object({
	id: z.number(),
	ativo: usuarios_grupo_dashboardAtivoSchema,
	dashboard: z.string(),
	formulario: z.string(),
	id_grupo: z.number(),
	permissao: usuarios_grupo_dashboardPermissaoSchema,
	widget: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_grupo_dashboardSchema =
	usuarios_grupo_dashboardBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_grupo_dashboardCreateSchema =
	usuarios_grupo_dashboardSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_grupo_dashboardUpdateSchema =
	usuarios_grupo_dashboardCreateSchema.partial();
