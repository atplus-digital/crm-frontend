import { defaultLogger } from "@scripts/generators/src/lib/logger";
import { createGenerateCustomRequestsStep } from "./runner/generate-custom-requests-step";
import { createGenerateTypesStep } from "./runner/generate-types-step";
import {
	type GeneratorDescriptor,
	runOrchestrator,
} from "./runner/orchestrator";

async function main(): Promise<void> {
	const generators: GeneratorDescriptor[] = [
		createGenerateTypesStep(),
		createGenerateCustomRequestsStep(),
	];

	await runOrchestrator({
		name: "run-generators",
		generators,
	});
}

void main().catch((error) => {
	const message = error instanceof Error ? error.message : String(error);
	defaultLogger.error(message);
	process.exitCode = 1;
});
