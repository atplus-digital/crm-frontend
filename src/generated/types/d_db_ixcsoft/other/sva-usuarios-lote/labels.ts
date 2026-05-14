/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SVAUSUARIOSLOTE_FIELD_LABELS = {
	criado_em: "criado_em",
	data_final_ativacao: "data_final_ativacao",
	data_inicial_ativacao: "data_inicial_ativacao",
	id: "id",
	id_filial: "id_filial",
	id_integracao: "id_integracao",
	id_produto: "id_produto",
	permitir_criacao_contrato_sva: "permitir_criacao_contrato_sva",
	status: "status",
	status_acesso: "status_acesso",
	status_contrato: "status_contrato",
	tipo_pessoa: "tipo_pessoa",
} as const;

export const SVAUSUARIOSLOTE_PERMITIRCRIACAOCONTRATOSVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SVAUSUARIOSLOTE_STATUS_LABELS = {
	FA: "FA",
	FI: "FI",
	A: "A",
} as const;

export const SVAUSUARIOSLOTE_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sva_usuarios_lotePermitirCriacaoContratoSvaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permitir_criacao_contrato_sva: valores válidos são [S, N]",
		}),
	},
);

export const sva_usuarios_loteStatusSchema = z.enum(["FA", "FI", "A"], {
	error: () => ({ message: "status: valores válidos são [FA, FI, A]" }),
});

export const sva_usuarios_loteTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SvaUsuariosLotePermitirCriacaoContratoSva = z.infer<
	typeof sva_usuarios_lotePermitirCriacaoContratoSvaSchema
>;

export type SvaUsuariosLoteStatus = z.infer<
	typeof sva_usuarios_loteStatusSchema
>;

export type SvaUsuariosLoteTipoPessoa = z.infer<
	typeof sva_usuarios_loteTipoPessoaSchema
>;
