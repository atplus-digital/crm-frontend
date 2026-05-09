import type { PipelineExecutionContext } from "@scripts/generators/src/lib/pipeline/context";
import type { ScriptConfig } from "../@types/script-config";
import { CustomRequestsApiClient } from "../api/client";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

export async function fetchEntriesStage(
	context: PipelineExecutionContext<ScriptConfig>,
): Promise<PipelineExecutionContext<ScriptConfig>> {
	context.task.output = "Buscando entradas da API NocoBase...";

	const client = new CustomRequestsApiClient(context.runtimeConfig);
	const entries = await client.fetchAllCustomRequests();

	const pipelineCtx = {
		...((context.pipelineContext ?? {}) as CustomRequestsPipelineCtx),
		entries,
	} satisfies CustomRequestsPipelineCtx;

	context.task.output = `${entries.length} entradas encontradas na API`;

	return {
		...context,
		pipelineContext: pipelineCtx,
	};
}
