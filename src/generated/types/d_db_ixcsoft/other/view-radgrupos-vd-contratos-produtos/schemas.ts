/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	view_radgrupos_vd_contratos_produtosRedAtivoSchema,
	view_radgrupos_vd_contratos_produtosTipoSchema,
	view_radgrupos_vd_contratos_produtosTurAtivoSchema,
} from "./labels";

export const VIEW_RADGRUPOS_VD_CONTRATOS_PRODUTOS_TABLE_NAME =
	"view_radgrupos_vd_contratos_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_radgrupos_vd_contratos_produtosBaseSchema = z.object({
	id: z.number(),
	cliente_contrato_id: z.number(),
	download: z.string(),
	download_busrt: z.string(),
	download_busrt_th: z.string(),
	download_busrt_time: z.string(),
	grupo: z.string(),
	id_produto: z.number(),
	id_sub_projeto: z.number(),
	rate_limit: z.string(),
	red_ativo: view_radgrupos_vd_contratos_produtosRedAtivoSchema,
	red_download: z.string(),
	red_download_busrt: z.string(),
	red_download_busrt_th: z.string(),
	red_download_busrt_time: z.string(),
	red_upload: z.string(),
	red_upload_busrt: z.string(),
	red_upload_busrt_th: z.string(),
	red_upload_busrt_time: z.string(),
	tempo_aviso: z.string(),
	tipo: view_radgrupos_vd_contratos_produtosTipoSchema,
	tur_ativo: view_radgrupos_vd_contratos_produtosTurAtivoSchema,
	tur_download: z.string(),
	tur_download_busrt: z.string(),
	tur_download_busrt_th: z.string(),
	tur_download_busrt_time: z.string(),
	tur_upload: z.string(),
	tur_upload_busrt: z.string(),
	tur_upload_busrt_th: z.string(),
	tur_upload_busrt_time: z.string(),
	upload: z.string(),
	upload_busrt: z.string(),
	upload_busrt_th: z.string(),
	upload_busrt_time: z.string(),
	url_aviso: z.string(),
	valor_produto: z.number(),
	vd_contratos_produtos_id_vd_contrato: z.number(),
	vd_contratos_produtos_qtde: z.number(),
	vd_contratos_produtos_valor_unit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_radgrupos_vd_contratos_produtosSchema =
	view_radgrupos_vd_contratos_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_radgrupos_vd_contratos_produtosCreateSchema =
	view_radgrupos_vd_contratos_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_radgrupos_vd_contratos_produtosUpdateSchema =
	view_radgrupos_vd_contratos_produtosCreateSchema.partial();
