/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RAMAISCALLCENTER_RINGINUSE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ramais_callcenterRinginuseSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "ringinuse: valores válidos são [yes, no]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RamaisCallcenterRinginuse = z.infer<
	typeof ramais_callcenterRinginuseSchema
>;
