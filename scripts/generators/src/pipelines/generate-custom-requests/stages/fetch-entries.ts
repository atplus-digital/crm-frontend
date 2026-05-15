import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { TaskRunner } from "@shared/types";
import type { ScriptConfig } from "../@types/script-config";
import { CustomRequestsApiClient } from "../api/client";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

export async function fetchEntriesStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	task.output = "Buscando entradas da API NocoBase...";

	const client = new CustomRequestsApiClient(context.runtimeConfig);
	const entries = await client.fetchAllCustomRequests();

	const pipelineCtx = {
		...((context.pipelineContext ?? {}) as CustomRequestsPipelineCtx),
		entries,
	} satisfies CustomRequestsPipelineCtx;

	task.output = `${entries.length} entradas encontradas na API`;

	return {
		...context,
		pipelineContext: pipelineCtx,
	};
}
