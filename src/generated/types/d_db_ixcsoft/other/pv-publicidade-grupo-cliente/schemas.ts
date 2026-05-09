/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_PUBLICIDADE_GRUPO_CLIENTE_TABLE_NAME =
	"pv_publicidade_grupo_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_publicidade_grupo_clienteBaseSchema = z.object({
	id: z.number(),
	id_cliente: z.number(),
	id_grupo_publicidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_publicidade_grupo_clienteSchema =
	pv_publicidade_grupo_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_publicidade_grupo_clienteCreateSchema =
	pv_publicidade_grupo_clienteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_publicidade_grupo_clienteUpdateSchema =
	pv_publicidade_grupo_clienteCreateSchema.partial();
