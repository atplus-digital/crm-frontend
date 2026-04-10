import { describe, expect, it, vi } from "vitest";
import { printResult } from "../src/cli/report";

describe("Report coverage gap tests", () => {
	it("should cover printPersistResult with changed=true (line 39)", () => {
		const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

		const result = {
			mode: "write",
			outputPath: "/tmp/test.ts",
			changed: true,
		};

		printResult(result);

		expect(consoleSpy).toHaveBeenCalledWith("✅ Arquivo gerado: /tmp/test.ts");

		consoleSpy.mockRestore();
	});

	it("should cover printMultiFileDryRunResult with long diff (lines 78-82)", () => {
		const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

		const longDiff = Array.from(
			{ length: 130 },
			(_, i) => `Linha ${i + 1}`,
		).join("\n");

		const result = {
			mode: "dry-run",
			files: [
				{
					outputPath: "/tmp/test.ts",
					changed: true,
					diff: longDiff,
				},
			],
			totalFiles: 1,
			totalChanged: 1,
		};

		printResult(result);

		const allLogCalls = consoleSpy.mock.calls;
		const hasTruncationCall = allLogCalls.some((call) =>
			call.some((arg) => typeof arg === "string" && arg.includes("omitidas")),
		);

		const hasDiffTruncado = allLogCalls.some((call) =>
			call.some(
				(arg) => typeof arg === "string" && arg.includes("diff truncado"),
			),
		);

		expect(hasTruncationCall || hasDiffTruncado).toBe(true);

		consoleSpy.mockRestore();
	});
});
