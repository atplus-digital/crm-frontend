import type { ScriptConfig } from "@scripts/generate-custom-requests/src/@types/script-config";
import { CustomRequestsApiClient } from "@scripts/generate-custom-requests/src/api/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

vi.mock("@scripts/generate-types/src/utils/logger", () => ({
	logger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		debug: vi.fn(),
		setLevel: vi.fn(),
	},
}));

function createMockConfig(overrides: Partial<ScriptConfig> = {}): ScriptConfig {
	return {
		baseUrl: "https://example.com/api",
		token: "test-token",
		timeoutMs: 5000,
		logLevel: "info",
		outputDir: "/tmp/test-output",
		splitRequests: [],
		...overrides,
	};
}

function makeEntry(key: string) {
	return {
		key,
		name: `Request ${key}`,
		options: { collectionName: "t_pessoas", method: "POST", url: "/test" },
	};
}

describe("CustomRequestsApiClient", () => {
	beforeEach(() => {
		mockFetch.mockReset();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("deve buscar todas as páginas com paginação automática", async () => {
		const page1Data = Array.from({ length: 200 }, (_, i) =>
			makeEntry(`req-${i}`),
		);
		const page2Data = [
			makeEntry("req-200"),
			makeEntry("req-201"),
			makeEntry("req-202"),
		];

		mockFetch
			.mockResolvedValueOnce({
				ok: true,
				json: () => Promise.resolve({ data: page1Data }),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: () => Promise.resolve({ data: page2Data }),
			});

		const client = new CustomRequestsApiClient(createMockConfig());
		const result = await client.fetchAllCustomRequests();

		expect(result).toHaveLength(203);
		expect(result[0].key).toBe("req-0");
		expect(result[202].key).toBe("req-202");
		expect(mockFetch).toHaveBeenCalledTimes(2);
	});

	it("deve lançar erro de autorização para 401", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 401,
			statusText: "Unauthorized",
			text: () => Promise.resolve('{"error": "invalid token"}'),
		});

		const client = new CustomRequestsApiClient(createMockConfig());

		await expect(client.fetchAllCustomRequests()).rejects.toThrow(
			"Não autorizado (401). Verifique o token da API.",
		);
	});

	it("deve lançar erro de endpoint não encontrado para 404", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 404,
			statusText: "Not Found",
			text: () => Promise.resolve(""),
		});

		const client = new CustomRequestsApiClient(createMockConfig());

		await expect(client.fetchAllCustomRequests()).rejects.toThrow(
			"Endpoint não encontrado (404)",
		);
	});

	it("deve lançar erro do servidor para 500", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 500,
			statusText: "Internal Server Error",
			text: () => Promise.resolve('{"error": "database down"}'),
		});

		const client = new CustomRequestsApiClient(createMockConfig());

		await expect(client.fetchAllCustomRequests()).rejects.toThrow(
			"Erro do servidor (500)",
		);
	});

	it("deve lançar erro de timeout quando fetch é abortado", async () => {
		const abortError = new DOMException(
			"The operation was aborted",
			"AbortError",
		);
		mockFetch.mockRejectedValueOnce(abortError);

		const client = new CustomRequestsApiClient(createMockConfig());

		await expect(client.fetchAllCustomRequests()).rejects.toThrow(
			/Timeout de \d+ms/,
		);
	});

	it("deve retornar array vazio quando data é undefined", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ data: undefined }),
		});

		const client = new CustomRequestsApiClient(createMockConfig());
		const result = await client.fetchAllCustomRequests();

		expect(result).toEqual([]);
	});

	it("deve parar paginação quando página retorna menos que pageSize", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () =>
				Promise.resolve({
					data: [makeEntry("only-one")],
				}),
		});

		const client = new CustomRequestsApiClient(createMockConfig());
		const result = await client.fetchAllCustomRequests();

		expect(result).toHaveLength(1);
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});
});
