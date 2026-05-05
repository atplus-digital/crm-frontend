/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS = {
	0: "NÃO",
	1: "SIM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const opcoes_stfc_templatePortabilidadeSchema = z.enum(["0", "1"], {
	error: () => ({ message: "portabilidade: valores válidos são [NÃO, SIM]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OpcoesStfcTemplatePortabilidade = z.infer<
	typeof opcoes_stfc_templatePortabilidadeSchema
>;
