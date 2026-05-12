export const CONFIG = {
	WIKI_BASE_URL: "https://wikiapiprovedor.ixcsoft.com.br",

	GENERATED_TYPES_DIR: "src/generated/types/d_db_ixcsoft",
	OUTPUT_DIR: ".reports/ixc-schema-audit",
	CACHE_DIR: ".cache/ixc-wiki",

	EXCLUDE_DIRS: ["other"],
	EXCLUDE_FILES: ["collections.ts", "index.ts"],
} as const;

export type ScalarType = "string" | "number" | "boolean";

export interface EnumOption {
	value: string | number;
	label: string;
}

export interface RelationInfo {
	fieldName: string;
	targetCollection: string;
	type: "belongsTo" | "hasMany";
}

export interface CollectionSchema {
	collectionName: string;
	scalars: Map<string, ScalarType>;
	enums: Map<string, EnumOption[]>;
	relations: Map<string, { target: string; type: string }>;
	/** Raw data for verbose output - field names as they appear in source */
	rawFields?: Map<string, { type: string; rawType?: string }>;
}

export interface DiffItem<T = unknown> {
	fieldName: string;
	side: "ixc_only" | "nocobase_only" | "both_different" | "match";
	ixcValue?: T;
	nocobaseValue?: T;
}

export interface CollectionDiff {
	collectionName: string;
	scalars: DiffItem<ScalarType>[];
	enums: DiffItem<EnumOption[]>[];
	relations: DiffItem<{ target: string; type: string }>[];
	diffCount: number;
	/** Metadata for verbose reporting */
	metadata: {
		ixcTotalFields: number;
		nocobaseTotalFields: number;
		ixcRawFieldNames: string[];
		nocobaseRawFieldNames: string[];
	};
}

export interface CliOptions {
	verbose: boolean;
	collection?: string;
}
