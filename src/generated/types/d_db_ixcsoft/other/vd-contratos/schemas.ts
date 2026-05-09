/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	vd_contratosAtivoSchema,
	vd_contratosBaseGeracaoPorTipoDocSchema,
	vd_contratosLimitarNLoginsSchema,
	vd_contratosMostrarNaViabilidadeSchema,
	vd_contratosTipoPessoaSchema,
	vd_contratosTipoSchema,
	vd_contratosUtilizarDescontoAteVencimentoSchema,
	vd_contratosUtilizarDescontoNoProdutoPlanoSchema,
	vd_contratosUtilizarDescontoPorRepeticaoSchema,
} from "./labels";

export const VD_CONTRATOS_TABLE_NAME = "vd_contratos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_contratosBaseSchema = z.object({
	id: z.number(),
	Ativo: vd_contratosAtivoSchema,
	base_geracao_por_tipo_doc: vd_contratosBaseGeracaoPorTipoDocSchema,
	comissao: z.number(),
	descricao: z.string(),
	fidelidade: z.number(),
	id_carteira_cobranca: z.number(),
	id_cidade: z.number(),
	id_cond_pag_ativ: z.number(),
	id_filial: z.number(),
	id_modelo: z.number(),
	id_produto_ate_vencimento: z.number(),
	id_produto_ativ: z.number(),
	id_produto_contrato_vinc: z.number(),
	id_tipo_doc_ativ: z.number(),
	id_tipo_documento: z.number(),
	id_vendedor: z.number(),
	id_vendedor_ativ: z.number(),
	limitar_n_logins: vd_contratosLimitarNLoginsSchema,
	logins_simultaneos: z.number(),
	moeda: z.string(),
	mostrar_na_viabilidade: vd_contratosMostrarNaViabilidadeSchema,
	nome: z.string(),
	qtde_repeticoes_desconto: z.number(),
	tel_franquia_prefix: z.string(),
	tel_franquia_segundos: z.number(),
	tipo: vd_contratosTipoSchema,
	tipo_doc_opc: z.number(),
	tipo_doc_opc2: z.number(),
	tipo_doc_opc3: z.number(),
	tipo_doc_opc4: z.number(),
	tipo_pessoa: vd_contratosTipoPessoaSchema,
	ultima_atualizacao: z.string(),
	utilizar_desconto_ate_vencimento:
		vd_contratosUtilizarDescontoAteVencimentoSchema,
	utilizar_desconto_no_produto_plano:
		vd_contratosUtilizarDescontoNoProdutoPlanoSchema,
	utilizar_desconto_por_repeticao:
		vd_contratosUtilizarDescontoPorRepeticaoSchema,
	valor_adicional: z.number(),
	valor_contrato: z.number(),
	valor_desconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_contratosSchema = vd_contratosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_contratosCreateSchema = vd_contratosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_contratosUpdateSchema = vd_contratosCreateSchema.partial();
