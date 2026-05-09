/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONTAS_ANEXARCOMPROVANTECPAAUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_INTEGRATIONENVIRONMENT_LABELS = {
	H: "H",
	P: "P",
} as const;

export const CONTAS_PERMITIRPAGSALDONEGATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_TIPOCONTA_LABELS = {
	C: "C",
	B: "B",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const contasAnexarComprovanteCpaAutoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "anexar_comprovante_cpa_auto: valores válidos são [S, N]",
	}),
});

export const contasAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const contasIntegrationEnvironmentSchema = z.enum(["H", "P"], {
	error: () => ({
		message: "integration_environment: valores válidos são [H, P]",
	}),
});

export const contasPermitirPagSaldoNegativoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permitir_pag_saldo_negativo: valores válidos são [S, N]",
	}),
});

export const contasTipoContaSchema = z.enum(["C", "B", "D"], {
	error: () => ({ message: "tipo_conta: valores válidos são [C, B, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ContasAnexarComprovanteCpaAuto = z.infer<
	typeof contasAnexarComprovanteCpaAutoSchema
>;

export type ContasAtivo = z.infer<typeof contasAtivoSchema>;

export type ContasIntegrationEnvironment = z.infer<
	typeof contasIntegrationEnvironmentSchema
>;

export type ContasPermitirPagSaldoNegativo = z.infer<
	typeof contasPermitirPagSaldoNegativoSchema
>;

export type ContasTipoConta = z.infer<typeof contasTipoContaSchema>;
