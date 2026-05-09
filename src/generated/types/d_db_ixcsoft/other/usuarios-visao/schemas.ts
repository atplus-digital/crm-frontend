/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuarios_visaoAbreListandoSchema,
	usuarios_visaoCompartilhaGrupoSchema,
	usuarios_visaoConsultaPadraoSchema,
} from "./labels";

export const USUARIOS_VISAO_TABLE_NAME = "usuarios_visao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_visaoBaseSchema = z.object({
	id: z.number(),
	abre_listando: usuarios_visaoAbreListandoSchema,
	compartilha_grupo: usuarios_visaoCompartilhaGrupoSchema,
	consulta_padrao: usuarios_visaoConsultaPadraoSchema,
	id_filial: z.number(),
	id_grupo: z.number(),
	id_usuario: z.number(),
	json_visao: z.string(),
	mostra_campos: z.string(),
	nome_grid: z.string(),
	nome_visao: z.string(),
	ordena_consulta: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_visaoSchema = usuarios_visaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_visaoCreateSchema = usuarios_visaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_visaoUpdateSchema = usuarios_visaoCreateSchema.partial();
