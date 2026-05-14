/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACOES_FIELD_LABELS = {
	ambiente: "ambiente",
	api_key: "api_key",
	api_secret: "api_secret",
	arquivo_acesso_watch: "arquivo_acesso_watch",
	ativar_login_tv: "ativar_login_tv",
	cobrar_somente_ramais_ativos: "cobrar_somente_ramais_ativos",
	comportamento_bloqueio_parcial_voip: "comportamento_bloqueio_parcial_voip",
	comportamento_bloqueio_total_voip: "comportamento_bloqueio_total_voip",
	comunicar_api: "comunicar_api",
	data_corte: "data_corte",
	data_proxima_atualizacao: "data_proxima_atualizacao",
	data_sincronizacao: "data_sincronizacao",
	deletar_arquivos_cdr: "deletar_arquivos_cdr",
	descricao: "descricao",
	diretorio_origem_cdr_summit: "diretorio_origem_cdr_summit",
	distri_id: "distri_id",
	distri_passaword: "distri_passaword",
	forma_importacao: "forma_importacao",
	forma_importacao_zeus: "forma_importacao_zeus",
	gateway: "gateway",
	gerar_adicional_excedente_por_ligacao:
		"gerar_adicional_excedente_por_ligacao",
	habilitar_memoria_plataforma: "habilitar_memoria_plataforma",
	head_control: "head_control",
	id: "id",
	id_filial: "id_filial",
	id_lineup_tv: "id_lineup_tv",
	id_perfil: "id_perfil",
	id_plano: "id_plano",
	id_revenda: "id_revenda",
	id_vendedor: "id_vendedor",
	identificador_provedor: "identificador_provedor",
	ip_acesso: "ip_acesso",
	ip_api_summit: "ip_api_summit",
	ip_integracao_TV: "ip_integracao_TV",
	ip_mw_tv: "ip_mw_tv",
	login_mw_tv: "login_mw_tv",
	login_TV: "login_TV",
	moeda: "moeda",
	nome_banco: "nome_banco",
	nome_view_sippulse: "nome_view_sippulse",
	operator_tv: "operator_tv",
	pacote_inadimplencia_tv: "pacote_inadimplencia_tv",
	param_json: "param_json",
	periodo_importacao_cdr: "periodo_importacao_cdr",
	plataforma: "plataforma",
	porta_acesso: "porta_acesso",
	porta_api_summit: "porta_api_summit",
	porta_banco: "porta_banco",
	qtd_numeros_did: "qtd_numeros_did",
	refresh_token: "refresh_token",
	rota_ws_ligacoes_vsc: "rota_ws_ligacoes_vsc",
	secret_mw_tv: "secret_mw_tv",
	senha_acesso: "senha_acesso",
	senha_banco: "senha_banco",
	senha_TV: "senha_TV",
	servidor_banco: "servidor_banco",
	session_id: "session_id",
	status: "status",
	tipo: "tipo",
	token_acesso: "token_acesso",
	token_acesso_watch: "token_acesso_watch",
	url_acesso: "url_acesso",
	usuario_acesso: "usuario_acesso",
	usuario_banco: "usuario_banco",
	utiliza_periodo_importacao: "utiliza_periodo_importacao",
	versao_api_playhub: "versao_api_playhub",
	versao_importacao_cdr_summit: "versao_importacao_cdr_summit",
} as const;

export const INTEGRACOES_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const INTEGRACOES_ATIVARLOGINTV_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_COBRARSOMENTERAMAISATIVOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_COMPORTAMENTOBLOQUEIOPARCIALVOIP_LABELS = {
	A: "A",
	P: "P",
} as const;

export const INTEGRACOES_COMPORTAMENTOBLOQUEIOTOTALVOIP_LABELS = {
	D: "D",
	P: "P",
} as const;

export const INTEGRACOES_COMUNICARAPI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_DELETARARQUIVOSCDR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_FORMAIMPORTACAO_LABELS = {
	C: "C",
	F: "F",
} as const;

export const INTEGRACOES_GERARADICIONALEXCEDENTEPORLIGACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_HABILITARMEMORIAPLATAFORMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_PERIODOIMPORTACAOCDR_LABELS = {
	D: "D",
	M: "M",
} as const;

export const INTEGRACOES_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_UTILIZAPERIODOIMPORTACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_VERSAOAPIPLAYHUB_LABELS = {
	v1: "v1",
	v3: "v3",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracoesAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const integracoesAtivarLoginTvSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativar_login_tv: valores válidos são [S, N]" }),
});

export const integracoesCobrarSomenteRamaisAtivosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cobrar_somente_ramais_ativos: valores válidos são [S, N]",
	}),
});

export const integracoesComportamentoBloqueioParcialVoipSchema = z.enum(
	["A", "P"],
	{
		error: () => ({
			message:
				"comportamento_bloqueio_parcial_voip: valores válidos são [A, P]",
		}),
	},
);

export const integracoesComportamentoBloqueioTotalVoipSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "comportamento_bloqueio_total_voip: valores válidos são [D, P]",
		}),
	},
);

export const integracoesComunicarApiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicar_api: valores válidos são [S, N]" }),
});

export const integracoesDeletarArquivosCdrSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "deletar_arquivos_cdr: valores válidos são [S, N]",
	}),
});

export const integracoesFormaImportacaoSchema = z.enum(["C", "F"], {
	error: () => ({ message: "forma_importacao: valores válidos são [C, F]" }),
});

export const integracoesGerarAdicionalExcedentePorLigacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"gerar_adicional_excedente_por_ligacao: valores válidos são [S, N]",
		}),
	},
);

export const integracoesHabilitarMemoriaPlataformaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "habilitar_memoria_plataforma: valores válidos são [S, N]",
	}),
});

export const integracoesPeriodoImportacaoCdrSchema = z.enum(["D", "M"], {
	error: () => ({
		message: "periodo_importacao_cdr: valores válidos são [D, M]",
	}),
});

export const integracoesStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

export const integracoesUtilizaPeriodoImportacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "utiliza_periodo_importacao: valores válidos são [S, N]",
	}),
});

export const integracoesVersaoApiPlayhubSchema = z.enum(["v1", "v3"], {
	error: () => ({
		message: "versao_api_playhub: valores válidos são [v1, v3]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracoesAmbiente = z.infer<typeof integracoesAmbienteSchema>;

export type IntegracoesAtivarLoginTv = z.infer<
	typeof integracoesAtivarLoginTvSchema
>;

export type IntegracoesCobrarSomenteRamaisAtivos = z.infer<
	typeof integracoesCobrarSomenteRamaisAtivosSchema
>;

export type IntegracoesComportamentoBloqueioParcialVoip = z.infer<
	typeof integracoesComportamentoBloqueioParcialVoipSchema
>;

export type IntegracoesComportamentoBloqueioTotalVoip = z.infer<
	typeof integracoesComportamentoBloqueioTotalVoipSchema
>;

export type IntegracoesComunicarApi = z.infer<
	typeof integracoesComunicarApiSchema
>;

export type IntegracoesDeletarArquivosCdr = z.infer<
	typeof integracoesDeletarArquivosCdrSchema
>;

export type IntegracoesFormaImportacao = z.infer<
	typeof integracoesFormaImportacaoSchema
>;

export type IntegracoesGerarAdicionalExcedentePorLigacao = z.infer<
	typeof integracoesGerarAdicionalExcedentePorLigacaoSchema
>;

export type IntegracoesHabilitarMemoriaPlataforma = z.infer<
	typeof integracoesHabilitarMemoriaPlataformaSchema
>;

export type IntegracoesPeriodoImportacaoCdr = z.infer<
	typeof integracoesPeriodoImportacaoCdrSchema
>;

export type IntegracoesStatus = z.infer<typeof integracoesStatusSchema>;

export type IntegracoesUtilizaPeriodoImportacao = z.infer<
	typeof integracoesUtilizaPeriodoImportacaoSchema
>;

export type IntegracoesVersaoApiPlayhub = z.infer<
	typeof integracoesVersaoApiPlayhubSchema
>;
