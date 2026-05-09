/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELTRIBUTOSSAIDAFISCAIS_TIPODATAEMISSAO_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rel_tributos_saida_fiscaisTipoDataEmissaoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({ message: "tipo_data_emissao: valores válidos são [P, D]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelTributosSaidaFiscaisTipoDataEmissao = z.infer<
	typeof rel_tributos_saida_fiscaisTipoDataEmissaoSchema
>;
