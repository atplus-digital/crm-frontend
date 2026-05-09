/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DICIINFRAESTRUTURA_ABERTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DICIINFRAESTRUTURA_ENLACESPROPRIOSTERRESTRESSWAP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DICIINFRAESTRUTURA_ENLACESTIPOMEIO_LABELS = {
	A: "A",
	L: "L",
	F: "F",
} as const;

export const DICIINFRAESTRUTURA_TIPO_LABELS = {
	EP: "EP",
	EC: "EC",
	ES: "ES",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const dici_infraestruturaAberturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "abertura: valores válidos são [S, N]" }),
});

export const dici_infraestruturaEnlacesPropriosTerrestresSwapSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enlaces_proprios_terrestres_swap: valores válidos são [S, N]",
		}),
	},
);

export const dici_infraestruturaEnlacesTipoMeioSchema = z.enum(
	["A", "L", "F"],
	{
		error: () => ({
			message: "enlaces_tipo_meio: valores válidos são [A, L, F]",
		}),
	},
);

export const dici_infraestruturaTipoSchema = z.enum(["EP", "EC", "ES"], {
	error: () => ({ message: "tipo: valores válidos são [EP, EC, ES]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DiciInfraestruturaAbertura = z.infer<
	typeof dici_infraestruturaAberturaSchema
>;

export type DiciInfraestruturaEnlacesPropriosTerrestresSwap = z.infer<
	typeof dici_infraestruturaEnlacesPropriosTerrestresSwapSchema
>;

export type DiciInfraestruturaEnlacesTipoMeio = z.infer<
	typeof dici_infraestruturaEnlacesTipoMeioSchema
>;

export type DiciInfraestruturaTipo = z.infer<
	typeof dici_infraestruturaTipoSchema
>;
