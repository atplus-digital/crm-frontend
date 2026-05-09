/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIO_BUSCAPOTENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIO_CONEXAO_LABELS = {
	58: "58",
	24: "24",
	C: "C",
	F: "F",
} as const;

export const RADPOPRADIO_FABRICANTEMODELO_LABELS = {
	SMARTOLT: "SMARTOLT",
	U: "U",
	M: "M",
	I: "I",
	O: "O",
	FH: "FH",
	DC: "DC",
	HW: "HW",
	ZTE: "ZTE",
	HW2: "HW2",
	PK: "PK",
	FK: "FK",
	FKG: "FKG",
	INB: "INB",
	DIG: "DIG",
	NK: "NK",
	FBT: "FBT",
	FKWGL: "FKWGL",
	VSOL: "VSOL",
	RAISE: "RAISE",
	CIAEPON: "CIAEPON",
	ZYXEL: "ZYXEL",
	UFIBER: "UFIBER",
	FB6001: "FB6001",
	FKC: "FKC",
	CIAGPON: "CIAGPON",
	ZTEC610: "ZTEC610",
	VSOLGPON: "VSOLGPON",
	PHYHOME: "PHYHOME",
	INTELBRASG16: "INTELBRASG16",
	"2FLEX": "2FLEX",
	INTELBRASEPON: "INTELBRASEPON",
	TPLINK: "TPLINK",
	OLTNEUTRA: "OLTNEUTRA",
	TH: "TH",
	TPLINKP700X: "TPLINKP700X",
} as const;

export const RADPOPRADIO_USASMART_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radioAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const radpop_radioBuscaPotenciaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "busca_potencia: valores válidos são [S, N]" }),
});

export const radpop_radioConexaoSchema = z.enum(["58", "24", "C", "F"], {
	error: () => ({ message: "conexao: valores válidos são [58, 24, C, F]" }),
});

export const radpop_radioFabricanteModeloSchema = z.enum(
	[
		"SMARTOLT",
		"U",
		"M",
		"I",
		"O",
		"FH",
		"DC",
		"HW",
		"ZTE",
		"HW2",
		"PK",
		"FK",
		"FKG",
		"INB",
		"DIG",
		"NK",
		"FBT",
		"FKWGL",
		"VSOL",
		"RAISE",
		"CIAEPON",
		"ZYXEL",
		"UFIBER",
		"FB6001",
		"FKC",
		"CIAGPON",
		"ZTEC610",
		"VSOLGPON",
		"PHYHOME",
		"INTELBRASG16",
		"2FLEX",
		"INTELBRASEPON",
		"TPLINK",
		"OLTNEUTRA",
		"TH",
		"TPLINKP700X",
	],
	{
		error: () => ({
			message:
				"fabricante_modelo: valores válidos são [SMARTOLT, U, M, I, O, FH, DC, HW, ZTE, HW2, PK, FK, FKG, INB, DIG, NK, FBT, FKWGL, VSOL, RAISE, CIAEPON, ZYXEL, UFIBER, FB6001, FKC, CIAGPON, ZTEC610, VSOLGPON, PHYHOME, INTELBRASG16, 2FLEX, INTELBRASEPON, TPLINK, OLTNEUTRA, TH, TPLINKP700X]",
		}),
	},
);

export const radpop_radioUsaSmartSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_smart: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioAtivo = z.infer<typeof radpop_radioAtivoSchema>;

export type RadpopRadioBuscaPotencia = z.infer<
	typeof radpop_radioBuscaPotenciaSchema
>;

export type RadpopRadioConexao = z.infer<typeof radpop_radioConexaoSchema>;

export type RadpopRadioFabricanteModelo = z.infer<
	typeof radpop_radioFabricanteModeloSchema
>;

export type RadpopRadioUsaSmart = z.infer<typeof radpop_radioUsaSmartSchema>;
