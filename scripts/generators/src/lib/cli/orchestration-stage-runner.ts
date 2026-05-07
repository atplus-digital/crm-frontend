import type { GeneratorOrchestrationStage } from "./types";

export async function runOrchestrationStages<TExecutionContext>(
	context: TExecutionContext,
	stages: GeneratorOrchestrationStage<TExecutionContext>[],
): Promise<void> {
	for (const stage of stages) {
		await stage.run(context);
	}
}
