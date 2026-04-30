import { logger } from "@scripts/generators/src/lib/logger";
import {
	transformAllEntries,
	transformApiEntryToRegistry,
} from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/transform-and-merge/entry-transformer";
import { collectAnalysisReport } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/write-analysis-report/analysis-collector";
import { describe, expect, it, vi } from "vitest";

vi.mock("@scripts/generators/src/lib/logger", () => ({
	logger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		debug: vi.fn(),
		setLevel: vi.fn(),
		getLevel: vi.fn(() => "info"),
	},
}));

describe("transformApiEntryToRegistry", () => {
	it("deve transformar entrada válida corretamente", () => {
		const entry = {
			key: "test-entry",
			name: "Test Entry",
			options: {
				collectionName: "t_test",
				method: "POST",
				url: "/api/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).toEqual({
			key: "test-entry",
			name: "Test Entry",
			collection: "t_test",
			dataSourceKey: "main",
			method: "POST",
			url: "/api/test",
			payloadSchema: "z.any()",
			payloadData: null,
		});
	});

	it("deve mapear dataSourceKey quando informado pela API", () => {
		const entry = {
			key: "test-ds",
			name: "Test DS",
			options: {
				collectionName: "t_test",
				dataSourceKey: "d_db_ixcsoft",
				url: "/api/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.dataSourceKey).toBe("d_db_ixcsoft");
	});

	it("deve retornar null e log warning quando sem options", () => {
		const entry = { key: "no-options", name: "No Options" };

		const result = transformApiEntryToRegistry(entry);

		expect(result).toBeNull();
		expect(logger.debug).toHaveBeenCalledWith(
			expect.stringContaining("sem options"),
		);
	});

	it("deve retornar null e log warning quando sem collectionName", () => {
		const entry = {
			key: "no-collection",
			name: "No Collection",
			options: { method: "POST", url: "/test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).toBeNull();
		expect(logger.debug).toHaveBeenCalledWith(
			expect.stringContaining("sem collectionName"),
		);
	});

	it("deve usar URL vazia quando url é undefined", () => {
		const entry = {
			key: "no-url",
			name: "No URL",
			options: { collectionName: "t_test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.url).toBe("");
	});

	it("deve usar POST como method default", () => {
		const entry = {
			key: "no-method",
			name: "No Method",
			options: { collectionName: "t_test", url: "/test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.method).toBe("POST");
	});
});

describe("transformAllEntries", () => {
	it("deve transformar múltiplas entradas e ordenar por key", () => {
		const entries = [
			{
				key: "b-entry",
				name: "B Entry",
				options: { collectionName: "t_test", url: "/b" },
			},
			{
				key: "a-entry",
				name: "A Entry",
				options: { collectionName: "t_test", url: "/a" },
			},
		];

		const result = transformAllEntries(entries);

		expect(result).toHaveLength(2);
		expect(result[0].key).toBe("a-entry");
		expect(result[1].key).toBe("b-entry");
	});

	it("deve filtrar entradas inválidas", () => {
		const entries = [
			{
				key: "valid",
				name: "Valid",
				options: { collectionName: "t_test", url: "/valid" },
			},
			{ key: "invalid", name: "Invalid" },
		];

		const result = transformAllEntries(entries);

		expect(result).toHaveLength(1);
		expect(result[0].key).toBe("valid");
	});
});

describe("collectAnalysisReport", () => {
	it("deve separar entradas sem options e sem dataSourceKey", () => {
		const entries = [
			{ key: "no-options", name: "No Options" },
			{
				key: "no-datasource",
				name: "No DS",
				options: {
					collectionName: "t_test",
					method: "POST",
					url: "https://example.com",
				},
			},
			{
				key: "with-datasource",
				name: "With DS",
				options: {
					collectionName: "t_test",
					method: "POST",
					url: "https://example.com",
					dataSourceKey: "main",
				},
			},
		];

		const result = collectAnalysisReport(entries);

		expect(result.totalAnalyzed).toBe(3);
		expect(result.withoutOptions).toEqual([
			{
				key: "no-options",
				name: "No Options",
			},
		]);
		expect(result.withoutDataSourceKey).toEqual([
			{
				key: "no-datasource",
				name: "No DS",
				collectionName: "t_test",
				method: "POST",
				url: "https://example.com",
			},
		]);
	});
});
