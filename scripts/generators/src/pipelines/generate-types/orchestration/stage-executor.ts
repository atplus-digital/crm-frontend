import { runExecutionStage } from "@scripts/generators/src/lib/pipeline-runner";
import type {
	GenerationContext,
	GenerationStage,
} from "../pipeline/orchestration/types";
import { restoreAllSessions } from "../runtime/backup";
import type { GenerateTypesExecutionContext } from "../runtime/context";

export async function runOrchestrationStage(
	context: GenerateTypesExecutionContext,
	stage: GenerationStage,
): Promise<void> {
	await runExecutionStage({
		runtimeContext: context,
		stage,
		createInitialContext: (logger) => ({ logger }) as GenerationContext,
		onError: () => {
			restoreAllSessions(context);
		},
	});
}
