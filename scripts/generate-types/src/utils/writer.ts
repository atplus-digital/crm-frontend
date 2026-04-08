import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type {
	DryRunDiffResult,
	MultiFileDryRunResult,
	MultiFilePersistResult,
	PersistResult,
} from "@scripts/generate-types/src/@types/script";
import { buildDiffOnly } from "./diff";
import { toFileName } from "./naming";

const MAIN_OUTPUT_FILE = "index.ts";

export function writeGeneratedFile(
	content: string,
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
): PersistResult {
	const resolvedOutputPath = resolveOutputPath(outputPath);
	const currentContent = readExistingContent(resolvedOutputPath);

	if (currentContent === content) {
		return {
			mode: "write",
			outputPath: resolvedOutputPath,
			changed: false,
		};
	}

	ensureDirectoryExists(resolvedOutputPath);
	fs.writeFileSync(resolvedOutputPath, content, "utf-8");

	return {
		mode: "write",
		outputPath: resolvedOutputPath,
		changed: true,
	};
}

export function previewGeneratedFile(
	content: string,
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
): DryRunDiffResult {
	const resolvedOutputPath = resolveOutputPath(outputPath);
	const currentContent = readExistingContent(resolvedOutputPath);

	if (currentContent === content) {
		return {
			mode: "dry-run",
			outputPath: resolvedOutputPath,
			changed: false,
			diff: "",
		};
	}

	return {
		mode: "dry-run",
		outputPath: resolvedOutputPath,
		changed: true,
		diff: buildDiffOnly(currentContent, content),
	};
}

function resolveOutputPath(
	outputPath: string = path.join(config.outputDir, MAIN_OUTPUT_FILE),
): string {
	return path.resolve(process.cwd(), outputPath);
}

function ensureDirectoryExists(filePath: string) {
	const directoryPath = path.dirname(filePath);
	if (!fs.existsSync(directoryPath)) {
		fs.mkdirSync(directoryPath, { recursive: true });
	}
}

function readExistingContent(filePath: string): string {
	if (!fs.existsSync(filePath)) {
		return "";
	}

	return fs.readFileSync(filePath, "utf-8");
}

/**
 * Escreve múltiplos arquivos TypeScript gerados.
 * @param filesMap - Map<collectionName, content>
 * @param outputDir - Diretório base (ex: "src/@types/generated")
 * @returns Resultado com lista de arquivos escritos
 */
export function writeMultipleFiles(
	filesMap: Map<string, string>,
	outputDir: string = config.outputDir,
): MultiFilePersistResult {
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);
	const files: Array<{ outputPath: string; changed: boolean }> = [];
	let totalChanged = 0;

	// Garante que o diretório existe
	if (!fs.existsSync(resolvedOutputDir)) {
		fs.mkdirSync(resolvedOutputDir, { recursive: true });
	}

	for (const [collectionName, content] of filesMap) {
		const fileName = `${toFileName(collectionName)}.ts`;
		const outputPath = path.join(resolvedOutputDir, fileName);
		const currentContent = readExistingContent(outputPath);

		let changed = false;
		if (currentContent !== content) {
			fs.writeFileSync(outputPath, content, "utf-8");
			changed = true;
			totalChanged++;
		}

		files.push({ outputPath, changed });
	}

	return {
		mode: "write",
		files,
		totalFiles: filesMap.size,
		totalChanged,
	};
}

/**
 * Preview de múltiplos arquivos em dry-run mode.
 * @param filesMap - Map<collectionName, content>
 * @param outputDir - Diretório base
 * @returns Resultado com diffs de todos os arquivos
 */
export function previewMultipleFiles(
	filesMap: Map<string, string>,
	outputDir: string = config.outputDir,
): MultiFileDryRunResult {
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);
	const files: Array<{
		outputPath: string;
		changed: boolean;
		diff: string;
	}> = [];
	let totalChanged = 0;

	for (const [collectionName, content] of filesMap) {
		const fileName = `${toFileName(collectionName)}.ts`;
		const outputPath = path.join(resolvedOutputDir, fileName);
		const currentContent = readExistingContent(outputPath);

		let changed = false;
		let diff = "";

		if (currentContent !== content) {
			changed = true;
			diff = buildDiffOnly(currentContent, content);
			totalChanged++;
		}

		files.push({ outputPath, changed, diff });
	}

	return {
		mode: "dry-run",
		files,
		totalFiles: filesMap.size,
		totalChanged,
	};
}

/**
 * Identifica arquivos .ts na pasta de destino que não estão na lista de arquivos gerados.
 * @param generatedFiles - Array de caminhos de arquivos que serão gerados
 * @param outputDir - Diretório base
 * @returns Array de caminhos de arquivos não utilizados
 */
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

/**
 * Remove arquivos não utilizados da pasta de destino.
 * @param unusedFiles - Array de caminhos de arquivos para remover
 * @returns Array de arquivos removidos
 */
export function cleanOutputDirectory(unusedFiles: string[]): string[] {
	const removed: string[] = [];

	for (const filePath of unusedFiles) {
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			removed.push(filePath);
		}
	}

	return removed;
}
