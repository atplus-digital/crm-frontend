/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARLOTE_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNAPAGARLOTE_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	E: "E",
} as const;

export const FNAPAGARLOTE_TIPO_LABELS = {
	F: "F",
	D: "D",
} as const;

export const FNAPAGARLOTE_TIPOPAGAMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	Cartão: "Cartão",
	Dinheiro: "Dinheiro",
	Depósito: "Depósito",
	Débito: "Débito",
	Transferencia: "Transferencia",
	Pix: "Pix",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_lotePrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const fn_apagar_loteStatusSchema = z.enum(["A", "P", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, P, F, E]" }),
});

export const fn_apagar_loteTipoSchema = z.enum(["F", "D"], {
	error: () => ({ message: "tipo: valores válidos são [F, D]" }),
});

export const fn_apagar_loteTipoPagamentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"Cartão",
		"Dinheiro",
		"Depósito",
		"Débito",
		"Transferencia",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_pagamento: valores válidos são [Boleto, Cheque, Cartão, Dinheiro, Depósito, Débito, Transferencia, Pix]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarLotePrevisao = z.infer<typeof fn_apagar_lotePrevisaoSchema>;

export type FnApagarLoteStatus = z.infer<typeof fn_apagar_loteStatusSchema>;

export type FnApagarLoteTipo = z.infer<typeof fn_apagar_loteTipoSchema>;

export type FnApagarLoteTipoPagamento = z.infer<
	typeof fn_apagar_loteTipoPagamentoSchema
>;
