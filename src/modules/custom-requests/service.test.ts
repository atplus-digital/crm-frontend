import { beforeEach, describe, expect, it, vi } from "vitest";
import { nocobaseRepository } from "#/modules/repositories";
import {
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
} from "./errors";
import {
	getCustomRequestConfig,
	getRequestsByCollection,
	sendCustomRequest,
} from "./service";

vi.mock("#/modules/repositories", () => ({
	nocobaseRepository: {
		request: vi.fn(),
	},
}));

describe("sendCustomRequest", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("deve enviar requisição válida para Criar Contrato IXC", async () => {
		const mockResponse = { id: 123, status: "created" };
		vi.spyOn(nocobaseRepository, "request").mockResolvedValue(mockResponse);

		const result = await sendCustomRequest("37yaihkravc", {
			payload: {
				id_contrato: 456,
				id_vendedor: "VEN001",
				observacoes: "Contrato teste",
			},
		});

		expect(result.success).toBe(true);
		expect(result.data).toEqual(mockResponse);
		expect(nocobaseRepository.request).toHaveBeenCalledWith({
			url: "customRequests:send/37yaihkravc",
			method: "POST",
			data: {
				id_contrato: 456,
				id_vendedor: "VEN001",
				observacoes: "Contrato teste",
			},
			params: undefined,
		});
	});

	it("deve enviar requisição válida para Qualirun Informações Adicionais", async () => {
		const mockResponse = { success: true, message: "Informações recebidas" };
		vi.spyOn(nocobaseRepository, "request").mockResolvedValue(mockResponse);

		const result = await sendCustomRequest("0j7f9fuzuo7", {
			payload: {
				id_negociacao: 789,
				info_adicional: "Cliente solicitou urgência",
			},
		});

		expect(result.success).toBe(true);
		expect(result.data).toEqual(mockResponse);
		expect(nocobaseRepository.request).toHaveBeenCalledWith({
			url: "customRequests:send/0j7f9fuzuo7",
			method: "POST",
			data: {
				id_negociacao: 789,
				info_adicional: "Cliente solicitou urgência",
			},
			params: undefined,
		});
	});

	it("deve enviar requisição válida para n8n Fluxo de Compras", async () => {
		const mockResponse = { flow_id: "abc123", status: "triggered" };
		vi.spyOn(nocobaseRepository, "request").mockResolvedValue(mockResponse);

		const result = await sendCustomRequest("h32vk2yid08", {
			payload: {
				id_negociacao: 321,
				fluxo_compras: true,
			},
		});

		expect(result.success).toBe(true);
		expect(result.data).toEqual(mockResponse);
		expect(nocobaseRepository.request).toHaveBeenCalledWith({
			url: "customRequests:send/h32vk2yid08",
			method: "POST",
			data: {
				id_negociacao: 321,
				fluxo_compras: true,
			},
			params: undefined,
		});
	});

	it("deve lançar CustomRequestValidationError para payload inválido (campo obrigatório)", async () => {
		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: {
					id_vendedor: "VEN001",
				} as any,
			}),
		).rejects.toThrow(CustomRequestValidationError);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: {
					id_vendedor: "VEN001",
				} as any,
			}),
		).rejects.toMatchObject({
			code: CustomRequestErrorCode.VALIDATION_ERROR,
			message: expect.stringContaining("id_contrato"),
		});
	});

	it("deve lançar CustomRequestValidationError para payload inválido (tipo errado)", async () => {
		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: {
					id_contrato: "123" as unknown as number,
				},
			}),
		).rejects.toThrow(CustomRequestValidationError);

		await expect(
			sendCustomRequest("h32vk2yid08", {
				payload: {
					id_negociacao: 123,
					fluxo_compras: "true" as unknown as boolean,
				},
			}),
		).rejects.toThrow(CustomRequestValidationError);
	});

	it("deve lançar CustomRequestValidationError para número negativo", async () => {
		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: {
					id_contrato: -5,
				},
			}),
		).rejects.toThrow(CustomRequestValidationError);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: {
					id_contrato: -5,
				},
			}),
		).rejects.toMatchObject({
			message: expect.stringContaining("positivo"),
		});
	});

	it("deve lançar CustomRequestNetworkError para erro de rede", async () => {
		vi.spyOn(nocobaseRepository, "request").mockRejectedValue(
			new Error("Network timeout"),
		);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: { id_contrato: 123 },
			}),
		).rejects.toThrow(CustomRequestNetworkError);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: { id_contrato: 123 },
			}),
		).rejects.toMatchObject({
			code: CustomRequestErrorCode.NETWORK_ERROR,
			message: expect.stringContaining("Network timeout"),
		});
	});

	it("deve lançar CustomRequestNetworkError para erro genérico", async () => {
		vi.spyOn(nocobaseRepository, "request").mockRejectedValue(
			"Erro desconhecido",
		);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: { id_contrato: 123 },
			}),
		).rejects.toThrow(CustomRequestNetworkError);

		await expect(
			sendCustomRequest("37yaihkravc", {
				payload: { id_contrato: 123 },
			}),
		).rejects.toMatchObject({
			message: expect.stringContaining("Erro de rede"),
		});
	});

	it("deve enviar requisição com params adicionais", async () => {
		const mockResponse = { data: { id: 1 } };
		vi.spyOn(nocobaseRepository, "request").mockResolvedValue(mockResponse);

		await sendCustomRequest("37yaihkravc", {
			payload: { id_contrato: 123 },
			params: { expand: "relations", include: "metadata" },
		});

		expect(nocobaseRepository.request).toHaveBeenCalledWith({
			url: "customRequests:send/37yaihkravc",
			method: "POST",
			data: { id_contrato: 123 },
			params: { expand: "relations", include: "metadata" },
		});
	});

	it("deve enviar requisição sem payload opcional", async () => {
		const mockResponse = { status: "ok" };
		vi.spyOn(nocobaseRepository, "request").mockResolvedValue(mockResponse);

		const result = await sendCustomRequest("37yaihkravc");

		expect(result.success).toBe(true);
		expect(result.data).toEqual(mockResponse);
		expect(nocobaseRepository.request).toHaveBeenCalledWith({
			url: "customRequests:send/37yaihkravc",
			method: "POST",
			data: undefined,
			params: undefined,
		});
	});
});

describe("getRequestsByCollection", () => {
	it("deve retornar array com request key para cliente_contrato", () => {
		const result = getRequestsByCollection("cliente_contrato");

		expect(result).toEqual(["37yaihkravc"]);
		expect(result).toHaveLength(1);
	});

	it("deve retornar array com request key para t_qualirun_info_adicionais", () => {
		const result = getRequestsByCollection("t_qualirun_info_adicionais");

		expect(result).toEqual(["0j7f9fuzuo7"]);
		expect(result).toHaveLength(1);
	});

	it("deve retornar array com request key para t_negociacoes", () => {
		const result = getRequestsByCollection("t_negociacoes");

		expect(result).toEqual(["h32vk2yid08"]);
		expect(result).toHaveLength(1);
	});

	it("deve retornar array vazio para collection inexistente", () => {
		const result = getRequestsByCollection("collection_inexistente");

		expect(result).toEqual([]);
		expect(result).toHaveLength(0);
	});
});

describe("getCustomRequestConfig", () => {
	it("deve retornar configuração completa para 37yaihkravc", () => {
		const config = getCustomRequestConfig("37yaihkravc");

		expect(config).toMatchObject({
			key: "37yaihkravc",
			name: "Criar Contrato IXC",
			collection: "cliente_contrato",
			options: {
				method: "POST",
				url: "https://ixc.atplus.com.br/ixc_db/v1/contratos",
				timeout: 30000,
			},
		});
		expect(config.payloadSchema).toBeDefined();
	});

	it("deve retornar configuração completa para 0j7f9fuzuo7", () => {
		const config = getCustomRequestConfig("0j7f9fuzuo7");

		expect(config).toMatchObject({
			key: "0j7f9fuzuo7",
			name: "Qualirun Informações Adicionais",
			collection: "t_qualirun_info_adicionais",
			options: {
				method: "POST",
				url: "https://qualirun.atplus.com.br/api/info-adicionais",
				timeout: 30000,
			},
		});
		expect(config.payloadSchema).toBeDefined();
	});

	it("deve retornar configuração completa para h32vk2yid08", () => {
		const config = getCustomRequestConfig("h32vk2yid08");

		expect(config).toMatchObject({
			key: "h32vk2yid08",
			name: "n8n Fluxo de Compras",
			collection: "t_negociacoes",
			options: {
				method: "POST",
				url: "https://n8n.atplus.com.br/webhook/compras",
				timeout: 30000,
			},
		});
		expect(config.payloadSchema).toBeDefined();
	});
});
