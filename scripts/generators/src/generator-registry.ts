import type { GeneratorDefinition } from "@scripts/generators/src/lib/cli/types";
import type { RunGeneratorCliOptions } from "@scripts/generators/src/lib/pipeline/orchestrator";
import { createScriptTasks } from "./lib/pipeline/create-script-definition";
import { createCustomRequestsPipeline } from "./pipelines/generate-custom-requests/pipeline";
import { createGenerateTypesPipeline } from "./pipelines/generate-types/pipeline";

export type GeneratorFlag = "--types" | "--requests";

type GeneratorRegistryEntry = {
	flag: GeneratorFlag;
	definition: GeneratorDefinition;
};

export type CreateScriptTasksInput = {
	description: string;
	outputDirs: string[];
	createCliOptions: () => RunGeneratorCliOptions<object>;
};

const GENERATOR_REGISTRY: GeneratorRegistryEntry[] = [
	{
		flag: "--types",
		definition: createScriptTasks({
			description: "Generate TypeScript types from NocoBase and IXC schemas",
			outputDirs: ["src/generated/types"],
			createCliOptions: createGenerateTypesPipeline,
		}),
	},
	{
		flag: "--requests",
		definition: createScriptTasks({
			description: "Generate custom request registry from NocoBase API",
			outputDirs: ["src/generated/custom-requests"],
			createCliOptions: createCustomRequestsPipeline,
		}),
	},
];

export type { GeneratorRegistryEntry };
export { GENERATOR_REGISTRY };
