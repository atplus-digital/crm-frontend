/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REQUISICAOMATERIALITEM_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const requisicao_material_itemStatusSchema = z.enum(
	["A", "P", "F", "C"],
	{
		error: () => ({ message: "status: valores válidos são [A, P, F, C]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RequisicaoMaterialItemStatus = z.infer<
	typeof requisicao_material_itemStatusSchema
>;
