/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOMOVIMENTACAO_FIELD_LABELS = {
	cliente_destino: "cliente_destino",
	data_movimentacao: "data_movimentacao",
	filial_destino: "filial_destino",
	finalidade: "finalidade",
	id: "id",
	id_almoxarifado_destino: "id_almoxarifado_destino",
	id_almoxarifado_origem: "id_almoxarifado_origem",
	id_contrato: "id_contrato",
	id_estrutura: "id_estrutura",
	id_movimento: "id_movimento",
	id_patrimonio: "id_patrimonio",
	id_pedido_os: "id_pedido_os",
	indisponivel: "indisponivel",
	motivo: "motivo",
	obs: "obs",
	observacao: "observacao",
	responsavel: "responsavel",
	setor_destino: "setor_destino",
	tipo_movimento: "tipo_movimento",
} as const;

export const PATRIMONIOMOVIMENTACAO_INDISPONIVEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PATRIMONIOMOVIMENTACAO_TIPOMOVIMENTO_LABELS = {
	M: "M",
	E: "E",
	V: "V",
	OS: "OS",
	TA: "TA",
	TM: "TM",
	RE: "RE",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_movimentacaoIndisponivelSchema = z.enum(["S", "N"], {
	error: () => ({ message: "indisponivel: valores válidos são [S, N]" }),
});

export const patrimonio_movimentacaoTipoMovimentoSchema = z.enum(
	["M", "E", "V", "OS", "TA", "TM", "RE"],
	{
		error: () => ({
			message: "tipo_movimento: valores válidos são [M, E, V, OS, TA, TM, RE]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioMovimentacaoIndisponivel = z.infer<
	typeof patrimonio_movimentacaoIndisponivelSchema
>;

export type PatrimonioMovimentacaoTipoMovimento = z.infer<
	typeof patrimonio_movimentacaoTipoMovimentoSchema
>;
