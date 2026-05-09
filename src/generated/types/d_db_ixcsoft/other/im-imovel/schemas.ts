/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	im_imovelAquecimentoAguaSchema,
	im_imovelArCondicionadoSchema,
	im_imovelAreaCoberturaDescansoSchema,
	im_imovelAreaLazerSchema,
	im_imovelCercadoMuroSchema,
	im_imovelCercadoSchema,
	im_imovelChurrasqueiraSchema,
	im_imovelDestaqueSchema,
	im_imovelElevadorSchema,
	im_imovelFinanceiroAutomaticoSchema,
	im_imovelGaragemSeguraSchema,
	im_imovelHidromassagemSchema,
	im_imovelLareiraSchema,
	im_imovelPiscinaSchema,
	im_imovelPortaoEletronicoSchema,
	im_imovelPublicadoSchema,
	im_imovelSalaoFestasSchema,
	im_imovelSistemaAlarmeSchema,
	im_imovelSituacaoSchema,
	im_imovelVendaAlugaSchema,
} from "./labels";

export const IM_IMOVEL_TABLE_NAME = "im_imovel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_imovelBaseSchema = z.object({
	id: z.number(),
	aquecimento_agua: im_imovelAquecimentoAguaSchema,
	ar_condicionado: im_imovelArCondicionadoSchema,
	area_cobertura_descanso: im_imovelAreaCoberturaDescansoSchema,
	area_lazer: im_imovelAreaLazerSchema,
	area_total: z.number(),
	area_util: z.number(),
	banheiros: z.number(),
	banheiros_suites: z.number(),
	cep: z.string(),
	cercado: im_imovelCercadoSchema,
	cercado_muro: im_imovelCercadoMuroSchema,
	churrasqueira: im_imovelChurrasqueiraSchema,
	comissao: z.number(),
	condicoes_venda: z.string(),
	data: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	destaque: im_imovelDestaqueSchema,
	ecommerce_prioridade: z.number(),
	edificio: z.string(),
	elevador: im_imovelElevadorSchema,
	encargos: z.number(),
	endereco: z.string(),
	financeiro_automatico: im_imovelFinanceiroAutomaticoSchema,
	garagem_segura: im_imovelGaragemSeguraSchema,
	hidromassagem: im_imovelHidromassagemSchema,
	id_bairro: z.number(),
	id_cidade: z.number(),
	id_cliente_proprietario: z.number(),
	id_condominio: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	id_modelo_contrato: z.number(),
	id_produto: z.number(),
	id_tipo: z.number(),
	imagem: z.string(),
	lareira: im_imovelLareiraSchema,
	latitude: z.string(),
	longitude: z.string(),
	pavimentos: z.number(),
	perc_divisao_despesas: z.number(),
	piscina: im_imovelPiscinaSchema,
	portao_eletronico: im_imovelPortaoEletronicoSchema,
	publicado: im_imovelPublicadoSchema,
	quartos: z.number(),
	salao_festas: im_imovelSalaoFestasSchema,
	sistema_alarme: im_imovelSistemaAlarmeSchema,
	situacao: im_imovelSituacaoSchema,
	taxas: z.number(),
	titulo: z.string(),
	vagas_garagem: z.number(),
	valor: z.number(),
	valor_condominio: z.number(),
	venda_aluga: im_imovelVendaAlugaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_imovelSchema = im_imovelBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_imovelCreateSchema = im_imovelSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_imovelUpdateSchema = im_imovelCreateSchema.partial();
