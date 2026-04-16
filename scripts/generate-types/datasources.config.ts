import {
	type DataSourceGenerationConfig,
	defineDataSource,
} from "./src/@types/script";

export const dataSourceConfigs: DataSourceGenerationConfig[] = [
	defineDataSource({
		name: "nocobase",
		dataSource: "main",
		outputDir: "src/generated/nocobase",
		splitCollections: ["users", "t_negociacoes", "t_empresas", "t_pessoas"],
		baseInterfaceNaming: { prefix: "", suffix: "" },
	}),
	defineDataSource({
		name: "ixc",
		dataSource: "d_db_ixcsoft",
		outputDir: "src/generated/ixc",
		collections: ["cliente_contrato"],
		splitCollections: ["cliente_contrato"],
		enableSampleFieldFallback: true,
		baseInterfaceNaming: { prefix: "", suffix: "" },
	}),
];
