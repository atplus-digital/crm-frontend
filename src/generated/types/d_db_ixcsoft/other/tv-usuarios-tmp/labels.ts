/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVUSUARIOSTMP_CONNECTIONTYPETV_LABELS = {
	DTH: "DTH",
	MMDS: "MMDS",
	SAT: "SAT",
	IPTV: "IPTV",
	OTT: "OTT",
	STR: "STR",
	VOD: "VOD",
} as const;

export const TVUSUARIOSTMP_CONTROLEDOSPAIS_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVUSUARIOSTMP_USAREMAILPRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_usuarios_tmpConnectionTypeTvSchema = z.enum(
	["DTH", "MMDS", "SAT", "IPTV", "OTT", "STR", "VOD"],
	{
		error: () => ({
			message:
				"connection_type_tv: valores válidos são [DTH, MMDS, SAT, IPTV, OTT, STR, VOD]",
		}),
	},
);

export const tv_usuarios_tmpControleDosPaisSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "controle_dos_pais: valores válidos são [Y, N]" }),
});

export const tv_usuarios_tmpUsarEmailPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usar_email_principal: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvUsuariosTmpConnectionTypeTv = z.infer<
	typeof tv_usuarios_tmpConnectionTypeTvSchema
>;

export type TvUsuariosTmpControleDosPais = z.infer<
	typeof tv_usuarios_tmpControleDosPaisSchema
>;

export type TvUsuariosTmpUsarEmailPrincipal = z.infer<
	typeof tv_usuarios_tmpUsarEmailPrincipalSchema
>;
