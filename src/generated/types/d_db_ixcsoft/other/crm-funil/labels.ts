/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMFUNIL_FIELD_LABELS = {
	cor_mapa: "cor_mapa",
	funil: "funil",
	id: "id",
	tipo: "tipo",
} as const;

export const CRMFUNIL_TIPO_LABELS = {
	negociacao: "negociacao",
	lead: "lead",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_funilTipoSchema = z.enum(["negociacao", "lead"], {
	error: () => ({ message: "tipo: valores válidos são [negociacao, lead]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmFunilTipo = z.infer<typeof crm_funilTipoSchema>;
