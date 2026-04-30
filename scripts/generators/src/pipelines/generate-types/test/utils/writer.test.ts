import * as fs from "node:fs";
import { writeGeneratedFile } from "@scripts/generators/src/pipelines/generate-types/pipeline/post-pipeline/writer";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:fs", () => ({
	existsSync: vi.fn().mockReturnValue(false),
	mkdirSync: vi.fn(),
	writeFileSync: vi.fn(),
	readFileSync: vi.fn(),
	unlinkSync: vi.fn(),
	readdirSync: vi.fn(),
}));

vi.mock(
	"@scripts/generators/src/pipelines/generate-types/pipeline/post-pipeline/file-editor-check",
	() => ({
		isFileBeingEdited: vi.fn().mockReturnValue(false),
	}),
);

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

vi.mock("@scripts/generators/src/pipelines/generate-types/config", () => ({
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
});
