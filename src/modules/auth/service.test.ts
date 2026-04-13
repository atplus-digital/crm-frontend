import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";

const {
	authStoreState,
	mockRequest,
	mockReset,
	mockSetPermissionsFromRoles,
	mockSetToken,
	mockSetUser,
} = vi.hoisted(() => ({
	authStoreState: {
		token: "token-valido",
		user: {
			id: 7,
			email: "usuario@atplus.com",
			username: "usuario",
			nickname: "Usuário",
			phone: "11999999999",
			roles: [],
		},
	} as {
		token: string | null;
		user: {
			id: number;
			email: string;
			username: string;
			nickname: string;
			phone: string;
			roles: never[];
		} | null;
	},
	mockRequest: vi.fn(),
	mockSetUser: vi.fn(),
	mockSetToken: vi.fn(),
	mockReset: vi.fn(),
	mockSetPermissionsFromRoles: vi.fn(),
}));

vi.mock("#/env", () => ({
	isDev: false,
}));

vi.mock("#/modules/permissions", () => ({
	permissionRoleSchema: z.any(),
	resetPermissions: vi.fn(),
	setPermissionsFromRoles: mockSetPermissionsFromRoles,
}));

vi.mock("./client", () => ({
	nocobaseClient: {
		request: mockRequest,
		auth: {
			token: "token-valido",
			signIn: vi.fn(),
			signOut: vi.fn(),
		},
	},
}));

vi.mock("./store", () => ({
	authStore: {
		get state() {
			return authStoreState;
		},
	},
	reset: mockReset,
	setToken: mockSetToken,
	setUser: mockSetUser,
}));

import { updateProfile } from "./service";

describe("updateProfile", () => {
	beforeEach(() => {
		authStoreState.token = "token-valido";
		authStoreState.user = {
			id: 7,
			email: "usuario@atplus.com",
			username: "usuario",
			nickname: "Usuário",
			phone: "11999999999",
			roles: [],
		};

		mockRequest.mockReset();
		mockSetUser.mockReset();
		mockSetPermissionsFromRoles.mockReset();
	});

	it("atualiza perfil e recarrega usuário autenticado", async () => {
		mockRequest.mockImplementation(async (config: { url: string }) => {
			if (config.url === "users:update") {
				return { data: { data: { id: 7 } } };
			}

			if (config.url === "auth:check") {
				return {
					data: {
						data: {
							id: 7,
							email: "novo@atplus.com",
							username: "usuario",
							nickname: "Novo Nome",
							phone: "11911112222",
						},
					},
				};
			}

			throw new Error(`Unexpected URL: ${config.url}`);
		});

		const user = await updateProfile({
			email: "  novo@atplus.com  ",
			nickname: "  Novo Nome  ",
			phone: " 11911112222 ",
		});

		expect(mockRequest).toHaveBeenNthCalledWith(1, {
			url: "users:update",
			method: "POST",
			params: {
				filterByTk: 7,
				whitelist: "email,nickname,phone",
			},
			data: {
				email: "novo@atplus.com",
				nickname: "Novo Nome",
				phone: "11911112222",
			},
		});
		expect(mockRequest).toHaveBeenNthCalledWith(2, {
			url: "auth:check",
			method: "GET",
		});
		expect(mockSetUser).toHaveBeenCalledWith({
			id: 7,
			email: "novo@atplus.com",
			username: "usuario",
			nickname: "Novo Nome",
			phone: "11911112222",
			roles: [],
		});
		expect(mockSetPermissionsFromRoles).toHaveBeenCalledWith([]);
		expect(user).toMatchObject({
			email: "novo@atplus.com",
			nickname: "Novo Nome",
			phone: "11911112222",
		});
	});

	it("falha quando não há usuário autenticado em memória", async () => {
		authStoreState.user = null;

		await expect(
			updateProfile({
				email: "novo@atplus.com",
				nickname: "Novo Nome",
				phone: "11911112222",
			}),
		).rejects.toThrow("Usuário autenticado não encontrado");

		expect(mockRequest).not.toHaveBeenCalled();
	});
});
