import { transformApiEntryToRegistry } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/transform-and-merge/entry-transformer";
import { describe, expect, it } from "vitest";

describe("Edge cases", () => {
	it("deve lidar com aspas e backslashes no name", () => {
		const entry = {
			key: "test-special",
			name: 'Request com "aspas" e \\backslash\\',
			options: {
				collectionName: "t_test",
				method: "POST",
				url: "/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.name).toBe('Request com "aspas" e \\backslash\\');
	});

	it("deve lidar com key vazia", () => {
		const entry = {
			key: "",
			name: "Request sem key",
			options: {
				collectionName: "t_test",
				method: "POST",
				url: "/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.key).toBe("");
	});

	it("deve lidar com name vazio", () => {
		const entry = {
			key: "test-empty-name",
			name: "",
			options: {
				collectionName: "t_test",
				method: "POST",
				url: "/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.name).toBe("");
	});

	it("deve lidar com URL contendo query params e fragment", () => {
		const entry = {
			key: "test-url",
			name: "Request com URL complexa",
			options: {
				collectionName: "t_test",
				method: "GET",
				url: "/custom/test?a=1&b=2#fragment",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.url).toBe("/custom/test?a=1&b=2#fragment");
	});

	it("deve lidar com collection name contendo acentos", () => {
		const entry = {
			key: "test-collection",
			name: "Request com acentos",
			options: {
				collectionName: "t_pessoas_físicas-v2",
				method: "POST",
				url: "/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.collection).toBe("t_pessoas_físicas-v2");
	});

	it("deve retornar null quando options é undefined", () => {
		const entry = {
			key: "test-no-options",
			name: "Request sem options",
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).toBeNull();
	});

	it("deve retornar null quando collectionName é undefined", () => {
		const entry = {
			key: "test-no-collection",
			name: "Request sem collection",
			options: {
				method: "POST",
				url: "/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).toBeNull();
	});

	it("deve usar valores default quando method e url são undefined", () => {
		const entry = {
			key: "test-defaults",
			name: "Request com defaults",
			options: {
				collectionName: "t_test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result).not.toBeNull();
		expect(result?.method).toBe("POST");
		expect(result?.url).toBe("");
	});
});
