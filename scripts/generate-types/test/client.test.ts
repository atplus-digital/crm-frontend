import { NocoBaseClient } from "@scripts/generate-types/src/generation/client";
import { afterEach, describe, expect, it, vi } from "vitest";

describe("NocoBaseClient", () => {
	const credentials = {
		baseUrl: "https://example.com/api",
		token: "secret-token",
		timeoutMs: 1_500,
	};

	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	it("deve buscar collections ordenadas e enviar bearer token", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({
				data: [{ name: "users" }, { name: "departments" }],
			}),
		});
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials);
		const result = await client.fetchCollections();

		expect(result).toEqual([{ name: "departments" }, { name: "users" }]);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://example.com/api/collections:list?paginate=false",
			expect.objectContaining({
				headers: {
					Authorization: "Bearer secret-token",
				},
			}),
		);
	});

	it("deve buscar campos de uma collection ordenados", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({
				data: {
					collection: { name: "users" },
					fields: [{ name: "zeta" }, { name: "alpha" }],
				},
			}),
		});
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials);
		const result = await client.fetchCollectionFields("users");

		expect(result).toEqual([{ name: "alpha" }, { name: "zeta" }]);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://example.com/api/collections:get?appends=fields&filterByTk=users",
			expect.any(Object),
		);
	});

	it("deve incluir preview do body quando a API retorna erro", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: false,
			status: 500,
			statusText: "Internal Server Error",
			text: vi
				.fn()
				.mockResolvedValue("  erro interno \n detalhado \n com espaços  "),
		});
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials);

		await expect(client.fetchCollections()).rejects.toThrow(
			"HTTP 500 Internal Server Error em https://example.com/api/collections:list?paginate=false - resposta: erro interno detalhado com espaços",
		);
	});

	it("deve omitir preview quando não consegue ler o body de erro", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: false,
			status: 401,
			statusText: "Unauthorized",
			text: vi.fn().mockRejectedValue(new Error("sem body")),
		});
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials);

		await expect(client.fetchCollections()).rejects.toThrow(
			"HTTP 401 Unauthorized em https://example.com/api/collections:list?paginate=false",
		);
	});

	it("deve converter AbortError em mensagem de timeout", async () => {
		const fetchMock = vi
			.fn()
			.mockRejectedValue(new DOMException("Abortado", "AbortError"));
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials);

		await expect(client.fetchCollections()).rejects.toThrow(
			"Timeout de 1500ms ao acessar https://example.com/api/collections:list?paginate=false",
		);
	});
});
