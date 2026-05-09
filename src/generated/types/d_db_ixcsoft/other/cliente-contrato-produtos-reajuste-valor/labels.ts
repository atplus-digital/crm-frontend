/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOPRODUTOSREAJUSTEVALOR_STATUS_LABELS = {
	A: "A",
	I: "I",
	P: "P",
	N: "N",
	T: "T",
} as const;

export const CLIENTECONTRATOPRODUTOSREAJUSTEVALOR_STATUSINTERNET_LABELS = {
	A: "A",
	D: "D",
	CM: "CM",
	CA: "CA",
	CE: "CE",
	FA: "FA",
	AA: "AA",
	T: "T",
} as const;

export const CLIENTECONTRATOPRODUTOSREAJUSTEVALOR_TIPOSERVICO_LABELS = {
	I: "I",
	F: "F",
	S: "S",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_produtos_reajuste_valorStatusSchema = z.enum(
	["A", "I", "P", "N", "T"],
	{
		error: () => ({ message: "status: valores válidos são [A, I, P, N, T]" }),
	},
);

export const cliente_contrato_produtos_reajuste_valorStatusInternetSchema =
	z.enum(["A", "D", "CM", "CA", "CE", "FA", "AA", "T"], {
		error: () => ({
			message:
				"status_internet: valores válidos são [A, D, CM, CA, CE, FA, AA, T]",
		}),
	});

export const cliente_contrato_produtos_reajuste_valorTipoServicoSchema = z.enum(
	["I", "F", "S", "T"],
	{
		error: () => ({
			message: "tipo_servico: valores válidos são [I, F, S, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoProdutosReajusteValorStatus = z.infer<
	typeof cliente_contrato_produtos_reajuste_valorStatusSchema
>;

export type ClienteContratoProdutosReajusteValorStatusInternet = z.infer<
	typeof cliente_contrato_produtos_reajuste_valorStatusInternetSchema
>;

export type ClienteContratoProdutosReajusteValorTipoServico = z.infer<
	typeof cliente_contrato_produtos_reajuste_valorTipoServicoSchema
>;
