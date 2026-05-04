import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationListrTask,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/cli";
import {
	createFulfilledDatasourceResult,
	createRejectedDatasourceResult,
	runDatasourcesStage,
	runSingleDatasource,
} from "../pipeline/orchestration/stages";
import type { DatasourceRunResult } from "../pipeline/orchestration/types";
import {
	type GenerateTypesExecutionContext,
	getPipelineContext,
} from "../runtime/context";
import { runOrchestrationStage } from "./stage-executor";

export function runDatasourcesOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runOrchestrationStage(context, runDatasourcesStage());
	}

	const pipelineContext = getPipelineContext(context);
	const datasourceResults: DatasourceRunResult[] = new Array(
		pipelineContext.dataSourceConfigs.length,
	);

	const datasourceTasks: OrchestrationListrTask[] =
		pipelineContext.dataSourceConfigs.map((dataSource, index) =>
			createLoggedSubtask({
				title: dataSource.name,
				logger: pipelineContext.logger,
				run: async () => {
					try {
						const result = await runSingleDatasource(
							pipelineContext.logger,
							pipelineContext.config,
							dataSource,
						);
						datasourceResults[index] = createFulfilledDatasourceResult(
							dataSource.name,
							result,
						);
					} catch (error) {
						datasourceResults[index] = createRejectedDatasourceResult(
							pipelineContext.logger,
							dataSource.name,
							error,
						);
					}
				},
			}),
		);

	context.pipelineContext = {
		...pipelineContext,
		datasourceResults,
	};

	return task.newListr(datasourceTasks, {
		...getSubtaskOptions("parallel"),
		exitOnError: false,
	});
}
