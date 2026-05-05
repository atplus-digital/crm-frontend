/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RECURSOSVIAGEM_DESTINOVIAGEM_LABELS = {
	1: "Curitibanos",
	2: "Florianópolis",
	3: "Florianópolis",
} as const;

export const RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS = {
	1: "Kwid ATPlus",
	2: "Fiorino ATPlus",
	3: "Carro Particular",
	4: "Outro",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const recursos_viagemDestinoViagemSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message:
			"destino_viagem: valores válidos são [Curitibanos, Florianópolis, Florianópolis]",
	}),
});

export const recursos_viagemMeioTransporteSchema = z.enum(
	["1", "2", "3", "4"],
	{
		error: () => ({
			message:
				"meio_transporte: valores válidos são [Kwid ATPlus, Fiorino ATPlus, Carro Particular, Outro]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RecursosViagemDestinoViagem = z.infer<
	typeof recursos_viagemDestinoViagemSchema
>;

export type RecursosViagemMeioTransporte = z.infer<
	typeof recursos_viagemMeioTransporteSchema
>;
