import * as fs from "node:fs";
import * as path from "node:path";
import {
	defaultLogger as defaultRuntimeLogger,
	type Logger,
} from "@scripts/generators/src/lib/logging";
import type { SingleFileResult } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { config } from "@scripts/generators/src/pipelines/generate-types/config";
import { isFileBeingEdited } from "./file-editor-check";

const MAIN_OUTPUT_FILE = "index.ts";

interface WriteGeneratedFileOptions {
	skipValidation?: boolean;
	dryRun?: boolean;
}

export function writeGeneratedFile(
	content: string,
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
	options: WriteGeneratedFileOptions = {},
	logger?: Logger,
): SingleFileResult {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const resolvedOutputPath = resolveOutputPath(outputPath);
	const dryRun = options.dryRun ?? config.dryRun;

	if (dryRun) {
		activeLogger.info(
			`🔍 [DRY-RUN] Escreveria em: ${path.relative(process.cwd(), resolvedOutputPath)}`,
		);
		return {
			resultType: "single",
			outputPath: resolvedOutputPath,
			changed: true,
		};
	}

	if (isFileBeingEdited(resolvedOutputPath)) {
		activeLogger.warn(
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
	activeLogger.debug(
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
