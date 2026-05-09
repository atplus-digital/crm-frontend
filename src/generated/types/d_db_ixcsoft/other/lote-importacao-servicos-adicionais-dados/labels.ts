/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEIMPORTACAOSERVICOSADICIONAISDADOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_importacao_servicos_adicionais_dadosRepetirSchema = z.enum(
	["V", "S"],
	{
		error: () => ({ message: "repetir: valores válidos são [V, S]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteImportacaoServicosAdicionaisDadosRepetir = z.infer<
	typeof lote_importacao_servicos_adicionais_dadosRepetirSchema
>;
