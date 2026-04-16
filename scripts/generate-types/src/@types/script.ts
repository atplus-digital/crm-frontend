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

interface BaseDatasourceGenerationConfig {
	name: string;
	datasource: string;
	outputDir: string;
	splitCollections: string[];
	enableSampleFieldFallback?: boolean;
	baseInterfaceNaming?: BaseInterfaceNamingConfig;
}

export interface MainDatasourceGenerationConfig
	extends BaseDatasourceGenerationConfig {
	datasource: "main";
	collections?: string[];
}

export interface ExternalDatasourceGenerationConfig
	extends BaseDatasourceGenerationConfig {
	collections: string[];
}

export type DatasourceGenerationConfig =
	| MainDatasourceGenerationConfig
	| ExternalDatasourceGenerationConfig;

export function defineDatasource(
	config: MainDatasourceGenerationConfig,
): MainDatasourceGenerationConfig;
export function defineDatasource(
	config: ExternalDatasourceGenerationConfig,
): ExternalDatasourceGenerationConfig;
export function defineDatasource(
	config: DatasourceGenerationConfig,
): DatasourceGenerationConfig {
	return config;
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
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {}
