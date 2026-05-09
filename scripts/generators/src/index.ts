import {
	runGeneratorCli,
	runOrchestrator,
} from "@scripts/generators/src/lib/cli/runner";
import type { GeneratorDefinition } from "@scripts/generators/src/lib/cli/types";
import { createCustomRequestsTasks } from "./pipelines/generate-custom-requests/pipeline";
import { createGenerateTypesTasks } from "./pipelines/generate-types/pipeline";

/**
 * Creates a GeneratorDefinition for the generate-types pipeline.
 *
 * Delegates to createGenerateTypesTasks() via runGeneratorCli(),
 * wrapped inside the orchestrator's StandardPipeline lifecycle.
 */
function createGenerateTypesDefinition(): GeneratorDefinition {
	const cliOptions = createGenerateTypesTasks();
	const outputDirs = ["src/generated/types"];

	return {
		name: cliOptions.name,
		description: "Generate TypeScript types from NocoBase and IXC schemas",
		createPipelineOptions: () => ({
			task: undefined as never,
			defaultConfig: {},
			getOutputDirs: () => outputDirs,
			stages: [
				async (ctx) => {
					await runGeneratorCli(cliOptions);
					return ctx;
				},
			],
			lockWorkspace: () => {},
			unlockWorkspace: () => {},
			label: cliOptions.name,
		}),
		defaultConfig: {},
		getOutputDirs: () => outputDirs,
	};
}

/**
 * Creates a GeneratorDefinition for the generate-custom-requests pipeline.
 *
 * Delegates to createCustomRequestsTasks() via runGeneratorCli(),
 * wrapped inside the orchestrator's StandardPipeline lifecycle.
 */
function createCustomRequestsDefinition(): GeneratorDefinition {
	const cliOptions = createCustomRequestsTasks();
	const outputDirs = ["src/generated/custom-requests"];

	return {
		name: cliOptions.name,
		description: "Generate custom request registry from NocoBase API",
		createPipelineOptions: () => ({
			task: undefined as never,
			defaultConfig: {},
			getOutputDirs: () => outputDirs,
			stages: [
				async (ctx) => {
					await runGeneratorCli(cliOptions);
					return ctx;
				},
			],
			lockWorkspace: () => {},
			unlockWorkspace: () => {},
			label: cliOptions.name,
		}),
		defaultConfig: {},
		getOutputDirs: () => outputDirs,
	};
}

/**
 * Runs all registered generators via the orchestrator CLI.
 *
 * Each generator runs its own pipeline stages sequentially via Listr2.
 * One failing does not prevent others from running.
 */
async function main(): Promise<void> {
	const generators: GeneratorDefinition[] = [
		createGenerateTypesDefinition(),
		createCustomRequestsDefinition(),
	];

	await runOrchestrator(generators);
}

export { main as runGenerators };

// Self-executing check — same pattern as executeEntry() but for the orchestrator
if (process.argv[1]?.endsWith("src/index.ts")) {
	void main().catch((error: unknown) => {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exitCode = 1;
	});
}
