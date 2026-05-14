/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OEQUALIRUN_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_fk_negociacoes: "f_fk_negociacoes",
	f_id_externo: "ID Externo",
	f_link_externo: "Link Externo",
	f_negociacoes: "Negociações",
	f_procedimento: "Procedimento",
	f_status: "Status",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const OEQUALIRUN_PROCEDIMENTO_LABELS = {
	"17760523-1404-4ff9-b786-15a4b0d7a3e2": "Assinatura via GOV",
} as const;

export const OEQUALIRUN_STATUS_LABELS = {
	cancelado: "Cancelado",
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const oe_qualirunProcedimentoSchema = z.enum(
	["17760523-1404-4ff9-b786-15a4b0d7a3e2"],
	{
		error: () => ({
			message: "procedimento: valores válidos são [Assinatura via GOV]",
		}),
	},
);

export const oe_qualirunStatusSchema = z.enum(
	["cancelado", "novo", "pendente", "concluido"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Cancelado, Novo, Pendente, Concluído]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OeQualirunProcedimento = z.infer<
	typeof oe_qualirunProcedimentoSchema
>;

export type OeQualirunStatus = z.infer<typeof oe_qualirunStatusSchema>;
