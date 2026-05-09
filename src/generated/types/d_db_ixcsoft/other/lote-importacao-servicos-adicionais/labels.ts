/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEIMPORTACAOSERVICOSADICIONAIS_OCULTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const LOTEIMPORTACAOSERVICOSADICIONAIS_STATUS_LABELS = {
	A: "A",
	I: "I",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_importacao_servicos_adicionaisOcultoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "oculto: valores válidos são [S, N]" }),
	},
);

export const lote_importacao_servicos_adicionaisStatusSchema = z.enum(
	["A", "I", "N"],
	{
		error: () => ({ message: "status: valores válidos são [A, I, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteImportacaoServicosAdicionaisOculto = z.infer<
	typeof lote_importacao_servicos_adicionaisOcultoSchema
>;

export type LoteImportacaoServicosAdicionaisStatus = z.infer<
	typeof lote_importacao_servicos_adicionaisStatusSchema
>;
