/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usuarios_grupo_df_projetoAtivoSchema } from "./labels";

export const USUARIOS_GRUPO_DF_PROJETO_TABLE_NAME = "usuarios_grupo_df_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_grupo_df_projetoBaseSchema = z.object({
	id: z.number(),
	ativo: usuarios_grupo_df_projetoAtivoSchema,
	data_fim: z.string(),
	id_df_projeto: z.number(),
	id_grupo: z.number(),
	id_usuario: z.number(),
	id_usuario_fim: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_grupo_df_projetoSchema =
	usuarios_grupo_df_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_grupo_df_projetoCreateSchema =
	usuarios_grupo_df_projetoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_grupo_df_projetoUpdateSchema =
	usuarios_grupo_df_projetoCreateSchema.partial();
