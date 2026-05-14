/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUDIAGNOSTICO_FIELD_LABELS = {
	ativo: "ativo",
	descricao: "descricao",
	id: "id",
	id_diagnostico: "id_diagnostico",
	id_setor: "id_setor",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const SUDIAGNOSTICO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_diagnosticoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuDiagnosticoAtivo = z.infer<typeof su_diagnosticoAtivoSchema>;
