import type { RuntimeConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";

export const mockScriptConfig = {
	outputDir: "/tmp/test-generated",
	splitCollections: [
		"users",
		"f_funcionarios",
		"t_negociacoes",
		"t_pessoas",
		"t_empresas",
		"t_contratos",
		"t_servicos",
		"t_sites",
		"t_equipamentos",
		"t_telecom_recursos",
	] as string[],
	defaultEnvPath: ".env.local",
	logLevel: "info" as const,
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	maxConcurrency: 3,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
	datasources: [
		{
			name: "nocobase",
			type: "nocobase" as const,
			dataSource: "main",
			outputDir: "/tmp/test-generated",
			splitCollections: [
				"users",
				"f_funcionarios",
				"t_negociacoes",
				"t_pessoas",
				"t_empresas",
				"t_contratos",
				"t_servicos",
				"t_sites",
				"t_equipamentos",
				"t_telecom_recursos",
			],
		},
		{
			name: "ixc",
			type: "nocobase" as const,
			dataSource: "d_db_ixcsoft",
			outputDir: "/tmp/test-generated-ixc",
			splitCollections: ["cliente_contrato"],
			collections: ["cliente_contrato"],
		},
	],
};

export const mockRuntimeConfig: RuntimeConfig = {
	...mockScriptConfig,
	baseUrl: "https://example.com/api",
	token: "fake-token",
	timeoutMs: 30_000,
};

export function createMockRuntimeConfig(): RuntimeConfig {
	return {
		...mockScriptConfig,
		baseUrl: "https://example.com/api",
		token: "fake-token",
		timeoutMs: 30_000,
	};
}
