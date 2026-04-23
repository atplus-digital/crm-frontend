import { config } from "@scripts/generate-types/config";
import { logger } from "@scripts/generate-types/src/utils/logger";
import type { GeneratedFileWrite } from "./core/types";
import { runLinterFix } from "./post-pipeline/linter-runner";
import { validateTypeScriptDirectory } from "./post-pipeline/writer";

export async function runPostPipeline(
	outputDirs: string[],
	_writeResults: GeneratedFileWrite[],
): Promise<void> {
	logger.info("Iniciando pós-processamento...", { stage: "post-pipeline" });

	for (const outputDir of outputDirs) {
		if (config.validateTypes) {
			logger.debug(`Validando TypeScript em: ${outputDir}`, {
				stage: "post-pipeline",
				dir: outputDir,
			});
			validateTypeScriptDirectory(outputDir);
		}
	}

	if (outputDirs.length > 0) {
		await runLinterFix(outputDirs);
	}
}
