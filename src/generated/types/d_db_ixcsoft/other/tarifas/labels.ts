/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TARIFAS_PADRAO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const TARIFAS_TIPOCHAMADA_LABELS = {
	LDN: "LDN",
	VC1: "VC1",
	VC2: "VC2",
	VC3: "VC3",
	Local: "Local",
	Interna: "Interna",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tarifasPadraoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "padrao: valores válidos são [N, S]" }),
});

export const tarifasTipoChamadaSchema = z.enum(
	["LDN", "VC1", "VC2", "VC3", "Local", "Interna"],
	{
		error: () => ({
			message:
				"tipo_chamada: valores válidos são [LDN, VC1, VC2, VC3, Local, Interna]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TarifasPadrao = z.infer<typeof tarifasPadraoSchema>;

export type TarifasTipoChamada = z.infer<typeof tarifasTipoChamadaSchema>;
