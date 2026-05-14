/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSGRUPODFPROJETO_FIELD_LABELS = {
	ativo: "ativo",
	data_fim: "data_fim",
	id: "id",
	id_df_projeto: "id_df_projeto",
	id_grupo: "id_grupo",
	id_usuario: "id_usuario",
	id_usuario_fim: "id_usuario_fim",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const USUARIOSGRUPODFPROJETO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_grupo_df_projetoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosGrupoDfProjetoAtivo = z.infer<
	typeof usuarios_grupo_df_projetoAtivoSchema
>;
