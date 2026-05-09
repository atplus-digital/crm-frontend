/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TRANSPORTADORA_HABILITAECOMMERCE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TRANSPORTADORA_ISENTOICMS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TRANSPORTADORA_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const transportadoraHabilitaEcommerceSchema = z.enum(["S", "N"], {
	error: () => ({ message: "habilita_ecommerce: valores válidos são [S, N]" }),
});

export const transportadoraIsentoIcmsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "isento_icms: valores válidos são [S, N]" }),
});

export const transportadoraTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TransportadoraHabilitaEcommerce = z.infer<
	typeof transportadoraHabilitaEcommerceSchema
>;

export type TransportadoraIsentoIcms = z.infer<
	typeof transportadoraIsentoIcmsSchema
>;

export type TransportadoraTipoPessoa = z.infer<
	typeof transportadoraTipoPessoaSchema
>;
