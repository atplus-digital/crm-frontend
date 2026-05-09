/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARAUDITORIA_STATUS_LABELS = {
	A: "A",
	R: "R",
	V: "V",
	C: "C",
} as const;

export const FNAPAGARAUDITORIA_TIPO_LABELS = {
	I: "I",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_auditoriaStatusSchema = z.enum(["A", "R", "V", "C"], {
	error: () => ({ message: "status: valores válidos são [A, R, V, C]" }),
});

export const fn_apagar_auditoriaTipoSchema = z.enum(["I", "E"], {
	error: () => ({ message: "tipo: valores válidos são [I, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarAuditoriaStatus = z.infer<
	typeof fn_apagar_auditoriaStatusSchema
>;

export type FnApagarAuditoriaTipo = z.infer<
	typeof fn_apagar_auditoriaTipoSchema
>;
