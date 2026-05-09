/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOBALANCO_BALANCOPATRIMONIAL_LABELS = {
	A: "A",
	PASS: "PASS",
	PATRI: "PATRI",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_balancoBalancoPatrimonialSchema = z.enum(
	["A", "PASS", "PATRI", "T"],
	{
		error: () => ({
			message: "balanco_patrimonial: valores válidos são [A, PASS, PATRI, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioBalancoBalancoPatrimonial = z.infer<
	typeof relatorio_balancoBalancoPatrimonialSchema
>;
