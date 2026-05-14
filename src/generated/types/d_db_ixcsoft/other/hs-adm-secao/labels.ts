/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSADMSECAO_FIELD_LABELS = {
	descricao: "descricao",
	id: "id",
	imagem: "imagem",
	nivel_acesso: "nivel_acesso",
	ordenar: "ordenar",
	posicao_imagem: "posicao_imagem",
	prublicado: "prublicado",
	titulo: "titulo",
} as const;

export const HSADMSECAO_PRUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_adm_secaoPrublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "prublicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsAdmSecaoPrublicado = z.infer<typeof hs_adm_secaoPrublicadoSchema>;
