import type { NocoBaseCredentials } from "./nocobase";

export interface GenerateTypesArgs {
	dryRun: boolean;
}

export interface ParsedArgs {
	showHelp: boolean;
	options: GenerateTypesArgs;
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

export type MultiFileResult = MultiFilePersistResult | MultiFileDryRunResult;

export type GenerateTypesResult =
	| PersistResult
	| DryRunDiffResult
	| MultiFilePersistResult
	| MultiFileDryRunResult;

export interface ScriptConfig {
	outputPath: string;
	splitOutputDir: string; // Diretório para arquivos split (ex: "src/@types/generated")
	splitCollections: string[]; // Collections que serão salvas em arquivos individuais
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
}

export interface EnvConfig extends NocoBaseCredentials {}

export interface RuntimeConfig
	extends ScriptConfig,
		GenerateTypesArgs,
		NocoBaseCredentials {
	script: ScriptConfig;
	args: GenerateTypesArgs;
	parsedArgs: ParsedArgs;
	env: EnvConfig;
	showHelp: boolean;
}
