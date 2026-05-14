/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARLOTELOG_FIELD_LABELS = {
	id: "id",
	id_fn_apagar_lote: "id_fn_apagar_lote",
	mensagem: "mensagem",
	tipo: "tipo",
} as const;

export const FNAPAGARLOTELOG_TIPO_LABELS = {
	E: "E",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_lote_logTipoSchema = z.enum(["E", "A"], {
	error: () => ({ message: "tipo: valores válidos são [E, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarLoteLogTipo = z.infer<typeof fn_apagar_lote_logTipoSchema>;
