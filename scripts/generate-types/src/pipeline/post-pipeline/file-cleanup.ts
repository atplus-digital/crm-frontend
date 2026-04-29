import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { MultiFileResult } from "@scripts/generate-types/src/@types/script";
import { toFileName } from "@scripts/generate-types/src/utils/naming";
import { logger } from "@scripts/shared/utils/logger";
import { isFileBeingEdited } from "./file-editor-check";

function readExistingContent(filePath: string): string {
	if (!fs.existsSync(filePath)) {
		return "";
	}

	return fs.readFileSync(filePath, "utf-8");
}

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
		const tscPath = path.resolve(process.cwd(), "node_modules/.bin/tsc");
		const args = [
			"--noEmit",
			"--pretty",
			"false",
			"--skipLibCheck",
			"--project",
			path.resolve(process.cwd(), "tsconfig.json"),
		];

		const tsc = spawnSync(tscPath, args, {
			stdio: ["ignore", "pipe", "pipe"],
			timeout: 120000,
			encoding: "utf-8",
			cwd: process.cwd(),
		});
		const combinedOutput = `${tsc.stdout ?? ""}\n${tsc.stderr ?? ""}`.trim();

		const generatedDirPrefix = resolvedDir.replace(/\\/g, "/");
		const errorsInDir = combinedOutput
			.split("\n")
			.filter((line) => line.includes(generatedDirPrefix));

		if (errorsInDir.length > 0) {
			logger.warn(
				`⚠️  TypeScript inválido em: ${path.relative(process.cwd(), resolvedDir)}/`,
			);
			for (const err of errorsInDir.slice(0, 10)) {
				logger.debug(err);
			}
			return false;
		}

		if (tsc.status !== 0) {
			logger.debug(
				`Validação TypeScript detectou erros fora de ${path.relative(process.cwd(), resolvedDir)}/ (ignorado neste estágio)`,
			);
			return true;
		}

		logger.info(
			`✓ TypeScript válido: ${path.relative(process.cwd(), resolvedDir)}/`,
		);
		return true;
	} catch (_spawnError) {
		logger.warn(
			`⚠️  Falha ao executar validação TypeScript para: ${path.relative(process.cwd(), resolvedDir)}/`,
		);
		return false;
	}
}

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
