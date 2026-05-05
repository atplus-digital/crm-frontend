/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { aniversariosBaseSchema } from "../other/aniversarios/schemas";
import { arquivos_funcionariosBaseSchema } from "../other/arquivos-funcionarios/schemas";
import { asosBaseSchema } from "../other/asos/schemas";
import { cargosBaseSchema } from "../other/cargos/schemas";
import { departamentosBaseSchema } from "../other/departamentos/schemas";
import { foto_funcionariosBaseSchema } from "../other/foto-funcionarios/schemas";
import { info_arquivosBaseSchema } from "../other/info-arquivos/schemas";
import { info_asoBaseSchema } from "../other/info-aso/schemas";
import { linha_corporativaBaseSchema } from "../other/linha-corporativa/schemas";
import { logs_cargosBaseSchema } from "../other/logs-cargos/schemas";
import { parentescoBaseSchema } from "../other/parentesco/schemas";
import { patrimonioBaseSchema } from "../other/patrimonio/schemas";
import { periodos_feriasBaseSchema } from "../other/periodos-ferias/schemas";
import { qualirun_info_adicionaisBaseSchema } from "../other/qualirun-info-adicionais/schemas";
import { qualirun_processosBaseSchema } from "../other/qualirun-processos/schemas";
import { turnosBaseSchema } from "../other/turnos/schemas";
import { usersBaseSchema } from "../users/schemas";
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
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_aniversarios: z.lazy(() => aniversariosBaseSchema.array()),
	f_arquivos_funcionarios: z.lazy(() =>
		arquivos_funcionariosBaseSchema.array(),
	),
	f_asos: z.lazy(() => asosBaseSchema.array()),
	f_cargo: z.lazy(() => cargosBaseSchema.nullable()),
	f_chip_corporativo: z.lazy(() => linha_corporativaBaseSchema.array()),
	f_departamento: z.lazy(() => departamentosBaseSchema.nullable()),
	f_foto_funcionarios: z.lazy(() => foto_funcionariosBaseSchema.array()),
	f_info_arquivos: z.lazy(() => info_arquivosBaseSchema.array()),
	f_info_aso: z.lazy(() => info_asoBaseSchema.array()),
	f_logs_cargos: z.lazy(() => logs_cargosBaseSchema.array()),
	f_parentesco: z.lazy(() => parentescoBaseSchema.array()),
	f_patrimonio_funcionarios: z.lazy(() => patrimonioBaseSchema.array()),
	f_periodos_ferias: z.lazy(() => periodos_feriasBaseSchema.array()),
	f_qualirun_processos: z.lazy(() => qualirun_processosBaseSchema.array()),
	f_turnos: z.lazy(() => turnosBaseSchema.nullable()),
	t_qualirun_info_adicionais: z.lazy(() =>
		qualirun_info_adicionaisBaseSchema.array(),
	),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const f_funcionariosSchema = f_funcionariosBaseSchema.extend(
	f_funcionariosRelationSchema.shape,
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
