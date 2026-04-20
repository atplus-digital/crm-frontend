import * as fs from "node:fs";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	validateTypeScriptDirectory,
	writeGeneratedFile,
	writeMultipleFiles,
} from "@scripts/generate-types/src/utils/writer";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:fs", () => ({
	existsSync: vi.fn().mockReturnValue(false),
	mkdirSync: vi.fn(),
	writeFileSync: vi.fn(),
	readFileSync: vi.fn(),
	unlinkSync: vi.fn(),
	readdirSync: vi.fn(),
}));

vi.mock("@scripts/generate-types/src/utils/file-editor-check", () => ({
	isFileBeingEdited: vi.fn().mockReturnValue(false),
}));

vi.mock("@scripts/generate-types/config", () => ({
	config: {
		outputDir: "/tmp/test-output",
		validateTypes: false,
	},
}));

vi.mock("@scripts/generate-types/src/utils/naming", () => ({
	toFileName: (name: string) => name.toLowerCase(),
}));

const { getMockConfig, setMockConfig } = vi.hoisted(() => {
	let mockConfig = {
		outputDir: "/tmp/test-output",
		validateTypes: false,
	};
	return {
		getMockConfig: () => mockConfig,
		setMockConfig: (newConfig: Record<string, unknown>) => {
			mockConfig = { ...mockConfig, ...newConfig };
		},
	};
});

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		return getMockConfig();
	},
}));

describe("writer", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		setMockConfig({ outputDir: "/tmp/test-output", validateTypes: false });
	});

	describe("writeGeneratedFile", () => {
		it("deve criar arquivo quando não existe", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.writeFileSync).mockImplementation(() => {});

			const result = writeGeneratedFile("content", "/tmp/test.ts");

			expect(result).toEqual({
				resultType: "single",
				outputPath: "/tmp/test.ts",
				changed: true,
			});
			expect(fs.writeFileSync).toHaveBeenCalledWith(
				"/tmp/test.ts",
				"content",
				"utf-8",
			);
		});

		it("deve retornar changed:false quando conteúdo é idêntico", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("content");

			const result = writeGeneratedFile("content", "/tmp/test.ts");

			expect(result).toEqual({
				resultType: "single",
				outputPath: "/tmp/test.ts",
				changed: false,
			});
			expect(fs.writeFileSync).not.toHaveBeenCalled();
		});

		it("deve atualizar arquivo quando conteúdo é diferente", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("old content");
			vi.mocked(fs.writeFileSync).mockImplementation(() => {});

			const result = writeGeneratedFile("new content", "/tmp/test.ts");

			expect(result).toEqual({
				resultType: "single",
				outputPath: "/tmp/test.ts",
				changed: true,
			});
			expect(fs.writeFileSync).toHaveBeenCalledWith(
				"/tmp/test.ts",
				"new content",
				"utf-8",
			);
		});

		it("deve criar diretório se não existir", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.mkdirSync).mockImplementation(() => {});
			vi.mocked(fs.writeFileSync).mockImplementation(() => {});

			writeGeneratedFile("content", "/tmp/nested/test.ts");

			expect(fs.mkdirSync).toHaveBeenCalledWith("/tmp/nested", {
				recursive: true,
			});
		});
	});

	describe("writeMultipleFiles", () => {
		it("deve escrever múltiplos arquivos", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.mkdirSync).mockImplementation(() => {});
			vi.mocked(fs.writeFileSync).mockImplementation(() => {});

			const filesMap = new Map([
				["users", "users content"],
				["posts", "posts content"],
			]);

			const result = writeMultipleFiles(filesMap, "/tmp/output");

			expect(result).toEqual({
				resultType: "multi",
				files: [
					{ outputPath: "/tmp/output/users.ts", changed: true },
					{ outputPath: "/tmp/output/posts.ts", changed: true },
				],
				totalFiles: 2,
				totalChanged: 2,
				totalSkipped: 0,
			});
		});

		it("deve marcar arquivo como unchanged quando conteúdo é idêntico", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("existing content");

			const filesMap = new Map([["users", "existing content"]]);

			const result = writeMultipleFiles(filesMap, "/tmp/output");

			expect(result).toEqual({
				resultType: "multi",
				files: [{ outputPath: "/tmp/output/users.ts", changed: false }],
				totalFiles: 1,
				totalChanged: 0,
				totalSkipped: 0,
			});
		});

		it("deve criar diretório se não existir", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.mkdirSync).mockImplementation(() => {});
			vi.mocked(fs.writeFileSync).mockImplementation(() => {});

			const filesMap = new Map([["users", "content"]]);

			writeMultipleFiles(filesMap, "/tmp/new-dir");

			expect(fs.mkdirSync).toHaveBeenCalledWith("/tmp/new-dir", {
				recursive: true,
			});
		});
	});

	describe("validateTypeScriptDirectory", () => {
		it("deve retornar true quando validateTypes é false", () => {
			setMockConfig({ outputDir: "/tmp/test-output", validateTypes: false });

			const result = validateTypeScriptDirectory("/tmp/output");

			expect(result).toBe(true);
		});

		it("deve retornar true quando diretório não existe", () => {
			setMockConfig({ outputDir: "/tmp/test-output", validateTypes: true });
			vi.mocked(fs.existsSync).mockReturnValue(false);

			const result = validateTypeScriptDirectory("/tmp/nonexistent");

			expect(result).toBe(true);
		});
	});

	describe("getUnusedFiles", () => {
		it("deve retornar array vazio quando diretório não existe", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);

			const result = getUnusedFiles(["file1.ts"], "/tmp/output");

			expect(result).toEqual([]);
		});

		it("deve retornar arquivos que não estão na lista de gerados", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			(fs.readdirSync as ReturnType<typeof vi.fn>).mockReturnValue([
				"users.ts",
				"posts.ts",
				"comments.ts",
			]);

			const generatedFiles = ["/tmp/output/users.ts"];

			const result = getUnusedFiles(generatedFiles, "/tmp/output");

			expect(result).toEqual([
				"/tmp/output/posts.ts",
				"/tmp/output/comments.ts",
			]);
		});

		it("deve filtrar apenas arquivos terminados em .ts", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			(fs.readdirSync as ReturnType<typeof vi.fn>).mockReturnValue([
				"file.ts",
				"file.js",
				"README.md",
			]);

			const generatedFiles: string[] = [];

			const result = getUnusedFiles(generatedFiles, "/tmp/output");

			expect(result).toEqual(["/tmp/output/file.ts"]);
		});
	});

	describe("cleanOutputDirectory", () => {
		it("deve remover arquivos que existem", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.unlinkSync).mockImplementation(() => {});

			const files = ["/tmp/output/old1.ts", "/tmp/output/old2.ts"];

			const result = cleanOutputDirectory(files);

			expect(result).toEqual(files);
			expect(fs.unlinkSync).toHaveBeenCalledTimes(2);
		});

		it("deve ignorar arquivos que não existem", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);

			const files = ["/tmp/output/nonexistent.ts"];

			const result = cleanOutputDirectory(files);

			expect(result).toEqual([]);
			expect(fs.unlinkSync).not.toHaveBeenCalled();
		});

		it("deve retornar array vazio quando lista está vazia", () => {
			const result = cleanOutputDirectory([]);

			expect(result).toEqual([]);
			expect(fs.unlinkSync).not.toHaveBeenCalled();
		});
	});
});
