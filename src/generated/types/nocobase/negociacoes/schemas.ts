/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { empresasBaseSchema } from "../empresas/schemas";
import { anexos_negociacoesBaseSchema } from "../other/anexos-negociacoes/schemas";
import { contratosBaseSchema } from "../other/contratos/schemas";
import { cupons_descontoBaseSchema } from "../other/cupons-desconto/schemas";
import { negociacoes_comentariosBaseSchema } from "../other/negociacoes-comentarios/schemas";
import { negociacoes_itensBaseSchema } from "../other/negociacoes-itens/schemas";
import { oe_qualirunBaseSchema } from "../other/oe-qualirun/schemas";
import { pacotesBaseSchema } from "../other/pacotes/schemas";
import { qualirun_assinatura_govBaseSchema } from "../other/qualirun-assinatura-gov/schemas";
import { pessoasBaseSchema } from "../pessoas/schemas";
import { usersBaseSchema } from "../users/schemas";
import {
	negociacoesConfissaoDividaSchema,
	negociacoesDataVencimentoSchema,
	negociacoesEnderecoCobrancaSchema,
	negociacoesEnderecoComplementoSchema,
	negociacoesFidelidadeSchema,
	negociacoesMotivoPontosSchema,
	negociacoesMotivoSchema,
	negociacoesPontosAtencaoSchema,
	negociacoesStatusSchema,
	negociacoesSubstatusSchema,
	negociacoesTipoPessoaSchema,
} from "./labels";

export const T_NEGOCIACOES_TABLE_NAME = "t_negociacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const negociacoesBaseSchema = z.object({
	id: z.number(),
	f_fk_auditoria_automatica: z.number(),
	f_fk_contrato_ixc: z.number(),
	f_fk_cupom_desconto: z.number(),
	f_fk_negociacao_indicador: z.number(),
	f_fk_negociacao_vendedor: z.number(),
	f_fk_pacote: z.number(),
	f_fk_pessoa_negociacao: z.number(),
	f_fk_pessoa_pj_negociacao: z.number(),
	f_apartamento: z.string(),
	f_assinatura_gov: z.boolean(),
	f_bairro: z.string(),
	f_bairro_cobranca: z.string(),
	f_bloco_quadra: z.string(),
	f_cep: z.string(),
	f_cep_cobranca: z.string(),
	f_cidade_cobranca: z.string(),
	f_complemento_cobranca: z.string(),
	f_confissao_divida: negociacoesConfissaoDividaSchema,
	f_contrato_ixc: z.string(),
	f_cpf_cnpj: z.string(),
	f_cpf_responsavel_assinatura: z.string(),
	f_data_vencimento: negociacoesDataVencimentoSchema,
	f_email_cobranca: z.string(),
	f_endereco: z.string(),
	f_endereco_cidade: z.string(),
	f_endereco_cobranca: negociacoesEnderecoCobrancaSchema,
	f_endereco_complemento: negociacoesEnderecoComplementoSchema,
	f_endereco_de_cobranca: z.string(),
	f_endereco_estado: z.string(),
	f_endereco_numero: z.string(),
	f_endereco_referencia: z.string(),
	f_entrada_saldo_devedor: z.number(),
	f_estado_cobranca: z.string(),
	f_fidelidade: negociacoesFidelidadeSchema,
	f_Incremento: z.string(),
	f_ixc_tipo_cobranca: z.string(),
	f_link_assinatura: z.string(),
	f_motivo: negociacoesMotivoSchema,
	f_motivo_pontos: negociacoesMotivoPontosSchema,
	f_multa_juros: z.number(),
	f_nome_edificio: z.string(),
	f_nome_fantasia: z.string(),
	f_nome_razao: z.string(),
	f_numero_cobranca: z.string(),
	f_ordenacao: z.number(),
	f_parcelas_mensais: z.number(),
	f_periodo_final: z.string(),
	f_permuta: z.boolean(),
	f_pontos_atencao: negociacoesPontosAtencaoSchema,
	f_responsavel_assinatura: z.string(),
	f_rg_ie: z.string(),
	f_scm: z.number(),
	f_smp: z.number(),
	f_status: negociacoesStatusSchema,
	f_stfc: z.number(),
	f_substatus: negociacoesSubstatusSchema,
	f_sva: z.number(),
	f_telefone: z.string(),
	f_telefone_2: z.string(),
	f_tipo_pessoa: negociacoesTipoPessoaSchema,
	f_titulo: z.string(),
	f_valor_beneficios: z.number(),
	f_valor_da_parcela: z.string(),
	f_valor_devedor: z.number(),
	f_valor_devedor_total: z.string(),
	f_valor_instalacao: z.number(),
	f_valor_mensal: z.number(),
	f_valor_mensal_antigo: z.number(),
	f_valor_mensal_sem_desconto: z.number(),
	f_valor_multa_mes_faltante: z.number(),
	f_zapsign: z.boolean(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const negociacoesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_anexos: z.lazy(() => anexos_negociacoesBaseSchema.array()),
	f_comentarios: z.lazy(() => negociacoes_comentariosBaseSchema.array()),
	f_cupom_desconto: z.lazy(() => cupons_descontoBaseSchema.nullable()),
	f_fk_oe_qualirun: z.lazy(() => oe_qualirunBaseSchema.array()),
	f_itens_negociacao: z.lazy(() => negociacoes_itensBaseSchema.array()),
	f_negociacao_contrato: z.lazy(() => contratosBaseSchema.array()),
	f_negociacao_pessoa_juridica: z.lazy(() => empresasBaseSchema.nullable()),
	f_pacote: z.lazy(() => pacotesBaseSchema.nullable()),
	f_pacotes_adicionais: z.lazy(() => pacotesBaseSchema.array()),
	f_pessoa: z.lazy(() => pessoasBaseSchema.nullable()),
	f_qualirun_assinatura_gov: z.lazy(() =>
		qualirun_assinatura_govBaseSchema.array(),
	),
	f_vendedor: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const negociacoesSchema = negociacoesBaseSchema.extend(
	negociacoesRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const negociacoesCreateSchema = negociacoesSchema.omit({
	createdAt: true,
	createdBy: true,
	f_anexos: true,
	f_comentarios: true,
	f_cupom_desconto: true,
	f_fk_oe_qualirun: true,
	f_itens_negociacao: true,
	f_negociacao_contrato: true,
	f_negociacao_pessoa_juridica: true,
	f_pacote: true,
	f_pacotes_adicionais: true,
	f_pessoa: true,
	f_qualirun_assinatura_gov: true,
	f_vendedor: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const negociacoesUpdateSchema = negociacoesCreateSchema.partial();
