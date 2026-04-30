import type { Logger } from "@scripts/generators/src/lib/logger";

export type AsyncPipelineStage<TContext> = (
	context: Readonly<TContext>,
) => Promise<TContext>;

export interface RuntimePipelineContext<TPipelineContext> {
	logger: Logger;
	pipelineContext?: TPipelineContext;
}

interface RunExecutionStageOptions<
	TPipelineContext,
	TRuntimeContext extends RuntimePipelineContext<TPipelineContext>,
> {
	runtimeContext: TRuntimeContext;
	stage: AsyncPipelineStage<TPipelineContext>;
	createInitialContext: (logger: Logger) => TPipelineContext;
	onError?: (error: unknown) => void;
}

export async function runExecutionStage<
	TPipelineContext,
	TRuntimeContext extends RuntimePipelineContext<TPipelineContext>,
>(
	options: RunExecutionStageOptions<TPipelineContext, TRuntimeContext>,
): Promise<void> {
	const currentContext =
		options.runtimeContext.pipelineContext ??
		options.createInitialContext(options.runtimeContext.logger);

	try {
		options.runtimeContext.pipelineContext =
			await options.stage(currentContext);
	} catch (error) {
		options.onError?.(error);
		throw error;
	}
}

export async function runPipelineStages<TContext>(
	initialContext: TContext,
	stages: AsyncPipelineStage<TContext>[],
): Promise<TContext> {
	let currentContext = initialContext;

	for (const stage of stages) {
		currentContext = await stage(currentContext);
	}

	return currentContext;
}
