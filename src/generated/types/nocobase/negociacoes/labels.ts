/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGOCIACOES_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_anexos: "Anexos",
	f_apartamento: "Apartamento",
	f_assinatura_gov: "Assinatura via GOV?",
	f_bairro: "Bairro",
	f_bairro_cobranca: "Bairro de Cobranca",
	f_bloco_quadra: "Bloco / Quadra",
	f_cep: "CEP",
	f_cep_cobranca: "CEP de Cobrança",
	f_cidade_cobranca: "Cidade de Cobrança",
	f_comentarios: "Comentários",
	f_complemento_cobranca: "Complemento de Cobrança",
	f_confissao_divida: "Confissão de Dívida",
	f_contrato_ixc: "Contrato IXC",
	f_cpf_cnpj: "CPF/CNPJ",
	f_cpf_responsavel_assinatura: "CPF Responsavel pela assinatura",
	f_cupom_desconto: "Cupom de desconto",
	f_data_vencimento: "Data de Vencimento",
	f_email_cobranca: "E-mail de cobrança",
	f_endereco: "Endereço",
	f_endereco_cidade: "Cidade",
	f_endereco_cobranca: "Endereço de Cobrança Diferente?",
	f_endereco_complemento: "Complemento",
	f_endereco_de_cobranca: "Endereço de Cobrança",
	f_endereco_estado: "Estado",
	f_endereco_numero: "Numero",
	f_endereco_referencia: "Ponto de Referência",
	f_entrada_saldo_devedor: "Entrada",
	f_estado_cobranca: "Estado de Cobrança",
	f_fidelidade: "Fidelidade",
	f_fk_auditoria_automatica: "f_fk_auditoria_automatica",
	f_fk_contrato_ixc: "f_fk_contrato_ixc",
	f_fk_cupom_desconto: "f_fk_cupom_desconto",
	f_fk_negociacao_indicador: "f_fk_negociacao_indicador",
	f_fk_negociacao_vendedor: "f_fk_negociacao_vendedor",
	f_fk_oe_qualirun: "OE - QualiRun",
	f_fk_pacote: "f_fk_pacote",
	f_fk_pessoa_negociacao: "f_fk_pessoa_negociacao",
	f_fk_pessoa_pj_negociacao: "f_fk_pessoa_pj_negociacao",
	f_Incremento: "Incremento",
	f_itens_negociacao: "Itens Negociação",
	f_ixc_tipo_cobranca: "ID Tipo de Cobrança IXC",
	f_link_assinatura: "Link para assinatura",
	f_motivo: "Motivo da Negociação",
	f_motivo_pontos: "Motivo dos Pontos",
	f_multa_juros: "Multa e Juros",
	f_negociacao_contrato: "Contrato",
	f_negociacao_pessoa_juridica: "Pessoa Jurídica",
	f_nome_edificio: "Nome do Edificio",
	f_nome_fantasia: "Nome Fantasia",
	f_nome_razao: "Nome / Razão Social",
	f_numero_cobranca: "Numero de Cobrança",
	f_ordenacao: "Ordenação",
	f_pacote: "Pacote",
	f_pacotes_adicionais: "Pacotes Adicionais",
	f_parcelas_mensais: "Parcelas Mensais",
	f_periodo_final: "Período Final",
	f_permuta: "Permuta?",
	f_pessoa: "Pessoa",
	f_pontos_atencao: "Pontos de Atenção",
	f_qualirun_assinatura_gov: "Arquivos QualiRun - Assinatura GOV",
	f_responsavel_assinatura: "Responsável pela assinatura",
	f_rg_ie: "RG / IE",
	f_scm: "Possui SCM?",
	f_smp: "Possui SMP?",
	f_status: "Status",
	f_stfc: "Possui STFC?",
	f_substatus: "Substatus",
	f_sva: "Possui SVA",
	f_telefone: "Telefone de Contato",
	f_telefone_2: "Telefone de Contato 2",
	f_tipo_pessoa: "Tipo de Pessoa",
	f_titulo: "Título",
	f_valor_beneficios: "Valor Benefícios",
	f_valor_da_parcela: "Valor da Parcela",
	f_valor_devedor: "Valor Devedor",
	f_valor_devedor_total: "Valor Devedor Total",
	f_valor_instalacao: "Valor Instalação",
	f_valor_mensal: "Valor Mensal",
	f_valor_mensal_antigo: "Valor Mensal Antigo",
	f_valor_mensal_sem_desconto: "Valor Mensal sem Desconto",
	f_valor_multa_mes_faltante: "Valor da Multa por mês faltante",
	f_vendedor: "Vendedor",
	f_zapsign: "ZapSign?",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

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
	N: "Renegociação",
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
				"motivo: valores válidos são [Venda Nova, Mudança de Endereço, Downgrade, Upgrade, Renegociação, Reativação, Mudança de Tecnologia, Mudança de Titularidade, Segunda Contratação, Proposta]",
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
