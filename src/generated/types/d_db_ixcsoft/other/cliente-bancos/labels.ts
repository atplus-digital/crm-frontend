/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTEBANCOS_TIPOCONTA_LABELS = {
	C: "C",
	P: "P",
} as const;

export const CLIENTEBANCOS_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_bancosTipoContaSchema = z.enum(["C", "P"], {
	error: () => ({ message: "tipo_conta: valores válidos são [C, P]" }),
});

export const cliente_bancosTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteBancosTipoConta = z.infer<
	typeof cliente_bancosTipoContaSchema
>;

export type ClienteBancosTipoPessoa = z.infer<
	typeof cliente_bancosTipoPessoaSchema
>;
