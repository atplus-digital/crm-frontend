import type { GeneratorDescriptor } from "@scripts/generators/src/lib/cli";
import { runGeneratorCli } from "@scripts/generators/src/lib/cli";
import { createGenerateTypesGenerator } from "../pipelines/generate-types/generator/create-generator";

export function createGenerateTypesStep(): GeneratorDescriptor {
	return {
		name: "generate-types",
		label: "Geração de tipos (NocoBase + IXC)",
		run: async () => {
			const generator = createGenerateTypesGenerator();
			await runGeneratorCli(generator);
		},
	};
}
