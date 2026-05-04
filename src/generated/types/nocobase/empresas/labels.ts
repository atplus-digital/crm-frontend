/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EMPRESAS_ANALISEIXC_LABELS = {
	"0": "Com Pendências",
	"1": "Sem Pendências",
} as const;

export const EMPRESAS_CREDITO_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Atenção",
	"9": "Negado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const empresasAnaliseIxcSchema = z.enum(["0", "1"], {
	error: () => ({
		message:
			"analise_ixc: valores válidos são [Com Pendências, Sem Pendências]",
	}),
});

export const empresasCreditoSchema = z.enum(["1", "2", "9"], {
	error: () => ({
		message:
			"credito: valores válidos são [Aprovado, Aprovado com Atenção, Negado]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EmpresasAnaliseIxc = z.infer<typeof empresasAnaliseIxcSchema>;

export type EmpresasCredito = z.infer<typeof empresasCreditoSchema>;
