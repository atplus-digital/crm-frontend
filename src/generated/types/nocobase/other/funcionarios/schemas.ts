/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	f_funcionariosAtivoSchema,
	f_funcionariosChecklistAdmissionalSchema,
	f_funcionariosEmpresaSchema,
	f_funcionariosEpiCalcadoSchema,
	f_funcionariosEscolaridadeSchema,
	f_funcionariosEstadoCivilSchema,
	f_funcionariosGeneroSchema,
	f_funcionariosMobilidadeSchema,
	f_funcionariosPcdSchema,
	f_funcionariosPrazoExperienciaSchema,
	f_funcionariosReservistaSchema,
	f_funcionariosSituacaoEscolaridadeSchema,
	f_funcionariosTerceiroSchema,
	f_funcionariosTipoContratoSchema,
	f_funcionariosUnidadeSchema,
	f_funcionariosUniversidadeSchema,
	f_funcionariosVinculoComColaboradorSchema,
} from "./labels";

export const F_FUNCIONARIOS_TABLE_NAME = "f_funcionarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const f_funcionariosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_fk_funcionarios2: z.number(),
	f_fk_setor: z.number(),
	f_fk_turnos: z.number(),
	f_id_tecnico_ixc: z.number(),
	f_ativo: f_funcionariosAtivoSchema,
	f_bairro: z.string(),
	f_celular: z.string(),
	f_cep: z.string(),
	f_checklist_admissional: f_funcionariosChecklistAdmissionalSchema,
	f_cnh: z.string(),
	f_cnpj: z.string(),
	f_conta_salario_pix: z.string(),
	f_cpf: z.string(),
	f_curso: z.string(),
	f_data_admissao: z.string(),
	f_data_demissao: z.string(),
	f_data_nascimento: z.string(),
	f_email_corporativo: z.string(),
	f_email_pessoal: z.string(),
	f_empresa: f_funcionariosEmpresaSchema,
	f_endereco: z.string(),
	f_endereco_cidade: z.string(),
	f_endereco_cnpj: z.string(),
	f_endereco_complemento: z.string(),
	f_endereco_estado: z.string(),
	f_endereco_numero: z.string(),
	f_endereco_referencia: z.string(),
	f_epi_calca: z.string(),
	f_epi_calcado: f_funcionariosEpiCalcadoSchema,
	f_epi_jaleco: z.string(),
	f_escolaridade: f_funcionariosEscolaridadeSchema,
	f_estado_civil: f_funcionariosEstadoCivilSchema,
	f_genero: f_funcionariosGeneroSchema,
	f_mes_nascimento: z.string(),
	f_mobilidade: f_funcionariosMobilidadeSchema,
	f_motivo_demissao: z.string(),
	f_nacionalidade: z.string(),
	f_naturalidade: z.string(),
	f_nome: z.string(),
	f_nome_contato_emergencia: z.string(),
	f_orgao_expedidor: z.string(),
	f_pcd: f_funcionariosPcdSchema,
	f_prazo_experiencia: f_funcionariosPrazoExperienciaSchema,
	f_razao_social: z.string(),
	f_reservista: f_funcionariosReservistaSchema,
	f_rg: z.string(),
	f_secao_eleitoral: z.string(),
	f_situacao_escolaridade: f_funcionariosSituacaoEscolaridadeSchema,
	f_telefone_emergencia: z.string(),
	f_terceiro: f_funcionariosTerceiroSchema,
	f_tipo_contrato: f_funcionariosTipoContratoSchema,
	f_tipo_deficiencia: z.string(),
	f_titulo_eleitor: z.string(),
	f_unidade: f_funcionariosUnidadeSchema,
	f_universidade: f_funcionariosUniversidadeSchema,
	f_valor_rescisao: z.number(),
	f_vencimento_contrato: z.string(),
	f_vinculo_com_colaborador: f_funcionariosVinculoComColaboradorSchema,
	f_zona_eleitoral: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const f_funcionariosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_aniversarios: z.number().array(),
	f_arquivos_funcionarios: z.number().array(),
	f_asos: z.number().array(),
	f_cargo: z.number().nullable(),
	f_chip_corporativo: z.number().array(),
	f_departamento: z.number().nullable(),
	f_foto_funcionarios: z.number().array(),
	f_info_arquivos: z.number().array(),
	f_info_aso: z.number().array(),
	f_logs_cargos: z.number().array(),
	f_parentesco: z.number().array(),
	f_patrimonio_funcionarios: z.number().array(),
	f_periodos_ferias: z.number().array(),
	f_qualirun_processos: z.number().array(),
	f_turnos: z.number().nullable(),
	t_qualirun_info_adicionais: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const f_funcionariosSchema = f_funcionariosBaseSchema.merge(
	f_funcionariosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const f_funcionariosCreateSchema = f_funcionariosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_aniversarios: true,
	f_arquivos_funcionarios: true,
	f_asos: true,
	f_cargo: true,
	f_chip_corporativo: true,
	f_departamento: true,
	f_foto_funcionarios: true,
	f_info_arquivos: true,
	f_info_aso: true,
	f_logs_cargos: true,
	f_parentesco: true,
	f_patrimonio_funcionarios: true,
	f_periodos_ferias: true,
	f_qualirun_processos: true,
	f_turnos: true,
	id: true,
	t_qualirun_info_adicionais: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const f_funcionariosUpdateSchema = f_funcionariosCreateSchema.partial();
