import { config } from "@scripts/generate-types/config";
import { runGenerateTypes } from "@scripts/generate-types/src/generate-types";
import { runGenerateIxc } from "@scripts/generate-types/src/generation/run-generate-ixc";
import { printHelp } from "./help";
import { printResult } from "./report";

export async function runCli() {
	if (config.showHelp) {
		printHelp();
		return;
	}

	const result = config.ixc ? await runGenerateIxc() : await runGenerateTypes();

	printResult(result);
}
