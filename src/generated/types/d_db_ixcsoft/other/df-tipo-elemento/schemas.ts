/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_tipo_elementoCaboPadraoSchema,
	df_tipo_elementoClassificacaoTipoSchema,
	df_tipo_elementoCriacaoAutomaticaSchema,
	df_tipo_elementoEstiloPadraoSchema,
	df_tipo_elementoPontilhadaInativaSchema,
	df_tipo_elementoPontilhadaSchema,
	df_tipo_elementoSplitterTipoSchema,
	df_tipo_elementoStatusSchema,
	df_tipo_elementoTec28Schema,
	df_tipo_elementoTec58Schema,
	df_tipo_elementoTecAdslSchema,
	df_tipo_elementoTecCaboSchema,
	df_tipo_elementoTecFibraSchema,
	df_tipo_elementoVerificarViabilidadeSchema,
} from "./labels";

export const DF_TIPO_ELEMENTO_TABLE_NAME = "df_tipo_elemento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_tipo_elementoBaseSchema = z.object({
	id: z.number(),
	cabo_especura: z.number(),
	cabo_numero_fibras: z.number(),
	cabo_numero_loose_tube: z.number(),
	cabo_padrao: df_tipo_elementoCaboPadraoSchema,
	classificacao_tipo: df_tipo_elementoClassificacaoTipoSchema,
	codigo_identificador: z.string(),
	cor_ativa: z.string(),
	cor_fundo: z.string(),
	cor_futura: z.string(),
	cor_inativa: z.string(),
	criacao_automatica: df_tipo_elementoCriacaoAutomaticaSchema,
	db_perdas: z.number(),
	db_perdas_desbalanceado: z.number(),
	especura_linha: z.number(),
	estilo_padrao: df_tipo_elementoEstiloPadraoSchema,
	fabricante: z.string(),
	id_categoria_tipo: z.number(),
	id_padrao_cores: z.number(),
	id_produto: z.number(),
	modelo: z.string(),
	nome_tipo: z.string(),
	pontilhada: df_tipo_elementoPontilhadaSchema,
	pontilhada_inativa: df_tipo_elementoPontilhadaInativaSchema,
	splitter_numero_entradas: z.number(),
	splitter_numero_saidas: z.number(),
	splitter_proporcao: z.string(),
	splitter_tipo: df_tipo_elementoSplitterTipoSchema,
	status: df_tipo_elementoStatusSchema,
	tec_28: df_tipo_elementoTec28Schema,
	tec_58: df_tipo_elementoTec58Schema,
	tec_adsl: df_tipo_elementoTecAdslSchema,
	tec_cabo: df_tipo_elementoTecCaboSchema,
	tec_fibra: df_tipo_elementoTecFibraSchema,
	total_bandejas: z.number(),
	url_icone: z.string(),
	url_icone_amarelo: z.string(),
	url_icone_azul: z.string(),
	url_icone_cinza: z.string(),
	url_icone_street_view: z.string(),
	url_icone_verde: z.string(),
	url_icone_vermelho: z.string(),
	verificar_viabilidade: df_tipo_elementoVerificarViabilidadeSchema,
	z_index: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_tipo_elementoSchema = df_tipo_elementoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_tipo_elementoCreateSchema = df_tipo_elementoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_tipo_elementoUpdateSchema =
	df_tipo_elementoCreateSchema.partial();
