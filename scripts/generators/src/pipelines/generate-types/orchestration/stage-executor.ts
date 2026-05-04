import { createOrchestrationRunner } from "@scripts/generators/src/lib/pipeline-runner";
import type { GenerationContext } from "../pipeline/orchestration/types";
import { restoreAllSessions } from "../runtime/backup";
import type { GenerateTypesExecutionContext } from "../runtime/context";

const { runOrchestrationStage } = createOrchestrationRunner<GenerationContext>({
	createInitialContext: (logger) => ({ logger }) as GenerationContext,
	onError: (_error, context) => {
		restoreAllSessions(context as GenerateTypesExecutionContext);
	},
});

export { runOrchestrationStage };
