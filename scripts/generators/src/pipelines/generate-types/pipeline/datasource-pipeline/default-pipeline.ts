import { runPipelineStages } from "@scripts/generators/src/lib/pipeline-runner";
import { applyEnumAdapter } from "../stages/apply-enum-adapter";
import { applyEnumCorrections } from "../stages/apply-enum-corrections";
import { buildTypes } from "../stages/build-types";
import { fetchCollections } from "../stages/fetch-collections";
import { fetchRelations } from "../stages/fetch-relations";
import { generateContentStage as generateContent } from "../stages/generate-content";
import { inferEnums } from "../stages/infer-enums";
import { splitCollections } from "../stages/split-collections";
import { writeFiles } from "../stages/write-files";
import type { PipelineContext, PipelineStage } from "./types";

const stages = [
	fetchCollections,
	fetchRelations,
	buildTypes,
	applyEnumAdapter,
	inferEnums,
	applyEnumCorrections,
	splitCollections,
	generateContent,
	writeFiles,
] as PipelineStage[];

export async function defaultPipeline(
	initial: PipelineContext,
): Promise<PipelineContext> {
	return runPipelineStages(initial, stages);
}
