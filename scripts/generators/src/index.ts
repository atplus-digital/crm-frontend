import { parseGeneratorFlags } from "@scripts/generators/src/lib/cli/args";
import { runOrchestrator } from "@scripts/generators/src/lib/pipeline/orchestrator";
import { GENERATOR_REGISTRY } from "./generator-registry";

/**
 * Runs all registered generators via the orchestrator CLI.
 *
 * Each generator runs its own pipeline stages sequentially via Listr2.
 * One failing does not prevent others from running.
 */
async function main(): Promise<void> {
	const selectedFlags = parseGeneratorFlags(
		process.argv.slice(2),
		GENERATOR_REGISTRY.map((entry) => entry.flag),
	);

	const generators = GENERATOR_REGISTRY.filter((entry) =>
		selectedFlags.has(entry.flag),
	).map((entry) => entry.definition);

	await runOrchestrator(generators);
}

export { main as runGenerators };

// Self-executing entrypoint for the orchestrator
if (process.argv[1]?.endsWith("src/index.ts")) {
	void main().catch((error: unknown) => {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exitCode = 1;
	});
}
