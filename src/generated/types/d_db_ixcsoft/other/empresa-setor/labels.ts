/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EMPRESASETOR_FIELD_LABELS = {
	ativo: "ativo",
	cor: "cor",
	empresa_setor_chatid_telegram: "empresa_setor_chatid_telegram",
	id: "id",
	id_chat: "id_chat",
	id_depto: "id_depto",
	recebe_telegram_setor: "recebe_telegram_setor",
	setor: "setor",
	token_bot_telegram_setor: "token_bot_telegram_setor",
} as const;

export const EMPRESASETOR_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const EMPRESASETOR_RECEBETELEGRAMSETOR_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const empresa_setorAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const empresa_setorRecebeTelegramSetorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "recebe_telegram_setor: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EmpresaSetorAtivo = z.infer<typeof empresa_setorAtivoSchema>;

export type EmpresaSetorRecebeTelegramSetor = z.infer<
	typeof empresa_setorRecebeTelegramSetorSchema
>;
