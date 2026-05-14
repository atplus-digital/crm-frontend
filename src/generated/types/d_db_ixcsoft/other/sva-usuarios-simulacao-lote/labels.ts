/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SVAUSUARIOSSIMULACAOLOTE_FIELD_LABELS = {
	cnpj_cpf: "cnpj_cpf",
	criado_em: "criado_em",
	email: "email",
	id: "id",
	id_contrato: "id_contrato",
	id_integracao: "id_integracao",
	id_produto: "id_produto",
	id_sva_usuario: "id_sva_usuario",
	id_sva_usuarios_lote: "id_sva_usuarios_lote",
	mensagens: "mensagens",
	status: "status",
} as const;

export const SVAUSUARIOSSIMULACAOLOTE_STATUS_LABELS = {
	A: "A",
	C: "C",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sva_usuarios_simulacao_loteStatusSchema = z.enum(["A", "C", "F"], {
	error: () => ({ message: "status: valores válidos são [A, C, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SvaUsuariosSimulacaoLoteStatus = z.infer<
	typeof sva_usuarios_simulacao_loteStatusSchema
>;
