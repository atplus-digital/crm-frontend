import { mapWithConcurrency } from "@scripts/generate-types/src/utils/concurrency";
import { describe, expect, it } from "vitest";

describe("mapWithConcurrency", () => {
	it("returns empty array for empty input", async () => {
		const result = await mapWithConcurrency([], 5, async (item) => item);
		expect(result).toEqual([]);
	});

	it("processes single item with concurrency 1", async () => {
		const items = ["a"];
		const result = await mapWithConcurrency(items, 1, async (item) =>
			item.toUpperCase(),
		);
		expect(result).toEqual(["A"]);
	});

	it("preserves result order matching input order", async () => {
		const items = [1, 2, 3, 4, 5];
		const result = await mapWithConcurrency(items, 3, async (item, index) => {
			await new Promise((resolve) => setTimeout(resolve, (5 - item) * 10));
			return item * 10 + index;
		});
		expect(result).toEqual([10, 21, 32, 43, 54]);
	});

	it("respects concurrency limit", async () => {
		let maxConcurrent = 0;
		let currentConcurrent = 0;
		const items = [1, 2, 3, 4, 5];

		await mapWithConcurrency(items, 2, async () => {
			currentConcurrent++;
			maxConcurrent = Math.max(maxConcurrent, currentConcurrent);
			await new Promise((resolve) => setTimeout(resolve, 5));
			currentConcurrent--;
			return 0;
		});

		expect(maxConcurrent).toBeLessThanOrEqual(2);
	});

	it("uses minimum of concurrency and items.length workers", async () => {
		const items = [1, 2, 3];
		let workerCount = 0;
		await mapWithConcurrency(items, 10, async (_, idx) => {
			if (idx === 0) workerCount++;
			await new Promise((resolve) => setTimeout(resolve, 1));
			return idx;
		});
		expect(workerCount).toBe(1);
	});

	it("propagates errors from mapper", async () => {
		const items = [1, 2, 3];
		await expect(
			mapWithConcurrency(items, 2, async (item) => {
				if (item === 2) throw new Error(" Boom at item 2");
				return item;
			}),
		).rejects.toThrow("Boom at item 2");
	});

	it("handles concurrency of 1 (sequential)", async () => {
		const items = ["x", "y", "z"];
		const result = await mapWithConcurrency(
			items,
			1,
			async (item) => `${item}!`,
		);
		expect(result).toEqual(["x!", "y!", "z!"]);
	});
});
