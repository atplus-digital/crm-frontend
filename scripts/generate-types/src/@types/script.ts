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

/**
 * Resultado de enum vindo de um adapter externo (Wiki IXC, etc).
 * values é o array de valores possíveis do enum.
 * labels é opcional — quando disponível, substitui a inferência por heurística.
 */
export interface EnumAdapterFieldEnum {
	values: string[];
	labels?: Record<string, string>;
}

/**
 * Adapter de enum para fuentes externas.
 * Permite que datasources busquem valores de enum completos de APIs/documentation
 * antes do fallback por amostragem.
 *
 * A função recebe o nome da collection e retorna um mapa de campo → EnumAdapterFieldEnum.
 * Em caso de falha ou retorno vazio, o pipeline usa o fallback sample-based normalmente.
 */
export interface EnumAdapter {
	/** Nome descritivo do adapter (usado em logs). */
	name: string;
	/**
	 * Busca enums de fonte externa para uma collection.
	 * @param collectionName Nome da collection para buscar enums.
	 * @returns Mapa de campo → dados do enum. Retornar {} significa "sem enums para esta collection".
	 * @throws Erro → o fallback sample-based é utilizado automaticamente.
	 */
	fetchEnums(
		collectionName: string,
	): Promise<Record<string, EnumAdapterFieldEnum>>;
}

interface BaseDataSourceGenerationConfig {
	name: string;
	dataSource: string;
	outputDir: string;
	splitCollections: string[];
	baseInterfaceNaming?: BaseInterfaceNamingConfig;
	/**
	 * Adapter opcional chamado ANTES do fallback sample-based de enums.
	 * Se o adapter falhar ou retornar {}, o pipeline usa a inferência por amostragem normalmente.
	 */
	preEnumAdapter?: EnumAdapter;
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
