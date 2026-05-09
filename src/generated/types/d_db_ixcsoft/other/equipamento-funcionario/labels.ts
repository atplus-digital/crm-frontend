/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EQUIPAMENTOFUNCIONARIO_STATUS_LABELS = {
	E: "E",
	D: "D",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const equipamento_funcionarioStatusSchema = z.enum(["E", "D", "O"], {
	error: () => ({ message: "status: valores válidos são [E, D, O]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EquipamentoFuncionarioStatus = z.infer<
	typeof equipamento_funcionarioStatusSchema
>;
