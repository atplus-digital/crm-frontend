import { spawn } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

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

const tscCache = new Map<string, Promise<TscExecutionResult>>();

function runTscOnce(tsconfigPath: string): Promise<TscExecutionResult> {
	const cached = tscCache.get(tsconfigPath);
	if (cached) return cached;

	const promise = runTsc(tsconfigPath);
	tscCache.set(tsconfigPath, promise);
	return promise;
}

function createScopedTsconfigPath(
	baseTsconfigPath: string,
	targetDir: string,
): string {
	const cacheDir = path.resolve(
		process.cwd(),
		".cache",
		"crm-atplus-tsc-validator",
	);
	fs.mkdirSync(cacheDir, { recursive: true });

	const slug = targetDir
		.replace(/[\\/]+/g, "_")
		.replace(/[^a-zA-Z0-9_.-]/g, "_");
	const scopedPath = path.join(cacheDir, `${slug}.json`);
	const normalizedTarget = targetDir.replace(/\\/g, "/");

	const scopedConfig = {
		extends: baseTsconfigPath, // Use absolute path so it resolves from anywhere
		include: [`${normalizedTarget}/**/*.ts`, `${normalizedTarget}/**/*.d.ts`],
		compilerOptions: {
			types: [],
		},
	};

	fs.writeFileSync(scopedPath, JSON.stringify(scopedConfig, null, 2));
	return scopedPath;
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
	const resolvedDir = path.resolve(process.cwd(), dirPath);

	if (!fs.existsSync(resolvedDir)) {
		return true;
	}

	try {
		const tsconfigPath = resolveTsconfigPath();
		const scopedTsconfigPath = createScopedTsconfigPath(
			tsconfigPath,
			resolvedDir,
		);
		const tscResult = await runTscOnce(scopedTsconfigPath);
		const outputLines = tscResult.combinedOutput
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0);

		if (tscResult.exitCode !== 0) {
			for (const err of outputLines.slice(0, 10)) {
				console.error(err);
			}
			return false;
		}

		return true;
	} catch (_spawnError) {
		return false;
	}
}
