/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAINTEGRACAO_TIPO_LABELS = {
	SVA: "SVA",
	TV: "TV",
	MVNO: "MVNO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_integracaoTipoSchema = z.enum(["SVA", "TV", "MVNO"], {
	error: () => ({ message: "tipo: valores válidos são [SVA, TV, MVNO]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaIntegracaoTipo = z.infer<
	typeof assinatura_integracaoTipoSchema
>;
