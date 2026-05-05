import type { GenerationContext } from "../pipeline/orchestration/types";
import { restoreAllSessions } from "../runtime/backup";
import type { GenerateTypesExecutionContext } from "../runtime/context";

export async function runStage(
	context: GenerateTypesExecutionContext,
	stageRunner: (ctx: GenerationContext) => Promise<GenerationContext>,
): Promise<void> {
	const currentCtx =
		context.pipelineContext ??
		({ logger: context.logger } as GenerationContext);

	try {
		context.pipelineContext = await stageRunner(currentCtx);
	} catch (error) {
		restoreAllSessions(context);
		throw error;
	}
}
