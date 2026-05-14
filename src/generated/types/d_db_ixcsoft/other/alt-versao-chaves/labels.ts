/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALTVERSAOCHAVES_FIELD_LABELS = {
	codigo_clientes: "codigo_clientes",
	data_alteracao: "data_alteracao",
	descricao: "descricao",
	id: "id",
	id_produto: "id_produto",
	qtd_chaves: "qtd_chaves",
	qtd_clientes: "qtd_clientes",
	responsavel: "responsavel",
	status: "status",
	tipo_chave: "tipo_chave",
	versao_antiga: "versao_antiga",
	versao_nova: "versao_nova",
} as const;

export const ALTVERSAOCHAVES_STATUS_LABELS = {
	P: "P",
	F: "F",
} as const;

export const ALTVERSAOCHAVES_VERSAONOVA_LABELS = {
	E: "E",
	B: "B",
	RC: "RC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const alt_versao_chavesStatusSchema = z.enum(["P", "F"], {
	error: () => ({ message: "status: valores válidos são [P, F]" }),
});

export const alt_versao_chavesVersaoNovaSchema = z.enum(["E", "B", "RC"], {
	error: () => ({ message: "versao_nova: valores válidos são [E, B, RC]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AltVersaoChavesStatus = z.infer<
	typeof alt_versao_chavesStatusSchema
>;

export type AltVersaoChavesVersaoNova = z.infer<
	typeof alt_versao_chavesVersaoNovaSchema
>;
