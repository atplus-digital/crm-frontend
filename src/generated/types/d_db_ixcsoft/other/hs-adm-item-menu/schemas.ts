/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_adm_item_menuEscondidoSchema,
	hs_adm_item_menuPaginaInicialSchema,
	hs_adm_item_menuPublicadoSchema,
} from "./labels";

export const HS_ADM_ITEM_MENU_TABLE_NAME = "hs_adm_item_menu";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_adm_item_menuBaseSchema = z.object({
	id: z.number(),
	ao_clicar_abrir_em: z.string(),
	campo_filtro: z.string(),
	descricao_texto: z.string(),
	escondido: hs_adm_item_menuEscondidoSchema,
	estilo: z.string(),
	grupo_imoveis: z.number(),
	grupo_produtos: z.number(),
	id_categoria: z.number(),
	id_menu: z.number(),
	id_secao: z.number(),
	imagem_menu: z.string(),
	link: z.string(),
	menu_pai: z.number(),
	nivel_acesso: z.number(),
	ordenar: z.string(),
	ordernar: z.string(),
	pagina_inicial: hs_adm_item_menuPaginaInicialSchema,
	publicado: hs_adm_item_menuPublicadoSchema,
	selecione_artigo: z.string(),
	tipo_menu: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_adm_item_menuSchema = hs_adm_item_menuBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_adm_item_menuCreateSchema = hs_adm_item_menuSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_adm_item_menuUpdateSchema =
	hs_adm_item_menuCreateSchema.partial();
