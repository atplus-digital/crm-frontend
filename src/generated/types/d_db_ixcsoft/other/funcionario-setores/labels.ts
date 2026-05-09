/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FUNCIONARIOSETORES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOSETORES_LISTARAGENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const funcionario_setoresAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const funcionario_setoresListarAgendaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "listar_agenda: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FuncionarioSetoresAtivo = z.infer<
	typeof funcionario_setoresAtivoSchema
>;

export type FuncionarioSetoresListarAgenda = z.infer<
	typeof funcionario_setoresListarAgendaSchema
>;
