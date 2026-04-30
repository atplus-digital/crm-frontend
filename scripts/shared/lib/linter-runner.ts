import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { logger } from "@scripts/shared/lib/logger";

const execFileAsync = promisify(execFile);

async function runCommand(
	label: string,
	cmd: string,
	args: string[],
): Promise<void> {
	logger.info(`🔧 Rodando ${label}...`, { stage: "linter" });

	try {
		const { stdout, stderr } = await execFileAsync(cmd, args, {
			maxBuffer: 10 * 1024 * 1024,
		});

		if (stdout) logger.debug(stdout);
		if (stderr) logger.debug(stderr);

		logger.info(`✅ ${label} aplicado com sucesso`);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		logger.info(`⚠️  ${label} retornou erro: ${message}`);
	}
}

export async function runLinterFix(dirs: string[]): Promise<void> {
	if (dirs.length === 0) return;

	const mdGlobs = dirs.map((d) => `${d}/**/*.md`);

	await Promise.all([
		runCommand(`Biome (${dirs.length} diretório(s))`, "biome", [
			"check",
			"--write",
			...dirs,
		]),
		runCommand("Prettier (markdown)", "pnpm", [
			"dlx",
			"prettier",
			"--write",
			"--no-error-on-unmatched-pattern",
			...mdGlobs,
		]),
	]);
}
