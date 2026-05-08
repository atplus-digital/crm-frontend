import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { Logger } from "@scripts/generators/src/lib/logging";

const execFileAsync = promisify(execFile);

async function runCommand(
	activeLogger: Logger,
	label: string,
	cmd: string,
	args: string[],
): Promise<void> {
	activeLogger.info(`🔧 Rodando ${label}...`, { stage: "linter" });

	try {
		const { stdout, stderr } = await execFileAsync(cmd, args, {
			maxBuffer: 10 * 1024 * 1024,
		});

		if (stdout) activeLogger.debug(stdout);
		if (stderr) activeLogger.debug(stderr);

		activeLogger.info(`✅ ${label} aplicado com sucesso`);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		activeLogger.error(`❌ ${label} falhou: ${message}`);
		throw new Error(`Falha ao executar ${label}: ${message}`);
	}
}

export async function runLinterFix(
	dirs: string[],
	logger: Logger,
): Promise<void> {
	if (dirs.length === 0) return;

	const mdGlobs = dirs.map((d) => `${d}/**/*.md`);

	await Promise.all([
		runCommand(logger, `Biome (${dirs.length} diretório(s))`, "pnpm", [
			"exec",
			"biome",
			"check",
			"--write",
			"--vcs-use-ignore-file=false",
			...dirs,
		]),
		runCommand(logger, "Prettier (markdown)", "pnpm", [
			"dlx",
			"prettier",
			"--write",
			"--no-error-on-unmatched-pattern",
			...mdGlobs,
		]),
	]);
}
