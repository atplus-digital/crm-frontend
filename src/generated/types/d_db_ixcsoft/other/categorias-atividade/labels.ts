/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CATEGORIASATIVIDADE_PRIORIDADE_LABELS = {
	alta: "alta",
	media: "media",
	baixa: "baixa",
} as const;

export const CATEGORIASATIVIDADE_STATUS_LABELS = {
	ativo: "ativo",
	inativo: "inativo",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const categorias_atividadePrioridadeSchema = z.enum(
	["alta", "media", "baixa"],
	{
		error: () => ({
			message: "prioridade: valores válidos são [alta, media, baixa]",
		}),
	},
);

export const categorias_atividadeStatusSchema = z.enum(["ativo", "inativo"], {
	error: () => ({ message: "status: valores válidos são [ativo, inativo]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CategoriasAtividadePrioridade = z.infer<
	typeof categorias_atividadePrioridadeSchema
>;

export type CategoriasAtividadeStatus = z.infer<
	typeof categorias_atividadeStatusSchema
>;
