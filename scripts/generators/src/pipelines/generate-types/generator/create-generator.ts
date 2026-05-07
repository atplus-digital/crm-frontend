import {
	createPipelineGenerator,
	type RunGeneratorCliOptions,
} from "@scripts/generators/src/lib/cli";
import type { GenerateTypesExecutionContext } from "../runtime/context";
import {
	createGeneratorTasks,
	type GenerateTypesGeneratorContext,
	getExecutionContext,
	ORCHESTRATION_STEPS,
} from "./tasks";

export function createGenerateTypesGenerator(): RunGeneratorCliOptions<GenerateTypesGeneratorContext> {
	return createPipelineGenerator({
		name: "generate-types",
		context: {
			executionContext: undefined,
			overrideConfig: undefined,
		},
		stages: ORCHESTRATION_STEPS,
		getExecutionContext,
		createTasks: createGeneratorTasks,
	});
}

export type { GenerateTypesExecutionContext, GenerateTypesGeneratorContext };
