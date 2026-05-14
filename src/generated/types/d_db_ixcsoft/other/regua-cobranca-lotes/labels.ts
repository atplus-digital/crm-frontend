/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCALOTES_FIELD_LABELS = {
	cobrancas_enviadas: "cobrancas_enviadas",
	comunicacao_falhas: "comunicacao_falhas",
	data_envio: "data_envio",
	falhas: "falhas",
	id: "id",
	situacao: "situacao",
	total_cobrancas: "total_cobrancas",
	valor_total: "valor_total",
} as const;

export const REGUACOBRANCALOTES_SITUACAO_LABELS = {
	A: "A",
	F: "F",
	V: "V",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_lotesSituacaoSchema = z.enum(["A", "F", "V"], {
	error: () => ({ message: "situacao: valores válidos são [A, F, V]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaLotesSituacao = z.infer<
	typeof regua_cobranca_lotesSituacaoSchema
>;
