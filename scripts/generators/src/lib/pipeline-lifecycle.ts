import { runOrchestrationStages } from "@scripts/generators/src/lib/cli/orchestration-stage-runner";
import type { GeneratorOrchestrationStage } from "@scripts/generators/src/lib/cli/types";
import type { Logger } from "@scripts/generators/src/lib/logging";

interface StandardStandalonePipelineOptions<
	TOverrideConfig,
	TExecutionContext,
	TResult,
> {
	overrideConfig: TOverrideConfig | undefined;
	logger: Logger;
	onBeforeRun?: () => void;
	createExecutionContext: (
		overrideConfig: TOverrideConfig | undefined,
		logger: Logger,
	) => TExecutionContext;
	lockWorkspace: () => void;
	backupOutputs: (context: TExecutionContext) => void;
	orchestrationStages: GeneratorOrchestrationStage<TExecutionContext>[];
	assertResult: (context: TExecutionContext) => TResult;
	cleanupBackups: (context: TExecutionContext) => Promise<void>;
}

export async function runStandardStandalonePipeline<
	TOverrideConfig,
	TExecutionContext,
	TResult,
>(
	options: StandardStandalonePipelineOptions<
		TOverrideConfig,
		TExecutionContext,
		TResult
	>,
): Promise<TResult> {
	options.onBeforeRun?.();

	const context = options.createExecutionContext(
		options.overrideConfig,
		options.logger,
	);

	options.lockWorkspace();
	options.backupOutputs(context);

	await runOrchestrationStages(context, options.orchestrationStages);

	const result = options.assertResult(context);
	await options.cleanupBackups(context);

	return result;
}
