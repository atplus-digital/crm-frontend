/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	entradaEntradaReabertaSchema,
	entradaEntradaXmlSchema,
	entradaFinalidadeNfeSchema,
	entradaFormularioSchema,
	entradaNfeEmitidaSchema,
	entradaOrigemMercadoriaSchema,
	entradaRealizarRateioOutrasDespesasSchema,
	entradaStatusSchema,
	entradaTipoCalculoTributacaoSchema,
	entradaTipoEntradaCompraSchema,
	entradaTipoFreteSchema,
	entradaTipoTributacaoSchema,
	entradaTpimpNfeSchema,
} from "./labels";

export const ENTRADA_TABLE_NAME = "entrada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const entradaBaseSchema = z.object({
	id: z.number(),
	arquivo_xml: z.string(),
	caminho_xml_dir: z.string(),
	cofins_valor_retido: z.number(),
	condicoes_pagamento: z.number(),
	csll_valor_retido: z.number(),
	data_emissao: z.string(),
	data_entrada: z.string(),
	di_exportador: z.string(),
	documento: z.string(),
	entrada_reaberta: entradaEntradaReabertaSchema,
	entrada_xml: entradaEntradaXmlSchema,
	fcp_bc: z.number(),
	fcp_bc_st: z.number(),
	fcp_valor_st: z.number(),
	filial_id: z.number(),
	finalidade_nfe: entradaFinalidadeNfeSchema,
	formulario: entradaFormularioSchema,
	frete_especie: z.string(),
	frete_peso_bruto: z.number(),
	frete_peso_liquido: z.number(),
	frete_volumes: z.number(),
	gera_estoque: z.string(),
	icms_bc: z.number(),
	icms_bc_st: z.number(),
	icms_valor: z.number(),
	icms_valor_insento: z.number(),
	icms_valor_outros: z.number(),
	icms_valor_st: z.number(),
	id_cfop: z.number(),
	id_comodato: z.number(),
	id_fornecedor: z.number(),
	id_lote_nfe: z.string(),
	import_di_cnpj: z.string(),
	import_di_data: z.string(),
	import_di_data_desenbaraco: z.string(),
	import_di_local_desenbaraco: z.string(),
	import_di_n: z.string(),
	import_di_tp_intermedio: z.number(),
	import_di_tp_via_transp: z.number(),
	import_di_uf_desenbaraco: z.string(),
	import_di_uf_terceiro: z.string(),
	import_di_val_afrmm: z.number(),
	inf_adicionais: z.string(),
	inf_corpo_nota: z.string(),
	inss_valor: z.number(),
	ipi_valor: z.number(),
	irrf_valor: z.number(),
	iss_bc: z.number(),
	iss_valor: z.number(),
	iss_valor_retido: z.number(),
	iss_vserv: z.number(),
	modelo_nf: z.string(),
	mot_cancelamento: z.string(),
	mot_carta_correcao: z.string(),
	nfe_chave: z.string(),
	nfe_chave_ao_enviar: z.string(),
	nfe_emitida: entradaNfeEmitidaSchema,
	nfe_referenciada: z.string(),
	nfe_status: z.string(),
	numero_nf: z.number(),
	operador: z.number(),
	origem_mercadoria: entradaOrigemMercadoriaSchema,
	outras_despesas_acessorias: z.number(),
	pacrescimo: z.number(),
	pdesconto: z.number(),
	pis_valor_retido: z.number(),
	realizar_rateio_outras_despesas: entradaRealizarRateioOutrasDespesasSchema,
	serie: z.string(),
	status: entradaStatusSchema,
	tipo_calculo_tributacao: entradaTipoCalculoTributacaoSchema,
	tipo_documento: z.number(),
	tipo_entrada_compra: entradaTipoEntradaCompraSchema,
	tipo_frete: entradaTipoFreteSchema,
	tipo_tributacao: entradaTipoTributacaoSchema,
	tpemis_nfe: z.number(),
	tpimp_nfe: entradaTpimpNfeSchema,
	transportadora: z.number(),
	vacrescimo: z.number(),
	valor_doc_fiscal: z.number(),
	valor_fcp: z.number(),
	valor_total: z.number(),
	valor_total_doc_fiscal: z.number(),
	valor_total_produtos: z.number(),
	vcofins: z.number(),
	vdesconto: z.number(),
	vfrete: z.number(),
	vii: z.number(),
	vii_desp_aduaneira: z.number(),
	vipi_frete: z.number(),
	voutro: z.number(),
	vpis: z.number(),
	vseg: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const entradaSchema = entradaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const entradaCreateSchema = entradaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const entradaUpdateSchema = entradaCreateSchema.partial();
