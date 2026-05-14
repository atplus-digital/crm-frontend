/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAINTEGRACAO_FIELD_LABELS = {
	arquivo: "arquivo",
	create_time: "create_time",
	data_atualizacao_token: "data_atualizacao_token",
	data_sincronizacao: "data_sincronizacao",
	descricao: "descricao",
	host: "host",
	id: "id",
	id_filial: "id_filial",
	integracao: "integracao",
	key_api: "key_api",
	login: "login",
	operador: "operador",
	plataforma: "plataforma",
	porta: "porta",
	secret: "secret",
	senha: "senha",
	session_id: "session_id",
	tipo: "tipo",
	token: "token",
	update_time: "update_time",
} as const;

export const ASSINATURAINTEGRACAO_TIPO_LABELS = {
	SVA: "SVA",
	TV: "TV",
	MVNO: "MVNO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_integracaoTipoSchema = z.enum(["SVA", "TV", "MVNO"], {
	error: () => ({ message: "tipo: valores válidos são [SVA, TV, MVNO]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaIntegracaoTipo = z.infer<
	typeof assinatura_integracaoTipoSchema
>;
