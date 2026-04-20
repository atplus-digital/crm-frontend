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

/**
 * Override de labels para valores existentes de um enum.
 * Usado para corrigir labels de enums que já existem mas têm labels ruins ou ausentes.
 *
 * @example
 * // Para um campo status com valores "1", "2", "3"
 * {
 *   collection: "cliente",
 *   field: "status",
 *   labels: {
 *     "1": "Ativo",
 *     "2": "Inativo",
 *     "3": "Bloqueado",
 *   },
 * }
 */
export interface EnumOverrideRule {
	/** Nome da collection. */
	collection: string;
	/** Nome do campo. */
	field: string;
	/**
	 * Labels para cada valor do enum.
	 * Valores não listados mantêm a label original (se houver).
	 */
	labels: Record<string, string>;
}

/**
 * Força a criação de um enum completo em um campo que não tem enum em nenhuma etapa.
 *
 * @example
 * {
 *   collection: "su_ticket",
 *   field: "prioridade",
 *   values: ["1", "2", "3", "4", "5"],
 *   labels: {
 *     "1": "Crítica",
 *     "2": "Alta",
 *     "3": "Média",
 *     "4": "Baixa",
 *     "5": "Informativa",
 *   },
 * }
 */
export interface ForceEnumRule {
	/** Nome da collection. */
	collection: string;
	/** Nome do campo. */
	field: string;
	/** Valores possíveis do enum. */
	values: string[];
	/** Labels para cada valor. */
	labels: Record<string, string>;
}

/**
 * Configuração de correção planejada de enums para uma datasource.
 *
 * enumOverrides: Sobrescreve labels de enums existentes (corrige labels ruins/ausentes).
 * forceEnums: Cria enums em campos que não tinham enum em nenhuma etapa anterior.
 *
 * Ambos são aplicados DEPOIS de toda a pipeline de enums (schema → adapter → inference),
 * em TODOS os datasources, como correção planejada.
 */
export interface EnumCorrectionConfig {
	/**
	 * Sobrescreve labels de enums existentes.
	 * Funciona em qualquer enum criado por schema, adapter ou inference.
	 * Valores não listados mantêm a label original.
	 */
	enumOverrides?: EnumOverrideRule[];

	/**
	 * Força criação de enum em campos que não tiveram enum em nenhuma etapa.
	 * Só tem efeito em campos que ainda não têm enum definido.
	 */
	forceEnums?: ForceEnumRule[];
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
	/**
	 * Configuração de correção planejada de enums.
	 * Aplicada DEPOIS de toda a pipeline (schema → adapter → inference),
	 * em TODAS as datasources.
	 */
	enumCorrection?: EnumCorrectionConfig;
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
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {}
