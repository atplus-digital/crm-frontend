import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mockRuntimeConfig } from "./setup";

describe("cli", () => {
	let consoleSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
		mockRuntimeConfig.showHelp = false;
		mockRuntimeConfig.dryRun = false;
		mockRuntimeConfig.verbose = false;
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("parseArgs", () => {
		it("deve reconhecer --help, -h, --dry-run e --", async () => {
			const { parseArgs } = await import("../src/cli/args");
			expect(parseArgs(["--help", "--dry-run"])).toEqual({
				showHelp: true,
				options: { dryRun: true, write: false, ixc: false },
			});
			expect(parseArgs(["-h", "--"])).toEqual({
				showHelp: true,
				options: { dryRun: false, write: false, ixc: false },
			});
		});

		it("deve lançar erro para argumentos desconhecidos", async () => {
			const { parseArgs } = await import("../src/cli/args");
			expect(() => parseArgs(["--invalido"])).toThrow(
				"Argumento desconhecido: --invalido",
			);
		});

		it("deve processar --dry-run seguido de --write", async () => {
			const { parseArgs } = await import("../src/cli/args");
			const result = parseArgs(["--dry-run", "--write"]);
			expect(result.options.dryRun).toBe(true);
			expect(result.options.write).toBe(true);
			expect(result.showHelp).toBe(false);
		});

		it("deve reconhecer --lock-workspace", async () => {
			const { parseArgs } = await import("../src/cli/args");
			const result = parseArgs(["--lock-workspace"]);
			expect(result.options.lockWorkspace).toBe(true);
		});

		it("deve ignorar separador -- e continuar processando", async () => {
			// When -- is encountered, it should be skipped with continue
			const { parseArgs } = await import("../src/cli/args");
			const result = parseArgs(["--help", "--", "--dry-run"]);
			expect(result.showHelp).toBe(true);
			expect(result.options.dryRun).toBe(true);
		});

		it("deve processar argumentos em ordem", async () => {
			const { parseArgs } = await import("../src/cli/args");
			const result = parseArgs(["--dry-run", "--write", "--lock-workspace"]);
			expect(result.options.dryRun).toBe(true);
			expect(result.options.write).toBe(true);
			expect(result.options.lockWorkspace).toBe(true);
		});
	});

	describe("printHelp", () => {
		it("deve imprimir a ajuda com a descrição atual dos tipos", async () => {
			const { printHelp } = await import("../src/cli/help");
			printHelp();

			expect(consoleSpy).toHaveBeenCalledWith(
				expect.stringContaining(
					`${mockRuntimeConfig.baseInterfaceNaming.prefix}<Collection>${mockRuntimeConfig.baseInterfaceNaming.suffix}: interface com campos escalares/FKs`,
				),
			);
		});
	});

	describe("printResult", () => {
		it("deve imprimir resultado de dry-run sem alterações", async () => {
			const { printResult } = await import("../src/cli/report");
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

		it("deve imprimir preview de dry-run com diff truncado", async () => {
			const { printResult } = await import("../src/cli/report");
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
			expect(consoleSpy).not.toHaveBeenCalledWith(
				expect.stringContaining("linha 0"),
			);
			expect(consoleSpy).not.toHaveBeenCalledWith(
				"... diff truncado (5 linhas omitidas)",
			);
		});

		it("deve imprimir detalhes do diff quando verbose=true", async () => {
			vi.resetModules();
			mockRuntimeConfig.verbose = true;
			const { printResult } = await import("../src/cli/report");
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
				expect.stringContaining("linha 0"),
			);
			expect(consoleSpy).toHaveBeenCalledWith(
				"... diff truncado (5 linhas omitidas)",
			);
		});

		it("deve imprimir resultado persistido sem alterações", async () => {
			const { printResult } = await import("../src/cli/report");
			printResult({
				mode: "write",
				outputPath: "/tmp/index.ts",
				changed: false,
			});

			expect(consoleSpy).toHaveBeenCalledWith(
				"ℹ️ Nenhuma alteração em: /tmp/index.ts",
			);
		});

		it("deve imprimir resultado multi-arquivo para write e dry-run", async () => {
			const { printResult } = await import("../src/cli/report");
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
			expect(consoleSpy).not.toHaveBeenCalledWith("  - /tmp/a.ts");
			expect(consoleSpy).not.toHaveBeenCalledWith("\n📄 /tmp/a.ts (1 linhas)");
		});

		it("deve imprimir detalhes multi-arquivo quando verbose=true", async () => {
			vi.resetModules();
			mockRuntimeConfig.verbose = true;
			const { printResult } = await import("../src/cli/report");

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
