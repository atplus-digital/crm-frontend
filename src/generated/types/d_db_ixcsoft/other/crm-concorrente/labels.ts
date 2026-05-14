/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCONCORRENTE_FIELD_LABELS = {
	ativo: "ativo",
	cor_mapa: "cor_mapa",
	descricao: "descricao",
	id: "id",
	nome: "nome",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const CRMCONCORRENTE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_concorrenteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmConcorrenteAtivo = z.infer<typeof crm_concorrenteAtivoSchema>;
