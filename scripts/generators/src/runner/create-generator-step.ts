import {
	type GeneratorContext as CliGeneratorContext,
	createGeneratorOptions,
	getSubtaskOptions,
	type ListrTaskRunner,
	type RunGeneratorCliOptions,
} from "@scripts/generators/src/lib/cli";
import { createListrTask } from "@scripts/generators/src/lib/cli/listr-task";
import type { GeneratorContext, GeneratorDescriptor } from "./orchestrator";

interface CreateGeneratorStepOptions<TContext extends object> {
	name: string;
	label: string;
	createGenerator: () => RunGeneratorCliOptions<TContext>;
}

export function createGeneratorStep<TContext extends object>(
	options: CreateGeneratorStepOptions<TContext>,
): GeneratorDescriptor {
	return {
		name: options.name,
		label: options.label,
		run: (ctx: GeneratorContext, task: ListrTaskRunner<object>) => {
			const generatorOptions = createGeneratorOptions({
				...options.createGenerator(),
				logger: ctx.logger,
			});

			const generatorContext = {
				...generatorOptions.context,
				logger: ctx.logger,
			} as CliGeneratorContext<TContext>;

			const nestedTasks = generatorOptions.tasks.map((step, index) =>
				createListrTask(
					generatorOptions.name,
					step,
					index,
					generatorOptions.tasks.length,
				),
			);

			return task.newListr(nestedTasks, {
				...getSubtaskOptions("nested"),
				ctx: generatorContext,
			});
		},
	};
}
