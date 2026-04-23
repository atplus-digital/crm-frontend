import type { NocoBaseCredentials } from "./nocobase";
import type {
	BaseInterfaceNamingConfig,
	EnumAdapter,
	EnumCorrectionConfig,
	ManualRelationMapping,
	RelationsAdapter,
} from "./script-adapters";

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

export interface BaseDataSourceGenerationConfig {
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
	/**
	 * Mapeamento manual de relações para esta datasource.
	 * Usado como primeira camada antes do adapter e inferência automática.
	 */
	relationsMapping?: Record<string, ManualRelationMapping>;
	/**
	 * Adapter opcional para buscar relações de fonte externa.
	 * Chamado após relationsMapping e antes do fallback por inferência de convenção.
	 */
	relationsAdapter?: RelationsAdapter;
	/**
	 * Habilita inferência automática de relações por convenção de nomes.
	 * Padrão: true para IXC, false para NocoBase (que já tem relações via API).
	 * @default true
	 */
	inferRelationsByName?: boolean;
}

export type DataSourceGenerationConfig = BaseDataSourceGenerationConfig;

export interface ScriptConfig {
	outputDir: string;
	splitCollections: string[];
	datasources?: DataSourceGenerationConfig[];
	logLevel: "debug" | "info" | "error";
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
	maxConcurrency: number;
	lockWorkspaceFolder?: boolean;
	baseInterfaceNaming: BaseInterfaceNamingConfig;
	/**
	 * Configuração global de inferência de enums.
	 * Pode ser sobrescrita por datasource em DataSourceGenerationConfig.enumInference.
	 */
	enumInference?: EnumInferenceConfig;
	/**
	 * Habilita cache para adapters de enum (ex: IXC Wiki).
	 * Cache persiste indefinidamente até ser deletado manualmente.
	 * @default true
	 */
	cacheEnums?: boolean;
	/**
	 * Diretório de cache para adapters.
	 * @default ".cache/ixc-wiki"
	 */
	cacheDir?: string;
	/**
	 * Modo dry-run — não escreve arquivos, apenas mostra o que seria feito.
	 * @default false
	 */
	dryRun?: boolean;
	/**
	 * Tempo de vida do cache de enums em milissegundos.
	 * @default 86400000 (24 horas)
	 */
	cacheTtlMs?: number;
	/**
	 * Valida tipos TypeScript após geração usando tsc --noEmit.
	 * @default true
	 */
	validateTypes?: boolean;
}

export type EnvConfig = NocoBaseCredentials;

export interface RuntimeConfig extends ScriptConfig, NocoBaseCredentials {}
