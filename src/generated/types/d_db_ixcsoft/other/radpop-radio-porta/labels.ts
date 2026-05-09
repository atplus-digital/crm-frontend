/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOPORTA_CONEXAO_LABELS = {
	58: "58",
	24: "24",
	C: "C",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_portaConexaoSchema = z.enum(["58", "24", "C", "F"], {
	error: () => ({ message: "conexao: valores válidos são [58, 24, C, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioPortaConexao = z.infer<
	typeof radpop_radio_portaConexaoSchema
>;
