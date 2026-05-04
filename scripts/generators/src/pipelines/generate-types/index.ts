import "./config";
import { runGeneratorCli } from "@scripts/generators/src/lib/cli";
import { defaultLogger } from "@scripts/generators/src/lib/logger";
import { createGenerateTypesGenerator } from "./generator/create-generator";

export { config } from "./config";
export { createGenerateTypesGenerator } from "./generator/create-generator";

const generateTypes = createGenerateTypesGenerator();

async function main(): Promise<void> {
	await runGeneratorCli(generateTypes);
}

void main().catch((error) => {
	const message = error instanceof Error ? error.message : String(error);
	defaultLogger.error(message);
	process.exitCode = 1;
});
