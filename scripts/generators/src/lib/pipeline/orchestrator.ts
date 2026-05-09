import { Listr } from "listr2";
import { env } from "../../config/env";
import { createOrchestrationTasks } from "../cli/tasks";
import type {
	GeneratorDefinition,
	OrchestrationTaskResult,
	OrchestrationTaskRunner,
	TaskRunner,
} from "../cli/types";

// ──────────────────────────────────────────────
// Local types (no Logger)
// ──────────────────────────────────────────────

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
}

/**
 * Input for {@link createGeneratorOptions} — partial context allowed.
 */
export interface CreateGeneratorOptions<TContext = unknown> {
	name: string;
	stages: CliStage<TContext>[];
	context?: TContext;
	disableOutput?: boolean;
}

// ──────────────────────────────────────────────
// createGeneratorOptions — build CLI options from input
// ──────────────────────────────────────────────

/**
 * Creates a fully resolved {@link RunGeneratorCliOptions} from partial input.
 * Fills missing context with an empty object.
 */
export function createGeneratorOptions<TContext>(
	options: CreateGeneratorOptions<TContext>,
): RunGeneratorCliOptions<TContext> {
	return {
		name: options.name,
		stages: options.stages,
		context: options.context ?? ({} as TContext),
		disableOutput: options.disableOutput,
	};
}

// ──────────────────────────────────────────────
// runGeneratorCli — build Listr2 task list and run
// ──────────────────────────────────────────────

/**
 * Builds a Listr2 task list from the given stages and executes it.
 *
 * @param options — resolved CLI options
 */
export function runGeneratorCli<TContext>(
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

// ──────────────────────────────────────────────
// runOrchestrator — orchestrate multiple generators
// ──────────────────────────────────────────────

/**
 * Creates an orchestration task list from {@link GeneratorDefinition}s and
 * executes them sequentially via Listr2.
 *
 * Each generator runs its own pipeline stages; one failing does not
 * prevent others from running.
 *
 * @param generators — array of generator definitions to orchestrate
 */
export async function runOrchestrator(
	generators: GeneratorDefinition[],
): Promise<void> {
	const tasks = createOrchestrationTasks(generators);

	const rootListr = new Listr(tasks, {
		concurrent: false,
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
