import { runStandardPipeline } from "@scripts/generators/src/lib/pipeline/lifecycle";
import type { ListrTask } from "listr2";
import type { GeneratorDefinition } from "./types";

export type GeneratorCliTask = ListrTask<unknown, never, never>;

/**
 * Creates a Listr2 task tree for the orchestrator CLI.
 *
 * Each generator definition becomes a subtask that calls `runStandardPipeline()`.
 * One generator failing does not prevent others from running (exitOnError: false).
 *
 * @param generators - Array of generator definitions to orchestrate
 * @returns A configured Listr instance ready to be executed
 */
export function createOrchestrationTasks(
	generators: GeneratorDefinition[],
): GeneratorCliTask[] {
	return generators.map((generator) => ({
		title: generator.name,
		task: (_, task) => {
			const pipelineInput = generator.createPipelineOptions(
				generator.defaultConfig,
				task,
			);
			return runStandardPipeline({
				...pipelineInput,
				task,
			});
		},
		exitOnError: false,
	}));
}
