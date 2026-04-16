import { config } from "@scripts/generate-types/config";
import {
	runGenerateTypes,
	runGenerateTypesForDatasources,
} from "@scripts/generate-types/src/generate-types";
import { printHelp } from "./help";
import { printResult } from "./report";

export async function runCli() {
	if (config.showHelp) {
		printHelp();
		return;
	}

	const result =
		config.selectedDatasources.length > 0
			? await runGenerateTypesForDatasources(config.selectedDatasources)
			: await runGenerateTypes();

	printResult(result);
}
