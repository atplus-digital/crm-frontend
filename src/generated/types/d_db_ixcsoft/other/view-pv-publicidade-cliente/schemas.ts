/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VIEW_PV_PUBLICIDADE_CLIENTE_TABLE_NAME =
	"view_pv_publicidade_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_pv_publicidade_clienteBaseSchema = z.object({
	id: z.number(),
	razao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_pv_publicidade_clienteSchema =
	view_pv_publicidade_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_pv_publicidade_clienteCreateSchema =
	view_pv_publicidade_clienteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_pv_publicidade_clienteUpdateSchema =
	view_pv_publicidade_clienteCreateSchema.partial();
