/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RASTREADORESACESSOSAPI_FIELD_LABELS = {
	api_key: "api_key",
	fornecedor_api: "fornecedor_api",
	id: "id",
	senha: "senha",
	status: "status",
	tipo_autenticacao: "tipo_autenticacao",
	tipo_busca: "tipo_busca",
	token: "token",
	url_autenticacao: "url_autenticacao",
	url_busca_posicao: "url_busca_posicao",
	usuario: "usuario",
} as const;

export const RASTREADORESACESSOSAPI_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const RASTREADORESACESSOSAPI_TIPOAUTENTICACAO_LABELS = {
	T: "T",
	K: "K",
	U: "U",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rastreadores_acessos_apiStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const rastreadores_acessos_apiTipoAutenticacaoSchema = z.enum(
	["T", "K", "U"],
	{
		error: () => ({
			message: "tipo_autenticacao: valores válidos são [T, K, U]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RastreadoresAcessosApiStatus = z.infer<
	typeof rastreadores_acessos_apiStatusSchema
>;

export type RastreadoresAcessosApiTipoAutenticacao = z.infer<
	typeof rastreadores_acessos_apiTipoAutenticacaoSchema
>;
