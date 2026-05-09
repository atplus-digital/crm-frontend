import { fileURLToPath } from "node:url";
import type { ListrRendererFactory } from "listr2";
import { Listr } from "listr2";
import { createOrchestrationTasks } from "./tasks";
import type { GeneratorDefinition, OrchestrationTaskRunner } from "./types";

// ──────────────────────────────────────────────
// Local types (no Logger)
// ──────────────────────────────────────────────

/**
 * A single CLI stage — maps to one Listr2 task.
 * Carries no Logger — progress is reported via the Listr2 task handle.
 */
export interface CliStage<TContext = unknown> {
	title: string;
	run: (
		context: TContext,
		task?: OrchestrationTaskRunner,
	) => void | Promise<void>;
}

/**
 * Fully resolved options for running a generator CLI via Listr2.
 */
export interface RunGeneratorCliOptions<TContext = unknown> {
	name: string;
	stages: CliStage<TContext>[];
	context: TContext;
	disableOutput?: boolean;
}

/**
 * Input for {@link createGeneratorOptions} — partial context allowed.
 */
export interface CreateGeneratorOptions<TContext = unknown> {
	name: string;
	stages: CliStage<TContext>[];
	context?: TContext;
	disableOutput?: boolean;
}

// ──────────────────────────────────────────────
// executeEntry — self-executing entry point
// ──────────────────────────────────────────────

/**
 * Checks whether a module is being executed directly (not imported).
 * Always returns `false` under Vitest.
 */
function isExecutedDirectly(moduleUrl: string): boolean {
	if (process.env.VITEST) return false;

	const entryFile = process.argv[1];
	if (!entryFile) return false;

	return fileURLToPath(moduleUrl) === entryFile;
}

/**
 * Self-executing entry point pattern.
 *
 * Runs the generator if the module is executed directly (via `pnpm` or `node`).
 * If imported as a module by another script (e.g., the orchestrator), does nothing.
 *
 * Uses `console.error` for error reporting (no Logger).
 *
 * @param moduleUrl — `import.meta.url` of the calling module
 * @param createGenerator — factory that returns the generator options
 */
export function executeEntry(
	moduleUrl: string,
	createGenerator: () => RunGeneratorCliOptions<object>,
): void {
	if (!isExecutedDirectly(moduleUrl)) return;

	void main().catch((error: unknown) => {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exitCode = 1;
	});

	async function main(): Promise<void> {
		await runGeneratorCli(createGenerator());
	}
}

// ──────────────────────────────────────────────
// createGeneratorOptions — build CLI options from input
// ──────────────────────────────────────────────

/**
 * Creates a fully resolved {@link RunGeneratorCliOptions} from partial input.
 * Fills missing context with an empty object.
 */
export function createGeneratorOptions<TContext>(
	options: CreateGeneratorOptions<TContext>,
): RunGeneratorCliOptions<TContext> {
	return {
		name: options.name,
		stages: options.stages,
		context: options.context ?? ({} as TContext),
		disableOutput: options.disableOutput,
	};
}

// ──────────────────────────────────────────────
// runGeneratorCli — build Listr2 task list and run
// ──────────────────────────────────────────────

/**
 * Builds a Listr2 task list from the given stages and executes it.
 *
 * @param options — resolved CLI options
 */
export async function runGeneratorCli<TContext>(
	options: RunGeneratorCliOptions<TContext>,
): Promise<void> {
	const tasks = options.stages.map((stage) => ({
		title: stage.title,
		task: (
			ctx: TContext,
			task: OrchestrationTaskRunner,
		): void | Promise<void> => stage.run(ctx, task),
		rendererOptions: { persistentOutput: true },
	}));

	const listr = new Listr<
		TContext,
		"default" | "silent" | "verbose",
		ListrRendererFactory
	>(tasks, {
		concurrent: false,
		ctx: options.context,
		rendererOptions: {
			collapseSkips: false,
			collapseErrors: false,
			collapseSubtasks: false,
		},
	});

	await listr.run();
}

// ──────────────────────────────────────────────
// runOrchestrator — orchestrate multiple generators
// ──────────────────────────────────────────────

/**
 * Creates an orchestration task list from {@link GeneratorDefinition}s and
 * executes them sequentially via Listr2.
 *
 * Each generator runs its own pipeline stages; one failing does not
 * prevent others from running.
 *
 * @param generators — array of generator definitions to orchestrate
 */
export async function runOrchestrator(
	generators: GeneratorDefinition[],
): Promise<void> {
	const tasks = createOrchestrationTasks(generators);
	await tasks.run();
}
