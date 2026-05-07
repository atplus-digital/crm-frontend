import {
	createPipelineGenerator,
	type RunGeneratorCliOptions,
} from "@scripts/generators/src/lib/cli";
import {
	createGeneratorTasks,
	type GenerateCustomRequestsGeneratorContext,
	getExecutionContext,
	ORCHESTRATION_STEPS,
} from "./tasks";

export function createGenerateCustomRequestsGenerator(): RunGeneratorCliOptions<GenerateCustomRequestsGeneratorContext> {
	return createPipelineGenerator({
		name: "generate-custom-requests",
		context: {
			executionContext: undefined,
			overrideConfig: undefined,
		},
		stages: ORCHESTRATION_STEPS,
		getExecutionContext,
		createTasks: createGeneratorTasks,
	});
}

export type { GenerateCustomRequestsGeneratorContext };
