/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CARTOESFIXADOSKANBAN_FIELD_LABELS = {
	criado_em: "criado_em",
	id: "id",
	id_cartao: "id_cartao",
	id_usuario: "id_usuario",
	tipo_cartao: "tipo_cartao",
} as const;

export const CARTOESFIXADOSKANBAN_TIPOCARTAO_LABELS = {
	lead: "lead",
	negociacao: "negociacao",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cartoes_fixados_kanbanTipoCartaoSchema = z.enum(
	["lead", "negociacao"],
	{
		error: () => ({
			message: "tipo_cartao: valores válidos são [lead, negociacao]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CartoesFixadosKanbanTipoCartao = z.infer<
	typeof cartoes_fixados_kanbanTipoCartaoSchema
>;
