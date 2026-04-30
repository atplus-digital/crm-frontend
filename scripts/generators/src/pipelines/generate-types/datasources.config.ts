import type { DataSourceGenerationConfig } from "./@types/script";
import { createIXCRelationsAdapter } from "./adapters/ixc-relations-adapter";
import { createIXCWikiAdapter } from "./adapters/ixc-wiki-scraper";

export const dataSourceConfigs = [
	{
		name: "nocobase",
		type: "nocobase",
		dataSource: "main",
		inferRelationsByName: false, // NocoBase já tem relações via API
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
		],
		generateEnumReport: true,
	},
	{
		name: "ixc",
		type: "nocobase",
		dataSource: "d_db_ixcsoft",
		splitCollections: [
			"cliente",
			"cliente_contrato",
			"linha_mvno",
			"vd_contratos_produtos",
			"fn_areceber",
			"su_ticket",
		],
		preEnumAdapter: createIXCWikiAdapter(),
		relationsAdapter: createIXCRelationsAdapter(),
		enumCorrection: [],
		generateEnumReport: true,
		inferRelationsByName: true,
	},
] satisfies DataSourceGenerationConfig[];
