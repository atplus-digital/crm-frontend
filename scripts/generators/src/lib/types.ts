import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { AsyncPipelineStage } from "@generators/lib/pipeline/runner";
import type { PipelineJsonReportResult } from "@scripts/generators/src/lib/lifecycle/lifecycle-tasks";
import type { ListrTaskResult, ListrTaskWrapper } from "listr2";

// ──────────────────────────────────────────────
// Shared types
// ──────────────────────────────────────────────

/**
 * Type alias for the Listr2 task wrapper used across pipeline orchestration.
 *
 * Listr2's generic params are <Context, Renderer, FallthroughRenderer>.
 * We default to `unknown` for Context and leave the renderer params
 * unconstrained since they are not used in our pipeline code.
 */
// biome-ignore lint/suspicious/noExplicitAny: Listr2 requires unconstrained renderer generics
export type TaskRunner = ListrTaskWrapper<any, any, any>;

// ──────────────────────────────────────────────
// Generator definitions
// ──────────────────────────────────────────────

/**
 * A single generator definition — registered in a registry and invoked by the
 * orchestrator CLI.
 */
export interface GeneratorDefinition<TRuntimeConfig = unknown> {
	name: string;
	description: string;
	createPipelineOptions: (
		config: TRuntimeConfig,
	) => StandardPipelineFactoryInput<TRuntimeConfig>;
	defaultConfig?: TRuntimeConfig;
	getOutputDirs: (config: TRuntimeConfig) => string[];
}

/**
 * Input for runStandardPipeline — the common entry point used by all generators.
 * Carries the Listr task (not a logger) for progress reporting.
 */
export interface StandardPipelineInput<
	TRuntimeConfig = unknown,
	TPipelineContext = unknown,
> {
	task: TaskRunner;
	overrideConfig?: Partial<TRuntimeConfig>;
	defaultConfig: TRuntimeConfig;
	getOutputDirs: (config: TRuntimeConfig) => string[];
	stages: AsyncPipelineStage<
		PipelineExecutionContext<TRuntimeConfig, TPipelineContext>
	>[];
	label?: string;
	reportsOutputPath?: string;
	onReportReady?: (result: PipelineJsonReportResult) => void;
}

export type StandardPipelineFactoryInput<
	TRuntimeConfig = unknown,
	TPipelineContext = unknown,
> = Omit<StandardPipelineInput<TRuntimeConfig, TPipelineContext>, "task">;

/**
 * Generator runtime config for the orchestrator — credentials and HTTP settings.
 */
export interface GeneratorRuntimeConfig {
	nocoBaseUrl: string;
	nocoToken: string;
	requestTimeoutMs: number;
}

// ──────────────────────────────────────────────
// Orchestration stages
// ──────────────────────────────────────────────

export type OrchestrationTaskRunner = TaskRunner;

export type NestedTaskList = ReturnType<OrchestrationTaskRunner["newListr"]>;

export type OrchestrationTaskResult = NestedTaskList | ListrTaskResult<unknown>;

/**
 * A single orchestration stage — runs a step in the generator pipeline.
 * The context type is PipelineExecutionContext from the pipeline layer.
 */
export interface GeneratorOrchestrationStage<TExecutionContext> {
	title: string;
	run: (
		context: TExecutionContext,
		task: OrchestrationTaskRunner,
	) => OrchestrationTaskResult;
}

// ──────────────────────────────────────────────
// Pipeline lifecycle hooks
// ──────────────────────────────────────────────

/**
 * Lifecycle hooks for a generator pipeline.
 *
 * 1. backup() — save current state before generation
 * 2. [run pipeline stages]
 * 3. restore() — revert on failure (called by error handlers)
 * 4. cleanup() — remove backup artifacts on success
 */
export interface PipelineLifecycleHooks {
	backup: () => void;
	restore: () => void;
	cleanup: () => void;
}

/**
 * Returns the required execution context, throwing if not yet initialized.
 */
export function getRequiredExecutionContext<TExec>(
	state: { executionContext?: TExec },
	label: string,
): TExec {
	if (!state.executionContext) {
		throw new Error(`Contexto de execução não inicializado: ${label}`);
	}

	return state.executionContext;
}
