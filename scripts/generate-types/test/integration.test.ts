import * as fs from "node:fs";
import * as path from "node:path";
import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";
import {
	generateContent,
	generateSplitFiles,
} from "@scripts/generate-types/src/generation/content";
import { splitCollectionsByConfig } from "@scripts/generate-types/src/utils/collection-splitter";
import {
	previewMultipleFiles,
	writeMultipleFiles,
} from "@scripts/generate-types/src/utils/writer";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("integration - fluxo completo de geração", () => {
	const testOutputDir = path.resolve(process.cwd(), "test-output/integration");

	const mockCollectionTypes: CollectionTypesMap = {
		users: {
			scalars: new Map([
				["id", "number"],
				["email", "string"],
				["name", "string"],
			]),
			relations: new Map(),
		},
		f_funcionarios: {
			scalars: new Map([
				["id", "number"],
				["nome", "string"],
				["cargo", "string"],
			]),
			relations: new Map(),
		},
		t_negociacoes: {
			scalars: new Map([
				["id", "number"],
				["titulo", "string"],
				["valor", "number"],
			]),
			relations: new Map(),
		},
		other_collection: {
			scalars: new Map([
				["id", "number"],
				["data", "string"],
			]),
			relations: new Map(),
		},
	};

	beforeEach(() => {
		if (fs.existsSync(testOutputDir)) {
			fs.rmSync(testOutputDir, { recursive: true, force: true });
		}
	});

	afterEach(() => {
		if (fs.existsSync(testOutputDir)) {
			fs.rmSync(testOutputDir, { recursive: true, force: true });
		}
	});

	it("deve gerar arquivos split corretamente", () => {
		const splitConfig = ["users", "f_funcionarios", "t_negociacoes"];

		// 1. Split collections
		const { mainCollections, splitCollections } = splitCollectionsByConfig(
			mockCollectionTypes,
			splitConfig,
		);

		// Verifica split
		expect(splitCollections.size).toBe(3);
		expect(Object.keys(mainCollections)).toEqual(["other_collection"]);

		// 2. Gera conteúdo dos arquivos split
		const splitFilesContent = generateSplitFiles(splitCollections);

		expect(splitFilesContent.size).toBe(3);
		expect(splitFilesContent.has("users")).toBe(true);
		expect(splitFilesContent.has("f_funcionarios")).toBe(true);
		expect(splitFilesContent.has("t_negociacoes")).toBe(true);

		// 3. Escreve arquivos
		const result = writeMultipleFiles(splitFilesContent, testOutputDir);

		expect(result.mode).toBe("write");
		expect(result.totalFiles).toBe(3);
		expect(result.totalChanged).toBe(3);

		// 4. Verifica que os arquivos foram criados
		expect(fs.existsSync(path.join(testOutputDir, "users.ts"))).toBe(true);
		expect(fs.existsSync(path.join(testOutputDir, "funcionarios.ts"))).toBe(
			true,
		);
		expect(fs.existsSync(path.join(testOutputDir, "negociacoes.ts"))).toBe(
			true,
		);

		// 5. Verifica conteúdo gerado
		const usersContent = fs.readFileSync(
			path.join(testOutputDir, "users.ts"),
			"utf-8",
		);

		expect(usersContent).toContain("export interface UsersBase");
		expect(usersContent).toContain("id: number");
		expect(usersContent).toContain("email: string");
		expect(usersContent).toContain("name: string");
		expect(usersContent).toContain("export type UsersRelations"); // type alias quando não há relações
		expect(usersContent).toContain("export type UsersRelationKey");
	});

	it("deve gerar preview correto em dry-run", () => {
		const splitConfig = ["users", "f_funcionarios"];

		const { splitCollections } = splitCollectionsByConfig(
			mockCollectionTypes,
			splitConfig,
		);

		const splitFilesContent = generateSplitFiles(splitCollections);

		// Preview sem criar arquivos
		const result = previewMultipleFiles(splitFilesContent, testOutputDir);

		expect(result.mode).toBe("dry-run");
		expect(result.totalFiles).toBe(2);
		expect(result.totalChanged).toBe(2); // Todos são novos

		// Verifica que não criou arquivos
		expect(fs.existsSync(testOutputDir)).toBe(false);

		// Verifica que tem diffs
		for (const file of result.files) {
			expect(file.changed).toBe(true);
			expect(file.diff).toBeTruthy();
		}
	});

	it("deve detectar mudanças corretamente", () => {
		const splitConfig = ["users"];

		const { splitCollections } = splitCollectionsByConfig(
			mockCollectionTypes,
			splitConfig,
		);

		const splitFilesContent = generateSplitFiles(splitCollections);

		// Primeira escrita
		const firstResult = writeMultipleFiles(splitFilesContent, testOutputDir);
		expect(firstResult.totalChanged).toBe(1);

		// Segunda escrita (sem mudanças)
		const secondResult = writeMultipleFiles(splitFilesContent, testOutputDir);
		expect(secondResult.totalChanged).toBe(0);
		expect(secondResult.files[0].changed).toBe(false);

		// Preview (sem mudanças)
		const previewResult = previewMultipleFiles(
			splitFilesContent,
			testOutputDir,
		);
		expect(previewResult.totalChanged).toBe(0);
		expect(previewResult.files[0].changed).toBe(false);
		expect(previewResult.files[0].diff).toBe("");
	});

	it("deve gerar arquivo principal para collections não-split", () => {
		const splitConfig = ["users"];

		const { mainCollections } = splitCollectionsByConfig(
			mockCollectionTypes,
			splitConfig,
		);

		// Deve ter 3 collections no main (f_funcionarios, t_negociacoes, other_collection)
		expect(Object.keys(mainCollections)).toHaveLength(3);
		expect(mainCollections.f_funcionarios).toBeDefined();
		expect(mainCollections.t_negociacoes).toBeDefined();
		expect(mainCollections.other_collection).toBeDefined();

		// Gera conteúdo do arquivo principal
		const mainContent = generateContent(mainCollections);

		// Note: toPascalCase remove apenas prefixo "t_"
		expect(mainContent).toContain("export interface FFuncionariosBase");
		expect(mainContent).toContain("export interface NegociacoesBase");
		expect(mainContent).toContain("export interface OtherCollectionBase");
	});
});
