import type { TaskRunner } from "@scripts/generators/src/lib/cli/types";
import type { PipelineReportsContext } from "@scripts/generators/src/lib/reports";

export interface PipelineExecutionContext<
	TRuntimeConfig,
	TPipelineContext = unknown,
> {
	task: TaskRunner;
	tempDir: string;
	outputDirs: string[];
	runtimeConfig: TRuntimeConfig;
	overrideConfig?: Partial<TRuntimeConfig>;
	reports: PipelineReportsContext;
	pipelineContext?: TPipelineContext;
	finalResult?: unknown;
}

export function getPipelineContextOrThrow<TPipelineContext>(
	context: { pipelineContext?: TPipelineContext },
	errorMessage: string,
): TPipelineContext {
	if (!context.pipelineContext) {
		throw new Error(errorMessage);
	}
	return context.pipelineContext;
}
