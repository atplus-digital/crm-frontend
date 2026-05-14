/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SALESLAYOUTSFORMS_FIELD_LABELS = {
	descricao: "descricao",
	id: "id",
	json: "json",
	tipo: "tipo",
	versao: "versao",
} as const;

export const SALESLAYOUTSFORMS_TIPO_LABELS = {
	lead: "lead",
	negociacao: "negociacao",
	cliente: "cliente",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sales_layouts_formsTipoSchema = z.enum(
	["lead", "negociacao", "cliente"],
	{
		error: () => ({
			message: "tipo: valores válidos são [lead, negociacao, cliente]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SalesLayoutsFormsTipo = z.infer<
	typeof sales_layouts_formsTipoSchema
>;
