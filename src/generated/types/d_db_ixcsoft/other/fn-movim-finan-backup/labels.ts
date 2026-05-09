/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINANBACKUP_CONCILIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNMOVIMFINANBACKUP_TIPOLANC_LABELS = {
	M: "M",
	P: "P",
	R: "R",
	D: "D",
	C: "C",
	AC: "AC",
	AF: "AF",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finan_backupConciliadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conciliado: valores válidos são [S, N]" }),
});

export const fn_movim_finan_backupTipoLancSchema = z.enum(
	["M", "P", "R", "D", "C", "AC", "AF", "T"],
	{
		error: () => ({
			message: "tipo_lanc: valores válidos são [M, P, R, D, C, AC, AF, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanBackupConciliado = z.infer<
	typeof fn_movim_finan_backupConciliadoSchema
>;

export type FnMovimFinanBackupTipoLanc = z.infer<
	typeof fn_movim_finan_backupTipoLancSchema
>;
