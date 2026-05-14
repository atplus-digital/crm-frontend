/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFPARAMETRO_FIELD_LABELS = {
	equipe_frota: "equipe_frota",
	filtrar_filial: "filtrar_filial",
	id: "id",
	mostrar_caixa_inativa: "mostrar_caixa_inativa",
	mostrar_manutencao: "mostrar_manutencao",
	mostrar_onus: "mostrar_onus",
	mostrar_pops: "mostrar_pops",
	mostrar_pops_projetos: "mostrar_pops_projetos",
	nove_a_x_portas_disp: "nove_a_x_portas_disp",
	ordenacao_projetos: "ordenacao_projetos",
	quatro_a_oito_portas_disp: "quatro_a_oito_portas_disp",
	todas_portas_disp: "todas_portas_disp",
	um_a_tres_portas_disp: "um_a_tres_portas_disp",
	zero_portas_disp: "zero_portas_disp",
} as const;

export const DFPARAMETRO_EQUIPEFROTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_FILTRARFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_MOSTRARCAIXAINATIVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_MOSTRARMANUTENCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_MOSTRARONUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_MOSTRARPOPS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_MOSTRARPOPSPROJETOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPARAMETRO_ORDENACAOPROJETOS_LABELS = {
	id: "id",
	ra: "ra",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_parametroEquipeFrotaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "equipe_frota: valores válidos são [S, N]" }),
});

export const df_parametroFiltrarFilialSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtrar_filial: valores válidos são [S, N]" }),
});

export const df_parametroMostrarCaixaInativaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_caixa_inativa: valores válidos são [S, N]",
	}),
});

export const df_parametroMostrarManutencaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostrar_manutencao: valores válidos são [S, N]" }),
});

export const df_parametroMostrarOnusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostrar_onus: valores válidos são [S, N]" }),
});

export const df_parametroMostrarPopsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostrar_pops: valores válidos são [S, N]" }),
});

export const df_parametroMostrarPopsProjetosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_pops_projetos: valores válidos são [S, N]",
	}),
});

export const df_parametroOrdenacaoProjetosSchema = z.enum(["id", "ra"], {
	error: () => ({
		message: "ordenacao_projetos: valores válidos são [id, ra]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfParametroEquipeFrota = z.infer<
	typeof df_parametroEquipeFrotaSchema
>;

export type DfParametroFiltrarFilial = z.infer<
	typeof df_parametroFiltrarFilialSchema
>;

export type DfParametroMostrarCaixaInativa = z.infer<
	typeof df_parametroMostrarCaixaInativaSchema
>;

export type DfParametroMostrarManutencao = z.infer<
	typeof df_parametroMostrarManutencaoSchema
>;

export type DfParametroMostrarOnus = z.infer<
	typeof df_parametroMostrarOnusSchema
>;

export type DfParametroMostrarPops = z.infer<
	typeof df_parametroMostrarPopsSchema
>;

export type DfParametroMostrarPopsProjetos = z.infer<
	typeof df_parametroMostrarPopsProjetosSchema
>;

export type DfParametroOrdenacaoProjetos = z.infer<
	typeof df_parametroOrdenacaoProjetosSchema
>;
