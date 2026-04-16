import type { DatasourceGenerationConfig } from "./src/@types/script";

export const datasourceConfigs: DatasourceGenerationConfig[] = [
	{
		name: "nocobase",
		datasource: "main",
		outputDir: "src/generated/nocobase",
		splitCollections: ["users", "t_negociacoes", "t_empresas", "t_pessoas"],
		baseInterfaceNaming: { prefix: "", suffix: "" },
	},
	{
		name: "ixc",
		datasource: "d_db_ixcsoft",
		outputDir: "src/generated/ixc",
		splitCollections: ["cliente_contrato"],
		enableSampleFieldFallback: true,
		baseInterfaceNaming: { prefix: "", suffix: "" },
	},
];
