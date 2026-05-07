import { createLogger } from "@scripts/generators/src/lib/logging";
import type { GeneratedRegistryEntry } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/generated-registry";
import { filterGeneratedEntriesByConfiguredRequests } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/transform-and-merge";
import { describe, expect, it } from "vitest";

function makeEntry(key: string): GeneratedRegistryEntry {
	return {
		key,
		name: `Entry ${key}`,
		collection: "t_test",
		dataSourceKey: "main",
		method: "POST",
		url: "/test",
		payloadSchema: "z.any()",
		payloadData: null,
	};
}

describe("filterGeneratedEntriesByConfiguredRequests", () => {
	it("mantém apenas entradas mapeadas em requests.config.ts", () => {
		const entries = [
			makeEntry("req-a"),
			makeEntry("req-b"),
			makeEntry("req-c"),
		];

		const filtered = filterGeneratedEntriesByConfiguredRequests(
			entries,
			{
				"req-a": "req-a",
				"req-c": "req-c",
			},
			createLogger(),
		);

		expect(filtered.map((entry) => entry.key)).toEqual(["req-a", "req-c"]);
	});

	it("retorna vazio quando requests está vazio", () => {
		const entries = [makeEntry("req-a")];

		const filtered = filterGeneratedEntriesByConfiguredRequests(
			entries,
			{},
			createLogger(),
		);

		expect(filtered).toEqual([]);
	});
});
