import { createLogger } from "@scripts/generators/src/lib/logger";
import type {
	PipelineContext,
	PipelineStage,
} from "@scripts/generators/src/pipelines/generate-types/pipeline/datasource-pipeline/types";
import { describe, expect, it } from "vitest";

function makeContext(overrides?: Record<string, unknown>): PipelineContext {
	return {
		logger: createLogger(),
		config: {} as never,
		dataSource: {} as never,
		client: {} as never,
		...overrides,
	} as PipelineContext;
}

async function runPipeline(
	stages: PipelineStage[],
	initial: PipelineContext,
): Promise<PipelineContext> {
	let context: PipelineContext = initial;
	for (const stage of stages) {
		context = await stage(context);
	}
	return context;
}

describe("defaultPipeline", () => {
	it("deve executar estágios em ordem sequencial", async () => {
		const executionOrder: string[] = [];

		const stage1: PipelineStage = async (ctx) => {
			executionOrder.push("stage1");
			return { ...ctx, value1: "first" };
		};

		const stage2: PipelineStage = async (ctx) => {
			executionOrder.push("stage2");
			return { ...ctx, value2: "second" };
		};

		const stage3: PipelineStage = async (ctx) => {
			executionOrder.push("stage3");
			return { ...ctx, value3: "third" };
		};

		const initialContext = makeContext();
		await runPipeline([stage1, stage2, stage3], initialContext);

		expect(executionOrder).toEqual(["stage1", "stage2", "stage3"]);
	});

	it("deve acumular contexto através dos estágios", async () => {
		const stage1: PipelineStage = async (ctx) => {
			return { ...ctx, field1: "value1" };
		};

		const stage2: PipelineStage = async (ctx) => {
			return { ...ctx, field2: "value2" };
		};

		const stage3: PipelineStage = async (ctx) => {
			return { ...ctx, field3: "value3" };
		};

		const initialContext = makeContext();
		const result = await runPipeline([stage1, stage2, stage3], initialContext);

		expect(result).toMatchObject({
			field1: "value1",
			field2: "value2",
			field3: "value3",
		});
	});

	it("deve propagar erros e interromper pipeline", async () => {
		const stage1: PipelineStage = async (ctx) => {
			return { ...ctx };
		};

		const stage2: PipelineStage = async () => {
			throw new Error("Erro no estágio 2");
		};

		const stage3: PipelineStage = async (ctx) => {
			return ctx;
		};

		const initialContext = makeContext();

		await expect(
			runPipeline([stage1, stage2, stage3], initialContext),
		).rejects.toThrow("Erro no estágio 2");
	});

	it("deve retornar contexto inalterado com pipeline vazio", async () => {
		const initialContext = makeContext();

		const result = await runPipeline([], initialContext);

		expect(result).toEqual(initialContext);
	});

	it("deve permitir apenas um estágio", async () => {
		const stage1: PipelineStage = async (ctx) => {
			return { ...ctx, modified: true };
		};

		const initialContext = makeContext();
		const result = await runPipeline([stage1], initialContext);

		expect(result).toMatchObject({ modified: true });
	});

	it("deve passar contexto readonly para cada estágio", async () => {
		const receivedContexts: PipelineContext[] = [];

		const stages: PipelineStage[] = [
			async (ctx) => {
				receivedContexts.push({ ...ctx });
				return { ...ctx, step: 1 };
			},
			async (ctx) => {
				receivedContexts.push({ ...ctx });
				return { ...ctx, step: 2 };
			},
		];

		const initialContext = makeContext({ start: true });

		await runPipeline(stages, initialContext);

		expect(receivedContexts[0]).toMatchObject({ start: true });
		expect(receivedContexts[0]).not.toHaveProperty("step");

		expect(receivedContexts[1]).toMatchObject({ start: true, step: 1 });
	});

	it("deve suportar estágios assíncronos", async () => {
		const stages: PipelineStage[] = [
			async (ctx) => {
				await new Promise((resolve) => setTimeout(resolve, 10));
				return { ...ctx, async1: true };
			},
			async (ctx) => {
				await new Promise((resolve) => setTimeout(resolve, 10));
				return { ...ctx, async2: true };
			},
		];

		const initialContext = makeContext();
		const result = await runPipeline(stages, initialContext);

		expect(result).toMatchObject({ async1: true, async2: true });
	});
});
