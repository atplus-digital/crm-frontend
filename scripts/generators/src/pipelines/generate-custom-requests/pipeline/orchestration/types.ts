import type { Logger } from "@scripts/generators/src/lib/logging";
import type { PipelineReportsContext } from "@scripts/generators/src/lib/reports";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "../../@types/collection-schema";
import type { CustomRequestApiEntry } from "../../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../../@types/generated-registry";
import type { ScriptConfig } from "../../@types/script-config";

export interface PipelineContext {
	logger: Logger;
	reports?: PipelineReportsContext;
	config?: ScriptConfig;
	entries?: CustomRequestApiEntry[];
	transformedEntries?: GeneratedRegistryEntry[];
	mergedEntries?: GeneratedRegistryEntry[];
	schemaRegistry?: SchemaRegistry;
	schemaMappings?: CollectionSchemaMapping[];
	schemasNotFound?: CollectionSchemaMapping[];
}

export interface GenerationContext extends PipelineContext {
	reports: PipelineReportsContext;
	config: ScriptConfig;
	entries: CustomRequestApiEntry[];
	transformedEntries: GeneratedRegistryEntry[];
	mergedEntries: GeneratedRegistryEntry[];
	schemaRegistry: SchemaRegistry;
	schemaMappings: CollectionSchemaMapping[];
	schemasNotFound: CollectionSchemaMapping[];
}

export type GenerationStage<C extends GenerationContext = GenerationContext> = (
	context: Readonly<C>,
) => Promise<GenerationContext>;
