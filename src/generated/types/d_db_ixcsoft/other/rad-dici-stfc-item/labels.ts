/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADDICISTFCITEM_TIPOATENDIMENTO_LABELS = {
	R: "R",
	U: "U",
} as const;

export const RADDICISTFCITEM_TIPOCLIENTE_LABELS = {
	F: "F",
	J: "J",
	P: "P",
} as const;

export const RADDICISTFCITEM_TIPOMEIOACESSO_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_dici_stfc_itemTipoAtendimentoSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_atendimento: valores válidos são [R, U]" }),
});

export const rad_dici_stfc_itemTipoClienteSchema = z.enum(["F", "J", "P"], {
	error: () => ({ message: "tipo_cliente: valores válidos são [F, J, P]" }),
});

export const rad_dici_stfc_itemTipoMeioAcessoSchema = z.enum(
	["58", "24", "F", "L", "A"],
	{
		error: () => ({
			message: "tipo_meio_acesso: valores válidos são [58, 24, F, L, A]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadDiciStfcItemTipoAtendimento = z.infer<
	typeof rad_dici_stfc_itemTipoAtendimentoSchema
>;

export type RadDiciStfcItemTipoCliente = z.infer<
	typeof rad_dici_stfc_itemTipoClienteSchema
>;

export type RadDiciStfcItemTipoMeioAcesso = z.infer<
	typeof rad_dici_stfc_itemTipoMeioAcessoSchema
>;
