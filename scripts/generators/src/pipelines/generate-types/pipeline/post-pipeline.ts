import { runLinterFix } from "@scripts/generators/src/lib/linter-runner";
import {
	logger as defaultRuntimeLogger,
	type Logger,
} from "@scripts/generators/src/lib/logger";
import type { GeneratedFileWrite } from "./core/types";
import { validateTypeScriptDirectory } from "./post-pipeline/writer";

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

	const linterPromise = runLinterFix(outputDirs);

	await Promise.all([validationPromise, linterPromise]);
}
