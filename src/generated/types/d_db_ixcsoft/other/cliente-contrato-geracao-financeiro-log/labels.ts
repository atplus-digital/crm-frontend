/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOGERACAOFINANCEIROLOG_FIELD_LABELS = {
	id: "id",
	id_cliente_contrato_geracao_financeiro:
		"id_cliente_contrato_geracao_financeiro",
	id_contrato: "id_contrato",
	id_saida: "id_saida",
	mensagem: "mensagem",
	tipo: "tipo",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIROLOG_TIPO_LABELS = {
	S: "S",
	E: "E",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_geracao_financeiro_logTipoSchema = z.enum(
	["S", "E", "A"],
	{
		error: () => ({ message: "tipo: valores válidos são [S, E, A]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoGeracaoFinanceiroLogTipo = z.infer<
	typeof cliente_contrato_geracao_financeiro_logTipoSchema
>;
