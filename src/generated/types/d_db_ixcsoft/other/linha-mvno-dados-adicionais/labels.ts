/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNODADOSADICIONAIS_GERACOBRANCA_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvno_dados_adicionaisGeraCobrancaSchema = z.enum(
	["N", "S"],
	{
		error: () => ({ message: "gera_cobranca: valores válidos são [N, S]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoDadosAdicionaisGeraCobranca = z.infer<
	typeof linha_mvno_dados_adicionaisGeraCobrancaSchema
>;
