/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERCEDENTE_STATUS_LABELS = {
	I: "I",
	N: "N",
	R: "R",
	NE: "NE",
	VI: "VI",
	JR: "JR",
	JC: "JC",
	JP: "JP",
	1: "1",
	2: "2",
	E: "E",
	JRC: "JRC",
	REJ: "REJ",
	TP: "TP",
	TPS: "TPS",
	BX: "BX",
	OT: "OT",
	UV: "UV",
	DV: "DV",
	MG: "MG",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_cedenteStatusSchema = z.enum(
	[
		"I",
		"N",
		"R",
		"NE",
		"VI",
		"JR",
		"JC",
		"JP",
		"1",
		"2",
		"E",
		"JRC",
		"REJ",
		"TP",
		"TPS",
		"BX",
		"OT",
		"UV",
		"DV",
		"MG",
	],
	{
		error: () => ({
			message:
				"status: valores válidos são [I, N, R, NE, VI, JR, JC, JP, 1, 2, E, JRC, REJ, TP, TPS, BX, OT, UV, DV, MG]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberCedenteStatus = z.infer<
	typeof fn_areceber_cedenteStatusSchema
>;
