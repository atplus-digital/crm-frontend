/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FUNCIONARIOMOTIVOHORARIO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOMOTIVOHORARIO_TIPO_LABELS = {
	N: "N",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const funcionario_motivo_horarioAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const funcionario_motivo_horarioTipoSchema = z.enum(["N", "C"], {
	error: () => ({ message: "tipo: valores válidos são [N, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FuncionarioMotivoHorarioAtivo = z.infer<
	typeof funcionario_motivo_horarioAtivoSchema
>;

export type FuncionarioMotivoHorarioTipo = z.infer<
	typeof funcionario_motivo_horarioTipoSchema
>;
