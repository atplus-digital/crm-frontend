import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/cli";
import type { Logger } from "@scripts/generators/src/lib/logging";
import { runLinterFix } from "@scripts/generators/src/lib/validation/linter-runner";
import { validateTypeScriptDirectory } from "@scripts/generators/src/lib/validation/tsc-validator";
import {
	resolvePostPipelineInputs,
	runPostPipelineStage,
} from "../pipeline/orchestration/stages";
import {
	type GenerateTypesExecutionContext,
	getPipelineContext,
} from "../runtime/context";
import { runStage } from "./run-stage";

function runPostPipelineTask(
	outputDirs: string[],
	writeFilesCount: number,
	task: OrchestrationTaskRunner,
	logger: Logger,
) {
	logger.info("Iniciando pós-processamento...", {
		stage: "run-post-pipeline",
		outputDirs: String(outputDirs.length),
		writeFiles: String(writeFilesCount),
	});

	return task.newListr(
		[
			createLoggedSubtask({
				title: "validate-typescript",
				logger,
				run: async () => {
					const validationResults = await Promise.all(
						outputDirs.map(async (outputDir) => ({
							outputDir,
							isValid: await validateTypeScriptDirectory(outputDir),
						})),
					);
					const invalidOutputs = validationResults
						.filter((result) => !result.isValid)
						.map((result) => result.outputDir);

					if (invalidOutputs.length > 0) {
						throw new Error(
							`TypeScript inválido em: ${invalidOutputs.join(", ")}. Escrita atômica cancelada.`,
						);
					}
				},
			}),
			createLoggedSubtask({
				title: "run-linter-fix",
				logger,
				run: async () => {
					await runLinterFix(outputDirs, logger);
				},
			}),
		],
		{
			...getSubtaskOptions("parallel"),
		},
	);
}

export function runPostPipelineOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runStage(context, runPostPipelineStage());
	}

	const pipelineContext = getPipelineContext(context);
	const postPipelineInputs = resolvePostPipelineInputs(pipelineContext);

	if (!postPipelineInputs.hasSuccessfulResults) {
		context.pipelineContext = {
			...pipelineContext,
			postPipelineCompleted: false,
		};
		return;
	}

	const nextPipelineContext = {
		...pipelineContext,
		postPipelineCompleted: true,
	};
	context.pipelineContext = nextPipelineContext;

	if (postPipelineInputs.writeFiles.length > 0) {
		return runPostPipelineTask(
			postPipelineInputs.outputDirs,
			postPipelineInputs.writeFiles.length,
			task,
			pipelineContext.logger,
		);
	}
}
