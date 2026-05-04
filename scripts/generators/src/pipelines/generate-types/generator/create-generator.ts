import {
	createGeneratorOptions,
	createOrchestrationTask,
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
	const orchestrationTask = createOrchestrationTask({
		title: "orchestration",
		stages: ORCHESTRATION_STEPS,
		getExecutionContext,
	});

	return createGeneratorOptions({
		name: "generate-types",
		tasks: createGeneratorTasks(orchestrationTask),
	});
}

export type { GenerateTypesExecutionContext, GenerateTypesGeneratorContext };
