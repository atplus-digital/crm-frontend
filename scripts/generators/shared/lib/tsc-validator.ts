import { spawn } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { logger } from "@scripts/generators/shared/lib/logger";

const TSCONFIG_PATH = path.resolve(
	process.cwd(),
	"scripts/tsconfig.generated.json",
);

/**
 * Runs `tsc --noEmit` once and caches the result for the lifetime of the process.
 * Multiple calls to validateTypeScriptDirectory reuse the same compilation output.
 */
let cachedTscOutput: Promise<string> | null = null;

function runTscOnce(): Promise<string> {
	if (cachedTscOutput) return cachedTscOutput;

	cachedTscOutput = (async () => {
		const tscPath = path.resolve(process.cwd(), "node_modules/.bin/tsc");
		const args = [
			"--noEmit",
			"--pretty",
			"false",
			"--skipLibCheck",
			"--project",
			TSCONFIG_PATH,
		];

		const tsc = spawn(tscPath, args, {
			stdio: ["ignore", "pipe", "pipe"],
			cwd: process.cwd(),
		});

		return new Promise<string>((resolve, reject) => {
			let stdout = "";
			let stderr = "";
			tsc.stdout.on("data", (data: Buffer) => {
				stdout += data.toString();
			});
			tsc.stderr.on("data", (data: Buffer) => {
				stderr += data.toString();
			});
			tsc.on("error", reject);
			tsc.on("close", () => {
				resolve(`${stdout}\n${stderr}`.trim());
			});
		});
	})();

	return cachedTscOutput;
}

export async function validateTypeScriptDirectory(
	dirPath: string,
): Promise<boolean> {
	logger.debug(`Validando TypeScript em: ${dirPath}`, {
		stage: "post-pipeline",
		dir: dirPath,
	});

	const resolvedDir = path.resolve(process.cwd(), dirPath);

	if (!fs.existsSync(resolvedDir)) {
		logger.debug(`⏭️  Diretório não existe, pulando validação: ${resolvedDir}`);
		return true;
	}

	try {
		const combinedOutput = await runTscOnce();

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
