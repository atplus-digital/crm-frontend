import type { NocoBaseCredentials } from "./nocobase";

/**
 * Interfaces genéricas para datasource agnóstico
 */
export interface DataSourceCollection {
	name: string;
	title?: string;
}

export interface DataSourceField {
	name: string;
	type: string;
	interface?: string | null;
	target?: string | null;
	uiSchema?: {
		enum?: Array<{
			value: string | number;
			label: string;
		}>;
		title?: string;
	};
}

export interface InferredEnumsMap {
	[fieldName: string]: {
		values: string[];
		labels: Record<string, string>;
		cardinality: number;
		totalRecords: number;
	};
}

/**
 * Interface genérica para clientes de datasource
 * Permite que o script seja agnóstico em relação à fonte de dados
 */
export interface DataSourceClient {
	readonly baseUrl: string;

	fetchCollections(): Promise<DataSourceCollection[]>;

	fetchCollectionFields(collectionName: string): Promise<DataSourceField[]>;

	inferEnumsFromData(
		collectionName: string,
		fieldNames: string[],
		sampleSize?: number,
	): Promise<InferredEnumsMap>;

	fetchCollectionSample(
		collectionName: string,
		pageSize?: number,
	): Promise<Array<Record<string, unknown>>>;
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
	type: "nocobase" | "rest";
	dataSource: string;
	outputDir: string;
	splitCollections?: string[];
	collections?: string[];
	baseInterfaceNaming?: BaseInterfaceNamingConfig;
	/**
	 * Adapter opcional chamado ANTES do fallback sample-based de enums.
	 * Se o adapter falhar ou retornar {}, o pipeline usa a inferência por amostragem normalmente.
	 */
	preEnumAdapter?: EnumAdapter;
}

export type DataSourceGenerationConfig = BaseDataSourceGenerationConfig;

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
