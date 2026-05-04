/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OPCOESSTFC_PORTABILIDADE_LABELS = {
	SIM: "SIM",
	NAO: "NÃO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const opcoes_stfcPortabilidadeSchema = z.enum(["SIM", "NAO"], {
	error: () => ({ message: "portabilidade: valores válidos são [SIM, NÃO]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OpcoesStfcPortabilidade = z.infer<
	typeof opcoes_stfcPortabilidadeSchema
>;
