/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFCONFIG_COLORIRCAIXAATENDIMENTOPORTASDISP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRDESCRICAOCAIXAATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRDESCRICAOCAIXAEMENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRNOTIFICACAOCAIXASDEATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRNOTIFICACAOCLIENTESSEMCOORDENADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRNOTIFICACAOFEEDBACKAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRNOTIFICACAOLOGINSSEMCOORDENADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_EXIBIRNOTIFICACAOONUSEMCOORDENADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_FILTROCLIENTEATIVO_LABELS = {
	TD: "TD",
	CA: "CA",
	CI: "CI",
} as const;

export const DFCONFIG_FILTROCLIENTEONLINE_LABELS = {
	TD: "TD",
	CA: "CA",
	CI: "CI",
	SS: "SS",
	OO: "OO",
} as const;

export const DFCONFIG_FILTROCLIENTESEMCOORDENADA_LABELS = {
	TD: "TD",
	SC: "SC",
	CC: "CC",
} as const;

export const DFCONFIG_FILTROCLIENTESEMPROJETO_LABELS = {
	TD: "TD",
	SP: "SP",
	CP: "CP",
} as const;

export const DFCONFIG_FILTROEXIBIRDIRECAOFIBRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_FILTROEXIBIRFUNCIONARIOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_FILTROONUESTRUTURA_LABELS = {
	TD: "TD",
	S: "S",
	N: "N",
} as const;

export const DFCONFIG_FILTROTIPOMAPA_LABELS = {
	PA: "PA",
	TR: "TR",
	ST: "ST",
	FN: "FN",
} as const;

export const DFCONFIG_FILTROTRANSMISSOR_LABELS = {
	TD: "TD",
	58: "58",
	24: "24",
	FB: "FB",
	CB: "CB",
	AD: "AD",
} as const;

export const DFCONFIG_MAPMODE_LABELS = {
	L: "L",
	D: "D",
} as const;

export const DFCONFIG_MAPMODESALES_LABELS = {
	L: "L",
	D: "D",
} as const;

export const DFCONFIG_MAPMODESERVICE_LABELS = {
	L: "L",
	D: "D",
} as const;

export const DFCONFIG_VERSAOFIBER_LABELS = {
	N: "N",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_configColorirCaixaAtendimentoPortasDispSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"colorir_caixa_atendimento_portas_disp: valores válidos são [S, N]",
		}),
	},
);

export const df_configExibirDescricaoCaixaAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "exibir_descricao_caixa_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const df_configExibirDescricaoCaixaEmendaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exibir_descricao_caixa_emenda: valores válidos são [S, N]",
	}),
});

export const df_configExibirNotificacaoCaixasDeAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"exibir_notificacao_caixas_de_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const df_configExibirNotificacaoClientesSemCoordenadaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"exibir_notificacao_clientes_sem_coordenada: valores válidos são [S, N]",
		}),
	},
);

export const df_configExibirNotificacaoFeedbackAppSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exibir_notificacao_feedback_app: valores válidos são [S, N]",
	}),
});

export const df_configExibirNotificacaoLoginsSemCoordenadaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"exibir_notificacao_logins_sem_coordenada: valores válidos são [S, N]",
		}),
	},
);

export const df_configExibirNotificacaoOnuSemCoordenadaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"exibir_notificacao_onu_sem_coordenada: valores válidos são [S, N]",
		}),
	},
);

export const df_configFiltroClienteAtivoSchema = z.enum(["TD", "CA", "CI"], {
	error: () => ({
		message: "filtro_cliente_ativo: valores válidos são [TD, CA, CI]",
	}),
});

export const df_configFiltroClienteOnlineSchema = z.enum(
	["TD", "CA", "CI", "SS", "OO"],
	{
		error: () => ({
			message:
				"filtro_cliente_online: valores válidos são [TD, CA, CI, SS, OO]",
		}),
	},
);

export const df_configFiltroClienteSemCoordenadaSchema = z.enum(
	["TD", "SC", "CC"],
	{
		error: () => ({
			message:
				"filtro_cliente_sem_coordenada: valores válidos são [TD, SC, CC]",
		}),
	},
);

export const df_configFiltroClienteSemProjetoSchema = z.enum(
	["TD", "SP", "CP"],
	{
		error: () => ({
			message: "filtro_cliente_sem_projeto: valores válidos são [TD, SP, CP]",
		}),
	},
);

export const df_configFiltroExibirDirecaoFibraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtro_exibir_direcao_fibra: valores válidos são [S, N]",
	}),
});

export const df_configFiltroExibirFuncionariosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtro_exibir_funcionarios: valores válidos são [S, N]",
	}),
});

export const df_configFiltroOnuEstruturaSchema = z.enum(["TD", "S", "N"], {
	error: () => ({
		message: "filtro_onu_estrutura: valores válidos são [TD, S, N]",
	}),
});

export const df_configFiltroTipoMapaSchema = z.enum(["PA", "TR", "ST", "FN"], {
	error: () => ({
		message: "filtro_tipo_mapa: valores válidos são [PA, TR, ST, FN]",
	}),
});

export const df_configFiltroTransmissorSchema = z.enum(
	["TD", "58", "24", "FB", "CB", "AD"],
	{
		error: () => ({
			message:
				"filtro_transmissor: valores válidos são [TD, 58, 24, FB, CB, AD]",
		}),
	},
);

export const df_configMapModeSchema = z.enum(["L", "D"], {
	error: () => ({ message: "map_mode: valores válidos são [L, D]" }),
});

export const df_configMapModeSalesSchema = z.enum(["L", "D"], {
	error: () => ({ message: "map_mode_sales: valores válidos são [L, D]" }),
});

export const df_configMapModeServiceSchema = z.enum(["L", "D"], {
	error: () => ({ message: "map_mode_service: valores válidos são [L, D]" }),
});

export const df_configVersaoFiberSchema = z.enum(["N", "O"], {
	error: () => ({ message: "versao_fiber: valores válidos são [N, O]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfConfigColorirCaixaAtendimentoPortasDisp = z.infer<
	typeof df_configColorirCaixaAtendimentoPortasDispSchema
>;

export type DfConfigExibirDescricaoCaixaAtendimento = z.infer<
	typeof df_configExibirDescricaoCaixaAtendimentoSchema
>;

export type DfConfigExibirDescricaoCaixaEmenda = z.infer<
	typeof df_configExibirDescricaoCaixaEmendaSchema
>;

export type DfConfigExibirNotificacaoCaixasDeAtendimento = z.infer<
	typeof df_configExibirNotificacaoCaixasDeAtendimentoSchema
>;

export type DfConfigExibirNotificacaoClientesSemCoordenada = z.infer<
	typeof df_configExibirNotificacaoClientesSemCoordenadaSchema
>;

export type DfConfigExibirNotificacaoFeedbackApp = z.infer<
	typeof df_configExibirNotificacaoFeedbackAppSchema
>;

export type DfConfigExibirNotificacaoLoginsSemCoordenada = z.infer<
	typeof df_configExibirNotificacaoLoginsSemCoordenadaSchema
>;

export type DfConfigExibirNotificacaoOnuSemCoordenada = z.infer<
	typeof df_configExibirNotificacaoOnuSemCoordenadaSchema
>;

export type DfConfigFiltroClienteAtivo = z.infer<
	typeof df_configFiltroClienteAtivoSchema
>;

export type DfConfigFiltroClienteOnline = z.infer<
	typeof df_configFiltroClienteOnlineSchema
>;

export type DfConfigFiltroClienteSemCoordenada = z.infer<
	typeof df_configFiltroClienteSemCoordenadaSchema
>;

export type DfConfigFiltroClienteSemProjeto = z.infer<
	typeof df_configFiltroClienteSemProjetoSchema
>;

export type DfConfigFiltroExibirDirecaoFibra = z.infer<
	typeof df_configFiltroExibirDirecaoFibraSchema
>;

export type DfConfigFiltroExibirFuncionarios = z.infer<
	typeof df_configFiltroExibirFuncionariosSchema
>;

export type DfConfigFiltroOnuEstrutura = z.infer<
	typeof df_configFiltroOnuEstruturaSchema
>;

export type DfConfigFiltroTipoMapa = z.infer<
	typeof df_configFiltroTipoMapaSchema
>;

export type DfConfigFiltroTransmissor = z.infer<
	typeof df_configFiltroTransmissorSchema
>;

export type DfConfigMapMode = z.infer<typeof df_configMapModeSchema>;

export type DfConfigMapModeSales = z.infer<typeof df_configMapModeSalesSchema>;

export type DfConfigMapModeService = z.infer<
	typeof df_configMapModeServiceSchema
>;

export type DfConfigVersaoFiber = z.infer<typeof df_configVersaoFiberSchema>;
