export const CLIENTE_RELATIONS: Record<
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
	cliente: {
		cidade_naturalidade: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade_naturalidade",
		},
		estado_nascimento: {
			target: "uf",
			type: "belongsTo",
			relationFieldName: "f_estado_nascimento",
		},
		id_condominio: {
			target: "cliente_condominio",
			type: "belongsTo",
			relationFieldName: "f_condominio",
		},
		cidade: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade",
		},
		uf: { target: "uf", type: "belongsTo", relationFieldName: "f_uf" },
		cidade_cob: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade_cob",
		},
		uf_cob: { target: "uf", type: "belongsTo", relationFieldName: "f_uf_cob" },
		id_conta: {
			target: "contas",
			type: "belongsTo",
			relationFieldName: "f_conta",
		},
		id_vendedor: {
			target: "vendedor",
			type: "belongsTo",
			relationFieldName: "f_vendedor",
		},
		id_perfil: {
			target: "perfis",
			type: "belongsTo",
			relationFieldName: "f_perfil",
		},
		id_segmento: {
			target: "segmentos",
			type: "belongsTo",
			relationFieldName: "f_segmento",
		},
		id_operadora_celular: {
			target: "operadora_celular",
			type: "belongsTo",
			relationFieldName: "f_operadora_celular",
		},
		id_tipo_cliente: {
			target: "tipo_cliente",
			type: "belongsTo",
			relationFieldName: "f_tipo_cliente",
		},
		responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_candato_tipo: {
			target: "candato_tipo",
			type: "belongsTo",
			relationFieldName: "f_candato_tipo",
		},
		id_concorrente: {
			target: "concorrente",
			type: "belongsTo",
			relationFieldName: "f_concorrente",
		},
		id_fornecedor_conversao: {
			target: "fornecedor",
			type: "belongsTo",
			relationFieldName: "f_fornecedor_conversao",
		},
	},
};
