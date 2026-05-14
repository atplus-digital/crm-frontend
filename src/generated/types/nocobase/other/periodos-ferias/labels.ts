/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PERIODOSFERIAS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_dias_direito: "Dias de Direito",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_funcionarios: "Funcionários",
	f_lancamentos_ferias: "Lançamentos de Férias",
	f_periodo_aquisitivo_fim: "Período Aquisitivo Fim",
	f_periodo_aquisitivo_inicio: "Período Aquisitivo Início",
	f_periodo_concessivo_fim: "Período Concessivo Fim",
	f_periodo_concessivo_inicio: "Período Concessivo Início",
	f_status_periodo: "Status do Período",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const PERIODOSFERIAS_STATUSPERIODO_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	"em-andamento": "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const periodos_feriasStatusPeriodoSchema = z.enum(
	["cancelada", "planejada", "em-andamento", "aprovada", "concluida"],
	{
		error: () => ({
			message:
				"status_periodo: valores válidos são [Cancelada, Planejada, Em andamento, Aprovada, Concluída]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PeriodosFeriasStatusPeriodo = z.infer<
	typeof periodos_feriasStatusPeriodoSchema
>;
