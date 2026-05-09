/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWVDCONTRATOSPRODUTOSGEN_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_vd_contratos_produtos_genTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, SVA, TV, SMP]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewVdContratosProdutosGenTipo = z.infer<
	typeof view_vd_contratos_produtos_genTipoSchema
>;
