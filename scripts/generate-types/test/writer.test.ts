import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	previewGeneratedFile,
	previewMultipleFiles,
	writeGeneratedFile,
	writeMultipleFiles,
} from "@scripts/generate-types/src/utils/writer";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("writer - single file", () => {
	const testOutputPath = path.resolve(
		os.tmpdir(),
		"crm-atplus-test/writer-single/generated.ts",
	);

	beforeEach(() => {
		// Garante que o diretório de teste não existe
		const testDir = path.dirname(testOutputPath);
		if (fs.existsSync(testDir)) {
			fs.rmSync(testDir, { recursive: true, force: true });
		}
	});

	afterEach(() => {
		// Limpa após os testes
		const testDir = path.dirname(testOutputPath);
		if (fs.existsSync(testDir)) {
			fs.rmSync(testDir, { recursive: true, force: true });
		}
	});

	describe("writeGeneratedFile", () => {
		it("deve criar arquivo quando não existir", () => {
			const content = "export interface User { id: number; }";

			const result = writeGeneratedFile(content, testOutputPath);

			expect(result.mode).toBe("write");
			expect(result.changed).toBe(true);
			expect(fs.existsSync(testOutputPath)).toBe(true);
			expect(fs.readFileSync(testOutputPath, "utf-8")).toBe(content);
		});

		it("deve retornar changed: false quando conteúdo for igual", () => {
			const content = "export interface User { id: number; }";

			// Primeira escrita
			writeGeneratedFile(content, testOutputPath);

			// Segunda escrita com mesmo conteúdo
			const result = writeGeneratedFile(content, testOutputPath);

			expect(result.changed).toBe(false);
		});

		it("deve atualizar arquivo quando conteúdo mudar", () => {
			const content1 = "export interface User { id: number; }";
			const content2 = "export interface User { id: number; name: string; }";

			writeGeneratedFile(content1, testOutputPath);
			const result = writeGeneratedFile(content2, testOutputPath);

			expect(result.changed).toBe(true);
			expect(fs.readFileSync(testOutputPath, "utf-8")).toBe(content2);
		});

		it("deve criar diretório automaticamente", () => {
			const content = "export interface User { id: number; }";

			writeGeneratedFile(content, testOutputPath);

			expect(fs.existsSync(path.dirname(testOutputPath))).toBe(true);
		});
	});

	describe("previewGeneratedFile", () => {
		it("deve retornar changed: false quando arquivo não existe", () => {
			const content = "export interface User { id: number; }";

			const result = previewGeneratedFile(content, testOutputPath);

			expect(result.mode).toBe("dry-run");
			expect(result.changed).toBe(true);
			expect(result.diff).toBeTruthy();
			// Não deve criar o arquivo
			expect(fs.existsSync(testOutputPath)).toBe(false);
		});

		it("deve retornar changed: false quando conteúdo for igual", () => {
			const content = "export interface User { id: number; }";

			// Criar arquivo
			writeGeneratedFile(content, testOutputPath);

			// Preview com mesmo conteúdo
			const result = previewGeneratedFile(content, testOutputPath);

			expect(result.changed).toBe(false);
			expect(result.diff).toBe("");
		});

		it("deve retornar diff quando conteúdo mudar", () => {
			const content1 = "export interface User { id: number; }";
			const content2 = "export interface User { id: number; name: string; }";

			writeGeneratedFile(content1, testOutputPath);
			const result = previewGeneratedFile(content2, testOutputPath);

			expect(result.changed).toBe(true);
			expect(result.diff).toBeTruthy();
			expect(result.diff).toContain("name: string");
		});
	});
});

describe("writer - multiple files", () => {
	const testOutputDir = path.resolve(
		os.tmpdir(),
		"crm-atplus-test/writer-multi",
	);

	beforeEach(() => {
		// Garante que o diretório de teste não existe
		if (fs.existsSync(testOutputDir)) {
			fs.rmSync(testOutputDir, { recursive: true, force: true });
		}
	});

	afterEach(() => {
		// Limpa após os testes
		if (fs.existsSync(testOutputDir)) {
			fs.rmSync(testOutputDir, { recursive: true, force: true });
		}
	});

	describe("writeMultipleFiles", () => {
		it("deve criar múltiplos arquivos", () => {
			const filesMap = new Map([
				["users", "export interface UsersBase { id: number; }"],
				["posts", "export interface PostsBase { id: number; }"],
				["comments", "export interface CommentsBase { id: number; }"],
			]);

			const result = writeMultipleFiles(filesMap, testOutputDir);

			expect(result.mode).toBe("write");
			expect(result.totalFiles).toBe(3);
			expect(result.totalChanged).toBe(3);
			expect(result.files).toHaveLength(3);

			// Verifica que todos foram marcados como changed
			for (const file of result.files) {
				expect(file.changed).toBe(true);
				expect(fs.existsSync(file.outputPath)).toBe(true);
			}

			// Verifica conteúdo
			expect(
				fs.readFileSync(path.join(testOutputDir, "users.ts"), "utf-8"),
			).toBe("export interface UsersBase { id: number; }");
			expect(
				fs.readFileSync(path.join(testOutputDir, "posts.ts"), "utf-8"),
			).toBe("export interface PostsBase { id: number; }");
		});

		it("deve criar diretório automaticamente", () => {
			const filesMap = new Map([
				["users", "export interface UsersBase { id: number; }"],
			]);

			writeMultipleFiles(filesMap, testOutputDir);

			expect(fs.existsSync(testOutputDir)).toBe(true);
		});

		it("deve detectar arquivos inalterados", () => {
			const filesMap = new Map([
				["users", "export interface UsersBase { id: number; }"],
				["posts", "export interface PostsBase { id: number; }"],
			]);

			// Primeira escrita
			writeMultipleFiles(filesMap, testOutputDir);

			// Segunda escrita com mesmo conteúdo
			const result = writeMultipleFiles(filesMap, testOutputDir);

			expect(result.totalFiles).toBe(2);
			expect(result.totalChanged).toBe(0);

			for (const file of result.files) {
				expect(file.changed).toBe(false);
			}
		});

		it("deve detectar mudanças parciais", () => {
			const filesMap1 = new Map([
				["users", "export interface UsersBase { id: number; }"],
				["posts", "export interface PostsBase { id: number; }"],
			]);

			const filesMap2 = new Map([
				["users", "export interface UsersBase { id: number; name: string; }"],
				["posts", "export interface PostsBase { id: number; }"], // Sem mudança
			]);

			writeMultipleFiles(filesMap1, testOutputDir);
			const result = writeMultipleFiles(filesMap2, testOutputDir);

			expect(result.totalFiles).toBe(2);
			expect(result.totalChanged).toBe(1);

			const usersFile = result.files.find((f) =>
				f.outputPath.includes("users"),
			);
			const postsFile = result.files.find((f) =>
				f.outputPath.includes("posts"),
			);

			expect(usersFile?.changed).toBe(true);
			expect(postsFile?.changed).toBe(false);
		});

		it("deve processar Map vazio", () => {
			const filesMap = new Map<string, string>();

			const result = writeMultipleFiles(filesMap, testOutputDir);

			expect(result.totalFiles).toBe(0);
			expect(result.totalChanged).toBe(0);
			expect(result.files).toHaveLength(0);
		});

		it("deve gerar nomes de arquivo em kebab-case sem prefixos", () => {
			const filesMap = new Map([
				["t_negociacoes", "export interface NegociacoesBase {}"],
				["f_funcionarios", "export interface FuncionariosBase {}"],
			]);

			writeMultipleFiles(filesMap, testOutputDir);

			expect(fs.existsSync(path.join(testOutputDir, "negociacoes.ts"))).toBe(
				true,
			);
			expect(fs.existsSync(path.join(testOutputDir, "funcionarios.ts"))).toBe(
				true,
			);
		});
	});

	describe("previewMultipleFiles", () => {
		it("deve gerar preview para múltiplos arquivos", () => {
			const filesMap = new Map([
				["users", "export interface UsersBase { id: number; }"],
				["posts", "export interface PostsBase { id: number; }"],
			]);

			const result = previewMultipleFiles(filesMap, testOutputDir);

			expect(result.mode).toBe("dry-run");
			expect(result.totalFiles).toBe(2);
			expect(result.totalChanged).toBe(2);
			expect(result.files).toHaveLength(2);

			for (const file of result.files) {
				expect(file.changed).toBe(true);
				expect(file.diff).toBeTruthy();
			}
		});

		it("deve detectar arquivos inalterados no preview", () => {
			const filesMap = new Map([
				["users", "export interface UsersBase { id: number; }"],
			]);

			// Primeira escrita
			writeMultipleFiles(filesMap, testOutputDir);

			// Preview com mesmo conteúdo
			const result = previewMultipleFiles(filesMap, testOutputDir);

			expect(result.totalChanged).toBe(0);
			expect(result.files[0].changed).toBe(false);
			expect(result.files[0].diff).toBe("");
		});
	});

	describe("getUnusedFiles", () => {
		it("deve retornar array vazio quando diretório não existe", () => {
			const result = getUnusedFiles(["/tmp/generated/index.ts"], testOutputDir);
			expect(result).toEqual([]);
		});

		it("deve retornar arquivos não presentes na lista de gerados", () => {
			// Cria arquivos no diretório
			fs.mkdirSync(testOutputDir, { recursive: true });
			fs.writeFileSync(path.join(testOutputDir, "index.ts"), "// index");
			fs.writeFileSync(path.join(testOutputDir, "users.ts"), "// users");
			fs.writeFileSync(path.join(testOutputDir, "old-file.ts"), "// old"); // Não está na lista

			const generatedFiles = [
				path.join(testOutputDir, "index.ts"),
				path.join(testOutputDir, "users.ts"),
			];

			const result = getUnusedFiles(generatedFiles, testOutputDir);

			expect(result).toHaveLength(1);
			expect(result[0]).toContain("old-file.ts");
		});

		it("deve ignorar arquivos não-.ts", () => {
			fs.mkdirSync(testOutputDir, { recursive: true });
			fs.writeFileSync(path.join(testOutputDir, "index.ts"), "// index");
			fs.writeFileSync(path.join(testOutputDir, "readme.md"), "// readme"); // Não-.ts

			const generatedFiles = [path.join(testOutputDir, "index.ts")];

			const result = getUnusedFiles(generatedFiles, testOutputDir);

			expect(result).toHaveLength(0);
		});
	});

	describe("cleanOutputDirectory", () => {
		it("deve remover arquivos não utilizados", () => {
			fs.mkdirSync(testOutputDir, { recursive: true });
			const fileToRemove = path.join(testOutputDir, "old-file.ts");
			fs.writeFileSync(fileToRemove, "// old");

			const removed = cleanOutputDirectory([fileToRemove]);

			expect(removed).toHaveLength(1);
			expect(fs.existsSync(fileToRemove)).toBe(false);
		});

		it("deve retornar array vazio quando arquivo não existe", () => {
			const removed = cleanOutputDirectory(["/tmp/non-existent/file.ts"]);
			expect(removed).toEqual([]);
		});

		it("deve remover múltiplos arquivos", () => {
			fs.mkdirSync(testOutputDir, { recursive: true });
			const file1 = path.join(testOutputDir, "old1.ts");
			const file2 = path.join(testOutputDir, "old2.ts");
			fs.writeFileSync(file1, "// old1");
			fs.writeFileSync(file2, "// old2");

			const removed = cleanOutputDirectory([file1, file2]);

			expect(removed).toHaveLength(2);
			expect(fs.existsSync(file1)).toBe(false);
			expect(fs.existsSync(file2)).toBe(false);
		});
	});
});
