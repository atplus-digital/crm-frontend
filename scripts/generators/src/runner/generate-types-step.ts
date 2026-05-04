import {
	createGeneratorOptions,
	runGeneratorCli,
} from "@scripts/generators/src/lib/cli";
import { createGenerateTypesGenerator } from "../pipelines/generate-types/generator/create-generator";
import type { GeneratorContext } from "./orchestrator";

export function createGenerateTypesStep() {
	return {
		name: "generate-types",
		label: "Geração de tipos (NocoBase + IXC)",
		run: async (ctx: GeneratorContext) => {
			const generatorOptions = createGeneratorOptions({
				...createGenerateTypesGenerator(),
				logger: ctx.logger,
				disableOutput: true,
				writeOutput: ctx.writeOutput,
			});
			await runGeneratorCli(generatorOptions);
		},
	};
}
