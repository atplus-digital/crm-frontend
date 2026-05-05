/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_TELECOM_TRANSITO_OPCOES_TABLE_NAME = "t_telecom_transito_opcoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_transito_opcoesBaseSchema = z.object({
	id: z.number(),
	f_1eu8gjcf9js: z.number(),
	f_ips: z.string(),
	f_velocidade: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_transito_opcoesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_transito_opcoesSchema =
	telecom_transito_opcoesBaseSchema.extend(
		telecom_transito_opcoesRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_transito_opcoesCreateSchema =
	telecom_transito_opcoesSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_transito_opcoesUpdateSchema =
	telecom_transito_opcoesCreateSchema.partial();
