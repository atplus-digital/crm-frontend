import type { GeneratorDefinition } from "@generators/lib/types";
import {
	createScriptTasks,
	type RunGeneratorCliOptions,
} from "./lib/pipeline/create-script-definition";
import { createCustomRequestsPipeline } from "./pipelines/generate-custom-requests/pipeline";
import { createGenerateTypesPipeline } from "./pipelines/generate-types/pipeline";

type GeneratorRegistryEntry<TFlag extends string = string> = {
	flag: TFlag;
	definition: GeneratorDefinition;
};

export type CreateScriptTasksInput = {
	description: string;
	outputDirs: string[];
	createCliOptions: () => RunGeneratorCliOptions<object>;
};

const GENERATOR_REGISTRY = [
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
] as const satisfies readonly GeneratorRegistryEntry[];

export type GeneratorFlag = (typeof GENERATOR_REGISTRY)[number]["flag"];

export type { GeneratorRegistryEntry };
export { GENERATOR_REGISTRY };
