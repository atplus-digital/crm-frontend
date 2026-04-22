import { config } from "@scripts/generate-types/config";
import { logger } from "@scripts/generate-types/src/utils/logger";
import type { GeneratedFileWrite } from "./core/types";
import { runLinterFix } from "./post-pipeline/linter-runner";
import { validateTypeScriptDirectory } from "./post-pipeline/writer";

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
