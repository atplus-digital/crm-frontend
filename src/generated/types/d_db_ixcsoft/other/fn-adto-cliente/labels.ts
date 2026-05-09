/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNADTOCLIENTE_STATUS_LABELS = {
	A: "A",
	B: "B",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_adto_clienteStatusSchema = z.enum(["A", "B", "P"], {
	error: () => ({ message: "status: valores válidos são [A, B, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAdtoClienteStatus = z.infer<typeof fn_adto_clienteStatusSchema>;
