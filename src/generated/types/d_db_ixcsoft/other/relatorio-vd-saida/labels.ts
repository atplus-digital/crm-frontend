/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOVDSAIDA_FIELD_LABELS = {
	apartamento: "apartamento",
	bairro: "bairro",
	bloco: "bloco",
	cfop: "cfop",
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_emissao_fin: "data_emissao_fin",
	data_emissao_ini: "data_emissao_ini",
	data_emissao_periodo: "data_emissao_periodo",
	data_saida_periodo: "data_saida_periodo",
	data_saida_periodo_fin: "data_saida_periodo_fin",
	data_saida_periodo_ini: "data_saida_periodo_ini",
	data_ultima_impres: "data_ultima_impres",
	endereco: "endereco",
	id: "id",
	id_assunto: "id_assunto",
	id_cidade: "id_cidade",
	id_cliente: "id_cliente",
	id_condicao_pagamento: "id_condicao_pagamento",
	id_condominio: "id_condominio",
	id_filial: "id_filial",
	id_tipo_documento: "id_tipo_documento",
	impresso_por: "impresso_por",
	modelo_nf: "modelo_nf",
	nome: "nome",
	relatorio: "relatorio",
	status_nf: "status_nf",
	tipo_data_emissao: "tipo_data_emissao",
	tipo_data_saida: "tipo_data_saida",
} as const;

export const RELATORIOVDSAIDA_TIPODATAEMISSAO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOVDSAIDA_TIPODATASAIDA_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_vd_saidaTipoDataEmissaoSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_emissao: valores válidos são [P, D]" }),
});

export const relatorio_vd_saidaTipoDataSaidaSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_saida: valores válidos são [P, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioVdSaidaTipoDataEmissao = z.infer<
	typeof relatorio_vd_saidaTipoDataEmissaoSchema
>;

export type RelatorioVdSaidaTipoDataSaida = z.infer<
	typeof relatorio_vd_saidaTipoDataSaidaSchema
>;
