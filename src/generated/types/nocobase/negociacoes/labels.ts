/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGOCIACOES_CONFISSAODIVIDA_LABELS = {
	Nao: "Nao",
	Sim: "Sim",
} as const;

export const NEGOCIACOES_DATAVENCIMENTO_LABELS = {
	1: "Dia 01",
	5: "Dia 05",
	10: "Dia 10",
	15: "Dia 15",
	20: "Dia 20",
	25: "Dia 25",
} as const;

export const NEGOCIACOES_ENDERECOCOBRANCA_LABELS = {
	0: "Não",
	1: "Sim",
} as const;

export const NEGOCIACOES_ENDERECOCOMPLEMENTO_LABELS = {
	Casa: "Casa",
	Apartamento: "Apartamento",
	Condominio: "Condominio",
	Comercial: "Comercial",
} as const;

export const NEGOCIACOES_FIDELIDADE_LABELS = {
	0: "0 Meses",
	12: "12 Meses",
	24: "24 Meses",
	36: "36 Meses",
	48: "48 Meses",
	60: "60 Meses",
} as const;

export const NEGOCIACOES_MOTIVO_LABELS = {
	I: "Venda Nova",
	M: "Mudança de Endereço",
	D: "Downgrade",
	U: "Upgrade",
	N: "Negociação",
	R: "Reativação",
	T: "Mudança de Tecnologia",
	L: "Mudança de Titularidade",
	S: "Segunda Contratação",
	P: "Proposta",
} as const;

export const NEGOCIACOES_MOTIVOPONTOS_LABELS = {
	cep: "CEP duplicado",
	endereco: "Endereço duplicado",
	numero: "Número duplicado",
	telefone: "Telefone duplicado",
	"telefone-adc": "Telefone adicional duplicado",
	email: "E-mail duplicado",
} as const;

export const NEGOCIACOES_PONTOSATENCAO_LABELS = {
	0: "0 Pontos",
	1: "1 Ponto",
	2: "2 Pontos",
	3: "3 Pontos",
	4: "4 Pontos",
	5: "5 Pontos",
	6: "6 Pontos",
} as const;

export const NEGOCIACOES_STATUS_LABELS = {
	1: "Novo",
	2: "Negociando",
	3: "Assinatura",
	4: "Auditoria",
	5: "Concluído",
	6: "Arquivado",
} as const;

export const NEGOCIACOES_SUBSTATUS_LABELS = {
	13: "EM STANDBY",
	2: "AGUARDANDO - Assinatura do contrato pelo cliente",
	3: "AGUARDANDO - Auditoria",
	4: "APROVADO - Aguardando inserção no IXC",
	11: "APROVADO - Aguardando atualização no IXC",
	9: "APROVADO - Concluído",
	8: "APROVADO - Erro na integração com o IXC",
	5: "REPROVADO - Divergência de Dados",
	6: "REPROVADO - Fraude",
	7: "REPROVADO - Análise de Crédito",
	12: "REPROVADO - Financeiro em Atraso",
	14: "REPROVADO - Pontos de Atenção",
	15: "REPROVADO - Documentação",
	10: "PERDIDO",
	1: "NA",
} as const;

export const NEGOCIACOES_TIPOPESSOA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const negociacoesConfissaoDividaSchema = z.enum(["Nao", "Sim"], {
	error: () => ({
		message: "confissao_divida: valores válidos são [Nao, Sim]",
	}),
});

export const negociacoesDataVencimentoSchema = z.enum(
	["1", "5", "10", "15", "20", "25"],
	{
		error: () => ({
			message:
				"data_vencimento: valores válidos são [Dia 01, Dia 05, Dia 10, Dia 15, Dia 20, Dia 25]",
		}),
	},
);

export const negociacoesEnderecoCobrancaSchema = z.enum(["0", "1"], {
	error: () => ({
		message: "endereco_cobranca: valores válidos são [Não, Sim]",
	}),
});

export const negociacoesEnderecoComplementoSchema = z.enum(
	["Casa", "Apartamento", "Condominio", "Comercial"],
	{
		error: () => ({
			message:
				"endereco_complemento: valores válidos são [Casa, Apartamento, Condominio, Comercial]",
		}),
	},
);

export const negociacoesFidelidadeSchema = z.enum(
	["0", "12", "24", "36", "48", "60"],
	{
		error: () => ({
			message:
				"fidelidade: valores válidos são [0 Meses, 12 Meses, 24 Meses, 36 Meses, 48 Meses, 60 Meses]",
		}),
	},
);

export const negociacoesMotivoSchema = z.enum(
	["I", "M", "D", "U", "N", "R", "T", "L", "S", "P"],
	{
		error: () => ({
			message:
				"motivo: valores válidos são [Venda Nova, Mudança de Endereço, Downgrade, Upgrade, Negociação, Reativação, Mudança de Tecnologia, Mudança de Titularidade, Segunda Contratação, Proposta]",
		}),
	},
);

export const negociacoesMotivoPontosSchema = z.enum(
	["cep", "endereco", "numero", "telefone", "telefone-adc", "email"],
	{
		error: () => ({
			message:
				"motivo_pontos: valores válidos são [CEP duplicado, Endereço duplicado, Número duplicado, Telefone duplicado, Telefone adicional duplicado, E-mail duplicado]",
		}),
	},
);

export const negociacoesPontosAtencaoSchema = z.enum(
	["0", "1", "2", "3", "4", "5", "6"],
	{
		error: () => ({
			message:
				"pontos_atencao: valores válidos são [0 Pontos, 1 Ponto, 2 Pontos, 3 Pontos, 4 Pontos, 5 Pontos, 6 Pontos]",
		}),
	},
);

export const negociacoesStatusSchema = z.enum(["1", "2", "3", "4", "5", "6"], {
	error: () => ({
		message:
			"status: valores válidos são [Novo, Negociando, Assinatura, Auditoria, Concluído, Arquivado]",
	}),
});

export const negociacoesSubstatusSchema = z.enum(
	[
		"13",
		"2",
		"3",
		"4",
		"11",
		"9",
		"8",
		"5",
		"6",
		"7",
		"12",
		"14",
		"15",
		"10",
		"1",
	],
	{
		error: () => ({
			message:
				"substatus: valores válidos são [EM STANDBY, AGUARDANDO - Assinatura do contrato pelo cliente, AGUARDANDO - Auditoria, APROVADO - Aguardando inserção no IXC, APROVADO - Aguardando atualização no IXC, APROVADO - Concluído, APROVADO - Erro na integração com o IXC, REPROVADO - Divergência de Dados, REPROVADO - Fraude, REPROVADO - Análise de Crédito, REPROVADO - Financeiro em Atraso, REPROVADO - Pontos de Atenção, REPROVADO - Documentação, PERDIDO, NA]",
		}),
	},
);

export const negociacoesTipoPessoaSchema = z.enum(["PF", "PJ"], {
	error: () => ({
		message:
			"tipo_pessoa: valores válidos são [Pessoa Física, Pessoa Jurídica]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NegociacoesConfissaoDivida = z.infer<
	typeof negociacoesConfissaoDividaSchema
>;

export type NegociacoesDataVencimento = z.infer<
	typeof negociacoesDataVencimentoSchema
>;

export type NegociacoesEnderecoCobranca = z.infer<
	typeof negociacoesEnderecoCobrancaSchema
>;

export type NegociacoesEnderecoComplemento = z.infer<
	typeof negociacoesEnderecoComplementoSchema
>;

export type NegociacoesFidelidade = z.infer<typeof negociacoesFidelidadeSchema>;

export type NegociacoesMotivo = z.infer<typeof negociacoesMotivoSchema>;

export type NegociacoesMotivoPontos = z.infer<
	typeof negociacoesMotivoPontosSchema
>;

export type NegociacoesPontosAtencao = z.infer<
	typeof negociacoesPontosAtencaoSchema
>;

export type NegociacoesStatus = z.infer<typeof negociacoesStatusSchema>;

export type NegociacoesSubstatus = z.infer<typeof negociacoesSubstatusSchema>;

export type NegociacoesTipoPessoa = z.infer<typeof negociacoesTipoPessoaSchema>;
