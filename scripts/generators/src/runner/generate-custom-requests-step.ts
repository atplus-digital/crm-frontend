import type { GeneratorDescriptor } from "@scripts/generators/src/lib/cli";
import { runGeneratorCli } from "@scripts/generators/src/lib/cli";
import { createGenerateCustomRequestsGenerator } from "../pipelines/generate-custom-requests";

export function createGenerateCustomRequestsStep(): GeneratorDescriptor {
	return {
		name: "generate-custom-requests",
		label: "Geração de custom requests",
		run: async () => {
			const generator = createGenerateCustomRequestsGenerator();
			await runGeneratorCli(generator);
		},
	};
}
