import { defaultLogger } from "@scripts/generators/src/lib/logger";
import { Listr } from "listr2";

import { getSubtaskOptions } from "../lib/cli/defaults";
import { createListrTask } from "../lib/cli/listr-task";
import type {
	CreateGeneratorOptions,
	GeneratorContext,
	RunGeneratorCliOptions,
} from "../lib/cli/types";

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
		createListrTask(options.name, step, index, options.tasks.length),
	);

	return new Listr(tasks, {
		...getSubtaskOptions("main"),
		ctx: context,
		// Enable silent renderer when disableOutput is true
		silentRendererCondition: options.disableOutput ? () => true : undefined,
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
