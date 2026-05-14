/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRJPROJETO_FIELD_LABELS = {
	chave: "chave",
	custo_operacional_medio_funcionario: "custo_operacional_medio_funcionario",
	custo_previsto: "custo_previsto",
	custo_realizado: "custo_realizado",
	data_fim: "data_fim",
	data_hora_cadastro: "data_hora_cadastro",
	data_inicio: "data_inicio",
	descricao: "descricao",
	horas_previstas: "horas_previstas",
	horas_trabalhadas: "horas_trabalhadas",
	id: "id",
	nome: "nome",
	status: "status",
} as const;

export const PRJPROJETO_STATUS_LABELS = {
	A: "A",
	P: "P",
	PA: "PA",
	F: "F",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const prj_projetoStatusSchema = z.enum(["A", "P", "PA", "F", "D"], {
	error: () => ({ message: "status: valores válidos são [A, P, PA, F, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PrjProjetoStatus = z.infer<typeof prj_projetoStatusSchema>;
