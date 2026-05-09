/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_COMISSAO_TABLE_NAME = "su_oss_chamado_comissao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_comissaoBaseSchema = z.object({
	id: z.number(),
	id_equipe: z.number(),
	id_oss_chamado: z.number(),
	id_tecnico: z.number(),
	valor_comissao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_comissaoSchema = su_oss_chamado_comissaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_comissaoCreateSchema =
	su_oss_chamado_comissaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_comissaoUpdateSchema =
	su_oss_chamado_comissaoCreateSchema.partial();
