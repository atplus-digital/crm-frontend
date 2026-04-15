import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createMockCollectionTypesMap, mockRuntimeConfig } from "./setup";

describe("runGenerateTypes", () => {
	const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
	const originalConfig = {
		dryRun: mockRuntimeConfig.dryRun,
		outputDir: mockRuntimeConfig.outputDir,
		splitCollections: [...mockRuntimeConfig.splitCollections],
		baseInterfaceNaming: { ...mockRuntimeConfig.baseInterfaceNaming },
	};

	beforeEach(() => {
		consoleLogSpy.mockClear();
		mockRuntimeConfig.dryRun = false;
		mockRuntimeConfig.outputDir = "/tmp/generated";
		mockRuntimeConfig.splitCollections = [];
		mockRuntimeConfig.baseInterfaceNaming = {
			prefix: "",
			suffix: "Base",
		};
	});

	afterEach(() => {
		mockRuntimeConfig.dryRun = originalConfig.dryRun;
		mockRuntimeConfig.outputDir = originalConfig.outputDir;
		mockRuntimeConfig.splitCollections = [...originalConfig.splitCollections];
		mockRuntimeConfig.baseInterfaceNaming = {
			...originalConfig.baseInterfaceNaming,
		};
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
			.mockImplementation((content: string, outputPath?: string) => {
				const isCollectionsFile = outputPath?.includes("collections.ts");
				return {
					mode: "dry-run" as const,
					outputPath: outputPath || "/tmp/index.ts",
					changed: true,
					diff: content,
					...(isCollectionsFile ? { isCollectionsFile: true } : {}),
				};
			});
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
			getUnusedFiles: vi.fn().mockReturnValue([]),
			cleanOutputDirectory: vi.fn().mockReturnValue([]),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toMatchObject({
			mode: "dry-run",
			totalFiles: 4,
			totalChanged: 4,
		});
		expect(previewGeneratedFile).toHaveBeenCalledTimes(2);
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
		const writeGeneratedFile = vi
			.fn()
			.mockImplementation((_content, outputPath) => {
				return {
					mode: "write" as const,
					outputPath: outputPath || "/tmp/index.ts",
					changed: true,
				};
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
			getUnusedFiles: vi.fn().mockReturnValue([]),
			cleanOutputDirectory: vi.fn().mockReturnValue([]),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toEqual({
			mode: "write",
			files: [
				{ outputPath: "/tmp/generated/collections.ts", changed: true },
				{ outputPath: "/tmp/index.ts", changed: true },
				{ outputPath: "/tmp/generated/users.ts", changed: false },
			],
			totalFiles: 3,
			totalChanged: 2,
		});
	});

	it("deve resolver imports usando nomenclatura customizada da interface base", async () => {
		mockRuntimeConfig.dryRun = true;
		mockRuntimeConfig.splitCollections = ["users"];
		mockRuntimeConfig.baseInterfaceNaming = {
			prefix: "I",
			suffix: "",
		};

		const collectionTypes = createMockCollectionTypesMap({
			departments: {
				scalars: { id: "number" },
				relations: {
					owner: { type: "belongsTo", targetCollection: "users" },
				},
			},
			users: {
				scalars: { id: "number" },
				relations: {
					mainDepartment: {
						type: "belongsTo",
						targetCollection: "departments",
					},
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
			previewGeneratedFile,
			previewMultipleFiles,
			writeGeneratedFile: vi.fn(),
			writeMultipleFiles: vi.fn(),
			getUnusedFiles: vi.fn().mockReturnValue([]),
			cleanOutputDirectory: vi.fn().mockReturnValue([]),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		await runGenerateTypes();

		expect(previewGeneratedFile.mock.calls[0][0]).toContain(
			'import type { IUsers } from "./users";',
		);
		expect(previewMultipleFiles.mock.calls[0][0].get("users")).toContain(
			'import type { IDepartments } from "./index";',
		);
	});

	it("deve combinar resultados de dry-run para múltiplos arquivos", async () => {
		mockRuntimeConfig.dryRun = true;
		mockRuntimeConfig.splitCollections = ["users"];

		const collectionTypes = createMockCollectionTypesMap({
			departments: { scalars: { id: "number" } },
			users: { scalars: { id: "number" } },
		});

		const previewGeneratedFile = vi
			.fn()
			.mockImplementation((content: string, outputPath?: string) => ({
				mode: "dry-run" as const,
				outputPath: outputPath || "/tmp/index.ts",
				changed: true,
				diff: content,
			}));
		const previewMultipleFiles = vi.fn().mockReturnValue({
			mode: "dry-run" as const,
			files: [
				{
					outputPath: "/tmp/generated/users.ts",
					changed: true,
					diff: "+ export interface Users",
				},
			],
			totalFiles: 1,
			totalChanged: 1,
		});

		vi.doMock("../src/generation/client", () => ({
			NocoBaseClient: class MockNocoBaseClient {
				public baseUrl = "https://example.com/api";
				public fetchCollections = vi
					.fn()
					.mockResolvedValue([{ name: "departments" }, { name: "users" }]);
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
			getUnusedFiles: vi.fn().mockReturnValue([]),
			cleanOutputDirectory: vi.fn().mockReturnValue([]),
		}));

		const { runGenerateTypes } = await import("../src/generate-types");
		const result = await runGenerateTypes();

		expect(result).toMatchObject({
			mode: "dry-run",
			totalFiles: 3,
			totalChanged: 3,
		});
		expect(previewGeneratedFile).toHaveBeenCalledTimes(2);
		expect(previewMultipleFiles).toHaveBeenCalledTimes(1);
	});
});
