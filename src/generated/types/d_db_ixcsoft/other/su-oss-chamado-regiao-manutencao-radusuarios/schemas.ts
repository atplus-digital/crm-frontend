/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_REGIAO_MANUTENCAO_RADUSUARIOS_TABLE_NAME =
	"su_oss_chamado_regiao_manutencao_radusuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_regiao_manutencao_radusuariosBaseSchema = z.object({
	id: z.number(),
	id_desconto_adicional: z.number(),
	id_radusuarios: z.number(),
	id_su_oss_chamado: z.number(),
	id_su_oss_chamado_regiao_manutencao: z.number(),
	valor_desconto_por_area: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_regiao_manutencao_radusuariosSchema =
	su_oss_chamado_regiao_manutencao_radusuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_radusuariosCreateSchema =
	su_oss_chamado_regiao_manutencao_radusuariosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencao_radusuariosUpdateSchema =
	su_oss_chamado_regiao_manutencao_radusuariosCreateSchema.partial();
