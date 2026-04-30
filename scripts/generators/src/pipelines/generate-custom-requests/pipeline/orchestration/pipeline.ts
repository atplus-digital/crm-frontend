import type { ScriptConfig } from "../../@types/script-config";
import {
	fetchEntriesStage,
	loadConfigStage,
	transformAndMergeStage,
	writeAnalysisReportStage,
	writeOutputStage,
} from "./stages";
import type { GenerationContext } from "./types";
import { runGenerationPipeline } from "./types";

export interface RunGenerationPipelineOptions {
	overrideConfig?: Partial<ScriptConfig>;
}

export async function runGenerationPipelineFactory(
	options: RunGenerationPipelineOptions = {},
): Promise<GenerationContext> {
	const stages = [
		loadConfigStage({ overrideConfig: options.overrideConfig }),
		fetchEntriesStage(),
		writeAnalysisReportStage(),
		transformAndMergeStage(),
		writeOutputStage(),
	];

	const initialContext = {} as GenerationContext;

	return runGenerationPipeline(stages, initialContext);
}
