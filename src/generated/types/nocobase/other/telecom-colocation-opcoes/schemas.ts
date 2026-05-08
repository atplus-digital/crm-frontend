/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { telecom_colocation_opcoesEnergiaSchema } from "./labels";

export const T_TELECOM_COLOCATION_OPCOES_TABLE_NAME =
	"t_telecom_colocation_opcoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_colocation_opcoesBaseSchema = z.object({
	id: z.number(),
	f_6c1tv6gt1ey: z.number(),
	f_designacao_rack: z.string(),
	f_energia: telecom_colocation_opcoesEnergiaSchema,
	f_espaco_rack: z.string(),
	fk_opcoes_colocation: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_colocation_opcoesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_colocation_opcoesSchema =
	telecom_colocation_opcoesBaseSchema.extend(
		telecom_colocation_opcoesRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_colocation_opcoesCreateSchema =
	telecom_colocation_opcoesSchema.omit({
		createdAt: true,
		createdBy: true,
		createdById: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
		updatedById: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_colocation_opcoesUpdateSchema =
	telecom_colocation_opcoesCreateSchema.partial();
