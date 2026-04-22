import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { SingleFileResult } from "@scripts/generate-types/src/@types/script";
import { isFileBeingEdited } from "./file-editor-check";
import { logger } from "./logger";
import { toFileName } from "./naming";

const MAIN_OUTPUT_FILE = "index.ts";

export function writeGeneratedFile(
	content: string,
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
	_options: { skipValidation?: boolean } = {},
): SingleFileResult {
	const resolvedOutputPath = resolveOutputPath(outputPath);

	if (config.dryRun) {
		logger.info(
			`🔍 [DRY-RUN] Escreveria em: ${path.relative(process.cwd(), resolvedOutputPath)}`,
		);
		return {
			resultType: "single",
			outputPath: resolvedOutputPath,
			changed: true,
		};
	}

	if (isFileBeingEdited(resolvedOutputPath)) {
		logger.warn(
			`⏭️  Pulando arquivo em edição: ${path.relative(process.cwd(), resolvedOutputPath)}`,
		);
		return {
			resultType: "single",
			outputPath: resolvedOutputPath,
			changed: false,
			skipped: true,
		};
	}

	const currentContent = readExistingContent(resolvedOutputPath);

	if (currentContent === content) {
		return {
			resultType: "single",
			outputPath: resolvedOutputPath,
			changed: false,
		};
	}

	ensureDirectoryExists(resolvedOutputPath);
	fs.writeFileSync(resolvedOutputPath, content, "utf-8");
	logger.debug(
		`✓ Gravado: ${path.relative(process.cwd(), resolvedOutputPath)}`,
	);

	return {
		resultType: "single",
		outputPath: resolvedOutputPath,
		changed: true,
	};
}

export function resolveOutputPath(
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
): string {
	return path.resolve(process.cwd(), outputPath);
}

export function ensureDirectoryExists(filePath: string) {
	const directoryPath = path.dirname(filePath);
	if (!fs.existsSync(directoryPath)) {
		fs.mkdirSync(directoryPath, { recursive: true });
	}
}

export function readExistingContent(filePath: string): string {
	if (!fs.existsSync(filePath)) {
		return "";
	}

	return fs.readFileSync(filePath, "utf-8");
}

export {
	cleanOutputDirectory,
	getUnusedFiles,
	validateTypeScriptDirectory,
	writeMultipleFiles,
} from "./file-cleanup";
export { toFileName };
