/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSGRUPOPERMISSOESFIBERDOCS_FIELD_LABELS = {
	acesso_exclusivo_fiberdocs: "acesso_exclusivo_fiberdocs",
	configuracao_elemento: "configuracao_elemento",
	configuracao_sistema: "configuracao_sistema",
	correcao_elementos: "correcao_elementos",
	editor_fusao: "editor_fusao",
	elemento_cabo: "elemento_cabo",
	elemento_caixa_atendimento: "elemento_caixa_atendimento",
	elemento_caixa_emenda: "elemento_caixa_emenda",
	elemento_caixa_subterranea: "elemento_caixa_subterranea",
	elemento_login: "elemento_login",
	elemento_onu: "elemento_onu",
	elemento_pop: "elemento_pop",
	elemento_poste: "elemento_poste",
	elemento_predio: "elemento_predio",
	elemento_regiao_cobertura: "elemento_regiao_cobertura",
	exportar_elemenetos: "exportar_elemenetos",
	id: "id",
	id_grupo: "id_grupo",
	importar_elementos: "importar_elementos",
	mapa_conexao: "mapa_conexao",
	mesclar_projetos: "mesclar_projetos",
	modo_desenho: "modo_desenho",
	modo_edicao: "modo_edicao",
	permitir_acesso_todos_projetos: "permitir_acesso_todos_projetos",
	permitir_criar_projeto: "permitir_criar_projeto",
	projeto_execucao: "projeto_execucao",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ACESSOEXCLUSIVOFIBERDOCS_LABELS =
	{
		S: "S",
		N: "N",
	} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_CONFIGURACAOELEMENTO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_CONFIGURACAOSISTEMA_LABELS = {
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_CORRECAOELEMENTOS_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_EDITORFUSAO_LABELS = {
	E: "E",
	V: "V",
	all: "all",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOCABO_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOCAIXAATENDIMENTO_LABELS =
	{
		V: "V",
		all: "all",
		E: "E",
	} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOCAIXAEMENDA_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOCAIXASUBTERRANEA_LABELS =
	{
		V: "V",
		all: "all",
		E: "E",
	} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOLOGIN_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOONU_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOPOP_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOPOSTE_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOPREDIO_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_ELEMENTOREGIAOCOBERTURA_LABELS = {
	V: "V",
	all: "all",
	E: "E",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_EXPORTARELEMENETOS_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_IMPORTARELEMENTOS_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_MAPACONEXAO_LABELS = {
	E: "E",
	V: "V",
	all: "all",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_MESCLARPROJETOS_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_MODODESENHO_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_MODOEDICAO_LABELS = {
	E: "E",
	M: "M",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_PERMITIRACESSOTODOSPROJETOS_LABELS =
	{
		S: "S",
		N: "N",
	} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_PERMITIRCRIARPROJETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPOPERMISSOESFIBERDOCS_PROJETOEXECUCAO_LABELS = {
	E: "E",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_grupo_permissoes_fiberdocsAcessoExclusivoFiberdocsSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "acesso_exclusivo_fiberdocs: valores válidos são [S, N]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsConfiguracaoElementoSchema =
	z.enum(["M", "E"], {
		error: () => ({
			message: "configuracao_elemento: valores válidos são [M, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsConfiguracaoSistemaSchema =
	z.enum(["M", "E"], {
		error: () => ({
			message: "configuracao_sistema: valores válidos são [M, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsCorrecaoElementosSchema =
	z.enum(["E", "M"], {
		error: () => ({
			message: "correcao_elementos: valores válidos são [E, M]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsEditorFusaoSchema = z.enum(
	["E", "V", "all"],
	{
		error: () => ({ message: "editor_fusao: valores válidos são [E, V, all]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoCaboSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({
			message: "elemento_cabo: valores válidos são [V, all, E]",
		}),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoCaixaAtendimentoSchema =
	z.enum(["V", "all", "E"], {
		error: () => ({
			message: "elemento_caixa_atendimento: valores válidos são [V, all, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsElementoCaixaEmendaSchema =
	z.enum(["V", "all", "E"], {
		error: () => ({
			message: "elemento_caixa_emenda: valores válidos são [V, all, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsElementoCaixaSubterraneaSchema =
	z.enum(["V", "all", "E"], {
		error: () => ({
			message: "elemento_caixa_subterranea: valores válidos são [V, all, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsElementoLoginSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({
			message: "elemento_login: valores válidos são [V, all, E]",
		}),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoOnuSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({ message: "elemento_onu: valores válidos são [V, all, E]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoPopSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({ message: "elemento_pop: valores válidos são [V, all, E]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoPosteSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({
			message: "elemento_poste: valores válidos são [V, all, E]",
		}),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoPredioSchema = z.enum(
	["V", "all", "E"],
	{
		error: () => ({
			message: "elemento_predio: valores válidos são [V, all, E]",
		}),
	},
);

export const usuarios_grupo_permissoes_fiberdocsElementoRegiaoCoberturaSchema =
	z.enum(["V", "all", "E"], {
		error: () => ({
			message: "elemento_regiao_cobertura: valores válidos são [V, all, E]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsExportarElemenetosSchema =
	z.enum(["E", "M"], {
		error: () => ({
			message: "exportar_elemenetos: valores válidos são [E, M]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsImportarElementosSchema =
	z.enum(["E", "M"], {
		error: () => ({
			message: "importar_elementos: valores válidos são [E, M]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsMapaConexaoSchema = z.enum(
	["E", "V", "all"],
	{
		error: () => ({ message: "mapa_conexao: valores válidos são [E, V, all]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsMesclarProjetosSchema = z.enum(
	["E", "M"],
	{
		error: () => ({ message: "mesclar_projetos: valores válidos são [E, M]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsModoDesenhoSchema = z.enum(
	["E", "M"],
	{
		error: () => ({ message: "modo_desenho: valores válidos são [E, M]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsModoEdicaoSchema = z.enum(
	["E", "M"],
	{
		error: () => ({ message: "modo_edicao: valores válidos são [E, M]" }),
	},
);

export const usuarios_grupo_permissoes_fiberdocsPermitirAcessoTodosProjetosSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "permitir_acesso_todos_projetos: valores válidos são [S, N]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsPermitirCriarProjetoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "permitir_criar_projeto: valores válidos são [S, N]",
		}),
	});

export const usuarios_grupo_permissoes_fiberdocsProjetoExecucaoSchema = z.enum(
	["E", "M"],
	{
		error: () => ({ message: "projeto_execucao: valores válidos são [E, M]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosGrupoPermissoesFiberdocsAcessoExclusivoFiberdocs = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsAcessoExclusivoFiberdocsSchema
>;

export type UsuariosGrupoPermissoesFiberdocsConfiguracaoElemento = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsConfiguracaoElementoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsConfiguracaoSistema = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsConfiguracaoSistemaSchema
>;

export type UsuariosGrupoPermissoesFiberdocsCorrecaoElementos = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsCorrecaoElementosSchema
>;

export type UsuariosGrupoPermissoesFiberdocsEditorFusao = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsEditorFusaoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoCabo = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoCaboSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoCaixaAtendimento = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoCaixaAtendimentoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoCaixaEmenda = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoCaixaEmendaSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoCaixaSubterranea = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoCaixaSubterraneaSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoLogin = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoLoginSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoOnu = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoOnuSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoPop = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoPopSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoPoste = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoPosteSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoPredio = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoPredioSchema
>;

export type UsuariosGrupoPermissoesFiberdocsElementoRegiaoCobertura = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsElementoRegiaoCoberturaSchema
>;

export type UsuariosGrupoPermissoesFiberdocsExportarElemenetos = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsExportarElemenetosSchema
>;

export type UsuariosGrupoPermissoesFiberdocsImportarElementos = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsImportarElementosSchema
>;

export type UsuariosGrupoPermissoesFiberdocsMapaConexao = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsMapaConexaoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsMesclarProjetos = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsMesclarProjetosSchema
>;

export type UsuariosGrupoPermissoesFiberdocsModoDesenho = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsModoDesenhoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsModoEdicao = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsModoEdicaoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsPermitirAcessoTodosProjetos =
	z.infer<
		typeof usuarios_grupo_permissoes_fiberdocsPermitirAcessoTodosProjetosSchema
	>;

export type UsuariosGrupoPermissoesFiberdocsPermitirCriarProjeto = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsPermitirCriarProjetoSchema
>;

export type UsuariosGrupoPermissoesFiberdocsProjetoExecucao = z.infer<
	typeof usuarios_grupo_permissoes_fiberdocsProjetoExecucaoSchema
>;
