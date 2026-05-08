import {
	defaultLogger as defaultRuntimeLogger,
	type Logger,
} from "@scripts/generators/src/lib/logging";
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
		outputDirs.map(async (outputDir) => ({
			outputDir,
			isValid: await validateTypeScriptDirectory(outputDir),
		})),
	);

	const linterPromise = runLinterFix(outputDirs, activeLogger);

	const [validationResults] = await Promise.all([
		validationPromise,
		linterPromise,
	]);

	const invalidOutputs = validationResults
		.filter((result) => !result.isValid)
		.map((result) => result.outputDir);

	if (invalidOutputs.length > 0) {
		throw new Error(
			`TypeScript inválido em: ${invalidOutputs.join(", ")}. Escrita atômica cancelada.`,
		);
	}
}
