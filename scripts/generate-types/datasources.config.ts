import type { DataSourceGenerationConfig } from "./src/@types/script";
import { createIXCRelationsAdapter } from "./src/adapters/ixc-relations-adapter";
import { createIXCWikiAdapter } from "./src/adapters/ixc-wiki-scraper";

export const dataSourceConfigs = [
	{
		name: "nocobase",
		type: "nocobase",
		dataSource: "main",
		outputDir: "src/generated/nocobase",
		inferRelationsByName: false, // NocoBase já tem relações via API
		splitCollections: [
			"users",
			"t_negociacoes",
			"t_empresas",
			"t_pessoas",
			"t_crm_troca_titularidade",
			"t_registros_de_contato",
		],
		generateEnumReport: true,
	},
	{
		name: "ixc",
		type: "nocobase",
		dataSource: "d_db_ixcsoft",
		outputDir: "src/generated/ixc",
		collections: [
			"cliente",
			"cliente_contrato",
			"linha_mvno",
			"vd_contratos_produtos",
			"fn_areceber",
			"su_ticket",
		],
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
		inferRelationsByName: true, // Habilita inferência por convenção como fallback
	},
] satisfies DataSourceGenerationConfig[];
