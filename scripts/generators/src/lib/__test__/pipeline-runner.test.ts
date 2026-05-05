import { createLogger } from "@scripts/generators/src/lib/logging";
import {
	createOrchestrationRunner,
	type RuntimePipelineContext,
	runPipelineStages,
} from "@scripts/generators/src/lib/pipeline-runner";
import { describe, expect, it, vi } from "vitest";

describe("runPipelineStages", () => {
	it("executa estágios em sequência acumulando contexto", async () => {
		const result = await runPipelineStages({ value: 1 }, [
			async (context) => ({ ...context, value: context.value + 1 }),
			async (context) => ({ ...context, value: context.value * 2 }),
		]);

		expect(result.value).toBe(4);
	});

	it("retorna contexto inicial quando não há estágios", async () => {
		const initial = { ready: true };
		const result = await runPipelineStages(initial, []);
		expect(result).toBe(initial);
	});
});

describe("createOrchestrationRunner", () => {
	it("inicializa contexto com logger quando pipelineContext está vazio", async () => {
		const logger = createLogger();
		const runtimeContext: RuntimePipelineContext<{ loggerSeen: boolean }> = {
			logger,
		};

		const { runOrchestrationStage } = createOrchestrationRunner({
			createInitialContext: () => ({ loggerSeen: false }),
		});

		await runOrchestrationStage(runtimeContext, async () => ({
			loggerSeen: true,
		}));

		expect(runtimeContext.pipelineContext).toEqual({ loggerSeen: true });
	});

	it("dispara onError e propaga exceção", async () => {
		const logger = createLogger();
		const runtimeContext: RuntimePipelineContext<{ value: number }> = {
			logger,
			pipelineContext: { value: 10 },
		};
		const onError = vi.fn();

		const { runOrchestrationStage } = createOrchestrationRunner({
			createInitialContext: () => ({ value: 0 }),
			onError,
		});

		await expect(
			runOrchestrationStage(runtimeContext, async () => {
				throw new Error("falha");
			}),
		).rejects.toThrow("falha");

		expect(onError).toHaveBeenCalledTimes(1);
		expect(runtimeContext.pipelineContext).toEqual({ value: 10 });
	});
});
