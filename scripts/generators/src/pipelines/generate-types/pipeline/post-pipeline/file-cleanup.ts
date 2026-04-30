import * as fs from "node:fs";
import * as path from "node:path";
import {
	logger as defaultRuntimeLogger,
	type Logger,
} from "@scripts/generators/src/lib/logger";
import { validateTypeScriptDirectory } from "@scripts/generators/src/lib/tsc-validator";
import type { MultiFileResult } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { config } from "@scripts/generators/src/pipelines/generate-types/config";
import { toFileName } from "@scripts/generators/src/pipelines/generate-types/utils/naming";
import { isFileBeingEdited } from "./file-editor-check";

export { validateTypeScriptDirectory };

function readExistingContent(filePath: string): string {
	if (!fs.existsSync(filePath)) {
		return "";
	}

	return fs.readFileSync(filePath, "utf-8");
}

export function writeMultipleFiles(
	filesMap: Map<string, string>,
	outputDir: string = config.outputDir,
	_options: { skipValidation?: boolean } = {},
	logger?: Logger,
): MultiFileResult {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);
	const files: Array<{
		outputPath: string;
		changed: boolean;
		skipped?: boolean;
	}> = [];
	let totalChanged = 0;
	let totalSkipped = 0;

	if (!fs.existsSync(resolvedOutputDir)) {
		fs.mkdirSync(resolvedOutputDir, { recursive: true });
	}

	for (const [collectionName, content] of filesMap) {
		const fileName = `${toFileName(collectionName)}.ts`;
		const outputPath = path.join(resolvedOutputDir, fileName);

		if (isFileBeingEdited(outputPath)) {
			activeLogger.warn(
				`⏭️  Pulando arquivo em edição: ${path.relative(process.cwd(), outputPath)}`,
			);
			files.push({ outputPath, changed: false, skipped: true });
			totalSkipped++;
			continue;
		}

		const currentContent = readExistingContent(outputPath);

		let changed = false;

		if (currentContent !== content) {
			fs.writeFileSync(outputPath, content, "utf-8");
			changed = true;
			totalChanged++;
			activeLogger.debug(
				`✓ Gravado: ${path.relative(process.cwd(), outputPath)}`,
			);
		}

		files.push({ outputPath, changed });
	}

	return {
		resultType: "multi",
		files,
		totalFiles: filesMap.size,
		totalChanged,
		totalSkipped,
	};
}

export function getUnusedFiles(
	generatedFiles: string[],
	outputDir: string = config.outputDir,
): string[] {
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);

	if (!fs.existsSync(resolvedOutputDir)) {
		return [];
	}

	const existingFiles = fs.readdirSync(resolvedOutputDir);
	const generatedFileNames = new Set(
		generatedFiles.map((f) => path.basename(f)),
	);

	return existingFiles
		.filter((file) => file.endsWith(".ts") && !generatedFileNames.has(file))
		.map((file) => path.join(resolvedOutputDir, file));
}

export function cleanOutputDirectory(
	unusedFiles: string[],
	logger?: Logger,
): string[] {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const removed: string[] = [];

	for (const filePath of unusedFiles) {
		if (isFileBeingEdited(filePath)) {
			activeLogger.warn(
				`⏭️  Pulando exclusão de arquivo em edição: ${path.relative(process.cwd(), filePath)}`,
			);
			continue;
		}

		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			removed.push(filePath);
			activeLogger.debug(
				`🗑️  Removido: ${path.relative(process.cwd(), filePath)}`,
			);
		}
	}

	return removed;
}
