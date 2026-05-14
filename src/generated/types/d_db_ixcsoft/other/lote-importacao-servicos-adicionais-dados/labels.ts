/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEIMPORTACAOSERVICOSADICIONAISDADOS_FIELD_LABELS = {
	cnpj_cpf: "cnpj_cpf",
	contador: "contador",
	data: "data",
	id: "id",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_lote: "id_lote",
	id_produto: "id_produto",
	id_tipo_documento: "id_tipo_documento",
	id_unidade: "id_unidade",
	observacao: "observacao",
	quantidade: "quantidade",
	repetir: "repetir",
	repetir_qtde: "repetir_qtde",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
} as const;

export const LOTEIMPORTACAOSERVICOSADICIONAISDADOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_importacao_servicos_adicionais_dadosRepetirSchema = z.enum(
	["V", "S"],
	{
		error: () => ({ message: "repetir: valores válidos são [V, S]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteImportacaoServicosAdicionaisDadosRepetir = z.infer<
	typeof lote_importacao_servicos_adicionais_dadosRepetirSchema
>;
