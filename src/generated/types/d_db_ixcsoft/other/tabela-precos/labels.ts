/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TABELAPRECOS_FIELD_LABELS = {
	ativo: "ativo",
	id: "id",
	id_ultimo_operador: "id_ultimo_operador",
	tabela: "tabela",
	ultima_alteracao: "ultima_alteracao",
} as const;

export const TABELAPRECOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tabela_precosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TabelaPrecosAtivo = z.infer<typeof tabela_precosAtivoSchema>;
