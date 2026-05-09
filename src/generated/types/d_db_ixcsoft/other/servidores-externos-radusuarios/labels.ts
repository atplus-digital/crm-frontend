/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVIDORESEXTERNOSRADUSUARIOS_SESSAOATUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const servidores_externos_radusuariosSessaoAtualSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "sessao_atual: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServidoresExternosRadusuariosSessaoAtual = z.infer<
	typeof servidores_externos_radusuariosSessaoAtualSchema
>;
