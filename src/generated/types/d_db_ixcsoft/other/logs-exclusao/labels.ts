/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSEXCLUSAO_BANCO_LABELS = {
	ElasticSearch: "ElasticSearch",
	MariaDB: "MariaDB",
} as const;

export const LOGSEXCLUSAO_STATUS_LABELS = {
	sucesso: "sucesso",
	falha: "falha",
} as const;

export const LOGSEXCLUSAO_TABELA_LABELS = {
	radpop_radio_cliente_fibra_historico: "radpop_radio_cliente_fibra_historico",
	radacct: "radacct",
	logs_tarefas: "logs_tarefas",
	consumo: "consumo",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_exclusaoBancoSchema = z.enum(["ElasticSearch", "MariaDB"], {
	error: () => ({
		message: "banco: valores válidos são [ElasticSearch, MariaDB]",
	}),
});

export const logs_exclusaoStatusSchema = z.enum(["sucesso", "falha"], {
	error: () => ({ message: "status: valores válidos são [sucesso, falha]" }),
});

export const logs_exclusaoTabelaSchema = z.enum(
	[
		"radpop_radio_cliente_fibra_historico",
		"radacct",
		"logs_tarefas",
		"consumo",
	],
	{
		error: () => ({
			message:
				"tabela: valores válidos são [radpop_radio_cliente_fibra_historico, radacct, logs_tarefas, consumo]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsExclusaoBanco = z.infer<typeof logs_exclusaoBancoSchema>;

export type LogsExclusaoStatus = z.infer<typeof logs_exclusaoStatusSchema>;

export type LogsExclusaoTabela = z.infer<typeof logs_exclusaoTabelaSchema>;
