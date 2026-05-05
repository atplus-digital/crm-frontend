import { fileURLToPath } from "node:url";
import { defaultLogger } from "@scripts/generators/src/lib/logging";
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

function isExecutedDirectly(): boolean {
	const entryFile = process.argv[1];
	if (!entryFile) {
		return false;
	}

	return fileURLToPath(import.meta.url) === entryFile;
}

if (isExecutedDirectly()) {
	void main().catch((error) => {
		const message = error instanceof Error ? error.message : String(error);
		defaultLogger.error(message);
		process.exitCode = 1;
	});
}
