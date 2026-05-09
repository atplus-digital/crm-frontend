/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCAERROSFATAIS_ESTAGIO_LABELS = {
	BC: "BC",
	BL: "BL",
	WA: "WA",
	NP: "NP",
	SO: "SO",
	SMS: "SMS",
	EMAIL: "EMAIL",
} as const;

export const REGUACOBRANCAERROSFATAIS_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_erros_fataisEstagioSchema = z.enum(
	["BC", "BL", "WA", "NP", "SO", "SMS", "EMAIL"],
	{
		error: () => ({
			message: "estagio: valores válidos são [BC, BL, WA, NP, SO, SMS, EMAIL]",
		}),
	},
);

export const regua_cobranca_erros_fataisStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaErrosFataisEstagio = z.infer<
	typeof regua_cobranca_erros_fataisEstagioSchema
>;

export type ReguaCobrancaErrosFataisStatus = z.infer<
	typeof regua_cobranca_erros_fataisStatusSchema
>;
