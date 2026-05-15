import { runStandardPipeline } from "@scripts/generators/src/lib/lifecycle/lifecycle";
import { env } from "@shared/utils/env";
import type { ListrTask } from "listr2";
import { Listr } from "listr2";
import type { GeneratorDefinition } from "../types";

type OrchestratorOptions = {
	concurrent?: boolean;
};

/**
 * Creates an orchestration task list from {@link GeneratorDefinition}s and
 * executes them via Listr2.
 *
 * Each generator runs its own pipeline stages; one failing does not
 * prevent others from running.
 *
 * @param generators — array of generator definitions to orchestrate
 */
export async function runOrchestrator(
	generators: GeneratorDefinition[],
	options: OrchestratorOptions = {},
): Promise<void> {
	const tasks = createOrchestrationTasks(generators);

	const rootListr = new Listr(tasks, {
		concurrent: options.concurrent ?? false,
		renderer: env.VITE_LOG_LEVEL === "debug" ? "verbose" : "default",
		rendererOptions: {
			lazy: false,
			collapseSkips: false,
			collapseErrors: false,
			collapseSubtasks: false,
		},
	});
	await rootListr.run();
}

type GeneratorCliTask = ListrTask<unknown, never, never>;

function createOrchestrationTasks(
	generators: GeneratorDefinition[],
): GeneratorCliTask[] {
	return generators.map((generator) => ({
		title: generator.name,
		task: (_, task) => {
			const pipelineInput = generator.createPipelineOptions(
				generator.defaultConfig,
			);

			return runStandardPipeline({
				...pipelineInput,
				task,
			});
		},
		exitOnError: false,
	}));
}
