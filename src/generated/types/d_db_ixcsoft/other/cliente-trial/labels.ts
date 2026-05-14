/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTETRIAL_FIELD_LABELS = {
	bairro: "bairro",
	cep: "cep",
	cidade: "cidade",
	cnpj_cpf: "cnpj_cpf",
	complemento: "complemento",
	email: "email",
	endereco: "endereco",
	fantasia: "fantasia",
	fone: "fone",
	id: "id",
	ie_identidade: "ie_identidade",
	numero: "numero",
	ramal: "ramal",
	razao: "razao",
	referencia: "referencia",
	senha: "senha",
	status: "status",
	telefone_celular: "telefone_celular",
	telefone_comercial: "telefone_comercial",
	tipo_pessoa: "tipo_pessoa",
	uf: "uf",
} as const;

export const CLIENTETRIAL_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_trialTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteTrialTipoPessoa = z.infer<
	typeof cliente_trialTipoPessoaSchema
>;
