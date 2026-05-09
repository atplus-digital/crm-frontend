/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TIPOCLIENTE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPOCLIENTE_CONTRIBUINTEICMS_LABELS = {
	S: "S",
	N: "N",
	I: "I",
} as const;

export const TIPOCLIENTE_TIPOASSINANTE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
} as const;

export const TIPOCLIENTE_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tipo_clienteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const tipo_clienteContribuinteIcmsSchema = z.enum(["S", "N", "I"], {
	error: () => ({
		message: "contribuinte_icms: valores válidos são [S, N, I]",
	}),
});

export const tipo_clienteTipoAssinanteSchema = z.enum(
	["1", "2", "3", "4", "5", "6"],
	{
		error: () => ({
			message: "tipo_assinante: valores válidos são [1, 2, 3, 4, 5, 6]",
		}),
	},
);

export const tipo_clienteTipoClienteScmSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "99"],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TipoClienteAtivo = z.infer<typeof tipo_clienteAtivoSchema>;

export type TipoClienteContribuinteIcms = z.infer<
	typeof tipo_clienteContribuinteIcmsSchema
>;

export type TipoClienteTipoAssinante = z.infer<
	typeof tipo_clienteTipoAssinanteSchema
>;

export type TipoClienteTipoClienteScm = z.infer<
	typeof tipo_clienteTipoClienteScmSchema
>;
