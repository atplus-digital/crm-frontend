/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADCAIXAFTTH_FIELD_LABELS = {
	bairro: "bairro",
	capacidade: "capacidade",
	cep: "cep",
	codigo_estilo_caixa: "codigo_estilo_caixa",
	descricao: "descricao",
	endereco: "endereco",
	external_id: "external_id",
	id: "id",
	id_cidade: "id_cidade",
	id_diretorio: "id_diretorio",
	id_interface: "id_interface",
	id_mini_projeto: "id_mini_projeto",
	id_projeto: "id_projeto",
	id_tecnologia: "id_tecnologia",
	id_transmissor: "id_transmissor",
	idx: "idx",
	latitude: "latitude",
	longitude: "longitude",
	numero: "numero",
	obs_caixa_ftth: "obs_caixa_ftth",
	status: "status",
	tipo: "tipo",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const RADCAIXAFTTH_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const RADCAIXAFTTH_TIPO_LABELS = {
	P: "P",
	N: "N",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_caixa_ftthStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const rad_caixa_ftthTipoSchema = z.enum(["P", "N", "A"], {
	error: () => ({ message: "tipo: valores válidos são [P, N, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadCaixaFtthStatus = z.infer<typeof rad_caixa_ftthStatusSchema>;

export type RadCaixaFtthTipo = z.infer<typeof rad_caixa_ftthTipoSchema>;
