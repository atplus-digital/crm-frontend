/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCPERMISSOES_BLOQUEARACESSOFORM_LABELS = {
	L: "L",
	B: "B",
} as const;

export const IXCPERMISSOES_BLOQUEARFORM_LABELS = {
	S: "S",
	N: "N",
	X: "X",
} as const;

export const IXCPERMISSOES_BOTOESFORMULARIO_LABELS = {
	H: "H",
	L: "L",
	E: "E",
} as const;

export const IXCPERMISSOES_BOTOESGRID_LABELS = {
	H: "H",
	L: "L",
	E: "E",
} as const;

export const IXCPERMISSOES_CAMPOSFORMULARIO_LABELS = {
	H: "H",
	L: "L",
	E: "E",
} as const;

export const IXCPERMISSOES_FILTRARFILIAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCPERMISSOES_MOSTRAOSSEMFUNCIONARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCPERMISSOES_TIPOBLOQUEIO_LABELS = {
	H: "H",
	R: "R",
} as const;

export const IXCPERMISSOES_TIPOPERMISSAO_LABELS = {
	B: "B",
	L: "L",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_permissoesBloquearAcessoFormSchema = z.enum(["L", "B"], {
	error: () => ({
		message: "bloquear_acesso_form: valores válidos são [L, B]",
	}),
});

export const ixc_permissoesBloquearFormSchema = z.enum(["S", "N", "X"], {
	error: () => ({ message: "bloquear_form: valores válidos são [S, N, X]" }),
});

export const ixc_permissoesBotoesFormularioSchema = z.enum(["H", "L", "E"], {
	error: () => ({
		message: "botoes_formulario: valores válidos são [H, L, E]",
	}),
});

export const ixc_permissoesBotoesGridSchema = z.enum(["H", "L", "E"], {
	error: () => ({ message: "botoes_grid: valores válidos são [H, L, E]" }),
});

export const ixc_permissoesCamposFormularioSchema = z.enum(["H", "L", "E"], {
	error: () => ({
		message: "campos_formulario: valores válidos são [H, L, E]",
	}),
});

export const ixc_permissoesFiltrarFiliaisSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtrar_filiais: valores válidos são [S, N]" }),
});

export const ixc_permissoesMostraOsSemFuncionarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostra_os_sem_funcionario: valores válidos são [S, N]",
	}),
});

export const ixc_permissoesTipoBloqueioSchema = z.enum(["H", "R"], {
	error: () => ({ message: "tipo_bloqueio: valores válidos são [H, R]" }),
});

export const ixc_permissoesTipoPermissaoSchema = z.enum(["B", "L"], {
	error: () => ({ message: "tipo_permissao: valores válidos são [B, L]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcPermissoesBloquearAcessoForm = z.infer<
	typeof ixc_permissoesBloquearAcessoFormSchema
>;

export type IxcPermissoesBloquearForm = z.infer<
	typeof ixc_permissoesBloquearFormSchema
>;

export type IxcPermissoesBotoesFormulario = z.infer<
	typeof ixc_permissoesBotoesFormularioSchema
>;

export type IxcPermissoesBotoesGrid = z.infer<
	typeof ixc_permissoesBotoesGridSchema
>;

export type IxcPermissoesCamposFormulario = z.infer<
	typeof ixc_permissoesCamposFormularioSchema
>;

export type IxcPermissoesFiltrarFiliais = z.infer<
	typeof ixc_permissoesFiltrarFiliaisSchema
>;

export type IxcPermissoesMostraOsSemFuncionario = z.infer<
	typeof ixc_permissoesMostraOsSemFuncionarioSchema
>;

export type IxcPermissoesTipoBloqueio = z.infer<
	typeof ixc_permissoesTipoBloqueioSchema
>;

export type IxcPermissoesTipoPermissao = z.infer<
	typeof ixc_permissoesTipoPermissaoSchema
>;
