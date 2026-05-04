/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ACESSOS_TIPO_LABELS = {
	"1": "Ponta A",
	"2": "Ponta B",
	"3": "Entrega",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const acessosTipoSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "tipo: valores válidos são [Ponta A, Ponta B, Entrega]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AcessosTipo = z.infer<typeof acessosTipoSchema>;
