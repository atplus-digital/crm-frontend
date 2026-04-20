import type { RejectedFieldsMap } from "../generation/enum-inference";
import type { NocoBaseCredentials } from "./nocobase";

export type { RejectedFieldsMap } from "../generation/enum-inference";

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
		origin: "api" | "adapter" | "inferencia";
	};
}

/**
 * Interface genérica para clientes de datasource
 * Permite que o script seja agnóstico em relação à fonte de dados
 */
export interface DataSourceClient {
	readonly baseUrl: string;

	fetchCollections(): Promise<DataSourceCollection[]>;

	/**
	 * Busca campos de uma collection.
	 * @returns Objeto com campos e flag indicando se o schema foi obtido pela rota primária.
	 *         `schemaAvailable: false` indica que a rota primária falhou (ex: 404) e foi usado fallback.
	 */
	fetchCollectionFields(
		collectionName: string,
	): Promise<{ fields: DataSourceField[]; schemaAvailable: boolean }>;

	inferEnumsFromData(
		collectionName: string,
		fieldNames: string[],
		sampleSize?: number,
	): Promise<{ enums: InferredEnumsMap; rejected: RejectedFieldsMap }>;

	fetchCollectionSample(
		collectionName: string,
		pageSize?: number,
	): Promise<Array<Record<string, unknown>>>;
}

export interface SingleFileResult {
	resultType: "single";
	outputPath: string;
	changed: boolean;
	skipped?: boolean;
}

export interface MultiFileResult {
	resultType: "multi";
	files: Array<{
		outputPath: string;
		changed: boolean;
		skipped?: boolean;
	}>;
	totalFiles: number;
	totalChanged: number;
	totalSkipped?: number;
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
 * Adapter de enum para fontes externas.
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

export interface EnumCorrectionRule {
	collection: string;
	field: string;
	values?: string[];
	labels: Record<string, string>;
}

export type EnumCorrectionConfig = EnumCorrectionRule[];

/**
 * Configuração para inferência de enums aplicada globalmente ou por datasource.
 */
export interface EnumInferenceConfig {
	/**
	 * Threshold de cardinalidade para considerar um campo como enum.
	 * Campos com cardinalidade menor que este valor são candidatos a enum.
	 * @default 5
	 */
	cardinalityThreshold?: number;

	/**
	 * Tamanho da amostra para calcular cardinalidade.
	 * @default 5000
	 */
	sampleSize?: number;

	/**
	 * Razão mínima de repetição para considerar como enum.
	 * Ex: 0.8 significa que 80% dos registros devem ter valores repetidos.
	 * @default 0.8
	 */
	minRepetitionRatio?: number;

	/**
	 * Lista negra de padrões de nomes de campos que nunca serão enums.
	 * @default []
	 */
	fieldNameBlacklist?: string[];

	/**
	 * Lista negra de padrões de valores que nunca serão enums.
	 * @default []
	 */
	valueBlacklist?: string[];

	/**
	 * Variação máxima entre valores numéricos para considerar como enum.
	 * Ex: valores [1, 5, 10, 100] têm variação 99 — se threshold=50, não é enum.
	 * @default 50
	 */
	maxNumericVariation?: number;

	/**
	 * Valor mínimo para considerar como enum (valores > min não são enums).
	 * Ex: [1898, 2896] — min=1898 > 50 → não é enum.
	 * @default 50
	 */
	minNumericValue?: number;

	/**
	 * Padrões de campos que são conhecidos por serem enums (ignora outras regras).
	 * Ex: ['/_id$/', '/^tipo_/'] — campos com estes padrões sempre são candidatos.
	 * @default []
	 */
	fieldNamePatterns?: string[];

	/**
	 * Threshold aumentado para campos que matcham fieldNamePatterns.
	 * @default 500
	 */
	patternThreshold?: number;
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
	enumCorrection?: EnumCorrectionConfig;
	/**
	 * Gera relatório de enum inference (_ixc-enum-inference.md) para esta datasource.
	 * @default false
	 */
	generateEnumReport?: boolean;
	/**
	 * Configuração de inferência de enums específica para esta datasource.
	 * Sobrescreve configurações globais do config.ts.
	 */
	enumInference?: EnumInferenceConfig;
}

export type DataSourceGenerationConfig = BaseDataSourceGenerationConfig;

export interface ScriptConfig {
	outputDir: string; // Diretório de saída (ex: "src/@types/generated") — split usa esta pasta; não-split usa <outputDir>/index.ts
	splitCollections: string[]; // Collections que serão salvas em arquivos individuais
	datasources?: DataSourceGenerationConfig[];
	logLevel: "debug" | "info" | "error";
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
	maxConcurrency: number; // Concorrência máxima para operações paralelas
	lockWorkspaceFolder?: boolean; // Quando ativado, verifica .vscode/settings.json e bloqueia acesso de escrita à pasta de interfaces
	baseInterfaceNaming: BaseInterfaceNamingConfig;
	/**
	 * Configuração global de inferência de enums.
	 * Pode ser sobrescrita por datasource em DataSourceGenerationConfig.enumInference.
	 */
	enumInference?: EnumInferenceConfig;
	/**
	 * Habilita cache para adapters de enum (ex: IXC Wiki).
	 * Cache é armazenado em .cache/ixc-wiki/ com TTL de 24h.
	 * @default true
	 */
	cacheEnums?: boolean;
	/**
	 * Diretório de cache para adapters.
	 * @default ".cache/ixc-wiki"
	 */
	cacheDir?: string;
	/**
	 * TTL do cache em milissegundos.
	 * @default 86400000 (24 horas)
	 */
	cacheTtlMs?: number;
	/**
	 * Modo dry-run — não escreve arquivos, apenas mostra o que seria feito.
	 * @default false
	 */
	dryRun?: boolean;
	/**
	 * Valida tipos TypeScript após geração usando tsc --noEmit.
	 * @default true
	 */
	validateTypes?: boolean;
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {}
