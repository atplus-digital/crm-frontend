import type { RuntimeConfig } from "@scripts/generate-types/src/@types/script";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockConfigFactory = vi.hoisted(() => {
	return vi.fn().mockReturnValue({
		outputDir: "/tmp/test-generated",
		splitCollections: [],
		logLevel: "info" as const,
		defaultEnvPath: ".env.local",
		requestTimeoutMs: 15_000,
		requestConcurrency: 5,
		maxConcurrency: 5,
		baseInterfaceNaming: { prefix: "", suffix: "Base" },
		datasources: [
			{
				name: "test",
				type: "nocobase",
				dataSource: "main",
				outputDir: "/tmp/test-generated",
				splitCollections: [],
			},
		],
		baseUrl: "https://example.com/api",
		token: "test-token",
		timeoutMs: 30_000,
	} as RuntimeConfig);
});

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		return mockConfigFactory();
	},
}));

const mockDefaultPipeline = vi.hoisted(() => vi.fn());

vi.mock("@scripts/generate-types/src/pipeline/default-pipeline", () => ({
	defaultPipeline: mockDefaultPipeline,
}));

const mockLinterRunBiome = vi.hoisted(() => vi.fn());

vi.mock("@scripts/generate-types/src/utils/linter-runner", () => ({
	runLinterFix: mockLinterRunBiome,
}));

describe("Pipeline End-to-End", () => {
	beforeEach(() => {
		vi.resetAllMocks();
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			logLevel: "info" as const,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			maxConcurrency: 5,
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			datasources: [
				{
					name: "test",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test-generated",
					splitCollections: [],
				},
			],
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);
		mockDefaultPipeline.mockResolvedValue({
			writeResults: [
				{
					outputPath: "/tmp/test-output/index.ts",
					changed: true,
				},
			],
		});
		mockLinterRunBiome.mockResolvedValue(undefined);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("deve processar datasource e retornar um arquivo gerado", async () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: ["users"],
			logLevel: "info" as const,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			maxConcurrency: 5,
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			datasources: [
				{
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test-output",
					splitCollections: ["users"],
				},
			],
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);

		const { runGenerateTypesForDataSources } = await import(
			"@scripts/generate-types/src/generate-types"
		);

		const result = await runGenerateTypesForDataSources();

		expect(mockDefaultPipeline).toHaveBeenCalledOnce();
		expect(result).toMatchObject({
			resultType: "single",
			outputPath: "/tmp/test-output/index.ts",
			changed: true,
		});
	});

	it("deve repassar collections explícitas ao contexto", async () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			logLevel: "info" as const,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			maxConcurrency: 5,
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			datasources: [
				{
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test-output",
					splitCollections: [],
					collections: ["users", "posts"],
				},
			],
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);

		const { runGenerateTypesForDataSources } = await import(
			"@scripts/generate-types/src/generate-types"
		);

		await runGenerateTypesForDataSources();

		expect(mockDefaultPipeline).toHaveBeenCalledOnce();
		expect(mockDefaultPipeline.mock.calls[0][0].dataSource.collections).toEqual(
			["users", "posts"],
		);
	});

	it("deve propagar falha do pipeline como erro agregado", async () => {
		mockDefaultPipeline.mockRejectedValueOnce(new Error("pipeline failed"));

		const { runGenerateTypesForDataSources } = await import(
			"@scripts/generate-types/src/generate-types"
		);

		await expect(runGenerateTypesForDataSources()).rejects.toThrow(
			"Todos os datasources falharam: test",
		);
	});
});
