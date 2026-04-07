import { mapWithConcurrency } from "@scripts/generate-types/src/utils/concurrency";
import { describe, expect, it } from "vitest";

describe("concurrency - mapWithConcurrency", () => {
	it("deve retornar array vazio quando entrada é vazia", async () => {
		const result = await mapWithConcurrency([], 5, async (x) => x);
		expect(result).toEqual([]);
	});

	it("deve processar items com concurrency = 1 (sequencial)", async () => {
		const items = [1, 2, 3, 4, 5];
		const result = await mapWithConcurrency(items, 1, async (x) => x * 2);
		expect(result).toEqual([2, 4, 6, 8, 10]);
	});

	it("deve processar items com concurrency > array length", async () => {
		const items = [1, 2, 3];
		const result = await mapWithConcurrency(items, 10, async (x) => x * 2);
		expect(result).toEqual([2, 4, 6]);
	});

	it("deve preservar a ordem dos resultados", async () => {
		const items = [1, 2, 3, 4, 5];
		// Simulação de processamento com delays diferentes
		const result = await mapWithConcurrency(items, 3, async (x) => {
			// Items maiores demoram menos (para testar ordem)
			await new Promise((resolve) => setTimeout(resolve, (6 - x) * 10));
			return x * 2;
		});
		expect(result).toEqual([2, 4, 6, 8, 10]);
	});

	it("deve processar items com funções assíncronas", async () => {
		const items = ["a", "b", "c"];
		const result = await mapWithConcurrency(items, 2, async (str) => {
			await new Promise((resolve) => setTimeout(resolve, 10));
			return str.toUpperCase();
		});
		expect(result).toEqual(["A", "B", "C"]);
	});

	it("deve passar o índice correto para a função mapper", async () => {
		const items = [10, 20, 30];
		const result = await mapWithConcurrency(items, 2, async (value, index) => {
			return { value, index };
		});
		expect(result).toEqual([
			{ value: 10, index: 0 },
			{ value: 20, index: 1 },
			{ value: 30, index: 2 },
		]);
	});

	it("deve lidar com concurrency = 0 (deve usar pelo menos 1)", async () => {
		const items = [1, 2, 3];
		const result = await mapWithConcurrency(items, 0, async (x) => x * 2);
		expect(result).toEqual([2, 4, 6]);
	});

	it("deve lidar com concurrency negativa (deve usar 1)", async () => {
		const items = [1, 2, 3];
		const result = await mapWithConcurrency(items, -5, async (x) => x * 2);
		expect(result).toEqual([2, 4, 6]);
	});

	it("deve propagar erros da função mapper", async () => {
		const items = [1, 2, 3];
		await expect(
			mapWithConcurrency(items, 2, async (x) => {
				if (x === 2) {
					throw new Error("Erro no item 2");
				}
				return x * 2;
			}),
		).rejects.toThrow("Erro no item 2");
	});

	it("deve processar corretamente com alta concorrência", async () => {
		const items = Array.from({ length: 100 }, (_, i) => i);
		const result = await mapWithConcurrency(items, 10, async (x) => {
			await new Promise((resolve) => setTimeout(resolve, 1));
			return x * 2;
		});
		expect(result).toHaveLength(100);
		expect(result[0]).toBe(0);
		expect(result[99]).toBe(198);
	});
});
