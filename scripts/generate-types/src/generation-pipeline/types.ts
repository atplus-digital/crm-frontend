import type {
	DataSourceFilesResult,
	DataSourceGenerationConfig,
	GenerateTypesResult,
	RuntimeConfig,
} from "../@types/script";

// ──────────────────────────────────────────────
// Generation pipeline context
// ──────────────────────────────────────────────

/**
 * Context passed through each generation pipeline stage.
 * Each stage receives a readonly context and returns a new context with additional data.
 */
export interface GenerationContext {
	// ── Stage: loadConfig ──
	config: RuntimeConfig;

	// ── Stage: resolveDatasources ──
	dataSourceConfigs: DataSourceGenerationConfig[];

	// ── Stage: runDatasources ──
	datasourceResults: DatasourceRunResult[];

	// ── Stage: runPostPipeline ──
	postPipelineCompleted?: boolean;

	// ── Stage: formatResult ──
	finalResult?: GenerateTypesResult;
}

// ──────────────────────────────────────────────
// Datasource run result
// ──────────────────────────────────────────────

export interface DatasourceRunResult {
	name: string;
	status: "fulfilled" | "rejected";
	result?: DataSourceFilesResult;
	error?: unknown;
}

// ──────────────────────────────────────────────
// Pipeline stage signature
// ──────────────────────────────────────────────

export type GenerationStage<C extends GenerationContext = GenerationContext> = (
	context: Readonly<C>,
) => Promise<GenerationContext>;

// ──────────────────────────────────────────────
// Pipeline runner
// ──────────────────────────────────────────────

export async function runGenerationPipeline(
	stages: GenerationStage[],
	initialContext: GenerationContext,
): Promise<GenerationContext> {
	let current = initialContext;

	for (const stage of stages) {
		current = await stage(current);
	}

	return current;
}
