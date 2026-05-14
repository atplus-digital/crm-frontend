/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCOBRANCAHISTORICO_FIELD_LABELS = {
	acao: "acao",
	data_hora: "data_hora",
	descricao: "descricao",
	etapa_concluida: "etapa_concluida",
	id: "id",
	id_crm_cobranca: "id_crm_cobranca",
	id_operador: "id_operador",
	retorno_comunicacao: "retorno_comunicacao",
	tipo_contato: "tipo_contato",
	tipo_execucao: "tipo_execucao",
} as const;

export const CRMCOBRANCAHISTORICO_ETAPACONCLUIDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAHISTORICO_TIPOEXECUCAO_LABELS = {
	A: "A",
	M: "M",
	L: "L",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_cobranca_historicoEtapaConcluidaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "etapa_concluida: valores válidos são [S, N]" }),
});

export const crm_cobranca_historicoTipoExecucaoSchema = z.enum(
	["A", "M", "L"],
	{
		error: () => ({ message: "tipo_execucao: valores válidos são [A, M, L]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmCobrancaHistoricoEtapaConcluida = z.infer<
	typeof crm_cobranca_historicoEtapaConcluidaSchema
>;

export type CrmCobrancaHistoricoTipoExecucao = z.infer<
	typeof crm_cobranca_historicoTipoExecucaoSchema
>;
