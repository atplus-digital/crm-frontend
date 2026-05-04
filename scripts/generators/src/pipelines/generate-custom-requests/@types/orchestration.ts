import type { Logger } from "@scripts/generators/src/lib/logger";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "./collection-schema";
import type { CustomRequestApiEntry } from "./custom-request-api";
import type { GeneratedRegistryEntry } from "./generated-registry";
import type { ScriptConfig } from "./script-config";

export interface PipelineContext {
	logger: Logger;
	config?: ScriptConfig;
	entries?: CustomRequestApiEntry[];
	transformedEntries?: GeneratedRegistryEntry[];
	mergedEntries?: GeneratedRegistryEntry[];
	schemaRegistry?: SchemaRegistry;
	schemaMappings?: CollectionSchemaMapping[];
	schemasNotFound?: CollectionSchemaMapping[];
}

export interface GenerationContext extends PipelineContext {
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
