/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_REGIAO_MANUTENCAO_CAIXA_ATENDIMENTO_TABLE_NAME =
	"su_oss_chamado_regiao_manutencao_caixa_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_atendimentoBaseSchema =
	z.object({
		id: z.number(),
		id_rad_caixa_ftth: z.number(),
		id_su_oss_chamado: z.number(),
		id_su_oss_chamado_regiao_manutencao: z.number(),
	});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_atendimentoSchema =
	su_oss_chamado_regiao_manutencao_caixa_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_atendimentoCreateSchema =
	su_oss_chamado_regiao_manutencao_caixa_atendimentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_caixa_atendimentoUpdateSchema =
	su_oss_chamado_regiao_manutencao_caixa_atendimentoCreateSchema.partial();
