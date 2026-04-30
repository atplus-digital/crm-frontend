import type { RuntimeConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";
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

vi.mock("@scripts/generators/src/pipelines/generate-types/config", () => ({
	get config() {
		return mockConfigFactory();
	},
}));

const mockDefaultPipeline = vi.hoisted(() => vi.fn());

vi.mock(
	"@scripts/generators/src/pipelines/generate-types/pipeline/core/default-pipeline",
	() => ({
		defaultPipeline: mockDefaultPipeline,
	}),
);

const mockLinterRunBiome = vi.hoisted(() => vi.fn());

vi.mock("@scripts/generators/src/lib/linter-runner", () => ({
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

		const { runGenerateTypes } = await import(
			"@scripts/generators/src/pipelines/generate-types/generate-types"
		);

		const result = await runGenerateTypes();

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

		const { runGenerateTypes } = await import(
			"@scripts/generators/src/pipelines/generate-types/generate-types"
		);

		await runGenerateTypes();

		expect(mockDefaultPipeline).toHaveBeenCalledOnce();
		expect(mockDefaultPipeline.mock.calls[0][0].dataSource.collections).toEqual(
			["users", "posts"],
		);
	});

	it("deve propagar falha do pipeline como erro agregado", async () => {
		mockDefaultPipeline.mockRejectedValueOnce(new Error("pipeline failed"));

		const { runGenerateTypes } = await import(
			"@scripts/generators/src/pipelines/generate-types/generate-types"
		);

		await expect(runGenerateTypes()).rejects.toThrow(
			"Todos os datasources falharam: test",
		);
	});
});
