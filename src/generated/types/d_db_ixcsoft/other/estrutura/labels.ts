/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ESTRUTURA_FIELD_LABELS = {
	ativo: "ativo",
	bairro: "bairro",
	cep: "cep",
	complemento: "complemento",
	descricao: "descricao",
	endereco: "endereco",
	id: "id",
	id_cidade: "id_cidade",
	id_filial: "id_filial",
	id_planejamento_analitico: "id_planejamento_analitico",
	latitude: "latitude",
	longitude: "longitude",
	numero: "numero",
	observacao: "observacao",
	referencia: "referencia",
} as const;

export const ESTRUTURA_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const estruturaAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EstruturaAtivo = z.infer<typeof estruturaAtivoSchema>;
