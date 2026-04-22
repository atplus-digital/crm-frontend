import { pipeAsync } from "./pipe";
import { applyEnumAdapter } from "./stages/apply-enum-adapter";
import { applyEnumCorrections } from "./stages/apply-enum-corrections";
import { buildTypes } from "./stages/build-types";
import { fetchCollections } from "./stages/fetch-collections";
import { fetchRelations } from "./stages/fetch-relations";
import { fetchSchemas } from "./stages/fetch-schemas";
import { generateContentStage as generateContent } from "./stages/generate-content";
import { inferEnums } from "./stages/infer-enums";
import { splitCollections } from "./stages/split-collections";
import { writeFiles } from "./stages/write-files";
import type { PipelineContext, PipelineStage } from "./types";

const stages = [
	fetchCollections,
	fetchSchemas,
	fetchRelations,
	buildTypes,
	applyEnumAdapter,
	inferEnums,
	applyEnumCorrections,
	splitCollections,
	generateContent,
	writeFiles,
] as PipelineStage[];

export const defaultPipeline = pipeAsync<PipelineContext>(...stages);
