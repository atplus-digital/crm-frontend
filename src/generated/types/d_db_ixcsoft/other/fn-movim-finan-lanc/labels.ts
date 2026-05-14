/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINANLANC_FIELD_LABELS = {
	documento: "documento",
	historico: "historico",
	id: "id",
	id_movim_finan: "id_movim_finan",
	id_pagar: "id_pagar",
	id_receber: "id_receber",
	pacrecimo: "pacrecimo",
	pdesconto: "pdesconto",
	tipo_lanc: "tipo_lanc",
	vacrescimo: "vacrescimo",
	valor: "valor",
	vdesconto: "vdesconto",
	vencimento: "vencimento",
} as const;

export const FNMOVIMFINANLANC_TIPOLANC_LABELS = {
	R: "R",
	P: "P",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finan_lancTipoLancSchema = z.enum(["R", "P", "A"], {
	error: () => ({ message: "tipo_lanc: valores válidos são [R, P, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanLancTipoLanc = z.infer<
	typeof fn_movim_finan_lancTipoLancSchema
>;
