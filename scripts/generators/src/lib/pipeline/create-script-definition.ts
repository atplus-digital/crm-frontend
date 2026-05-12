import type { CreateScriptTasksInput } from "../../generator-registry";
import type { PipelineJsonReportResult } from "../lifecycle/lifecycle-tasks";
import type {
	GeneratorDefinition,
	OrchestrationTaskResult,
	OrchestrationTaskRunner,
	TaskRunner,
} from "../types";

//@ ──────────────────────────────────────────────
//@ Local types (no Logger)
//@ ──────────────────────────────────────────────

/**
 * A single CLI stage — maps to one Listr2 task.
 * Carries no Logger — progress is reported via the Listr2 task handle.
 */
export interface CliStage<TContext = unknown> {
	title: string;
	run: (
		context: TContext,
		task: OrchestrationTaskRunner,
	) => OrchestrationTaskResult;
}

/**
 * Fully resolved options for running a generator CLI via Listr2.
 */
export interface RunGeneratorCliOptions<TContext = unknown> {
	name: string;
	stages: CliStage<TContext>[];
	context: TContext;
	disableOutput?: boolean;
	reportsOutputPath?: string;
	latestReport?: PipelineJsonReportResult;
}

function runGeneratorCli<TContext>(
	options: RunGeneratorCliOptions<TContext>,
	task: TaskRunner,
): ReturnType<TaskRunner["newListr"]> {
	const rendererOptions = {};

	const tasks = options.stages.map((stage) => ({
		title: stage.title,
		task: (
			ctx: unknown,
			task: OrchestrationTaskRunner,
		): OrchestrationTaskResult => stage.run(ctx as TContext, task),
	}));

	return task.newListr(tasks, {
		concurrent: false,
		ctx: options.context,
		rendererOptions,
	});
}

export function createScriptTasks(
	input: CreateScriptTasksInput,
): GeneratorDefinition {
	const cliOptions = input.createCliOptions();
	const getOutputDirs = () => input.outputDirs;
	const noopOutputDirs = () => [] as string[];

	return {
		name: cliOptions.name,
		description: input.description,
		getOutputDirs,
		createPipelineOptions: () => ({
			defaultConfig: {},
			getOutputDirs: noopOutputDirs,
			stages: [(_, stageTask) => runGeneratorCli(cliOptions, stageTask)],
			label: cliOptions.name,
		}),
	};
}
