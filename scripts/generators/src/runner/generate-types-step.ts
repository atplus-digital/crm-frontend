import { createGenerateTypesGenerator } from "../pipelines/generate-types/generator/create-generator";
import { createGeneratorStep } from "./create-generator-step";

export function createGenerateTypesStep() {
	return createGeneratorStep({
		name: "generate-types",
		label: "Geração de tipos (NocoBase + IXC)",
		createGenerator: createGenerateTypesGenerator,
	});
}
