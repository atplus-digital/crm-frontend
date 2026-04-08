import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";

interface VSCodeSettings {
	[setting: string]: unknown;
}

/**
 * Verifica se o workspace está configurado para bloquear a edição dos arquivos gerados
 * @returns Verdadeiro se os arquivos gerados estiverem protegidos contra escrita
 */
function isWorkspaceLocked(): boolean {
	try {
		const settingsPath = path.join(process.cwd(), ".vscode", "settings.json");

		if (!fs.existsSync(settingsPath)) {
			return false;
		}

		const settingsContent = fs.readFileSync(settingsPath, "utf-8");
		const settings: VSCodeSettings = JSON.parse(settingsContent);

		// Verifica se há configurações para tornar os arquivos gerados somente leitura
		const readonlyInclude = settings["files.readonlyInclude"];
		if (readonlyInclude && typeof readonlyInclude === "object") {
			const generatedPattern = "src/@types/generated/**";
			return generatedPattern in readonlyInclude;
		}

		return false;
	} catch (error) {
		console.warn(
			"⚠️ Não foi possível verificar as configurações do workspace:",
			error,
		);
		return false;
	}
}

/**
 * Bloqueia o acesso de escrita aos arquivos gerados adicionando as configurações apropriadas
 * ao arquivo .vscode/settings.json
 */
function lockWorkspace(): void {
	try {
		const vscodeDir = path.join(process.cwd(), ".vscode");
		const settingsPath = path.join(vscodeDir, "settings.json");

		// Cria o diretório .vscode se não existir
		if (!fs.existsSync(vscodeDir)) {
			fs.mkdirSync(vscodeDir, { recursive: true });
		}

		let settings: VSCodeSettings = {};

		// Lê as configurações existentes, se o arquivo existir
		if (fs.existsSync(settingsPath)) {
			const settingsContent = fs.readFileSync(settingsPath, "utf-8");
			settings = JSON.parse(settingsContent);
		}

		// Garante que a configuração de readonlyInclude esteja presente
		if (!settings["files.readonlyInclude"]) {
			settings["files.readonlyInclude"] = {};
		}

		// Adiciona o padrão para os arquivos gerados
		const readonlyInclude = settings["files.readonlyInclude"];
		if (typeof readonlyInclude === "object" && readonlyInclude !== null) {
			(readonlyInclude as Record<string, boolean>)["src/@types/generated/**"] =
				true;

			// Adiciona também o arquivo principal se não estiver incluído
			const mainOutputPattern = path
				.join(config.outputDir, "index.ts")
				.replace(/^\.\//, "**/");
			if (!(mainOutputPattern in readonlyInclude)) {
				(readonlyInclude as Record<string, boolean>)[mainOutputPattern] = true;
			}
		}

		// Grava as configurações atualizadas
		const updatedSettings = JSON.stringify(settings, null, "\t"); // Usando tabs como indentação
		fs.writeFileSync(settingsPath, updatedSettings, "utf-8");

		console.log(
			"🔒 Workspace bloqueado: os arquivos gerados agora são somente leitura",
		);
	} catch (error) {
		throw new Error(`Falha ao bloquear o workspace: ${error}`);
	}
}

/**
 * Aplica o bloqueio de workspace se a configuração estiver ativada
 */
export function applyWorkspaceLockIfNeeded(): void {
	if (config.lockWorkspace && !isWorkspaceLocked()) {
		lockWorkspace();
	}
}
