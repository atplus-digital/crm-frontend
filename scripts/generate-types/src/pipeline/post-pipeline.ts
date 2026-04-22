import { config } from "@scripts/generate-types/config";
import { runLinterFix } from "../utils/linter-runner";
import { logger } from "../utils/logger";
import { validateTypeScriptDirectory } from "../utils/writer";
import type { GeneratedFileWrite } from "./types";

export async function runPostPipeline(
	outputDirs: string[],
	_writeResults: GeneratedFileWrite[],
): Promise<void> {
	logger.debug("Iniciando etapa de pós-processamento...");
	for (const outputDir of outputDirs) {
		if (config.validateTypes) {
			validateTypeScriptDirectory(outputDir);
		}
	}

	if (outputDirs.length > 0) {
		await runLinterFix(outputDirs);
	}
}
