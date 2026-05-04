import {
	logger as defaultRuntimeLogger,
	type Logger,
} from "@scripts/generators/src/lib/logger";
import { runLinterFix } from "@scripts/generators/src/lib/validation/linter-runner";
import { validateTypeScriptDirectory } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { GeneratedFileWrite } from "./datasource-pipeline/types";

export async function runPostPipeline(
	outputDirs: string[],
	_writeResults: GeneratedFileWrite[],
	logger?: Logger,
): Promise<void> {
	const activeLogger = logger ?? defaultRuntimeLogger;
	activeLogger.info("Iniciando pós-processamento...", {
		stage: "post-pipeline",
	});

	const validationPromise = Promise.all(
		outputDirs.map((outputDir) => {
			return validateTypeScriptDirectory(outputDir);
		}),
	);

	const linterPromise = runLinterFix(outputDirs, activeLogger);

	await Promise.all([validationPromise, linterPromise]);
}
