import { runOrchestrator } from "@scripts/generators/src/lib/pipeline/orchestrator";
import { parseGeneratorFlags } from "@scripts/generators/src/lib/utils/args";
import { GENERATOR_REGISTRY } from "./generator-registry";

const CONCURRENT_FLAG = "--concurrent" as const;

async function main(): Promise<void> {
	const { selectedGeneratorFlags, selectedAdditionalFlags } =
		parseGeneratorFlags(
			process.argv.slice(2),
			GENERATOR_REGISTRY.map((entry) => entry.flag),
			{
				additionalAllowedFlags: [CONCURRENT_FLAG],
			},
		);

	const generators = GENERATOR_REGISTRY.filter((entry) =>
		selectedGeneratorFlags.has(entry.flag),
	).map((entry) => entry.definition);

	await runOrchestrator(generators, {
		concurrent: selectedAdditionalFlags.has(CONCURRENT_FLAG),
	});
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
