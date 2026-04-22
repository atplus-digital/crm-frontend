import { config } from "@scripts/generate-types/config";
import { runLinterFix } from "../utils/linter-runner";
import { logger } from "../utils/logger";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	validateTypeScriptDirectory,
} from "../utils/writer";
import type { GeneratedFileWrite } from "./types";

export async function runPostPipeline(
	outputDirs: string[],
	writeResults: GeneratedFileWrite[],
): Promise<void> {
	for (const outputDir of outputDirs) {
		const dirResults = writeResults.filter((r) =>
			r.outputPath.startsWith(outputDir),
		);
		const generatedFilePaths = dirResults.map((r) => r.outputPath);
		const unusedFiles = getUnusedFiles(generatedFilePaths, outputDir);

		if (unusedFiles.length > 0) {
			logger.info(
				`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${outputDir}/:`,
			);
			for (const file of unusedFiles) {
				logger.debug(`   - ${file}`);
			}
			const removed = cleanOutputDirectory(unusedFiles);
			logger.info(
				`🗑️  Removidos ${removed.length} arquivo(s) não utilizado(s).`,
			);
		}

		if (config.validateTypes) {
			validateTypeScriptDirectory(outputDir);
		}
	}

	if (outputDirs.length > 0) {
		await runLinterFix(outputDirs);
	}
}
