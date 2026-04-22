import { pipeAsync } from "@scripts/generate-types/src/pipeline/pipe";
import type {
	PipelineContext,
	PipelineStage,
} from "@scripts/generate-types/src/pipeline/types";
import { createPipeline } from "@scripts/generate-types/src/pipeline/types";
import { describe, expect, it } from "vitest";

function makeContext(overrides?: Record<string, unknown>): PipelineContext {
	return {
		config: {} as never,
		dataSource: {} as never,
		client: {} as never,
		...overrides,
	} as PipelineContext;
}

describe("pipeAsync", () => {
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

		const pipeline = pipeAsync(stage1, stage2, stage3);
		const initialContext = makeContext();
		await pipeline(initialContext);

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

		const pipeline = pipeAsync(stage1, stage2, stage3);
		const initialContext = makeContext();
		const result = await pipeline(initialContext);

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

		const pipeline = pipeAsync(stage1, stage2, stage3);
		const initialContext = makeContext();

		await expect(pipeline(initialContext)).rejects.toThrow("Erro no estágio 2");
	});

	it("deve retornar contexto inalterado com pipeline vazio", async () => {
		const pipeline = pipeAsync();
		const initialContext = makeContext();

		const result = await pipeline(initialContext);

		expect(result).toEqual(initialContext);
	});

	it("deve permitir apenas um estágio", async () => {
		const stage1: PipelineStage = async (ctx) => {
			return { ...ctx, modified: true };
		};

		const pipeline = pipeAsync(stage1);
		const initialContext = makeContext();
		const result = await pipeline(initialContext);

		expect(result).toMatchObject({ modified: true });
	});
});

describe("createPipeline (defaultPipeline)", () => {
	it("deve ser callable e retornar uma função", () => {
		const stage: PipelineStage = async (ctx) => ctx;
		const pipeline = createPipeline([stage]);

		expect(typeof pipeline).toBe("function");
	});

	it("deve executar pipeline com múltiplos estágios", async () => {
		const executionOrder: string[] = [];

		const stages: PipelineStage[] = [
			async (ctx) => {
				executionOrder.push("stage1");
				return { ...ctx, step: 1 };
			},
			async (ctx) => {
				executionOrder.push("stage2");
				return { ...ctx, step: 2 };
			},
			async (ctx) => {
				executionOrder.push("stage3");
				return { ...ctx, step: 3 };
			},
		];

		const pipeline = createPipeline(stages);
		const initialContext = makeContext();
		const result = await pipeline(initialContext);

		expect(executionOrder).toEqual(["stage1", "stage2", "stage3"]);
		expect(result).toMatchObject({ step: 3 });
	});

	it("deve propagar todo o contexto através dos estágios", async () => {
		const stages: PipelineStage[] = [
			async (ctx) => ({ ...ctx, field1: "value1" }),
			async (ctx) => ({ ...ctx, field2: "value2" }),
			async (ctx) => ({ ...ctx, field3: "value3" }),
		];

		const pipeline = createPipeline(stages);
		const initialContext = makeContext({ initial: "data" });

		const result = await pipeline(initialContext);

		expect(result).toMatchObject({
			initial: "data",
			field1: "value1",
			field2: "value2",
			field3: "value3",
		});
	});

	it("deve parar execução quando um estágio lança erro", async () => {
		const executionOrder: string[] = [];

		const stages: PipelineStage[] = [
			async (ctx) => {
				executionOrder.push("stage1");
				return ctx;
			},
			async () => {
				executionOrder.push("stage2");
				throw new Error("Falha intencional");
			},
			async (ctx) => {
				executionOrder.push("stage3");
				return ctx;
			},
		];

		const pipeline = createPipeline(stages);
		const initialContext = makeContext();

		await expect(pipeline(initialContext)).rejects.toThrow("Falha intencional");
		expect(executionOrder).toEqual(["stage1", "stage2"]);
	});

	it("deve retornar contexto inicial quando pipeline está vazio", async () => {
		const pipeline = createPipeline([]);
		const initialContext = makeContext({ custom: "value" });

		const result = await pipeline(initialContext);

		expect(result).toEqual(initialContext);
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

		const pipeline = createPipeline(stages);
		const initialContext = makeContext();
		const result = await pipeline(initialContext);

		expect(result).toMatchObject({ async1: true, async2: true });
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

		const pipeline = createPipeline(stages);
		const initialContext = makeContext({ start: true });

		await pipeline(initialContext);

		expect(receivedContexts[0]).toMatchObject({ start: true });
		expect(receivedContexts[0]).not.toHaveProperty("step");

		expect(receivedContexts[1]).toMatchObject({ start: true, step: 1 });
	});
});
