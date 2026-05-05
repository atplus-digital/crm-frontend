/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS = {
	"0nqbw68srah": "AC 220",
	e5b3lklfpq4: "AC 110",
	mra46p506xo: "DC -48",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const telecom_colocation_opcoesEnergiaSchema = z.enum(
	["0nqbw68srah", "e5b3lklfpq4", "mra46p506xo"],
	{
		error: () => ({
			message: "energia: valores válidos são [AC 220, AC 110, DC -48]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TelecomColocationOpcoesEnergia = z.infer<
	typeof telecom_colocation_opcoesEnergiaSchema
>;
