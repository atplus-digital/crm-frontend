import {
	type DatasourceGenerationConfig,
	defineDatasource,
} from "./src/@types/script";

export const datasourceConfigs: DatasourceGenerationConfig[] = [
	defineDatasource({
		name: "nocobase",
		datasource: "main",
		outputDir: "src/generated/nocobase",
		splitCollections: ["users", "t_negociacoes", "t_empresas", "t_pessoas"],
		baseInterfaceNaming: { prefix: "", suffix: "" },
	}),
	defineDatasource({
		name: "ixc",
		datasource: "d_db_ixcsoft",
		outputDir: "src/generated/ixc",
		collections: ["cliente_contrato"],
		splitCollections: ["cliente_contrato"],
		enableSampleFieldFallback: true,
		baseInterfaceNaming: { prefix: "", suffix: "" },
	}),
];
