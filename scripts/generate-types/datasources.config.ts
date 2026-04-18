import type { DataSourceGenerationConfig } from "./src/@types/script";
import { createIXCWikiAdapter } from "./src/adapters/ixc-wiki-scraper";

export const dataSourceConfigs = [
	{
		name: "nocobase",
		dataSource: "main",
		outputDir: "src/generated/nocobase",
		splitCollections: [
			"users",
			"t_negociacoes",
			"t_empresas",
			"t_pessoas",
			"t_crm_troca_titularidade",
			"t_registros_de_contato",
		],
	},
	{
		name: "ixc",
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
	},
] satisfies DataSourceGenerationConfig[];
