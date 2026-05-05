import { createGenerateCustomRequestsGenerator } from "../pipelines/generate-custom-requests/generator/create-generator";
import { createGeneratorStep } from "./create-generator-step";

export function createGenerateCustomRequestsStep() {
	return createGeneratorStep({
		name: "generate-custom-requests",
		label: "Geração de custom requests",
		createGenerator: createGenerateCustomRequestsGenerator,
	});
}
