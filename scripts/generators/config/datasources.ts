import type { DataSourceGenerationConfig } from "../src/pipelines/generate-types/@types/script-config";

export const dataSourceConfigs: DataSourceGenerationConfig[] = [
	{
		name: "nocobase",
		type: "nocobase",
		dataSource: "main",
		includeAllCollections: true,
		inferRelationsByName: false,
		splitCollections: [
			"users",
			"t_negociacoes",
			"t_empresas",
			"t_pessoas",
			"t_crm_troca_titularidade",
			"t_registros_de_contato",
			"t_troca_endereco",
			"t_suspensao_contrato",
			"t_comentarios_suspensao_de_contrato",
			"f_funcionarios",
		],
	},
	{
		name: "ixc",
		type: "nocobase",
		dataSource: "d_db_ixcsoft",
		includeAllCollections: true,
		splitCollections: [
			"cliente",
			"cliente_contrato",
			"linha_mvno",
			"vd_contratos_produtos",
			"fn_areceber",
			"su_ticket",
			"radusuarios",
			"cidade",
			"uf",
		],
	},
];
