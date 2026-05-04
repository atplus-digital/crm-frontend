import type { TaskOutputWriter } from "@scripts/generators/src/lib/cli/task-runtime";
import type { Logger } from "@scripts/generators/src/lib/logger";
import type { ListrRendererFactory, ListrTask } from "listr2";

export interface GeneratorContext {
	logger: Logger;
	writeOutput: TaskOutputWriter;
}

export interface GeneratorDescriptor {
	name: string;
	label: string;
	run: (ctx: GeneratorContext) => Promise<void>;
}

export interface OrchestratorOptions {
	name: string;
	generators: GeneratorDescriptor[];
}

export interface OrchestratorContext {
	logger: Logger;
	writeOutput: TaskOutputWriter;
	generatorResults?: Array<{
		name: string;
		success: boolean;
		error?: string;
	}>;
}

/**
 * Creates a Listr2 task that runs all generators sequentially.
 * Each generator is executed as a subtask within the main Listr context.
 */
export function createOrchestratorTask(
	options: OrchestratorOptions,
): ListrTask<OrchestratorContext, ListrRendererFactory, ListrRendererFactory> {
	return {
		title: options.name,
		task: async (ctx, task) => {
			const generatorCtx: GeneratorContext = {
				logger: ctx.logger,
				writeOutput: (line: string) => {
					task.output = line;
				},
			};

			const results: OrchestratorContext["generatorResults"] = [];

			for (const generator of options.generators) {
				try {
					task.output = `Executando ${generator.label}...`;
					await generator.run(generatorCtx);
					results.push({ name: generator.name, success: true });
					task.output = `${generator.label} concluído com sucesso`;
				} catch (error) {
					const errorMessage =
						error instanceof Error ? error.message : String(error);
					results.push({
						name: generator.name,
						success: false,
						error: errorMessage,
					});
					task.output = `${generator.label} falhou: ${errorMessage}`;
					throw error;
				}
			}

			ctx.generatorResults = results;
		},
	};
}

/**
 * Runs all generators sequentially using Listr2.
 * Creates logger and propagates context to generators.
 * Throws on first failure.
 */
export async function runOrchestrator(
	options: OrchestratorOptions,
): Promise<void> {
	const { Listr } = await import("listr2");
	const { createLogger } = await import("@scripts/generators/src/lib/logger");

	const logger = createLogger();
	const task = createOrchestratorTask(options);

	// Temporary writeOutput - will be replaced inside task
	const writeOutputRef: (line: string) => void = () => {};

	const listr = new Listr([task], {
		concurrent: false,
		ctx: {
			logger,
			writeOutput: (line: string) => writeOutputRef(line),
		} as OrchestratorContext,
		renderer: "default",
	});

	try {
		await listr.run();
	} catch {
		throw new Error(`Orchestrator "${options.name}" falhou durante a execução`);
	}
}
