/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_MP_MINI_PROJETO_TABLE_NAME =
	"su_oss_chamado_mp_mini_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_mp_mini_projetoBaseSchema = z.object({
	id: z.number(),
	id_mp_mini_projeto: z.number(),
	id_su_oss_chamado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_mp_mini_projetoSchema =
	su_oss_chamado_mp_mini_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_mp_mini_projetoCreateSchema =
	su_oss_chamado_mp_mini_projetoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_mp_mini_projetoUpdateSchema =
	su_oss_chamado_mp_mini_projetoCreateSchema.partial();
