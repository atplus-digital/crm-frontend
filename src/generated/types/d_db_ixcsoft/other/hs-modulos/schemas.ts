/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_modulosBanPesquisarTagsSchema,
	hs_modulosBcExibirFimSchema,
	hs_modulosBcExibirInicioSchema,
	hs_modulosExibirTituloSchema,
	hs_modulosHabilitadoSchema,
	hs_modulosMargensLateraisSchema,
	hs_modulosMenuExibSubmenuSchema,
	hs_modulosMenusSchema,
} from "./labels";

export const HS_MODULOS_TABLE_NAME = "hs_modulos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_modulosBaseSchema = z.object({
	id: z.number(),
	ban_cliente_banner: z.number(),
	ban_contador: z.number(),
	ban_destino: z.string(),
	ban_id_categoria: z.number(),
	ban_pesquisar_tags: hs_modulosBanPesquisarTagsSchema,
	ban_randomizar: z.string(),
	ban_sufixo_classe_modulo: z.string(),
	ban_texto_cabecalho: z.string(),
	ban_texto_rodape: z.string(),
	bc_exibir_fim: hs_modulosBcExibirFimSchema,
	bc_exibir_inicio: hs_modulosBcExibirInicioSchema,
	bc_separador_texto: z.string(),
	bc_sufixo_classe_modulo: z.string(),
	bc_texto_elemento_inicio: z.string(),
	configuracoes: z.string(),
	descricao: z.string(),
	exibir_titulo: hs_modulosExibirTituloSchema,
	habilitado: hs_modulosHabilitadoSchema,
	html_id: z.number(),
	id_tipo_modulo: z.string(),
	imagem_id: z.number(),
	margens_laterais: hs_modulosMargensLateraisSchema,
	menu_exib_submenu: hs_modulosMenuExibSubmenuSchema,
	menu_id: z.number(),
	menu_largura: z.string(),
	menu_margem: z.string(),
	menu_profundidade: z.string(),
	menu_tag_id: z.string(),
	menu_tipo: z.string(),
	menus: hs_modulosMenusSchema,
	nivel_acesso: z.number(),
	ordem: z.string(),
	posicao: z.string(),
	slideshow_id: z.number(),
	tag_class: z.string(),
	tag_id: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_modulosSchema = hs_modulosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_modulosCreateSchema = hs_modulosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_modulosUpdateSchema = hs_modulosCreateSchema.partial();
