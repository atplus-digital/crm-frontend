export const CLIENTE_CONTRATO_RELATIONS: Record<
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
	cliente_contrato: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_nc_cliente",
		},
		id_vd_contrato: {
			target: "vd_contratos_produtos",
			type: "belongsTo",
			relationFieldName: "f_vd_contrato",
		},
		id_tipo_contrato: {
			target: "cliente_contrato_tipo",
			type: "belongsTo",
			relationFieldName: "f_tipo_contrato",
		},
		id_modelo: {
			target: "cliente_contrato_modelo",
			type: "belongsTo",
			relationFieldName: "f_modelo",
		},
		id_filial: {
			target: "filial",
			type: "belongsTo",
			relationFieldName: "f_filial",
		},
		id_motivo_inclusao: {
			target: "cliente_contrato_motivo_inclusao",
			type: "belongsTo",
			relationFieldName: "f_motivo_inclusao",
		},
		id_indexador_reajuste: {
			target: "cliente_contrato_indexadores",
			type: "belongsTo",
			relationFieldName: "f_indexador_reajuste",
		},
		id_tipo_documento: {
			target: "tipo_documento",
			type: "belongsTo",
			relationFieldName: "f_tipo_documento",
		},
		id_carteira_cobranca: {
			target: "fn_carteira_cobranca",
			type: "belongsTo",
			relationFieldName: "f_carteira_cobranca",
		},
		id_vendedor: {
			target: "vendedor",
			type: "belongsTo",
			relationFieldName: "f_vendedor",
		},
		moeda: {
			target: "moedas",
			type: "belongsTo",
			relationFieldName: "f_moeda",
		},
		id_contrato_principal: {
			target: "cliente_contrato",
			type: "belongsTo",
			relationFieldName: "f_contrato_principal",
		},
		id_responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_cond_pag_ativ: {
			target: "condicoes_pagamento",
			type: "belongsTo",
			relationFieldName: "f_cond_pag_ativ",
		},
		id_produto_ativ: {
			target: "produtos",
			type: "belongsTo",
			relationFieldName: "f_produto_ativ",
		},
		id_tipo_doc_ativ: {
			target: "tipo_documento",
			type: "belongsTo",
			relationFieldName: "f_tipo_doc_ativ",
		},
		indicacao_contrato_id: {
			target: "indicacao_contrato",
			type: "belongsTo",
			relationFieldName: "f_indicacao_contrato",
		},
	},
};
