import { fileURLToPath } from "node:url";
import { runGeneratorCli } from "@scripts/generators/src/lib/cli/runner";
import type { RunGeneratorCliOptions } from "@scripts/generators/src/lib/cli/types";
import { defaultLogger } from "@scripts/generators/src/lib/logging";

function isExecutedDirectly(moduleUrl: string): boolean {
	const entryFile = process.argv[1];
	if (!entryFile) {
		return false;
	}

	return fileURLToPath(moduleUrl) === entryFile;
}

/**
 * Self-executing entry point pattern.
 *
 * Runs the generator if the module is executed directly (via `pnpm` or `node`).
 * If imported as a module by another script (e.g., the orchestrator), does nothing.
 *
 * @param createGenerator — factory that returns the generator options
 */
export function executeEntry(
	moduleUrl: string,
	createGenerator: () => RunGeneratorCliOptions<object>,
): void {
	if (!isExecutedDirectly(moduleUrl)) return;

	void main().catch((error) => {
		const message = error instanceof Error ? error.message : String(error);
		defaultLogger.error(message);
		process.exitCode = 1;
	});

	async function main(): Promise<void> {
		await runGeneratorCli(createGenerator());
	}
}
