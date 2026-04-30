import type { Logger } from "@scripts/generators/src/lib/logger";
import type {
	ListrRendererFactory,
	ListrTask,
	ListrTaskResult,
	ListrTaskWrapper,
} from "listr2";

export type GeneratorContext<TContext extends object> = TContext & {
	logger: Logger;
};

export type ListrTaskRunner<TContext extends object> = ListrTaskWrapper<
	GeneratorContext<TContext>,
	ListrRendererFactory,
	ListrRendererFactory
>;

export type GeneratorTaskResult<TContext extends object> =
	| undefined
	| ListrTaskResult<GeneratorContext<TContext>>;

type NativeGeneratorTaskOptions<TContext extends object> = Pick<
	ListrTask<GeneratorContext<TContext>>,
	| "enabled"
	| "skip"
	| "retry"
	| "rollback"
	| "exitOnError"
	| "rendererOptions"
	| "fallbackRendererOptions"
>;

export interface GeneratorTask<TContext extends object>
	extends NativeGeneratorTaskOptions<TContext> {
	title: string;
	run: (
		context: GeneratorContext<TContext>,
		task: ListrTaskRunner<TContext>,
	) => GeneratorTaskResult<TContext>;
}

export type OrchestrationTaskRunner = ListrTaskWrapper<
	unknown,
	ListrRendererFactory,
	ListrRendererFactory
>;

export interface GeneratorOrchestrationStage<TExecutionContext> {
	title: string;
	run: (
		context: TExecutionContext,
		task: OrchestrationTaskRunner,
	) => Promise<void> | void;
}

export interface CreateOrchestrationTaskOptions<
	TContext extends object,
	TExecutionContext,
> {
	title?: string;
	stages: GeneratorOrchestrationStage<TExecutionContext>[];
	getExecutionContext: (
		context: GeneratorContext<TContext>,
	) => TExecutionContext;
}

export interface RunGeneratorCliOptions<TContext extends object> {
	name: string;
	context: TContext;
	tasks: GeneratorTask<TContext>[];
	logger?: Logger;
}

export interface CreateGeneratorOptions<TContext extends object> {
	name: string;
	tasks: GeneratorTask<TContext>[];
	context?: TContext;
}
