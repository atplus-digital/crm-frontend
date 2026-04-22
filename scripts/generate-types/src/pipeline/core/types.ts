import type { CollectionTypesMap } from "../../@types/generation";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceGenerationConfig,
	RuntimeConfig,
} from "../../@types/script";

// ──────────────────────────────────────────────
// File write result (local to pipeline, mirrors writer.ts output)
// ──────────────────────────────────────────────

export interface GeneratedFileWrite {
	outputPath: string;
	changed: boolean;
	skipped?: boolean;
}

// ──────────────────────────────────────────────
// Enum origin tracking (used by enum stages + report)
// ──────────────────────────────────────────────

export type EnumOrigin = "api" | "adapter" | "inferencia";

export interface EnumOriginEntry {
	origin: EnumOrigin;
}

// ──────────────────────────────────────────────
// PipelineContext — carries all data across stages
// ──────────────────────────────────────────────

/**
 * Context object passed through every pipeline stage.
 *
 * Logical immutability: each stage receives a new context object (via spread),
 * but internal structures (Maps, Records) are shared by reference.
 * Use `Readonly<C>` in stage signatures to enforce immutability at the type level.
 */
export interface PipelineContext {
	// ── Immutable configuration (set once, never modified) ──
	config: Readonly<RuntimeConfig>;
	dataSource: Readonly<DataSourceGenerationConfig>;
	client: DataSourceClient;

	// ── Stage 1: fetchCollections ──
	collections?: DataSourceCollection[];

	// ── Stage 2: buildTypes ──
	collectionTypes?: CollectionTypesMap;

	// ── Stage 3-4: enum adapter + inference ──
	/**
	 * Tracks the origin of each enum field per collection.
	 * Used by the enum report stage to generate _enum-inference.md.
	 * Key: collectionName → (fieldName → origin info)
	 */
	enumOrigins?: Map<string, Map<string, EnumOriginEntry>>;

	// ── Stage 5: splitCollections ──
	mainCollections?: CollectionTypesMap;
	splitCollections?: Map<string, CollectionTypesMap>;

	// ── Stage 6: generateContent ──
	/**
	 * Generated file contents keyed by relative path (within outputDir).
	 * Example: "index.ts" → "...", "pessoas.ts" → "..."
	 */
	fileContents?: Map<string, string>;

	// ── Stage 7: writeFiles ──
	writeResults?: GeneratedFileWrite[];

	// ── Stage 8: generateEnumReport (optional) ──
	enumReportContent?: string;

	// ── Stage 9: cleanup + validate (optional) ──
	cleanedFiles?: string[];
	typeValidationPassed?: boolean;
}

// ──────────────────────────────────────────────
// Stage-specific context extensions
// ──────────────────────────────────────────────

export interface InitContext extends PipelineContext {
	config: Readonly<RuntimeConfig>;
	dataSource: Readonly<DataSourceGenerationConfig>;
	client: DataSourceClient;
}

export interface FetchCollectionsContext extends PipelineContext {
	collections: DataSourceCollection[];
}

export interface BuildTypesContext extends PipelineContext {
	collections: DataSourceCollection[];
	collectionTypes: CollectionTypesMap;
}

export interface ApplyEnumCorrectionsContext extends PipelineContext {
	collectionTypes: CollectionTypesMap;
}

export interface SplitCollectionsContext extends PipelineContext {
	collectionTypes: CollectionTypesMap;
	mainCollections: CollectionTypesMap;
	splitCollections: Map<string, CollectionTypesMap>;
}

// ──────────────────────────────────────────────
// Pipeline stage signature
// ──────────────────────────────────────────────

/**
 * A pipeline stage receives a readonly context and returns a new context.
 *
 * Each stage MUST:
 * - NOT mutate the input context (use spread to create a new object)
 * - Set at least one new field on the returned context
 * - Propagate all previous fields via spread
 *
 * @example
 * ```ts
 * const fetchCollectionsStage: PipelineStage<InitContext> = async (ctx) => {
 *   const collections = await ctx.client.fetchCollections();
 *   return { ...ctx, collections };
 * };
 * ```
 */
export type PipelineStage<C extends PipelineContext = PipelineContext> = (
	context: Readonly<C>,
) => Promise<PipelineContext>;

// ──────────────────────────────────────────────
// Pipeline factory
// ──────────────────────────────────────────────

/**
 * Executes pipeline stages sequentially, threading context through each stage.
 *
 * @param stages - Ordered array of pipeline stage functions
 * @returns Function that takes initial context and returns final context
 *
 * @example
 * ```ts
 * const pipeline = createPipeline([
 *   fetchCollectionsStage,
 *   buildTypesStage,
 *   splitCollectionsStage,
 *   generateContentStage,
 *   writeFilesStage,
 * ]);
 *
 * const finalContext = await pipeline(initialContext);
 * ```
 */
export function createPipeline(
	stages: PipelineStage[],
): (context: PipelineContext) => Promise<PipelineContext> {
	return async (context: PipelineContext): Promise<PipelineContext> => {
		let current = context;

		for (const stage of stages) {
			current = await stage(current);
		}

		return current;
	};
}
