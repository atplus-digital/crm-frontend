import { runLinterFix } from "@scripts/shared/lib/linter-runner";
import { logger } from "@scripts/shared/lib/logger";
import type { GeneratedFileWrite } from "./core/types";
import { validateTypeScriptDirectory } from "./post-pipeline/writer";

export async function runPostPipeline(
	outputDirs: string[],
	_writeResults: GeneratedFileWrite[],
): Promise<void> {
	logger.info("Iniciando pós-processamento...", { stage: "post-pipeline" });

	const validationPromise = Promise.all(
		outputDirs.map((outputDir) => {
			return validateTypeScriptDirectory(outputDir);
		}),
	);

	const linterPromise = runLinterFix(outputDirs);

	await Promise.all([validationPromise, linterPromise]);
}
