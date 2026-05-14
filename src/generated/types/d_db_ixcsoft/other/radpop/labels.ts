/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOP_FIELD_LABELS = {
	abertura: "abertura",
	altura: "altura",
	bairro: "bairro",
	cep: "cep",
	endereco: "endereco",
	id: "id",
	id_cidade: "id_cidade",
	id_diretorio: "id_diretorio",
	id_fornecedor: "id_fornecedor",
	id_projeto: "id_projeto",
	latitude: "latitude",
	longitude: "longitude",
	numero: "numero",
	numestacao_anatel: "numestacao_anatel",
	observacoes: "observacoes",
	pop: "pop",
	tipo: "tipo",
} as const;

export const RADPOP_ABERTURA_LABELS = {
	PA: "PA",
	R: "R",
} as const;

export const RADPOP_TIPO_LABELS = {
	TO: "TO",
	DC: "DC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpopAberturaSchema = z.enum(["PA", "R"], {
	error: () => ({ message: "abertura: valores válidos são [PA, R]" }),
});

export const radpopTipoSchema = z.enum(["TO", "DC"], {
	error: () => ({ message: "tipo: valores válidos são [TO, DC]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopAbertura = z.infer<typeof radpopAberturaSchema>;

export type RadpopTipo = z.infer<typeof radpopTipoSchema>;
