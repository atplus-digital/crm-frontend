import type { NocoBaseCredentials } from "./nocobase";

export interface CliArgs {
	write: boolean;
	lockWorkspace?: boolean;
	ixc?: boolean;
}

export interface ParsedArgs {
	showHelp: boolean;
	options: CliArgs;
}

export interface SingleFileResult {
	resultType: "single";
	outputPath: string;
	changed: boolean;
}

export interface MultiFileResult {
	resultType: "multi";
	files: Array<{
		outputPath: string;
		changed: boolean;
	}>;
	totalFiles: number;
	totalChanged: number;
}

export type GenerateTypesResult = SingleFileResult | MultiFileResult;

export interface BaseInterfaceNamingConfig {
	prefix: string;
	suffix: string;
}

export interface DatasourceGenerationConfig {
	name: string;
	datasource: string;
	outputDir: string;
	splitCollections: string[];
	collections?: string[];
	enableSampleFieldFallback?: boolean;
	baseInterfaceNaming?: BaseInterfaceNamingConfig;
}

export interface ScriptConfig {
	outputDir: string; // Diretório de saída (ex: "src/@types/generated") — split usa esta pasta; não-split usa <outputDir>/index.ts
	splitCollections: string[]; // Collections que serão salvas em arquivos individuais
	datasources?: DatasourceGenerationConfig[];
	verbose: boolean;
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
	lockWorkspaceFolder?: boolean; // Quando ativado, verifica .vscode/settings.json e bloqueia acesso de escrita à pasta de interfaces
	baseInterfaceNaming: BaseInterfaceNamingConfig;
	ixcCollections?: string[]; // Collections do IXC para geração de tipos
	ixcOutputDir?: string; // Diretório de saída para tipos IXC
	generateIxcTypes?: boolean; // Flag para ativar geração de tipos IXC
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {
	showHelp: boolean;
	write: boolean;
	lockWorkspace: boolean;
	ixc: boolean;
}
