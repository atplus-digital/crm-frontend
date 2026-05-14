/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGINBG_FIELD_LABELS = {
	checksum: "checksum",
	date: "date",
	html: "html",
	id: "id",
	nonce: "nonce",
	type: "type",
} as const;

export const LOGINBG_TYPE_LABELS = {
	Web: "Web",
	Mobile: "Mobile",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const login_bgTypeSchema = z.enum(["Web", "Mobile"], {
	error: () => ({ message: "type: valores válidos são [Web, Mobile]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoginBgType = z.infer<typeof login_bgTypeSchema>;
