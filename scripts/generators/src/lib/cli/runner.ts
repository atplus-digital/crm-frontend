import { defaultLogger } from "@scripts/generators/src/lib/logging";
import { Listr } from "listr2";
import { getSubtaskOptions } from "./defaults";
import { createListrTask } from "./listr-task";
import type {
	CreateGeneratorOptions,
	GeneratorContext,
	RunGeneratorCliOptions,
} from "./types";

function buildGeneratorListr<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
) {
	const logger = options.logger ?? defaultLogger;
	const context = {
		...options.context,
		logger,
		writeOutput: options.writeOutput,
		disableOutput: options.disableOutput,
	} as GeneratorContext<TContext>;

	const tasks = options.tasks.map((step, index) =>
		createListrTask(options.name, step, index, options.tasks.length, context),
	);

	return new Listr(tasks, {
		...getSubtaskOptions("main"),
		renderer: "default",
		fallbackRenderer: "verbose",
		ctx: context,
		silentRendererCondition: options.disableOutput ? () => true : undefined,
		rendererOptions: {
			collapse: false, // Collapses subtasks after completion
			collapseSkips: false, // Collapses skipped tasks
			collapseErrors: false, // Collapses errors into the parent task
			collapseSubtasks: false, // Keep completed subtasks and their output visible
		},
	});
}

export function createGeneratorOptions<TContext extends object>(
	options: CreateGeneratorOptions<TContext>,
): RunGeneratorCliOptions<TContext> {
	return {
		name: options.name,
		tasks: options.tasks,
		context: options.context ?? ({} as TContext),
		logger: options.logger,
		disableOutput: options.disableOutput,
		writeOutput: options.writeOutput,
	};
}

export async function runGeneratorCli<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Promise<void> {
	await buildGeneratorListr(options).run();
}
