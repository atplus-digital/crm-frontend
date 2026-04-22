import type { RuntimeConfig } from "../@types/script";
import {
	formatResultStage,
	loadConfigStage,
	resolveDatasourcesStage,
	runDatasourcesStage,
	runPostPipelineStage,
} from "./stages";
import type { GenerationContext } from "./types";
import { runGenerationPipeline } from "./types";

export interface RunGenerationPipelineOptions {
	overrideConfig?: Partial<RuntimeConfig>;
}

export async function runGenerationPipelineFactory(
	options: RunGenerationPipelineOptions = {},
): Promise<GenerationContext> {
	const stages = [
		loadConfigStage(options),
		resolveDatasourcesStage(),
		runDatasourcesStage(),
		runPostPipelineStage(),
		formatResultStage(),
	];

	const initialContext = {} as GenerationContext;

	return runGenerationPipeline(stages, initialContext);
}
