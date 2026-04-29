import type { GeneratedRegistryEntry } from "@scripts/generate-custom-requests/src/@types/generated-registry";
import { mergeRegistries } from "@scripts/generate-custom-requests/src/utils/merge-registries";
import { describe, expect, it } from "vitest";

function makeEntry(
	key: string,
	overrides: Partial<GeneratedRegistryEntry> = {},
): GeneratedRegistryEntry {
	return {
		key,
		name: `Entry ${key}`,
		collection: "t_test",
		dataSourceKey: "main",
		method: "POST",
		url: "/test",
		payloadSchema: "z.any()",
		payloadData: null,
		...overrides,
	};
}

describe("mergeRegistries", () => {
	it("deve sobrescrever entrada gerada com manual quando mesma key", () => {
		const generated = [
			makeEntry("req-1", { name: "Generated 1", url: "/gen/url" }),
			makeEntry("req-2", { name: "Generated 2" }),
		];
		const manual = [
			makeEntry("req-1", { name: "Manual Override", url: "/manual/url" }),
		];

		const result = mergeRegistries(generated, manual);

		expect(result).toHaveLength(2);
		const req1 = result.find((e) => e.key === "req-1");
		expect(req1?.name).toBe("Manual Override");
		expect(req1?.url).toBe("/manual/url");

		const req2 = result.find((e) => e.key === "req-2");
		expect(req2?.name).toBe("Generated 2");
	});

	it("deve manter entradas únicas de ambos os lados", () => {
		const generated = [makeEntry("gen-only")];
		const manual = [makeEntry("manual-only")];

		const result = mergeRegistries(generated, manual);

		expect(result).toHaveLength(2);
		expect(result.map((e) => e.key)).toContain("gen-only");
		expect(result.map((e) => e.key)).toContain("manual-only");
	});

	it("deve ordenar resultado por key", () => {
		const generated = [makeEntry("c-entry"), makeEntry("a-entry")];
		const manual = [makeEntry("b-entry")];

		const result = mergeRegistries(generated, manual);

		expect(result.map((e) => e.key)).toEqual(["a-entry", "b-entry", "c-entry"]);
	});

	it("deve lidar com manual vazio", () => {
		const generated = [makeEntry("gen-1"), makeEntry("gen-2")];

		const result = mergeRegistries(generated, []);

		expect(result).toHaveLength(2);
		expect(result).toEqual(generated);
	});

	it("deve lidar com generated vazio", () => {
		const manual = [makeEntry("man-1"), makeEntry("man-2")];

		const result = mergeRegistries([], manual);

		expect(result).toHaveLength(2);
		expect(result).toEqual(manual);
	});

	it("deve lidar com ambos vazios", () => {
		const result = mergeRegistries([], []);

		expect(result).toHaveLength(0);
	});

	it("deve preservar múltiplos overrides manuais", () => {
		const generated = [
			makeEntry("req-1", { name: "Gen 1" }),
			makeEntry("req-2", { name: "Gen 2" }),
			makeEntry("req-3", { name: "Gen 3" }),
		];
		const manual = [
			makeEntry("req-1", { name: "Manual 1" }),
			makeEntry("req-3", { name: "Manual 3" }),
		];

		const result = mergeRegistries(generated, manual);

		expect(result).toHaveLength(3);

		const req1 = result.find((e) => e.key === "req-1");
		expect(req1?.name).toBe("Manual 1");

		const req2 = result.find((e) => e.key === "req-2");
		expect(req2?.name).toBe("Gen 2");

		const req3 = result.find((e) => e.key === "req-3");
		expect(req3?.name).toBe("Manual 3");
	});
});
