import type { TaskRunner } from "@scripts/generators/src/lib/cli/types";
import type { PipelineExecutionContext } from "@scripts/generators/src/lib/pipeline/context";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "../@types/collection-schema";
import type { ScriptConfig } from "../@types/script-config";
import {
	createRegistry,
	loadCollectionSchemas,
} from "../utils/collection-schema-loader";

export interface CustomRequestsPipelineCtx {
	entries?: import("../@types/custom-request-api").CustomRequestApiEntry[];
	transformedEntries?: import("../@types/generated-registry").GeneratedRegistryEntry[];
	mergedEntries?: import("../@types/generated-registry").GeneratedRegistryEntry[];
	schemaRegistry?: SchemaRegistry;
	schemaMappings?: CollectionSchemaMapping[];
	schemasNotFound?: CollectionSchemaMapping[];
}

export async function loadSchemasStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	task.output = "Carregando schemas de collections...";

	const loadResult = loadCollectionSchemas();
	const registry = createRegistry(loadResult.mappings);

	const pipelineCtx: CustomRequestsPipelineCtx = {
		...((context.pipelineContext ?? {}) as CustomRequestsPipelineCtx),
		schemaRegistry: registry,
		schemaMappings: loadResult.mappings,
		schemasNotFound: [],
	};

	task.output = `${loadResult.mappings.length} schemas de collections carregados`;

	return {
		...context,
		pipelineContext: pipelineCtx,
	};
}
