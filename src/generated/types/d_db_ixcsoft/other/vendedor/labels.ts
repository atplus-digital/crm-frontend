/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VENDEDOR_FIELD_LABELS = {
	bairro: "bairro",
	celular: "celular",
	cnpj_cpf: "cnpj_cpf",
	comissao: "comissao",
	comissao_perc_recebimento: "comissao_perc_recebimento",
	comissao_v: "comissao_v",
	cor_no_mapa: "cor_no_mapa",
	email: "email",
	endereco: "endereco",
	id: "id",
	id_cidade: "id_cidade",
	ie_rg: "ie_rg",
	nome: "nome",
	pipe_id_usuario: "pipe_id_usuario",
	status: "status",
	telefone: "telefone",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const VENDEDOR_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vendedorStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VendedorStatus = z.infer<typeof vendedorStatusSchema>;
