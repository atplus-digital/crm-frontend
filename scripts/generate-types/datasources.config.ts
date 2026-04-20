import type { DataSourceGenerationConfig } from "./src/@types/script";
import { createIXCWikiAdapter } from "./src/adapters/ixc-wiki-scraper";

export const dataSourceConfigs = [
	{
		name: "nocobase",
		type: "nocobase",
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
		enumCorrection: {
			forceEnums: [],
			enumOverrides: [],
		},
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
		// enumCorrection: {
		// 	forceEnums: [
		// 		{
		// 			collection: "su_ticket",
		// 			field: "prioridade",
		// 			values: ["1", "2", "3", "4", "5"],
		// 			labels: {
		// 				"1": "Crítica",
		// 				"2": "Alta",
		// 				"3": "Média",
		// 				"4": "Baixa",
		// 				"5": "Informativa",
		// 			},
		// 		},
		// 	],
		// 	enumOverrides: [
		// 		{
		// 			collection: "cliente",
		// 			field: "status",
		// 			labels: {
		// 				"1": "Ativo",
		// 				"2": "Inativo",
		// 				"3": "Bloqueado",
		// 				A: "Ativo",
		// 				I: "Inativo",
		// 			},
		// 		},
		// 		{
		// 			collection: "fn_areceber",
		// 			field: "tipo_baixa",
		// 			labels: {
		// 				"1": "Dinheiro",
		// 				"2": "Boleto",
		// 				"3": "PIX",
		// 				"4": "Cartão de Crédito",
		// 				"5": "Transferência",
		// 			},
		// 		},
		// 	],
		// },
	},
] satisfies DataSourceGenerationConfig[];
