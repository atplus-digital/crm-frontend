import { parseArgs } from "@scripts/generate-types/src/cli/args";
import { printHelp } from "@scripts/generate-types/src/cli/help";
import { printResult } from "@scripts/generate-types/src/cli/report";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mockRuntimeConfig } from "./setup";

describe("cli", () => {
	let consoleSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
		mockRuntimeConfig.showHelp = false;
		mockRuntimeConfig.dryRun = false;
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("parseArgs", () => {
		it("deve reconhecer --help, -h, --dry-run e --", () => {
			expect(parseArgs(["--help", "--dry-run"])).toEqual({
				showHelp: true,
				options: { dryRun: true },
			});
			expect(parseArgs(["-h", "--"])).toEqual({
				showHelp: true,
				options: { dryRun: false },
			});
		});

		it("deve lançar erro para argumentos desconhecidos", () => {
			expect(() => parseArgs(["--invalido"])).toThrow(
				"Argumento desconhecido: --invalido",
			);
		});
	});

	describe("printHelp", () => {
		it("deve imprimir a ajuda com a descrição atual dos tipos", () => {
			printHelp();

			expect(consoleSpy).toHaveBeenCalledWith(
				expect.stringContaining(
					"<Collection>Base: interface com campos escalares/FKs",
				),
			);
		});
	});

	describe("printResult", () => {
		it("deve imprimir resultado de dry-run sem alterações", () => {
			printResult({
				mode: "dry-run",
				outputPath: "/tmp/index.ts",
				changed: false,
				diff: "",
			});

			expect(consoleSpy).toHaveBeenCalledWith(
				"🧪 Dry-run concluído: nenhuma alteração em /tmp/index.ts.",
			);
		});

		it("deve imprimir preview de dry-run com diff truncado", () => {
			const diff = Array.from(
				{ length: 125 },
				(_, index) => `linha ${index}`,
			).join("\n");

			printResult({
				mode: "dry-run",
				outputPath: "/tmp/index.ts",
				changed: true,
				diff,
			});

			expect(consoleSpy).toHaveBeenCalledWith(
				"🧪 Dry-run concluído: diferenças detectadas em /tmp/index.ts (125 linhas).",
			);
			expect(consoleSpy).toHaveBeenCalledWith(
				"... diff truncado (5 linhas omitidas)",
			);
		});

		it("deve imprimir resultado persistido sem alterações", () => {
			printResult({
				mode: "write",
				outputPath: "/tmp/index.ts",
				changed: false,
			});

			expect(consoleSpy).toHaveBeenCalledWith(
				"ℹ️ Nenhuma alteração em: /tmp/index.ts",
			);
		});

		it("deve imprimir resultado multi-arquivo para write e dry-run", () => {
			printResult({
				mode: "write",
				files: [
					{ outputPath: "/tmp/a.ts", changed: true },
					{ outputPath: "/tmp/b.ts", changed: false },
				],
				totalFiles: 2,
				totalChanged: 1,
			});
			printResult({
				mode: "dry-run",
				files: [
					{ outputPath: "/tmp/a.ts", changed: true, diff: "+ nova linha" },
					{ outputPath: "/tmp/b.ts", changed: false, diff: "" },
				],
				totalFiles: 2,
				totalChanged: 1,
			});

			expect(consoleSpy).toHaveBeenCalledWith(
				"✅ Arquivos gerados: 2 (1 alterados, 1 inalterados)",
			);
			expect(consoleSpy).toHaveBeenCalledWith(
				"🧪 Dry-run concluído: 2 arquivos (1 com alterações, 1 inalterados)",
			);
			expect(consoleSpy).toHaveBeenCalledWith("  - /tmp/a.ts");
			expect(consoleSpy).toHaveBeenCalledWith("\n📄 /tmp/a.ts (1 linhas)");
		});
	});

	describe("runCli", () => {
		it("deve exibir ajuda quando config.showHelp é true", async () => {
			vi.resetModules();
			mockRuntimeConfig.showHelp = true;
			const printHelpMock = vi.fn();
			const printResultMock = vi.fn();
			const runGenerateTypesMock = vi.fn();

			vi.doMock("../src/cli/help", () => ({ printHelp: printHelpMock }));
			vi.doMock("../src/cli/report", () => ({ printResult: printResultMock }));
			vi.doMock("../src/generate-types", () => ({
				runGenerateTypes: runGenerateTypesMock,
			}));

			const { runCli } = await import("../src/cli/main");
			await runCli();

			expect(printHelpMock).toHaveBeenCalledTimes(1);
			expect(runGenerateTypesMock).not.toHaveBeenCalled();
			expect(printResultMock).not.toHaveBeenCalled();
		});

		it("deve gerar tipos e imprimir resultado quando config.showHelp é false", async () => {
			vi.resetModules();
			mockRuntimeConfig.showHelp = false;
			const result = {
				mode: "write" as const,
				outputPath: "/tmp/index.ts",
				changed: true,
			};
			const printHelpMock = vi.fn();
			const printResultMock = vi.fn();
			const runGenerateTypesMock = vi.fn().mockResolvedValue(result);

			vi.doMock("../src/cli/help", () => ({ printHelp: printHelpMock }));
			vi.doMock("../src/cli/report", () => ({ printResult: printResultMock }));
			vi.doMock("../src/generate-types", () => ({
				runGenerateTypes: runGenerateTypesMock,
			}));

			const { runCli } = await import("../src/cli/main");
			await runCli();

			expect(printHelpMock).not.toHaveBeenCalled();
			expect(runGenerateTypesMock).toHaveBeenCalledTimes(1);
			expect(printResultMock).toHaveBeenCalledWith(result);
		});
	});
});
