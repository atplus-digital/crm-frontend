import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createMockCollectionTypesMap, mockRuntimeConfig } from "./setup";

describe("runGenerateTypes", () => {
	const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
	const originalConfig = {
		dryRun: mockRuntimeConfig.dryRun,
		outputPath: mockRuntimeConfig.outputPath,
		splitCollections: [...mockRuntimeConfig.splitCollections],
		splitOutputDir: mockRuntimeConfig.splitOutputDir,
	};

	beforeEach(() => {
		consoleLogSpy.mockClear();
		mockRuntimeConfig.dryRun = false;
		mockRuntimeConfig.outputPath = "/tmp/index.ts";
		mockRuntimeConfig.splitOutputDir = "/tmp/generated";
		mockRuntimeConfig.splitCollections = [];
	});

	afterEach(() => {
		mockRuntimeConfig.dryRun = originalConfig.dryRun;
		mockRuntimeConfig.outputPath = originalConfig.outputPath;
		mockRuntimeConfig.splitOutputDir = originalConfig.splitOutputDir;
		mockRuntimeConfig.splitCollections = [...originalConfig.splitCollections];
		vi.resetModules();
		vi.restoreAllMocks();
	});

	it("deve usar preview do arquivo principal quando não há split e dryRun=true", async () => {
		mockRuntimeConfig.dryRun = true;
		const collectionTypes = createMockCollectionTypesMap({
			users: { scalars: { id: "number" } },
		});
		const previewGeneratedFile = vi.fn().mockReturnValue({
			mode: "dry-run" as const,
			outputPath: "/tmp/index.ts",
			changed: true,
			diff: "+ nova linha",
		});
		const writeGeneratedFile = vi.fn();
		const fetchCollections = vi.fn().mockResolvedValue([{ name: "users" }]);

		vi.doMock("../src/generation/client", () => ({
			NocoBaseClient: class MockNocoBaseClient {
				public baseUrl = "https://example.com/api";

				public fetchCollections = fetchCollections;
			},
		}));
		vi.doMock("../src/generation/collection-types", () => ({
			buildCollectionTypes: vi.fn().mockResolvedValue(collectionTypes),
		}));
		vi.doMock("../src/utils/writer", () => ({
			previewGeneratedFile,
			previewMultipleFiles: vi.fn(),
			writeGeneratedFile,
			writeMultipleFiles: vi.fn(),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toEqual({
			mode: "dry-run",
			outputPath: "/tmp/index.ts",
			changed: true,
			diff: "+ nova linha",
		});
		expect(previewGeneratedFile).toHaveBeenCalledTimes(1);
		expect(writeGeneratedFile).not.toHaveBeenCalled();
	});

	it("deve escrever apenas o arquivo principal quando não há split e dryRun=false", async () => {
		const collectionTypes = createMockCollectionTypesMap({
			users: { scalars: { id: "number" } },
		});
		const writeGeneratedFile = vi.fn().mockReturnValue({
			mode: "write" as const,
			outputPath: "/tmp/index.ts",
			changed: true,
		});
		const fetchCollections = vi.fn().mockResolvedValue([{ name: "users" }]);

		vi.doMock("../src/generation/client", () => ({
			NocoBaseClient: class MockNocoBaseClient {
				public baseUrl = "https://example.com/api";

				public fetchCollections = fetchCollections;
			},
		}));
		vi.doMock("../src/generation/collection-types", () => ({
			buildCollectionTypes: vi.fn().mockResolvedValue(collectionTypes),
		}));
		vi.doMock("../src/utils/writer", () => ({
			previewGeneratedFile: vi.fn(),
			previewMultipleFiles: vi.fn(),
			writeGeneratedFile,
			writeMultipleFiles: vi.fn(),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toEqual({
			mode: "write",
			outputPath: "/tmp/index.ts",
			changed: true,
		});
		expect(writeGeneratedFile).toHaveBeenCalledTimes(1);
	});

	it("deve gerar imports entre arquivo principal e arquivos split em dry-run", async () => {
		mockRuntimeConfig.dryRun = true;
		mockRuntimeConfig.splitCollections = ["users", "roles"];

		const collectionTypes = createMockCollectionTypesMap({
			departments: {
				scalars: { id: "number" },
				relations: {
					owner: { type: "belongsTo", targetCollection: "users" },
				},
			},
			roles: { scalars: { id: "number" } },
			users: {
				scalars: { id: "number" },
				relations: {
					mainDepartment: {
						type: "belongsTo",
						targetCollection: "departments",
					},
					roles: { type: "m2m", targetCollection: "roles" },
				},
			},
		});

		const previewGeneratedFile = vi
			.fn()
			.mockImplementation((content: string) => ({
				mode: "dry-run" as const,
				outputPath: "/tmp/index.ts",
				changed: true,
				diff: content,
			}));
		const previewMultipleFiles = vi
			.fn()
			.mockImplementation((files: Map<string, string>) => ({
				mode: "dry-run" as const,
				files: [...files.entries()].map(([fileName, content]) => ({
					outputPath: `/tmp/generated/${fileName}.ts`,
					changed: true,
					diff: content,
				})),
				totalFiles: files.size,
				totalChanged: files.size,
			}));
		const fetchCollections = vi
			.fn()
			.mockResolvedValue([
				{ name: "departments" },
				{ name: "roles" },
				{ name: "users" },
			]);

		vi.doMock("../src/generation/client", () => ({
			NocoBaseClient: class MockNocoBaseClient {
				public baseUrl = "https://example.com/api";

				public fetchCollections = fetchCollections;
			},
		}));
		vi.doMock("../src/generation/collection-types", () => ({
			buildCollectionTypes: vi.fn().mockResolvedValue(collectionTypes),
		}));
		vi.doMock("../src/utils/writer", () => ({
			previewGeneratedFile,
			previewMultipleFiles,
			writeGeneratedFile: vi.fn(),
			writeMultipleFiles: vi.fn(),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toMatchObject({
			mode: "dry-run",
			totalFiles: 3,
			totalChanged: 3,
		});
		expect(previewGeneratedFile.mock.calls[0][0]).toContain(
			'import type { UsersBase } from "./users";',
		);
		expect(previewMultipleFiles.mock.calls[0][0].get("users")).toContain(
			'import type { RolesBase } from "./roles";',
		);
		expect(previewMultipleFiles.mock.calls[0][0].get("users")).toContain(
			'import type { DepartmentsBase } from "./index";',
		);
	});

	it("deve combinar resultados de escrita para múltiplos arquivos", async () => {
		mockRuntimeConfig.splitCollections = ["users"];
		const collectionTypes = createMockCollectionTypesMap({
			departments: { scalars: { id: "number" } },
			users: { scalars: { id: "number" } },
		});
		const writeGeneratedFile = vi.fn().mockReturnValue({
			mode: "write" as const,
			outputPath: "/tmp/index.ts",
			changed: true,
		});
		const writeMultipleFiles = vi.fn().mockReturnValue({
			mode: "write" as const,
			files: [{ outputPath: "/tmp/generated/users.ts", changed: false }],
			totalFiles: 1,
			totalChanged: 0,
		});
		const fetchCollections = vi
			.fn()
			.mockResolvedValue([{ name: "departments" }, { name: "users" }]);

		vi.doMock("../src/generation/client", () => ({
			NocoBaseClient: class MockNocoBaseClient {
				public baseUrl = "https://example.com/api";

				public fetchCollections = fetchCollections;
			},
		}));
		vi.doMock("../src/generation/collection-types", () => ({
			buildCollectionTypes: vi.fn().mockResolvedValue(collectionTypes),
		}));
		vi.doMock("../src/utils/writer", () => ({
			previewGeneratedFile: vi.fn(),
			previewMultipleFiles: vi.fn(),
			writeGeneratedFile,
			writeMultipleFiles,
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toEqual({
			mode: "write",
			files: [
				{ outputPath: "/tmp/index.ts", changed: true },
				{ outputPath: "/tmp/generated/users.ts", changed: false },
			],
			totalFiles: 2,
			totalChanged: 1,
		});
	});
});
