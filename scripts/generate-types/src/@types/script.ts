import type { NocoBaseCredentials } from "./nocobase";

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

interface BaseDataSourceGenerationConfig {
	name: string;
	dataSource: string;
	outputDir: string;
	splitCollections: string[];
	enableSampleFieldFallback?: boolean;
	baseInterfaceNaming?: BaseInterfaceNamingConfig;
}

export interface MainDataSourceGenerationConfig
	extends BaseDataSourceGenerationConfig {
	dataSource: "main";
	collections?: string[];
}

export interface ExternalDataSourceGenerationConfig
	extends BaseDataSourceGenerationConfig {
	collections: string[];
}

export type DataSourceGenerationConfig =
	| MainDataSourceGenerationConfig
	| ExternalDataSourceGenerationConfig;

export function defineDataSource(
	config: MainDataSourceGenerationConfig,
): MainDataSourceGenerationConfig;
export function defineDataSource(
	config: ExternalDataSourceGenerationConfig,
): ExternalDataSourceGenerationConfig;
export function defineDataSource(
	config: DataSourceGenerationConfig,
): DataSourceGenerationConfig;
export function defineDataSource(
	config: DataSourceGenerationConfig,
): DataSourceGenerationConfig {
	return config;
}

export interface ScriptConfig {
	outputDir: string; // Diretório de saída (ex: "src/@types/generated") — split usa esta pasta; não-split usa <outputDir>/index.ts
	splitCollections: string[]; // Collections que serão salvas em arquivos individuais
	datasources?: DataSourceGenerationConfig[];
	verbose: boolean;
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
	lockWorkspaceFolder?: boolean; // Quando ativado, verifica .vscode/settings.json e bloqueia acesso de escrita à pasta de interfaces
	baseInterfaceNaming: BaseInterfaceNamingConfig;
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {}
