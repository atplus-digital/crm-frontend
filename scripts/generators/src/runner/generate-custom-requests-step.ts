import {
	createGeneratorOptions,
	runGeneratorCli,
} from "@scripts/generators/src/lib/cli";
import { createGenerateCustomRequestsGenerator } from "../pipelines/generate-custom-requests";
import type { GeneratorContext } from "./orchestrator";

export function createGenerateCustomRequestsStep() {
	return {
		name: "generate-custom-requests",
		label: "Geração de custom requests",
		run: async (ctx: GeneratorContext) => {
			const generatorOptions = createGeneratorOptions({
				...createGenerateCustomRequestsGenerator(),
				logger: ctx.logger,
				disableOutput: true,
				writeOutput: ctx.writeOutput,
			});
			await runGeneratorCli(generatorOptions);
		},
	};
}
