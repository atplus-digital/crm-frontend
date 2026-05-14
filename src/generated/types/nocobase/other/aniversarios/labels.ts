/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ANIVERSARIOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_data_execucao: "Data de Execução",
	f_dia_mes: "Dia e Mês",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_foto_aniversario: "Foto Aniversário",
	f_funcionarios: "Funcionários",
	f_status: "Status",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const ANIVERSARIOS_STATUS_LABELS = {
	novo: "Novo",
	"em-processo": "Em processo",
	concluido: "Concluído",
	erro: "Erro",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const aniversariosStatusSchema = z.enum(
	["novo", "em-processo", "concluido", "erro"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Novo, Em processo, Concluído, Erro]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AniversariosStatus = z.infer<typeof aniversariosStatusSchema>;
