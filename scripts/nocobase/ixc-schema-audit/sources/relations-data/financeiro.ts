export const FN_ARECEBER_RELATIONS: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string;
		}
	>
> = {
	fn_areceber: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_conta: {
			target: "planejamento_analitico",
			type: "belongsTo",
			relationFieldName: "f_conta",
		},
		id_conta_class_finan_a: {
			target: "planejamento_analitico_finan",
			type: "belongsTo",
			relationFieldName: "f_conta_class_finan_a",
		},
		filial_id: {
			target: "filial",
			type: "belongsTo",
			relationFieldName: "f_filial",
		},
		id_carteira_cobranca: {
			target: "fn_carteira_cobranca",
			type: "belongsTo",
			relationFieldName: "f_carteira_cobranca",
		},
		id_saida: {
			target: "fn_apagar",
			type: "belongsTo",
			relationFieldName: "f_saida",
		},
		id_sip: {
			target: "sip",
			type: "belongsTo",
			relationFieldName: "f_sip",
		},
		id_renegociacao: {
			target: "fn_renegociacao",
			type: "belongsTo",
			relationFieldName: "f_renegociacao",
		},
		id_renegociacao_novo: {
			target: "fn_renegociacao",
			type: "belongsTo",
			relationFieldName: "f_renegociacao_novo",
		},
		id_lote_geracao_financeiro_fatura: {
			target: "lote_geracao_financeiro_fatura",
			type: "belongsTo",
			relationFieldName: "f_lote_geracao_financeiro_fatura",
		},
	},
};

export const LINHA_MVNO_RELATIONS: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string;
		}
	>
> = {
	linha_mvno: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_plano: {
			target: "mvno_planos",
			type: "belongsTo",
			relationFieldName: "f_plano",
		},
		id_chip: {
			target: "mvno_chips",
			type: "belongsTo",
			relationFieldName: "f_chip",
		},
	},
};

export const VD_CONTRATOS_PRODUTOS_RELATIONS: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string;
		}
	>
> = {
	vd_contratos_produtos: {
		id_grupo: {
			target: "grupo_produto",
			type: "belongsTo",
			relationFieldName: "f_grupo",
		},
		id_subgrupo: {
			target: "subgrupo_produto",
			type: "belongsTo",
			relationFieldName: "f_subgrupo",
		},
		id_unidade: {
			target: "unidades",
			type: "belongsTo",
			relationFieldName: "f_unidade",
		},
		id_classificacao: {
			target: "classificacao_franquia",
			type: "belongsTo",
			relationFieldName: "f_classificacao",
		},
	},
};

export const SU_TICKET_RELATIONS: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string;
		}
	>
> = {
	su_ticket: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_contrato: {
			target: "cliente_contrato",
			type: "belongsTo",
			relationFieldName: "f_contrato",
		},
		id_assunto: {
			target: "su_assuntos",
			type: "belongsTo",
			relationFieldName: "f_assunto",
		},
		id_equipe: {
			target: "su_equipes",
			type: "belongsTo",
			relationFieldName: "f_equipe",
		},
		id_responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_status: {
			target: "su_status",
			type: "belongsTo",
			relationFieldName: "f_status",
		},
		id_prioridade: {
			target: "su_prioridades",
			type: "belongsTo",
			relationFieldName: "f_prioridade",
		},
	},
};
