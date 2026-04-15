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

	it("deve permitir headers extras para reutilizar o mesmo client em outros datasources", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ data: [{ name: "users" }] }),
		});
		vi.stubGlobal("fetch", fetchMock);

		const client = new NocoBaseClient(credentials, {
			requestHeaders: {
				"X-Data-Source": "d_db_ixcsoft",
			},
		});

		await client.fetchCollections();

		expect(fetchMock).toHaveBeenCalledWith(
			"https://example.com/api/collections:list?paginate=false",
			expect.objectContaining({
				headers: {
					Authorization: "Bearer secret-token",
					"X-Data-Source": "d_db_ixcsoft",
				},
			}),
		);
	});

	it("deve fazer fallback para <collection>:list quando collections:get retorna 404", async () => {
		const fetchMock = vi.fn(async (input: URL | string) => {
			const url = String(input);

			if (url.includes("collections:get?appends=fields&filterByTk=users")) {
				return {
					ok: false,
					status: 404,
					statusText: "Not Found",
					text: vi.fn().mockResolvedValue("Not Found"),
				};
			}

			if (url.includes("users:list?pageSize=1&page=1")) {
				return {
					ok: true,
					json: vi.fn().mockResolvedValue({
						data: [{ id: 1, active: true, created_at: "2026-01-01" }],
					}),
				};
			}

			throw new Error(`URL inesperada: ${url}`);
		});

		vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

		const client = new NocoBaseClient(credentials, {
			enableSampleFieldFallback: true,
		});

		const fields = await client.fetchCollectionFields("users");

		expect(fields).toEqual([
			{ name: "active", type: "boolean", interface: "checkbox" },
			{ name: "created_at", type: "date", interface: "date" },
			{ name: "id", type: "double", interface: "number" },
		]);
	});
});
