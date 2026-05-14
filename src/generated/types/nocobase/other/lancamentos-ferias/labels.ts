/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LANCAMENTOSFERIAS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_data_retorno: "Data de Retorno",
	f_data_saida: "Data de Saída",
	f_dias_gozados: "Dias Gozados",
	f_dias_vendidos: "Dias Vendidos",
	f_fk_periodos_ferias: "f_fk_periodos_ferias",
	f_observacoes: "Observações",
	f_periodos_ferias: "Períodos de Férias",
	f_status: "Status",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const LANCAMENTOSFERIAS_STATUS_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	"em-andamento": "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lancamentos_feriasStatusSchema = z.enum(
	["cancelada", "planejada", "em-andamento", "aprovada", "concluida"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Cancelada, Planejada, Em andamento, Aprovada, Concluída]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LancamentosFeriasStatus = z.infer<
	typeof lancamentos_feriasStatusSchema
>;
