import type { Logger } from "@scripts/generators/src/lib/logger";
import type {
	ListrRendererFactory,
	ListrTask,
	ListrTaskResult,
	ListrTaskWrapper,
} from "listr2";

export type TaskOutputWriter = (line: string) => void;

export type GeneratorContext<TContext extends object> = TContext & {
	logger: Logger;
	writeOutput?: TaskOutputWriter;
	disableOutput?: boolean;
};

export type ListrTaskRunner<TContext extends object> = ListrTaskWrapper<
	GeneratorContext<TContext>,
	ListrRendererFactory,
	ListrRendererFactory
>;

export type GeneratorTaskResult<TContext extends object> =
	| undefined
	| ListrTaskResult<GeneratorContext<TContext>>;

export type GeneratorListrTask<TContext extends object> = ListrTask<
	GeneratorContext<TContext>,
	ListrRendererFactory,
	ListrRendererFactory
>;

export type OrchestrationListrTask = ListrTask<
	unknown,
	ListrRendererFactory,
	ListrRendererFactory
>;

type NativeGeneratorTaskOptions<TContext extends object> = Pick<
	GeneratorListrTask<TContext>,
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

export type OrchestrationTaskResult = undefined | ListrTaskResult<unknown>;

export interface GeneratorOrchestrationStage<TExecutionContext> {
	title: string;
	run: (
		context: TExecutionContext,
		task: OrchestrationTaskRunner,
	) => OrchestrationTaskResult;
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
	disableOutput?: boolean;
	writeOutput?: TaskOutputWriter;
}

export interface CreateGeneratorOptions<TContext extends object> {
	name: string;
	tasks: GeneratorTask<TContext>[];
	context?: TContext;
	logger?: Logger;
	disableOutput?: boolean;
	writeOutput?: TaskOutputWriter;
}
