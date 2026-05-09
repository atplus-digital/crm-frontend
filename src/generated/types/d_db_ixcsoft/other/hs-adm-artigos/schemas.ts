/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_adm_artigosAvaliacaoArtigoSchema,
	hs_adm_artigosDataHoraDeCriacaoSchema,
	hs_adm_artigosDataHoraModificacaoSchema,
	hs_adm_artigosExibirPaginaInicialSchema,
	hs_adm_artigosExibirTituloSchema,
	hs_adm_artigosIconeEmailSchema,
	hs_adm_artigosIconeImpressaoSchema,
	hs_adm_artigosIconePdfSchema,
	hs_adm_artigosNomeCategoriaComoLinkSchema,
	hs_adm_artigosNomeCategoriaSchema,
	hs_adm_artigosNomeSecaoComoLinkSchema,
	hs_adm_artigosNomeSecaoSchema,
	hs_adm_artigosNomesAutoresSchema,
	hs_adm_artigosPublicadoSchema,
	hs_adm_artigosTextoIntrodutorioSchema,
	hs_adm_artigosTituloComoLinkSchema,
} from "./labels";

export const HS_ADM_ARTIGOS_TABLE_NAME = "hs_adm_artigos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_adm_artigosBaseSchema = z.object({
	id: z.number(),
	acessos: z.number(),
	autor: z.number(),
	avaliacao_artigo: hs_adm_artigosAvaliacaoArtigoSchema,
	conteudo: z.string(),
	criado: z.string(),
	data_criacao: z.string(),
	data_hora_de_criacao: hs_adm_artigosDataHoraDeCriacaoSchema,
	data_hora_modificacao: hs_adm_artigosDataHoraModificacaoSchema,
	data_publicacao: z.string(),
	descricao: z.string(),
	estado: z.string(),
	exibir_pagina_inicial: hs_adm_artigosExibirPaginaInicialSchema,
	exibir_titulo: hs_adm_artigosExibirTituloSchema,
	icone_email: hs_adm_artigosIconeEmailSchema,
	icone_impressao: hs_adm_artigosIconeImpressaoSchema,
	icone_pdf: hs_adm_artigosIconePdfSchema,
	id_artigo: z.number(),
	id_categoria: z.number(),
	id_secao: z.number(),
	item_conteudo: z.number(),
	modificado: z.string(),
	nivel_acesso: z.number(),
	nome_categoria: hs_adm_artigosNomeCategoriaSchema,
	nome_categoria_como_link: hs_adm_artigosNomeCategoriaComoLinkSchema,
	nome_secao: hs_adm_artigosNomeSecaoSchema,
	nome_secao_como_link: hs_adm_artigosNomeSecaoComoLinkSchema,
	nomes_autores: hs_adm_artigosNomesAutoresSchema,
	palavras_chave: z.string(),
	publicado: hs_adm_artigosPublicadoSchema,
	texto_alternativo: z.string(),
	texto_introdutorio: hs_adm_artigosTextoIntrodutorioSchema,
	titulo: z.string(),
	titulo_como_link: hs_adm_artigosTituloComoLinkSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_adm_artigosSchema = hs_adm_artigosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_adm_artigosCreateSchema = hs_adm_artigosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_adm_artigosUpdateSchema = hs_adm_artigosCreateSchema.partial();
