import { config } from "../../config";
import { runGenerateTypes } from "../generate-types";
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
