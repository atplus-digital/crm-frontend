/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALTVERSAOCHAVESHISTORICO_FIELD_LABELS = {
	id: "id",
	id_alt_versao_chaves: "id_alt_versao_chaves",
	id_chave: "id_chave",
	id_cliente: "id_cliente",
	observacao: "observacao",
	status: "status",
	versao_antiga: "versao_antiga",
	versao_nova: "versao_nova",
} as const;

export const ALTVERSAOCHAVESHISTORICO_STATUS_LABELS = {
	A: "A",
	S: "S",
	E: "E",
} as const;

export const ALTVERSAOCHAVESHISTORICO_VERSAOANTIGA_LABELS = {
	E: "E",
	B: "B",
	RC: "RC",
} as const;

export const ALTVERSAOCHAVESHISTORICO_VERSAONOVA_LABELS = {
	E: "E",
	B: "B",
	RC: "RC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const alt_versao_chaves_historicoStatusSchema = z.enum(["A", "S", "E"], {
	error: () => ({ message: "status: valores válidos são [A, S, E]" }),
});

export const alt_versao_chaves_historicoVersaoAntigaSchema = z.enum(
	["E", "B", "RC"],
	{
		error: () => ({ message: "versao_antiga: valores válidos são [E, B, RC]" }),
	},
);

export const alt_versao_chaves_historicoVersaoNovaSchema = z.enum(
	["E", "B", "RC"],
	{
		error: () => ({ message: "versao_nova: valores válidos são [E, B, RC]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AltVersaoChavesHistoricoStatus = z.infer<
	typeof alt_versao_chaves_historicoStatusSchema
>;

export type AltVersaoChavesHistoricoVersaoAntiga = z.infer<
	typeof alt_versao_chaves_historicoVersaoAntigaSchema
>;

export type AltVersaoChavesHistoricoVersaoNova = z.infer<
	typeof alt_versao_chaves_historicoVersaoNovaSchema
>;
