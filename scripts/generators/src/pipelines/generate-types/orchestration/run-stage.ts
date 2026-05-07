import { runWithErrorRecovery } from "@scripts/generators/src/lib/pipeline-runner";
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

	context.pipelineContext = await runWithErrorRecovery(
		async () => {
			return stageRunner(currentCtx);
		},
		() => {
			restoreAllSessions(context);
		},
	);
}
