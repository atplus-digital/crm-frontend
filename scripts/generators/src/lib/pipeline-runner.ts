import type { Logger } from "@scripts/generators/src/lib/logging";

export type AsyncPipelineStage<TContext> = (
	context: Readonly<TContext>,
) => Promise<TContext>;

export interface RuntimePipelineContext<TPipelineContext> {
	logger: Logger;
	pipelineContext?: TPipelineContext;
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

export interface CreateOrchestrationRunnerOptions<TPipelineContext> {
	createInitialContext: (logger: Logger) => TPipelineContext;
	onError?: (error: unknown) => void;
}

/**
 * Creates a `runOrchestrationStage` function with error handling.
 *
 * Each pipeline creates its own runner to handle backup restoration on failure.
 */
export function createOrchestrationRunner<TPipelineContext>(
	options: CreateOrchestrationRunnerOptions<TPipelineContext>,
) {
	async function runOrchestrationStage(
		runtimeContext: RuntimePipelineContext<TPipelineContext>,
		stage: AsyncPipelineStage<TPipelineContext>,
	): Promise<void> {
		const currentContext =
			runtimeContext.pipelineContext ??
			options.createInitialContext(runtimeContext.logger);

		try {
			runtimeContext.pipelineContext = await stage(currentContext);
		} catch (error) {
			options.onError?.(error);
			throw error;
		}
	}

	return { runOrchestrationStage };
}
