import { spawn } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { defaultLogger as logger } from "@scripts/generators/src/lib/logging";

const TSCONFIG_CANDIDATES = [
	path.resolve(process.cwd(), "scripts/generators/tsconfig.generated.json"),
	path.resolve(process.cwd(), "scripts/tsconfig.generated.json"),
];

function resolveTsconfigPath(): string {
	for (const candidate of TSCONFIG_CANDIDATES) {
		if (fs.existsSync(candidate)) {
			return candidate;
		}
	}

	return TSCONFIG_CANDIDATES[0];
}

interface TscExecutionResult {
	combinedOutput: string;
	exitCode: number;
}

const FILE_DIAGNOSTIC_PATTERN = /\(\d+,\d+\):\s*error TS\d+:/;

const tscCache = new Map<string, Promise<TscExecutionResult>>();

export function resetTypeScriptValidationCache(): void {
	tscCache.clear();
}

function runTscOnce(tsconfigPath: string): Promise<TscExecutionResult> {
	const cached = tscCache.get(tsconfigPath);
	if (cached) return cached;

	const promise = runTsc(tsconfigPath);
	tscCache.set(tsconfigPath, promise);
	return promise;
}

async function runTsc(tsconfigPath: string): Promise<TscExecutionResult> {
	const tscPath = path.resolve(process.cwd(), "node_modules/.bin/tsc");
	const args = [
		"--noEmit",
		"--pretty",
		"false",
		"--skipLibCheck",
		"--project",
		tsconfigPath,
	];

	const tsc = spawn(tscPath, args, {
		stdio: ["ignore", "pipe", "pipe"],
		cwd: process.cwd(),
	});

	return new Promise<TscExecutionResult>((resolve, reject) => {
		let stdout = "";
		let stderr = "";
		tsc.stdout.on("data", (data: Buffer) => {
			stdout += data.toString();
		});
		tsc.stderr.on("data", (data: Buffer) => {
			stderr += data.toString();
		});
		tsc.on("error", reject);
		tsc.on("close", (code) => {
			resolve({
				combinedOutput: `${stdout}\n${stderr}`.trim(),
				exitCode: code ?? 1,
			});
		});
	});
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
		const tsconfigPath = resolveTsconfigPath();
		const tscResult = await runTscOnce(tsconfigPath);
		const combinedOutput = tscResult.combinedOutput.replace(/\\/g, "/");
		const outputLines = combinedOutput
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0);

		const generatedDirPrefix = resolvedDir.replace(/\\/g, "/");
		const relativeDirPrefix = path
			.relative(process.cwd(), resolvedDir)
			.replace(/\\/g, "/");
		const diagnostics = outputLines.filter((line) => line.includes("error TS"));
		const errorsInDir = diagnostics.filter(
			(line) =>
				line.includes(generatedDirPrefix) || line.includes(relativeDirPrefix),
		);

		if (errorsInDir.length > 0) {
			logger.warn(
				`⚠️  TypeScript inválido em: ${path.relative(process.cwd(), resolvedDir)}/`,
			);
			for (const err of errorsInDir.slice(0, 10)) {
				logger.debug(err);
			}
			return false;
		}

		if (tscResult.exitCode !== 0) {
			const hasGlobalDiagnostic = diagnostics.some(
				(line) => !FILE_DIAGNOSTIC_PATTERN.test(line),
			);

			if (!hasGlobalDiagnostic && diagnostics.length > 0) {
				logger.warn(
					`⚠️  TypeScript com erro fora de ${path.relative(process.cwd(), resolvedDir)}/ (ignorado nesta validação local)`,
				);
				for (const err of diagnostics.slice(0, 10)) {
					logger.debug(err);
				}
				return true;
			}

			logger.warn(
				`⚠️  Validação TypeScript retornou erro (${tscResult.exitCode}) para: ${path.relative(process.cwd(), resolvedDir)}/`,
			);
			for (const err of outputLines.slice(0, 10)) {
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
