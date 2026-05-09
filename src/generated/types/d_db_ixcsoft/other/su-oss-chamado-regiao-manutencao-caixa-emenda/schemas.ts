/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_REGIAO_MANUTENCAO_CAIXA_EMENDA_TABLE_NAME =
	"su_oss_chamado_regiao_manutencao_caixa_emenda";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_emendaBaseSchema = z.object(
	{
		id: z.number(),
		id_df_elemento: z.number(),
		id_su_oss_chamado: z.number(),
		id_su_oss_chamado_regiao_manutencao: z.number(),
	},
);

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_emendaSchema =
	su_oss_chamado_regiao_manutencao_caixa_emendaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_emendaCreateSchema =
	su_oss_chamado_regiao_manutencao_caixa_emendaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_emendaUpdateSchema =
	su_oss_chamado_regiao_manutencao_caixa_emendaCreateSchema.partial();
