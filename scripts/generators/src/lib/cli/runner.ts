import { defaultLogger } from "@scripts/generators/src/lib/logger";
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
	} as GeneratorContext<TContext>;

	const tasks = options.tasks.map((step, index) =>
		createListrTask(options.name, step, index, options.tasks.length),
	);

	return new Listr(tasks, {
		...getSubtaskOptions("main"),
		ctx: context,
		renderer: "default",
	});
}

export function createGeneratorOptions<TContext extends object>(
	options: CreateGeneratorOptions<TContext>,
): RunGeneratorCliOptions<TContext> {
	return {
		name: options.name,
		tasks: options.tasks,
		context: options.context ?? ({} as TContext),
	};
}

export async function runGeneratorCli<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Promise<void> {
	await buildGeneratorListr(options).run();
}
