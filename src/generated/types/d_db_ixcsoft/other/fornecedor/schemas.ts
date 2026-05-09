/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fornecedorAtivoSchema,
	fornecedorCliDescontaIssRetidoTotalSchema,
	fornecedorCofinsRetemSchema,
	fornecedorContribuinteIcmsSchema,
	fornecedorCsllRetemSchema,
	fornecedorDescontoIrrfValorInferiorSchema,
	fornecedorInssRetemSchema,
	fornecedorIrrfRetemSchema,
	fornecedorPisRetemSchema,
	fornecedorRegimeFiscalColSchema,
	fornecedorTipoDocumentoIdentificacaoColSchema,
	fornecedorTipoPessoaSchema,
} from "./labels";

export const FORNECEDOR_TABLE_NAME = "fornecedor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fornecedorBaseSchema = z.object({
	id: z.number(),
	ativo: fornecedorAtivoSchema,
	bairro: z.string(),
	celular: z.string(),
	cep: z.string(),
	cidade: z.number(),
	cli_desconta_iss_retido_total: fornecedorCliDescontaIssRetidoTotalSchema,
	cofins_retem: fornecedorCofinsRetemSchema,
	contribuinte_icms: fornecedorContribuinteIcmsSchema,
	cpf_cnpj: z.string(),
	csll_retem: fornecedorCsllRetemSchema,
	data: z.string(),
	data_nascimento: z.string(),
	desconto_irrf_valor_inferior: fornecedorDescontoIrrfValorInferiorSchema,
	despesa_tipo: z.number(),
	duplicata: z.string(),
	email: z.string(),
	endereco: z.string(),
	fantasia: z.string(),
	id_cliente_conversao: z.number(),
	id_conta: z.number(),
	id_operadora_celular: z.number(),
	ie_identidade: z.string(),
	inss_retem: fornecedorInssRetemSchema,
	irrf_retem: fornecedorIrrfRetemSchema,
	iss_classificacao_padrao: z.string(),
	lote: z.string(),
	nomecidade: z.string(),
	numero: z.string(),
	obs: z.string(),
	paiz: z.number(),
	pis_retem: fornecedorPisRetemSchema,
	pix_celular: z.string(),
	pix_cpf_cnpj: z.string(),
	razao: z.string(),
	referencia: z.string(),
	regime_fiscal_col: fornecedorRegimeFiscalColSchema,
	representante: z.string(),
	rg_orgao_emissor: z.string(),
	siglauf: z.string(),
	site: z.string(),
	telefone: z.string(),
	telefone_representante: z.string(),
	tipo: z.number(),
	tipo_documento_identificacao_col:
		fornecedorTipoDocumentoIdentificacaoColSchema,
	tipo_pessoa: fornecedorTipoPessoaSchema,
	tipo_plano_id: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedorSchema = fornecedorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fornecedorCreateSchema = fornecedorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fornecedorUpdateSchema = fornecedorCreateSchema.partial();
