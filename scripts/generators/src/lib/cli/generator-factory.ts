import { createOrchestrationTask } from "./orchestration-task";
import { createGeneratorOptions } from "./runner";
import type {
	GeneratorContext,
	GeneratorOrchestrationStage,
	GeneratorTask,
	RunGeneratorCliOptions,
} from "./types";

interface CreatePipelineGeneratorOptions<
	TContext extends object,
	TExecutionContext,
> {
	name: string;
	context: TContext;
	stages: GeneratorOrchestrationStage<TExecutionContext>[];
	getExecutionContext: (
		context: GeneratorContext<TContext>,
	) => TExecutionContext;
	createTasks: (
		orchestrationTask: GeneratorTask<TContext>,
	) => GeneratorTask<TContext>[];
}

export function createPipelineGenerator<
	TContext extends object,
	TExecutionContext,
>(
	options: CreatePipelineGeneratorOptions<TContext, TExecutionContext>,
): RunGeneratorCliOptions<TContext> {
	const orchestrationTask = createOrchestrationTask({
		title: "orchestration",
		stages: options.stages,
		getExecutionContext: options.getExecutionContext,
	});

	return createGeneratorOptions({
		name: options.name,
		context: options.context,
		tasks: options.createTasks(orchestrationTask),
	});
}
