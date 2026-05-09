/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVUSUARIOS_API_LABELS = {
	A: "A",
	I: "I",
} as const;

export const TVUSUARIOS_CONNECTIONTYPETV_LABELS = {
	DTH: "DTH",
	MMDS: "MMDS",
	SAT: "SAT",
	IPTV: "IPTV",
	OTT: "OTT",
	STR: "STR",
	VOD: "VOD",
} as const;

export const TVUSUARIOS_CONTROLEDOSPAIS_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVUSUARIOS_MANUALLYDISABLED_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TVUSUARIOS_USAREMAILPRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_usuariosApiSchema = z.enum(["A", "I"], {
	error: () => ({ message: "api: valores válidos são [A, I]" }),
});

export const tv_usuariosConnectionTypeTvSchema = z.enum(
	["DTH", "MMDS", "SAT", "IPTV", "OTT", "STR", "VOD"],
	{
		error: () => ({
			message:
				"connection_type_tv: valores válidos são [DTH, MMDS, SAT, IPTV, OTT, STR, VOD]",
		}),
	},
);

export const tv_usuariosControleDosPaisSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "controle_dos_pais: valores válidos são [Y, N]" }),
});

export const tv_usuariosManuallyDisabledSchema = z.enum(["S", "N"], {
	error: () => ({ message: "manually_disabled: valores válidos são [S, N]" }),
});

export const tv_usuariosUsarEmailPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usar_email_principal: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvUsuariosApi = z.infer<typeof tv_usuariosApiSchema>;

export type TvUsuariosConnectionTypeTv = z.infer<
	typeof tv_usuariosConnectionTypeTvSchema
>;

export type TvUsuariosControleDosPais = z.infer<
	typeof tv_usuariosControleDosPaisSchema
>;

export type TvUsuariosManuallyDisabled = z.infer<
	typeof tv_usuariosManuallyDisabledSchema
>;

export type TvUsuariosUsarEmailPrincipal = z.infer<
	typeof tv_usuariosUsarEmailPrincipalSchema
>;
