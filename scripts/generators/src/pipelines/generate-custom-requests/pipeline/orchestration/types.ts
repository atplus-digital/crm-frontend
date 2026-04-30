import type { Logger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestApiEntry } from "../../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../../@types/generated-registry";
import type { ScriptConfig } from "../../@types/script-config";

export interface GenerationContext {
	logger: Logger;
	config: ScriptConfig;
	entries: CustomRequestApiEntry[];
	transformedEntries: GeneratedRegistryEntry[];
	mergedEntries: GeneratedRegistryEntry[];
}

export type GenerationStage<C extends GenerationContext = GenerationContext> = (
	context: Readonly<C>,
) => Promise<GenerationContext>;

export async function runGenerationPipeline(
	stages: GenerationStage[],
	initialContext: GenerationContext,
): Promise<GenerationContext> {
	let current = initialContext;

	for (const stage of stages) {
		current = await stage(current);
	}

	return current;
}
