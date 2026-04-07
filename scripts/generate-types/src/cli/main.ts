import { config } from "@scripts/generate-types/config";
import { runGenerateTypes } from "@scripts/generate-types/src/generate-types";
import { printHelp } from "./help";
import { printResult } from "./report";

export async function runCli() {
	if (config.showHelp) {
		printHelp();
		return;
	}

	const result = await runGenerateTypes();

	printResult(result);
}
