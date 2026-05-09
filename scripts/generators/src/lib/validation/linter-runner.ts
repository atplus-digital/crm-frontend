import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

async function runCommand(
	label: string,
	cmd: string,
	args: string[],
): Promise<void> {
	try {
		const { stdout: _stdout, stderr } = await execFileAsync(cmd, args, {
			maxBuffer: 10 * 1024 * 1024,
		});

		if (stderr) console.error(stderr);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(`❌ ${label} falhou: ${message}`);
		throw new Error(`Falha ao executar ${label}: ${message}`);
	}
}

export async function runLinterFix(dirs: string[]): Promise<void> {
	if (dirs.length === 0) return;

	const mdGlobs = dirs.map((d) => `${d}/**/*.md`);

	await Promise.all([
		runCommand(`Biome (${dirs.length} diretório(s))`, "pnpm", [
			"exec",
			"biome",
			"check",
			"--write",
			"--vcs-use-ignore-file=false",
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
