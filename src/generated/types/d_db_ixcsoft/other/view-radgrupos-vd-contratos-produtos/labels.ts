/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_FIELD_LABELS = {
	cliente_contrato_id: "cliente_contrato_id",
	download: "download",
	download_busrt: "download_busrt",
	download_busrt_th: "download_busrt_th",
	download_busrt_time: "download_busrt_time",
	grupo: "grupo",
	id: "id",
	id_produto: "id_produto",
	id_sub_projeto: "id_sub_projeto",
	rate_limit: "rate_limit",
	red_ativo: "red_ativo",
	red_download: "red_download",
	red_download_busrt: "red_download_busrt",
	red_download_busrt_th: "red_download_busrt_th",
	red_download_busrt_time: "red_download_busrt_time",
	red_upload: "red_upload",
	red_upload_busrt: "red_upload_busrt",
	red_upload_busrt_th: "red_upload_busrt_th",
	red_upload_busrt_time: "red_upload_busrt_time",
	tempo_aviso: "tempo_aviso",
	tipo: "tipo",
	tur_ativo: "tur_ativo",
	tur_download: "tur_download",
	tur_download_busrt: "tur_download_busrt",
	tur_download_busrt_th: "tur_download_busrt_th",
	tur_download_busrt_time: "tur_download_busrt_time",
	tur_upload: "tur_upload",
	tur_upload_busrt: "tur_upload_busrt",
	tur_upload_busrt_th: "tur_upload_busrt_th",
	tur_upload_busrt_time: "tur_upload_busrt_time",
	upload: "upload",
	upload_busrt: "upload_busrt",
	upload_busrt_th: "upload_busrt_th",
	upload_busrt_time: "upload_busrt_time",
	url_aviso: "url_aviso",
	valor_produto: "valor_produto",
	vd_contratos_produtos_id_vd_contrato: "vd_contratos_produtos_id_vd_contrato",
	vd_contratos_produtos_qtde: "vd_contratos_produtos_qtde",
	vd_contratos_produtos_valor_unit: "vd_contratos_produtos_valor_unit",
} as const;

export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_REDATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
} as const;

export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_TURATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_radgrupos_vd_contratos_produtosRedAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "red_ativo: valores válidos são [S, N]" }),
	},
);

export const view_radgrupos_vd_contratos_produtosTipoSchema = z.enum(
	["I", "T", "S"],
	{
		error: () => ({ message: "tipo: valores válidos são [I, T, S]" }),
	},
);

export const view_radgrupos_vd_contratos_produtosTurAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "tur_ativo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewRadgruposVdContratosProdutosRedAtivo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosRedAtivoSchema
>;

export type ViewRadgruposVdContratosProdutosTipo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosTipoSchema
>;

export type ViewRadgruposVdContratosProdutosTurAtivo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosTurAtivoSchema
>;
