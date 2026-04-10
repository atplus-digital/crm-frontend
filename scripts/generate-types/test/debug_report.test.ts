import { describe, expect, it, vi } from "vitest";
import { printResult } from "./scripts/generate-types/src/cli/report";

describe("Debug report test", () => {
	it("should debug printMultiFileDryRunResult with long diff", () => {
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

		console.log("About to call printResult with:", result);
		printResult(result);
		console.log("Called printResult");

		// Log all calls to see what was called
		console.log("console.log calls:", consoleSpy.mock.calls);

		const loggedMessages = consoleSpy.mock.calls.flat(2);
		console.log("flat logged messages:", loggedMessages);

		const truncationMessage = loggedMessages.some(
			(call) => Array.isArray(call) && call.join(" ").includes("omitidas"),
		);

		console.log("truncationMessage found:", truncationMessage);

		consoleSpy.mockRestore();

		expect(truncationMessage).toBe(true);
	});
});
