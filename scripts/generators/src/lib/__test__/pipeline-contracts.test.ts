import {
	createPipelineGenerator,
	createStandardFinalizationTasks,
	createStandardPreparationTasks,
	type GeneratorContextState,
	type GeneratorTask,
	runOrchestrationStages,
} from "@scripts/generators/src/lib/cli";
import { createLogger } from "@scripts/generators/src/lib/logging";
import {
	assertWithRestore,
	getWithRestore,
} from "@scripts/generators/src/lib/pipeline-assert";
import { runStandardStandalonePipeline } from "@scripts/generators/src/lib/pipeline-lifecycle";
import { evaluateValidationPolicy } from "@scripts/generators/src/lib/pipeline-policy";
import {
	createPipelineExecutionContext,
	getPipelineContextOrThrow,
} from "@scripts/generators/src/lib/runtime-context";
import { describe, expect, it, vi } from "vitest";

describe("pipeline contracts", () => {
	it("executa manifesto de stages em ordem", async () => {
		const events: string[] = [];

		await runOrchestrationStages({ value: 0 }, [
			{
				title: "stage-a",
				run: async () => {
					events.push("stage-a");
				},
			},
			{
				title: "stage-b",
				run: async () => {
					events.push("stage-b");
				},
			},
		]);

		expect(events).toEqual(["stage-a", "stage-b"]);
	});

	it("usa o mesmo manifesto no standalone lifecycle", async () => {
		const events: string[] = [];

		const result = await runStandardStandalonePipeline({
			overrideConfig: undefined,
			logger: createLogger(),
			onBeforeRun: () => events.push("before"),
			createExecutionContext: () => {
				events.push("create-context");
				return { value: 0 };
			},
			lockWorkspace: () => events.push("lock"),
			backupOutputs: () => events.push("backup"),
			orchestrationStages: [
				{
					title: "stage-1",
					run: async (ctx) => {
						ctx.value += 1;
						events.push("stage-1");
					},
				},
				{
					title: "stage-2",
					run: async (ctx) => {
						ctx.value += 1;
						events.push("stage-2");
					},
				},
			],
			assertResult: (ctx) => {
				events.push("assert");
				return ctx.value;
			},
			cleanupBackups: async () => {
				events.push("cleanup");
			},
		});

		expect(result).toBe(2);
		expect(events).toEqual([
			"before",
			"create-context",
			"lock",
			"backup",
			"stage-1",
			"stage-2",
			"assert",
			"cleanup",
		]);
	});

	it("aplica preset padrão de tasks de preparação/finalização", async () => {
		type ExecContext = { id: string };
		type WrapperContext = GeneratorContextState<
			{ enabled: boolean },
			ExecContext
		>;

		const events: string[] = [];
		const lockWorkspace = vi.fn(() => events.push("lock"));
		const backupOutputs = vi.fn(() => events.push("backup"));
		const assertResult = vi.fn(() => events.push("assert"));
		const cleanupBackups = vi.fn(async () => events.push("cleanup"));

		const getExecutionContext = (ctx: WrapperContext): ExecContext => {
			if (!ctx.executionContext) {
				throw new Error("exec context missing");
			}
			return ctx.executionContext;
		};

		const preparationTasks = createStandardPreparationTasks<
			WrapperContext,
			{ enabled: boolean },
			ExecContext
		>({
			onBeforePrepare: () => events.push("before-prepare"),
			createExecutionContext: () => ({ id: "exec" }),
			getExecutionContext,
			lockWorkspace,
			backupOutputs,
		});

		const finalizationTasks = createStandardFinalizationTasks({
			getExecutionContext,
			assertResult,
			cleanupBackups,
		});

		const context = {
			overrideConfig: { enabled: true },
			executionContext: undefined,
			logger: createLogger(),
		} as WrapperContext & { logger: ReturnType<typeof createLogger> };

		for (const task of [...preparationTasks, ...finalizationTasks]) {
			await task.run(context, {} as never);
		}

		expect(context.executionContext).toEqual({ id: "exec" });
		expect(events).toEqual([
			"before-prepare",
			"lock",
			"backup",
			"assert",
			"cleanup",
		]);
	});

	it("factory de generator mantém contrato padrão de orchestration", () => {
		let capturedOrchestrationTask: GeneratorTask<{ value: number }> | undefined;

		const generator = createPipelineGenerator({
			name: "contract-generator",
			context: { value: 1 },
			stages: [],
			getExecutionContext: () => ({ ok: true }),
			createTasks: (orchestrationTask) => {
				capturedOrchestrationTask = orchestrationTask;
				return [orchestrationTask];
			},
		});

		expect(generator.name).toBe("contract-generator");
		expect(generator.context).toEqual({ value: 1 });
		expect(generator.tasks).toHaveLength(1);
		expect(capturedOrchestrationTask?.title).toBe("orchestration");
	});

	it("helpers compartilhados de assert/context/policy preservam previsibilidade", () => {
		const restore = vi.fn();

		const baseContext = createPipelineExecutionContext({
			overrideConfig: { outputDir: "out" },
			logger: createLogger(),
			defaultConfig: { outputDir: "default" },
			getOutputDirs: (runtimeConfig) => [runtimeConfig.outputDir],
		});
		baseContext.pipelineContext = { ready: true };

		const pipelineContext = getPipelineContextOrThrow(
			baseContext,
			"pipeline missing",
		);
		expect(pipelineContext).toEqual({ ready: true });

		expect(
			getWithRestore(
				() => getPipelineContextOrThrow(baseContext, "pipeline missing"),
				restore,
			),
		).toEqual({ ready: true });
		expect(restore).not.toHaveBeenCalled();

		assertWithRestore(true, restore, "should not fail");
		expect(restore).not.toHaveBeenCalled();

		const shouldValidate = evaluateValidationPolicy(
			{ changed: true },
			(context) => context.changed,
		);
		expect(shouldValidate).toBe(true);
	});
});
