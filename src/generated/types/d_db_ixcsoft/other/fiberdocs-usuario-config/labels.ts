/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FIBERDOCSUSUARIOCONFIG_FIELD_LABELS = {
	descricao_caixa_emenda: "descricao_caixa_emenda",
	direcao_cabo: "direcao_cabo",
	direcao_caixa_atendimento: "direcao_caixa_atendimento",
	exibir_notificacao_elementos_quebrados:
		"exibir_notificacao_elementos_quebrados",
	exibir_notificacao_logins_sem_projeto:
		"exibir_notificacao_logins_sem_projeto",
	exibir_notificacao_onus_sem_projeto: "exibir_notificacao_onus_sem_projeto",
	ferramenta_agrupamento: "ferramenta_agrupamento",
	ferramenta_ima: "ferramenta_ima",
	id: "id",
	json_dicas: "json_dicas",
	json_novidades: "json_novidades",
	json_novidades_contextuais: "json_novidades_contextuais",
	json_tutoriais: "json_tutoriais",
	logins_sem_projeto: "logins_sem_projeto",
	menu_inicial: "menu_inicial",
	overlay_exibicao: "overlay_exibicao",
	projetos_fixados: "projetos_fixados",
	renderizacao_de_elementos: "renderizacao_de_elementos",
	tempo_atualizacao_logins: "tempo_atualizacao_logins",
	ultima_melhoria_vista: "ultima_melhoria_vista",
	user_id: "user_id",
	versao_update_estilos_padrao: "versao_update_estilos_padrao",
} as const;

export const FIBERDOCSUSUARIOCONFIG_DESCRICAOCAIXAEMENDA_LABELS = {
	M: "M",
	E: "E",
} as const;

export const FIBERDOCSUSUARIOCONFIG_DIRECAOCABO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const FIBERDOCSUSUARIOCONFIG_DIRECAOCAIXAATENDIMENTO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const FIBERDOCSUSUARIOCONFIG_EXIBIRNOTIFICACAOELEMENTOSQUEBRADOS_LABELS =
	{
		S: "S",
		N: "N",
	} as const;

export const FIBERDOCSUSUARIOCONFIG_EXIBIRNOTIFICACAOLOGINSSEMPROJETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FIBERDOCSUSUARIOCONFIG_EXIBIRNOTIFICACAOONUSSEMPROJETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FIBERDOCSUSUARIOCONFIG_FERRAMENTAAGRUPAMENTO_LABELS = {
	E: "E",
	D: "D",
} as const;

export const FIBERDOCSUSUARIOCONFIG_FERRAMENTAIMA_LABELS = {
	E: "E",
	D: "D",
} as const;

export const FIBERDOCSUSUARIOCONFIG_LOGINSSEMPROJETO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const FIBERDOCSUSUARIOCONFIG_MENUINICIAL_LABELS = {
	P: "P",
	F: "F",
	T: "T",
} as const;

export const FIBERDOCSUSUARIOCONFIG_OVERLAYEXIBICAO_LABELS = {
	H: "H",
	C: "C",
} as const;

export const FIBERDOCSUSUARIOCONFIG_RENDERIZACAODEELEMENTOS_LABELS = {
	A: "A",
	W: "W",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fiberdocs_usuario_configDescricaoCaixaEmendaSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "descricao_caixa_emenda: valores válidos são [M, E]",
		}),
	},
);

export const fiberdocs_usuario_configDirecaoCaboSchema = z.enum(["M", "E"], {
	error: () => ({ message: "direcao_cabo: valores válidos são [M, E]" }),
});

export const fiberdocs_usuario_configDirecaoCaixaAtendimentoSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "direcao_caixa_atendimento: valores válidos são [M, E]",
		}),
	},
);

export const fiberdocs_usuario_configExibirNotificacaoElementosQuebradosSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"exibir_notificacao_elementos_quebrados: valores válidos são [S, N]",
		}),
	});

export const fiberdocs_usuario_configExibirNotificacaoLoginsSemProjetoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"exibir_notificacao_logins_sem_projeto: valores válidos são [S, N]",
		}),
	});

export const fiberdocs_usuario_configExibirNotificacaoOnusSemProjetoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"exibir_notificacao_onus_sem_projeto: valores válidos são [S, N]",
		}),
	});

export const fiberdocs_usuario_configFerramentaAgrupamentoSchema = z.enum(
	["E", "D"],
	{
		error: () => ({
			message: "ferramenta_agrupamento: valores válidos são [E, D]",
		}),
	},
);

export const fiberdocs_usuario_configFerramentaImaSchema = z.enum(["E", "D"], {
	error: () => ({ message: "ferramenta_ima: valores válidos são [E, D]" }),
});

export const fiberdocs_usuario_configLoginsSemProjetoSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "logins_sem_projeto: valores válidos são [M, E]",
		}),
	},
);

export const fiberdocs_usuario_configMenuInicialSchema = z.enum(
	["P", "F", "T"],
	{
		error: () => ({ message: "menu_inicial: valores válidos são [P, F, T]" }),
	},
);

export const fiberdocs_usuario_configOverlayExibicaoSchema = z.enum(
	["H", "C"],
	{
		error: () => ({ message: "overlay_exibicao: valores válidos são [H, C]" }),
	},
);

export const fiberdocs_usuario_configRenderizacaoDeElementosSchema = z.enum(
	["A", "W", "B"],
	{
		error: () => ({
			message: "renderizacao_de_elementos: valores válidos são [A, W, B]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FiberdocsUsuarioConfigDescricaoCaixaEmenda = z.infer<
	typeof fiberdocs_usuario_configDescricaoCaixaEmendaSchema
>;

export type FiberdocsUsuarioConfigDirecaoCabo = z.infer<
	typeof fiberdocs_usuario_configDirecaoCaboSchema
>;

export type FiberdocsUsuarioConfigDirecaoCaixaAtendimento = z.infer<
	typeof fiberdocs_usuario_configDirecaoCaixaAtendimentoSchema
>;

export type FiberdocsUsuarioConfigExibirNotificacaoElementosQuebrados = z.infer<
	typeof fiberdocs_usuario_configExibirNotificacaoElementosQuebradosSchema
>;

export type FiberdocsUsuarioConfigExibirNotificacaoLoginsSemProjeto = z.infer<
	typeof fiberdocs_usuario_configExibirNotificacaoLoginsSemProjetoSchema
>;

export type FiberdocsUsuarioConfigExibirNotificacaoOnusSemProjeto = z.infer<
	typeof fiberdocs_usuario_configExibirNotificacaoOnusSemProjetoSchema
>;

export type FiberdocsUsuarioConfigFerramentaAgrupamento = z.infer<
	typeof fiberdocs_usuario_configFerramentaAgrupamentoSchema
>;

export type FiberdocsUsuarioConfigFerramentaIma = z.infer<
	typeof fiberdocs_usuario_configFerramentaImaSchema
>;

export type FiberdocsUsuarioConfigLoginsSemProjeto = z.infer<
	typeof fiberdocs_usuario_configLoginsSemProjetoSchema
>;

export type FiberdocsUsuarioConfigMenuInicial = z.infer<
	typeof fiberdocs_usuario_configMenuInicialSchema
>;

export type FiberdocsUsuarioConfigOverlayExibicao = z.infer<
	typeof fiberdocs_usuario_configOverlayExibicaoSchema
>;

export type FiberdocsUsuarioConfigRenderizacaoDeElementos = z.infer<
	typeof fiberdocs_usuario_configRenderizacaoDeElementosSchema
>;
