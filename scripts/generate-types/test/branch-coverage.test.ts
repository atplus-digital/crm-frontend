import { describe, expect, it, vi } from "vitest";
import { printResult } from "../src/cli/report";

describe("Branch coverage tests", () => {
	describe("report.ts branch coverage", () => {
		it("should cover printDryRunResult with changed=false (branch on line 12)", () => {
			const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const result = {
				mode: "dry-run",
				outputPath: "/tmp/test.ts",
				changed: false,
			};

			printResult(result);

			expect(consoleSpy).toHaveBeenCalledWith(
				"🧪 Dry-run concluído: nenhuma alteração em /tmp/test.ts.",
			);

			consoleSpy.mockRestore();
		});

		it("should cover printPersistResult with changed=false (branch on line 34)", () => {
			const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const result = {
				mode: "write",
				outputPath: "/tmp/test.ts",
				changed: false,
			};

			printResult(result);

			expect(consoleSpy).toHaveBeenCalledWith(
				"ℹ️ Nenhuma alteração em: /tmp/test.ts",
			);

			consoleSpy.mockRestore();
		});

		it("should cover printMultiFilePersistResult with no changed files (branch on line 50)", () => {
			const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const result = {
				mode: "write",
				files: [
					{ outputPath: "/tmp/test1.ts", changed: false },
					{ outputPath: "/tmp/test2.ts", changed: false },
				],
				totalFiles: 2,
				totalChanged: 0,
			};

			printResult(result);

			const loggedMessages = consoleSpy.mock.calls.map((call) => call[0]);
			const hasSummary = loggedMessages.some((msg) =>
				msg.includes("Arquivos gerados:"),
			);
			const hasChangedSection = loggedMessages.some((msg) =>
				msg.includes("Alterados:"),
			);

			expect(hasSummary).toBe(true);
			expect(hasChangedSection).toBe(false);

			consoleSpy.mockRestore();
		});

		it("should cover printMultiFileDryRunResult with no changed files (branch on line 66)", () => {
			const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const result = {
				mode: "dry-run",
				files: [
					{ outputPath: "/tmp/test1.ts", changed: false, diff: null },
					{ outputPath: "/tmp/test2.ts", changed: false, diff: null },
				],
				totalFiles: 2,
				totalChanged: 0,
			};

			printResult(result);

			const loggedMessages = consoleSpy.mock.calls.map((call) => call[0]);
			const hasSummary = loggedMessages.some((msg) =>
				msg.includes("Dry-run concluído:"),
			);
			const hasChangesSection = loggedMessages.some((msg) =>
				msg.includes("Arquivos com alterações:"),
			);

			expect(hasSummary).toBe(true);
			expect(hasChangesSection).toBe(false);

			consoleSpy.mockRestore();
		});

		it("should cover printMultiFileDryRunResult with empty diff (branch on line 74)", () => {
			const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const result = {
				mode: "dry-run",
				files: [{ outputPath: "/tmp/test.ts", changed: true, diff: "" }],
				totalFiles: 1,
				totalChanged: 1,
			};

			printResult(result);

			consoleSpy.mockRestore();
		});
	});
});
