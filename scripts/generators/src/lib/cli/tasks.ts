import {
	isWorkspaceLocked,
	lockWorkspace,
} from "@scripts/generators/src/lib/io/locker";
import { runStandardPipeline } from "@scripts/generators/src/lib/pipeline/lifecycle";
import type { ListrRendererFactory, ListrTaskWrapper } from "listr2";
import { Listr } from "listr2";
import type { GeneratorDefinition } from "./types";

/**
 * Creates a Listr2 task tree for the orchestrator CLI.
 *
 * Each generator definition becomes a subtask that calls `runStandardPipeline()`.
 * One generator failing does not prevent others from running (exitOnError: false).
 *
 * @param generators - Array of generator definitions to orchestrate
 * @returns A configured Listr instance ready to be executed
 */
export function createOrchestrationTasks(
	generators: GeneratorDefinition[],
): Listr<unknown, "default" | "silent" | "verbose", ListrRendererFactory> {
	const tasks = generators.map((generator) => ({
		title: generator.name,
		task: async (
			_ctx: unknown,
			task: ListrTaskWrapper<
				unknown,
				ListrRendererFactory,
				ListrRendererFactory
			>,
		): Promise<void> => {
			const pipelineInput = generator.createPipelineOptions(
				generator.defaultConfig,
			);
			await runStandardPipeline({
				...pipelineInput,
				task,
			});
		},
		rendererOptions: {
			persistentOutput: true,
		},
		exitOnError: false,
	}));

	return new Listr<
		unknown,
		"default" | "silent" | "verbose",
		ListrRendererFactory
	>(tasks, {
		concurrent: false,
		rendererOptions: {
			collapseSkips: false,
			collapseErrors: false,
			collapseSubtasks: false,
		},
	});
}

/**
 * Creates a Listr2 task that locks the workspace by adding
 * readonly settings to `.vscode/settings.json`.
 *
 * Checks if the workspace is already locked and skips if so.
 *
 * @param outputDirs - Directories to protect via `files.readonlyInclude`
 * @returns A configured Listr instance with a single lock task
 */
export function createLockWorkspaceTask(
	outputDirs: string[],
): Listr<unknown, "default" | "silent" | "verbose", ListrRendererFactory> {
	return new Listr<
		unknown,
		"default" | "silent" | "verbose",
		ListrRendererFactory
	>([
		{
			title: "🔒 Bloqueando workspace",
			task: (
				_ctx: unknown,
				task: ListrTaskWrapper<
					unknown,
					ListrRendererFactory,
					ListrRendererFactory
				>,
			): void => {
				if (!isWorkspaceLocked(outputDirs)) {
					lockWorkspace(outputDirs);
					task.output = "✓ Workspace bloqueado com sucesso";
				} else {
					task.output = "ℹ Workspace já está bloqueado";
				}
			},
			rendererOptions: {
				persistentOutput: true,
			},
		},
	]);
}
