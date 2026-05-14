/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMARTTUBEPRODUTOS_FIELD_LABELS = {
	codigo_plataforma: "codigo_plataforma",
	finalidade_produto: "finalidade_produto",
	id: "id",
	id_device_limit: "id_device_limit",
	id_integracao: "id_integracao",
	id_produto: "id_produto",
} as const;

export const SMARTTUBEPRODUTOS_FINALIDADEPRODUTO_LABELS = {
	pct: "pct",
	adc: "adc",
	ind: "ind",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const smart_tube_produtosFinalidadeProdutoSchema = z.enum(
	["pct", "adc", "ind"],
	{
		error: () => ({
			message: "finalidade_produto: valores válidos são [pct, adc, ind]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SmartTubeProdutosFinalidadeProduto = z.infer<
	typeof smart_tube_produtosFinalidadeProdutoSchema
>;
