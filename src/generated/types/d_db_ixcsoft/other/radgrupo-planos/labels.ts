/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADGRUPOPLANOS_FIELD_LABELS = {
	descricao: "descricao",
	dom: "dom",
	feriados: "feriados",
	horario_final: "horario_final",
	horario_inicial: "horario_inicial",
	id: "id",
	id_radgrupos: "id_radgrupos",
	multiplicador: "multiplicador",
	opcao: "opcao",
	qua: "qua",
	qui: "qui",
	sab: "sab",
	seg: "seg",
	sex: "sex",
	ter: "ter",
} as const;

export const RADGRUPOPLANOS_DOM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_FERIADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_MULTIPLICADOR_LABELS = {
	"1X": "1X",
	"2X": "2X",
	"3X": "3X",
	"4X": "4X",
	"5X": "5X",
	"6X": "6X",
	"7X": "7X",
	"8X": "8X",
	"9X": "9X",
	"10X": "10X",
} as const;

export const RADGRUPOPLANOS_OPCAO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const RADGRUPOPLANOS_QUA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_QUI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_SAB_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_SEG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_SEX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOPLANOS_TER_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radgrupo_planosDomSchema = z.enum(["S", "N"], {
	error: () => ({ message: "dom: valores válidos são [S, N]" }),
});

export const radgrupo_planosFeriadosSchema = z.enum(["S", "N"], {
	error: () => ({ message: "feriados: valores válidos são [S, N]" }),
});

export const radgrupo_planosMultiplicadorSchema = z.enum(
	["1X", "2X", "3X", "4X", "5X", "6X", "7X", "8X", "9X", "10X"],
	{
		error: () => ({
			message:
				"multiplicador: valores válidos são [1X, 2X, 3X, 4X, 5X, 6X, 7X, 8X, 9X, 10X]",
		}),
	},
);

export const radgrupo_planosOpcaoSchema = z.enum(["M", "E"], {
	error: () => ({ message: "opcao: valores válidos são [M, E]" }),
});

export const radgrupo_planosQuaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "qua: valores válidos são [S, N]" }),
});

export const radgrupo_planosQuiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "qui: valores válidos são [S, N]" }),
});

export const radgrupo_planosSabSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sab: valores válidos são [S, N]" }),
});

export const radgrupo_planosSegSchema = z.enum(["S", "N"], {
	error: () => ({ message: "seg: valores válidos são [S, N]" }),
});

export const radgrupo_planosSexSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sex: valores válidos são [S, N]" }),
});

export const radgrupo_planosTerSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ter: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadgrupoPlanosDom = z.infer<typeof radgrupo_planosDomSchema>;

export type RadgrupoPlanosFeriados = z.infer<
	typeof radgrupo_planosFeriadosSchema
>;

export type RadgrupoPlanosMultiplicador = z.infer<
	typeof radgrupo_planosMultiplicadorSchema
>;

export type RadgrupoPlanosOpcao = z.infer<typeof radgrupo_planosOpcaoSchema>;

export type RadgrupoPlanosQua = z.infer<typeof radgrupo_planosQuaSchema>;

export type RadgrupoPlanosQui = z.infer<typeof radgrupo_planosQuiSchema>;

export type RadgrupoPlanosSab = z.infer<typeof radgrupo_planosSabSchema>;

export type RadgrupoPlanosSeg = z.infer<typeof radgrupo_planosSegSchema>;

export type RadgrupoPlanosSex = z.infer<typeof radgrupo_planosSexSchema>;

export type RadgrupoPlanosTer = z.infer<typeof radgrupo_planosTerSchema>;
