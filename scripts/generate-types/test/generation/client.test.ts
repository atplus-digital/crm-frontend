import type { NocoBaseCredentials } from "@scripts/generate-types/src/@types/nocobase";
import { NocoBaseClient } from "@scripts/generate-types/src/generation/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("NocoBaseClient", () => {
	beforeEach(() => {
		vi.stubGlobal("fetch", vi.fn());
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
	});

	describe("constructor", () => {
		it("should store baseUrl from credentials", () => {
			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);
			expect(client.baseUrl).toBe("https://api.example.com");
		});

		it("should store credentials", () => {
			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 10000,
			};
			const client = new NocoBaseClient(credentials);
			expect(client.baseUrl).toBe("https://api.example.com");
		});

		it("should accept requestHeaders option", () => {
			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const options = {
				requestHeaders: { "X-Custom-Header": "value" },
			};
			const client = new NocoBaseClient(credentials, options);
			expect(client.baseUrl).toBe("https://api.example.com");
		});

		it("should enable sample field fallback when option is true", () => {
			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const options = {
				enableSampleFieldFallback: true,
			};
			const client = new NocoBaseClient(credentials, options);
			expect(client.baseUrl).toBe("https://api.example.com");
		});

		it("should disable sample field fallback by default", () => {
			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);
			expect(client.baseUrl).toBe("https://api.example.com");
		});
	});

	describe("fetchCollections", () => {
		it("should return sorted collections alphabetically by name", async () => {
			const mockCollections = [
				{ name: "zebra", title: "Zebra Collection", fields: [] },
				{ name: "apple", title: "Apple Collection", fields: [] },
				{ name: "banana", title: "Banana Collection", fields: [] },
			];
			const mockResponse = { data: mockCollections };

			vi.mocked(fetch).mockResolvedValueOnce({
				ok: true,
				json: async () => mockResponse,
			} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);
			const result = await client.fetchCollections();

			expect(result).toHaveLength(3);
			expect(result[0].name).toBe("apple");
			expect(result[1].name).toBe("banana");
			expect(result[2].name).toBe("zebra");
		});

		it("should throw on HTTP error", async () => {
			vi.mocked(fetch).mockResolvedValueOnce({
				ok: false,
				status: 500,
				statusText: "Internal Server Error",
				text: async () => "Server error",
			} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);

			await expect(client.fetchCollections()).rejects.toThrow(
				"HTTP 500 Internal Server Error",
			);
		});
	});

	describe("fetchCollectionFields (without fallback)", () => {
		it("should return sorted fields alphabetically by name", async () => {
			const mockFields = [
				{ name: "zebra_field", type: "string" },
				{ name: "alpha_field", type: "string" },
				{ name: "beta_field", type: "string" },
			];
			const mockResponse = {
				data: { fields: mockFields },
			};

			vi.mocked(fetch).mockResolvedValueOnce({
				ok: true,
				json: async () => mockResponse,
			} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);
			const result = await client.fetchCollectionFields("users");

			expect(result).toHaveLength(3);
			expect(result[0].name).toBe("alpha_field");
			expect(result[1].name).toBe("beta_field");
			expect(result[2].name).toBe("zebra_field");
		});

		it("should throw on HTTP error", async () => {
			vi.mocked(fetch).mockResolvedValueOnce({
				ok: false,
				status: 500,
				statusText: "Internal Server Error",
				text: async () => "Server error",
			} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials);

			await expect(client.fetchCollectionFields("users")).rejects.toThrow(
				"HTTP 500 Internal Server Error",
			);
		});
	});

	describe("fetchCollectionFields (with fallback enabled)", () => {
		it("should fall back to listSample on 404 response", async () => {
			const mockSampleResponse = {
				data: [
					{
						id: 1,
						name: "Test Item",
						count: 42,
					},
				],
			};

			vi.mocked(fetch)
				.mockResolvedValueOnce({
					ok: false,
					status: 404,
					statusText: "Not Found",
					text: async () => "Collection not found",
				} as Response)
				.mockResolvedValueOnce({
					ok: true,
					json: async () => mockSampleResponse,
				} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials, {
				enableSampleFieldFallback: true,
			});

			const result = await client.fetchCollectionFields("nonexistent");

			expect(result).toHaveLength(3);
			expect(result.map((f) => f.name)).toContain("id");
			expect(result.map((f) => f.name)).toContain("name");
			expect(result.map((f) => f.name)).toContain("count");
		});

		it("should throw non-404 errors immediately without fallback", async () => {
			vi.mocked(fetch).mockResolvedValueOnce({
				ok: false,
				status: 500,
				statusText: "Internal Server Error",
				text: async () => "Server error",
			} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials, {
				enableSampleFieldFallback: true,
			});

			await expect(client.fetchCollectionFields("users")).rejects.toThrow(
				"HTTP 500 Internal Server Error",
			);
		});

		it("should return empty array when sample has no records", async () => {
			const mockSampleResponse = {
				data: [],
			};

			vi.mocked(fetch)
				.mockResolvedValueOnce({
					ok: false,
					status: 404,
					statusText: "Not Found",
					text: async () => "Collection not found",
				} as Response)
				.mockResolvedValueOnce({
					ok: true,
					json: async () => mockSampleResponse,
				} as Response);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 5000,
			};
			const client = new NocoBaseClient(credentials, {
				enableSampleFieldFallback: true,
			});

			const result = await client.fetchCollectionFields("empty_collection");
			expect(result).toEqual([]);
		});

		describe("inferFieldFromSample", () => {
			it("should infer number fields from sample", async () => {
				const mockSampleResponse = {
					data: [{ price: 99.99, count: 42 }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const priceField = result.find((f) => f.name === "price");
				expect(priceField).toEqual({
					name: "price",
					type: "double",
					interface: "number",
				});
			});

			it("should infer boolean fields from sample", async () => {
				const mockSampleResponse = {
					data: [{ isActive: true }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const isActiveField = result.find((f) => f.name === "isActive");
				expect(isActiveField).toEqual({
					name: "isActive",
					type: "boolean",
					interface: "checkbox",
				});
			});

			it("should infer array fields from sample", async () => {
				const mockSampleResponse = {
					data: [{ tags: ["tag1", "tag2"] }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const tagsField = result.find((f) => f.name === "tags");
				expect(tagsField).toEqual({
					name: "tags",
					type: "array",
					interface: "multipleSelect",
				});
			});

			it("should infer null/undefined fields as string from sample", async () => {
				const mockSampleResponse = {
					data: [{ nullField: null }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const nullField = result.find((f) => f.name === "nullField");
				expect(nullField).toEqual({
					name: "nullField",
					type: "string",
					interface: "input",
				});
			});

			it("should infer object fields as json from sample", async () => {
				const mockSampleResponse = {
					data: [{ metadata: { key: "value" } }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const metadataField = result.find((f) => f.name === "metadata");
				expect(metadataField).toEqual({
					name: "metadata",
					type: "json",
					interface: "json",
				});
			});

			it("should infer ISO date strings as date type from sample", async () => {
				const mockSampleResponse = {
					data: [{ createdAt: "2024-01-15T10:30:00Z" }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const createdAtField = result.find((f) => f.name === "createdAt");
				expect(createdAtField).toEqual({
					name: "createdAt",
					type: "date",
					interface: "date",
				});
			});

			it("should infer plain strings as string type from sample", async () => {
				const mockSampleResponse = {
					data: [{ title: "Hello World" }],
				};

				vi.mocked(fetch)
					.mockResolvedValueOnce({
						ok: false,
						status: 404,
						statusText: "Not Found",
						text: async () => "Not found",
					} as Response)
					.mockResolvedValueOnce({
						ok: true,
						json: async () => mockSampleResponse,
					} as Response);

				const credentials: NocoBaseCredentials = {
					baseUrl: "https://api.example.com",
					token: "test-token",
					timeoutMs: 5000,
				};
				const client = new NocoBaseClient(credentials, {
					enableSampleFieldFallback: true,
				});

				const result = await client.fetchCollectionFields("test");
				const titleField = result.find((f) => f.name === "title");
				expect(titleField).toEqual({
					name: "title",
					type: "string",
					interface: "input",
				});
			});
		});
	});

	describe("timeout handling", () => {
		it("should throw timeout error on AbortError", async () => {
			const abortError = new DOMException(
				"The operation was aborted",
				"AbortError",
			);
			vi.mocked(fetch).mockRejectedValueOnce(abortError);

			const credentials: NocoBaseCredentials = {
				baseUrl: "https://api.example.com",
				token: "test-token",
				timeoutMs: 100,
			};
			const client = new NocoBaseClient(credentials);

			await expect(client.fetchCollections()).rejects.toThrow(
				"Timeout de 100ms ao acessar https://api.example.com/collections:list?paginate=false",
			);
		});
	});
});
