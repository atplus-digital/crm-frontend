/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import {
	qualirun_info_adicionaisGrauEscolaridadeSchema,
	qualirun_info_adicionaisSituacaoCursoSchema,
	qualirun_info_adicionaisStatusSchema,
	qualirun_info_adicionaisVinculoContatoEmergenciaSchema,
} from "./labels";

export const T_QUALIRUN_INFO_ADICIONAIS_TABLE_NAME =
	"t_qualirun_info_adicionais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const qualirun_info_adicionaisBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_2fxykekjpk2: z.string(),
	f_contato_emergencia: z.string(),
	f_curso: z.string(),
	f_grau_escolaridade: qualirun_info_adicionaisGrauEscolaridadeSchema,
	f_id_externo: z.string(),
	f_parentesco_cpf: z.string(),
	f_parentesco_nome: z.string(),
	f_parentesco_vinculo: z.string(),
	f_situacao_curso: qualirun_info_adicionaisSituacaoCursoSchema,
	f_sqt1x7ndy5j: z.string(),
	f_status: qualirun_info_adicionaisStatusSchema,
	f_telefone_contato_emergencia: z.string(),
	f_tkxxh3xi2zw: z.string(),
	f_vinculo_contato_emergencia:
		qualirun_info_adicionaisVinculoContatoEmergenciaSchema,
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const qualirun_info_adicionaisRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const qualirun_info_adicionaisSchema =
	qualirun_info_adicionaisBaseSchema.extend(
		qualirun_info_adicionaisRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const qualirun_info_adicionaisCreateSchema =
	qualirun_info_adicionaisSchema.omit({
		createdAt: true,
		createdBy: true,
		createdById: true,
		f_funcionarios: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
		updatedById: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const qualirun_info_adicionaisUpdateSchema =
	qualirun_info_adicionaisCreateSchema.partial();
