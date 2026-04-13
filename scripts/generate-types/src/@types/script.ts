import type { NocoBaseCredentials } from "./nocobase";

export interface CliArgs {
	dryRun: boolean;
	write: boolean;
	lockWorkspace?: boolean;
}

export interface ParsedArgs {
	showHelp: boolean;
	options: CliArgs;
}

export interface PersistResult {
	mode: "write";
	outputPath: string;
	changed: boolean;
}

export interface DryRunDiffResult {
	mode: "dry-run";
	outputPath: string;
	changed: boolean;
	diff: string;
}

/**
 * Resultado de escrita de múltiplos arquivos (write mode).
 */
export interface MultiFilePersistResult {
	mode: "write";
	files: Array<{
		outputPath: string;
		changed: boolean;
	}>;
	totalFiles: number;
	totalChanged: number;
}

/**
 * Resultado de dry-run de múltiplos arquivos.
 */
export interface MultiFileDryRunResult {
	mode: "dry-run";
	files: Array<{
		outputPath: string;
		changed: boolean;
		diff: string;
	}>;
	totalFiles: number;
	totalChanged: number;
}

export type GenerateTypesResult =
	| PersistResult
	| DryRunDiffResult
	| MultiFilePersistResult
	| MultiFileDryRunResult;

export interface BaseInterfaceNamingConfig {
	prefix: string;
	suffix: string;
}

export interface ScriptConfig {
	outputDir: string; // Diretório de saída (ex: "src/@types/generated") — split usa esta pasta; não-split usa <outputDir>/index.ts
	splitCollections: string[]; // Collections que serão salvas em arquivos individuais
	verbose: boolean;
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
	lockWorkspaceFolder?: boolean; // Quando ativado, verifica .vscode/settings.json e bloqueia acesso de escrita à pasta de interfaces
	baseInterfaceNaming: BaseInterfaceNamingConfig;
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {
	dryRun: boolean;
	showHelp: boolean;
	write: boolean;
	lockWorkspace: boolean;
}
