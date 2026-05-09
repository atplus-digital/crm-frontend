/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DESCONTOSBLOQUEIO_STATUS_LABELS = {
	B: "B",
	A: "A",
	R: "R",
	E: "E",
	I: "I",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const descontos_bloqueioStatusSchema = z.enum(
	["B", "A", "R", "E", "I", "N"],
	{
		error: () => ({
			message: "status: valores válidos são [B, A, R, E, I, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DescontosBloqueioStatus = z.infer<
	typeof descontos_bloqueioStatusSchema
>;
