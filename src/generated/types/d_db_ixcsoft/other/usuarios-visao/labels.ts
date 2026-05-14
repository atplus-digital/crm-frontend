/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSVISAO_FIELD_LABELS = {
	abre_listando: "abre_listando",
	compartilha_grupo: "compartilha_grupo",
	consulta_padrao: "consulta_padrao",
	id: "id",
	id_filial: "id_filial",
	id_grupo: "id_grupo",
	id_usuario: "id_usuario",
	json_visao: "json_visao",
	mostra_campos: "mostra_campos",
	nome_grid: "nome_grid",
	nome_visao: "nome_visao",
	ordena_consulta: "ordena_consulta",
} as const;

export const USUARIOSVISAO_ABRELISTANDO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSVISAO_COMPARTILHAGRUPO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSVISAO_CONSULTAPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_visaoAbreListandoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "abre_listando: valores válidos são [S, N]" }),
});

export const usuarios_visaoCompartilhaGrupoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "compartilha_grupo: valores válidos são [S, N]" }),
});

export const usuarios_visaoConsultaPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "consulta_padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosVisaoAbreListando = z.infer<
	typeof usuarios_visaoAbreListandoSchema
>;

export type UsuariosVisaoCompartilhaGrupo = z.infer<
	typeof usuarios_visaoCompartilhaGrupoSchema
>;

export type UsuariosVisaoConsultaPadrao = z.infer<
	typeof usuarios_visaoConsultaPadraoSchema
>;
