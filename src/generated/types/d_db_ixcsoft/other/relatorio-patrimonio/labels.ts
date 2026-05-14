/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOPATRIMONIO_FIELD_LABELS = {
	cod_patrimonio: "cod_patrimonio",
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_aquisicao_final: "data_aquisicao_final",
	data_aquisicao_inicial: "data_aquisicao_inicial",
	data_aquisicao_periodo: "data_aquisicao_periodo",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_almoxarifado: "id_almoxarifado",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_filial: "id_filial",
	id_fornecedor: "id_fornecedor",
	id_mac: "id_mac",
	id_produto: "id_produto",
	impresso_por: "impresso_por",
	nome: "nome",
	numero_nf: "numero_nf",
	relatorio: "relatorio",
	serial: "serial",
	serial_fornecedor: "serial_fornecedor",
	tipo_data_aquisicao: "tipo_data_aquisicao",
} as const;

export const RELATORIOPATRIMONIO_TIPODATAAQUISICAO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_patrimonioTipoDataAquisicaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_aquisicao: valores válidos são [D, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioPatrimonioTipoDataAquisicao = z.infer<
	typeof relatorio_patrimonioTipoDataAquisicaoSchema
>;
