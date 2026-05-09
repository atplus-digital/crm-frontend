/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSRESPONSAVELCANCELNEGATDESIST_TIPODATA_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorios_responsavel_cancel_negat_desistTipoDataSchema = z.enum(
	["P", "D"],
	{
		error: () => ({ message: "tipo_data: valores válidos são [P, D]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatoriosResponsavelCancelNegatDesistTipoData = z.infer<
	typeof relatorios_responsavel_cancel_negat_desistTipoDataSchema
>;
