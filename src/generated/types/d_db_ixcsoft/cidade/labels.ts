/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CIDADE_ORIGEM_LABELS = {
	N: "Nacional",
	I: "Internacional",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cidadeOrigemSchema = z.enum(["N", "I"], {
	error: () => ({
		message: "origem: valores válidos são [Nacional, Internacional]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CidadeOrigem = z.infer<typeof cidadeOrigemSchema>;
