import { execFile } from "node:child_process";
import { logInfo, logVerbose } from "./logger";

export async function runLinterFix(dirs: string[]): Promise<void> {
	if (dirs.length === 0) return;

	const biomeCmd = "biome";
	const biomeArgs = ["check", "--write", ...dirs];

	logInfo(`🔧 Rodando linter nos diretórios gerados: ${dirs.join(", ")}`);

	await new Promise<void>((resolve) => {
		execFile(biomeCmd, biomeArgs, (error, stdout, stderr) => {
			if (stdout) {
				logVerbose(stdout);
			}
			if (stderr) {
				logVerbose(stderr);
			}
			if (error) {
				logInfo(
					`⚠️  Biome retornou erro (pode ser apenas warnings): ${error.message}`,
				);
			} else {
				logInfo(`✅ Biome aplicado com sucesso em ${dirs.length} diretório(s)`);
			}
			resolve();
		});
	});

	logInfo(`📝 Formatando arquivos markdown nos diretórios gerados...`);

	const prettierArgs = [
		"dlx",
		"prettier",
		"--write",
		"--no-error-on-unmatched-pattern",
		...dirs.map((d) => `${d}/**/*.md`),
	];

	await new Promise<void>((resolve) => {
		execFile("pnpm", prettierArgs, (error, stdout, stderr) => {
			if (stdout) {
				logVerbose(stdout);
			}
			if (stderr) {
				logVerbose(stderr);
			}
			if (error) {
				logInfo(`⚠️  Prettier retornou erro: ${error.message}`);
			} else {
				logInfo(`✅ Markdown formatado com sucesso`);
			}
			resolve();
		});
	});
}
