/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	contatoAtivoSchema,
	contatoCadastroSiteSchema,
	contatoEmailAtendimentoSchema,
	contatoLeadSchema,
	contatoLidSchema,
	contatoMoradiaSchema,
	contatoPrincipalSchema,
	contatoStatusViabilidadeSchema,
	contatoTipoDocumentoIdentificacaoColSchema,
	contatoTipoLocalidadeSchema,
	contatoTipoPessoaSchema,
	contatoTipoRedeSchema,
	contatoVincularContratoSchema,
} from "./labels";

export const CONTATO_TABLE_NAME = "contato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contatoBaseSchema = z.object({
	id: z.number(),
	alerta: z.string(),
	apartamento: z.string(),
	ativo: contatoAtivoSchema,
	bairro: z.string(),
	bloco: z.string(),
	cadastro_site: contatoCadastroSiteSchema,
	caixa_mais_proxima: z.number(),
	cep: z.string(),
	cidade: z.number(),
	cnpj_cpf: z.string(),
	complemento: z.string(),
	conversao_duplicada_marketing: z.number(),
	data: z.string(),
	data_cadastro: z.string(),
	data_nascimento: z.string(),
	data_ult_verificacao_viab: z.string(),
	distancia_caixa_mais_proxima: z.string(),
	email: z.string(),
	email_atendimento: contatoEmailAtendimentoSchema,
	endereco: z.string(),
	external_id: z.string(),
	external_system: z.string(),
	facebook: z.string(),
	fone_celular: z.string(),
	fone_comercial: z.string(),
	fone_residencial: z.string(),
	fone_whatsapp: z.string(),
	frequencia_celular_lead: z.string(),
	frequencia_computador_lead: z.string(),
	frequencia_console_lead: z.string(),
	frequencia_pessoas_lead: z.string(),
	frequencia_smart_lead: z.string(),
	id_caixa_ftth: z.number(),
	id_campanha: z.number(),
	id_candidato_tipo: z.number(),
	id_cliente: z.number(),
	id_concorrente: z.number(),
	id_condominio: z.number(),
	id_contato_tipo: z.number(),
	id_estagio: z.number(),
	id_estagio_anterior: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	id_perfil: z.number(),
	id_prospeccao: z.number(),
	id_responsavel: z.number(),
	id_segmento: z.number(),
	id_tipo_elemento: z.number(),
	id_tipo_relacionamento_contato: z.number(),
	id_vd_contrato: z.number(),
	identificador: z.string(),
	identificador_ultima_conversao: z.string(),
	ids_contratos_vinculados: z.string(),
	indicado_por: z.number(),
	instagram: z.string(),
	latitude: z.string(),
	lead: contatoLeadSchema,
	lid: contatoLidSchema,
	longitude: z.string(),
	moradia: contatoMoradiaSchema,
	nome: z.string(),
	numero: z.string(),
	obs: z.string(),
	operador_neutro: z.number(),
	ordem_kanban: z.number(),
	origem_campaing: z.string(),
	origem_medium: z.string(),
	origem_source: z.string(),
	permissoes: z.string(),
	pipe_id_pessoa: z.number(),
	principal: contatoPrincipalSchema,
	quantidade_celular_lead: z.number(),
	quantidade_computador_lead: z.number(),
	quantidade_console_lead: z.number(),
	quantidade_pessoas_lead: z.number(),
	quantidade_smart_lead: z.number(),
	razao: z.string(),
	referencia: z.string(),
	senha: z.string(),
	skype: z.string(),
	status_viabilidade: contatoStatusViabilidadeSchema,
	tipo_documento_identificacao_col: contatoTipoDocumentoIdentificacaoColSchema,
	tipo_localidade: contatoTipoLocalidadeSchema,
	tipo_pessoa: contatoTipoPessoaSchema,
	tipo_rede: contatoTipoRedeSchema,
	uf: z.number(),
	ultima_atualizacao: z.string(),
	velocidade_calculada: z.string(),
	vincular_contrato: contatoVincularContratoSchema,
	website: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contatoSchema = contatoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contatoCreateSchema = contatoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contatoUpdateSchema = contatoCreateSchema.partial();
