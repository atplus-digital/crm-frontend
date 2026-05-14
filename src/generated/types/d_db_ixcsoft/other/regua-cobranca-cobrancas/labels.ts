/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCACOBRANCAS_FIELD_LABELS = {
	cliente_id: "cliente_id",
	descricao: "descricao",
	fn_areceber_id: "fn_areceber_id",
	id: "id",
	os_gerada: "os_gerada",
	regua_cobranca_parametros_dias_id: "regua_cobranca_parametros_dias_id",
	status: "status",
} as const;

export const REGUACOBRANCACOBRANCAS_OSGERADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCACOBRANCAS_STATUS_LABELS = {
	F: "F",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_cobrancasOsGeradaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "os_gerada: valores válidos são [S, N]" }),
});

export const regua_cobranca_cobrancasStatusSchema = z.enum(["F", "A"], {
	error: () => ({ message: "status: valores válidos são [F, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaCobrancasOsGerada = z.infer<
	typeof regua_cobranca_cobrancasOsGeradaSchema
>;

export type ReguaCobrancaCobrancasStatus = z.infer<
	typeof regua_cobranca_cobrancasStatusSchema
>;
