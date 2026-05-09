/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVIDORESEXTERNOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SERVIDORESEXTERNOS_TIPO_LABELS = {
	SSH: "SSH",
	MSG: "MSG",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const servidores_externosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const servidores_externosTipoSchema = z.enum(["SSH", "MSG"], {
	error: () => ({ message: "tipo: valores válidos são [SSH, MSG]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServidoresExternosAtivo = z.infer<
	typeof servidores_externosAtivoSchema
>;

export type ServidoresExternosTipo = z.infer<
	typeof servidores_externosTipoSchema
>;
