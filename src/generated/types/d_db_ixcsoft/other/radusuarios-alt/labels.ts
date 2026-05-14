/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADUSUARIOSALT_FIELD_LABELS = {
	ativo: "ativo",
	grupo_atual: "grupo_atual",
	grupo_novo: "grupo_novo",
	id: "id",
	id_alteracao: "id_alteracao",
	id_grupo_novo: "id_grupo_novo",
	id_login: "id_login",
	login: "login",
} as const;

export const RADUSUARIOSALT_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radusuarios_altAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadusuariosAltAtivo = z.infer<typeof radusuarios_altAtivoSchema>;
