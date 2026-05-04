import type { Logger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestApiEntry } from "./custom-request-api";
import type { GeneratedRegistryEntry } from "./generated-registry";
import type { ScriptConfig } from "./script-config";

export interface PipelineContext {
	logger: Logger;
	config?: ScriptConfig;
	entries?: CustomRequestApiEntry[];
	transformedEntries?: GeneratedRegistryEntry[];
	mergedEntries?: GeneratedRegistryEntry[];
}

export interface GenerationContext extends PipelineContext {
	config: ScriptConfig;
	entries: CustomRequestApiEntry[];
	transformedEntries: GeneratedRegistryEntry[];
	mergedEntries: GeneratedRegistryEntry[];
}

export type GenerationStage<C extends GenerationContext = GenerationContext> = (
	context: Readonly<C>,
) => Promise<GenerationContext>;
