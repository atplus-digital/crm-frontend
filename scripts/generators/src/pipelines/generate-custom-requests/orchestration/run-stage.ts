import {
	createOrchestrationRunner,
	runWithErrorRecovery,
} from "@scripts/generators/src/lib/pipeline-runner";
import { createReportsContext } from "@scripts/generators/src/lib/reports";
import type { GenerationContext } from "../pipeline/orchestration/types";
import { restoreAllSessions } from "../runtime/backup";
import type { GenerateCustomRequestsExecutionContext } from "../runtime/context";

const { runOrchestrationStage } = createOrchestrationRunner<GenerationContext>({
	createInitialContext: (logger) =>
		({
			logger,
			reports: createReportsContext(),
		}) as GenerationContext,
});

export async function runStage(
	context: GenerateCustomRequestsExecutionContext,
	stage: Parameters<typeof runOrchestrationStage>[1],
): Promise<void> {
	await runWithErrorRecovery(
		async () => {
			await runOrchestrationStage(context, stage);
		},
		() => {
			restoreAllSessions(context);
		},
	);
}
