export { removeAccents } from "@scripts/generators/src/pipelines/generate-types/utils/naming";
export type { EnumOrigin } from "../../datasource-pipeline/types";
export type {
	InferredEnumInfo,
	InferredEnumsMap,
} from "./enum-inference-analysis";
export {
	extractDistinctValues,
	inferEnumsFromSample,
} from "./enum-inference-analysis";
export type { EnumInferenceConfig } from "./enum-inference-config";
export { buildEnumInferenceConfig } from "./enum-inference-config";
export { applyEnumCorrections } from "./enum-inference-corrections";
export { inferLabel } from "./enum-inference-heuristics";
export {
	adapterEnumsToInferredEnums,
	inferredEnumToEnumOptions,
	mergeEnums,
} from "./enum-inference-merge";
