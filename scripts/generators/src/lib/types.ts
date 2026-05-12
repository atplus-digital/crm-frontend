import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { AsyncPipelineStage } from "@generators/lib/pipeline/runner";
import type { PipelineJsonReportResult } from "@scripts/generators/src/lib/lifecycle/lifecycle-tasks";
import type { ListrTaskResult, ListrTaskWrapper } from "listr2";

// ──────────────────────────────────────────────
// Shared types
// ──────────────────────────────────────────────

/**
 * Type alias for the Listr2 task wrapper used across pipeline orchestration.
 */
// biome-ignore lint/suspicious/noExplicitAny: Listr2 requires unconstrained renderer generics
export type TaskRunner = ListrTaskWrapper<any, any, any>;

// ──────────────────────────────────────────────
// Generator definitions
// ──────────────────────────────────────────────

export interface GeneratorDefinition<TRuntimeConfig = unknown> {
	name: string;
	description: string;
	createPipelineOptions: (
		config: TRuntimeConfig,
	) => StandardPipelineFactoryInput<TRuntimeConfig>;
	defaultConfig?: TRuntimeConfig;
	getOutputDirs: (config: TRuntimeConfig) => string[];
}

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

// ──────────────────────────────────────────────
// Orchestration
// ──────────────────────────────────────────────

export type OrchestrationTaskRunner = TaskRunner;

export type NestedTaskList = ReturnType<OrchestrationTaskRunner["newListr"]>;

export type OrchestrationTaskResult = NestedTaskList | ListrTaskResult<unknown>;
