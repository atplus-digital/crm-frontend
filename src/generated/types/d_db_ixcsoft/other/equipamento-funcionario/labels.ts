/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EQUIPAMENTOFUNCIONARIO_FIELD_LABELS = {
	data_descarte: "data_descarte",
	data_devolucao: "data_devolucao",
	data_emprestimo: "data_emprestimo",
	id: "id",
	id_funcionario: "id_funcionario",
	id_movimento_produtos_devolveu: "id_movimento_produtos_devolveu",
	id_movimento_produtos_emprestou: "id_movimento_produtos_emprestou",
	id_patrimonio: "id_patrimonio",
	id_produto: "id_produto",
	id_usuario_emprestou: "id_usuario_emprestou",
	impresso_devolucao: "impresso_devolucao",
	impresso_emprestimo: "impresso_emprestimo",
	observacao: "observacao",
	qtde_saida: "qtde_saida",
	status: "status",
} as const;

export const EQUIPAMENTOFUNCIONARIO_STATUS_LABELS = {
	E: "E",
	D: "D",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const equipamento_funcionarioStatusSchema = z.enum(["E", "D", "O"], {
	error: () => ({ message: "status: valores válidos são [E, D, O]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EquipamentoFuncionarioStatus = z.infer<
	typeof equipamento_funcionarioStatusSchema
>;
