import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { MultiFileResult } from "@scripts/generate-types/src/@types/script";
import { isFileBeingEdited } from "./file-editor-check";
import { logger } from "./logger";
import { toFileName } from "./naming";

const MAIN_OUTPUT_FILE = "index.ts";

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
 * Valida todos os arquivos TypeScript em um diretório usando tsc --noEmit.
 * Executa validação em nível de diretório para resolver imports cruzados entre arquivos gerados.
 *
 * @returns `true` se a validação passou, `false` se falhou (nunca lança erro)
 */
export function validateTypeScriptDirectory(dirPath: string): boolean {
	if (!config.validateTypes) {
		return true;
	}

	const resolvedDir = path.resolve(process.cwd(), dirPath);

	if (!fs.existsSync(resolvedDir)) {
		logger.debug(`⏭️  Diretório não existe, pulando validação: ${resolvedDir}`);
		return true;
	}

	try {
		const stdout = execSync(
			"./node_modules/.bin/tsc --noEmit --pretty false 2>&1 || true",
			{ stdio: "pipe", timeout: 120000, encoding: "utf-8", cwd: process.cwd() },
		);

		const generatedDirPrefix = resolvedDir.replace(/\\/g, "/");
		const hasGeneratedErrors = stdout
			.split("\n")
			.some((line) => line.startsWith(generatedDirPrefix));

		if (hasGeneratedErrors) {
			const generatedErrors = stdout
				.split("\n")
				.filter((line) => line.startsWith(generatedDirPrefix))
				.join("\n");
			logger.warn(
				`⚠️  TypeScript inválido em: ${path.relative(process.cwd(), resolvedDir)}/`,
			);
			logger.debug(generatedErrors);
			return false;
		}

		logger.info(
			`✓ TypeScript válido: ${path.relative(process.cwd(), resolvedDir)}/`,
		);
		return true;
	} catch {
		logger.warn(
			`⚠️  Falha ao executar validação TypeScript para: ${path.relative(process.cwd(), resolvedDir)}/`,
		);
		return false;
	}
}

/**
 * Escreve múltiplos arquivos TypeScript gerados.
 */
export function writeMultipleFiles(
	filesMap: Map<string, string>,
	outputDir: string = config.outputDir,
	_options: { skipValidation?: boolean } = {},
): MultiFileResult {
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);
	const files: Array<{
		outputPath: string;
		changed: boolean;
		skipped?: boolean;
	}> = [];
	let totalChanged = 0;
	let totalSkipped = 0;

	if (config.dryRun) {
		logger.info(
			`🔍 [DRY-RUN] Escreveria ${filesMap.size} arquivos em ${outputDir}/`,
		);
		for (const [collectionName] of filesMap) {
			const fileName = `${toFileName(collectionName)}.ts`;
			logger.info(`   - ${fileName}`);
		}

		return {
			resultType: "multi",
			files: Array.from(filesMap.keys()).map((name) => ({
				outputPath: path.join(resolvedOutputDir, `${toFileName(name)}.ts`),
				changed: true,
			})),
			totalFiles: filesMap.size,
			totalChanged: filesMap.size,
			totalSkipped: 0,
		};
	}

	if (!fs.existsSync(resolvedOutputDir)) {
		fs.mkdirSync(resolvedOutputDir, { recursive: true });
	}

	for (const [collectionName, content] of filesMap) {
		const fileName = `${toFileName(collectionName)}.ts`;
		const outputPath = path.join(resolvedOutputDir, fileName);

		if (isFileBeingEdited(outputPath)) {
			logger.warn(
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
			logger.debug(`✓ Gravado: ${path.relative(process.cwd(), outputPath)}`);
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
		if (isFileBeingEdited(filePath)) {
			logger.warn(
				`⏭️  Pulando exclusão de arquivo em edição: ${path.relative(process.cwd(), filePath)}`,
			);
			continue;
		}

		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			removed.push(filePath);
			logger.debug(`🗑️  Removido: ${path.relative(process.cwd(), filePath)}`);
		}
	}

	return removed;
}
