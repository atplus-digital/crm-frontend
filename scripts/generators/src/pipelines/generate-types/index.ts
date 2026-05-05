import { fileURLToPath } from "node:url";
import "./config";
import { runGeneratorCli } from "@scripts/generators/src/lib/cli";
import { defaultLogger } from "@scripts/generators/src/lib/logger";
import { createGenerateTypesGenerator } from "./generator/create-generator";

export { config } from "./config";
export { createGenerateTypesGenerator } from "./generator/create-generator";

function isExecutedDirectly(): boolean {
	const entryFile = process.argv[1];
	if (!entryFile) {
		return false;
	}

	return fileURLToPath(import.meta.url) === entryFile;
}

async function main(): Promise<void> {
	await runGeneratorCli(createGenerateTypesGenerator());
}

if (isExecutedDirectly()) {
	void main().catch((error) => {
		const message = error instanceof Error ? error.message : String(error);
		defaultLogger.error(message);
		process.exitCode = 1;
	});
}
