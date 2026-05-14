/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONDOMINIO_FIELD_LABELS = {
	bairro: "bairro",
	bloco_unico: "bloco_unico",
	celular_sindico: "celular_sindico",
	cep: "cep",
	cnpj: "cnpj",
	condominio: "condominio",
	data_cadastro: "data_cadastro",
	endereco: "endereco",
	id: "id",
	id_cidade: "id_cidade",
	numero: "numero",
	obs: "obs",
	quantidade_shafts: "quantidade_shafts",
	sindico: "sindico",
} as const;

export const CLIENTECONDOMINIO_BLOCOUNICO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_condominioBlocoUnicoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "bloco_unico: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteCondominioBlocoUnico = z.infer<
	typeof cliente_condominioBlocoUnicoSchema
>;
