import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ── Mocks ────────────────────────────────────────────────────────────

vi.mock("#/env", () => ({
	env: {
		CRM_NOCOBASE_URL: "https://nocobase.example.com/api",
	},
}));

// We need to mock axios at the module level
const mockPost = vi.fn();
const mockGet = vi.fn();

vi.mock("axios", () => {
	return {
		default: {
			create: () => ({
				post: (...args: unknown[]) => mockPost(...args),
				get: (...args: unknown[]) => mockGet(...args),
			}),
			isAxiosError: (err: unknown) =>
				err !== null &&
				typeof err === "object" &&
				"isAxiosError" in (err as Record<string, unknown>),
		},
	};
});

// ── Tests ───────────────────────────────────────────────────────────

describe("auth-api.server", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	// ── signIn ───────────────────────────────────────────────────────

	describe("signIn", () => {
		it("deve autenticar com sucesso e retornar token + usuário", async () => {
			mockPost.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						token: "jwt-token-123",
						id: 42,
						email: "user@example.com",
						nickname: "John",
						snippet: "john",
						roles: [{ name: "admin" }, { name: "editor" }],
					},
				},
			});

			const { signIn } = await import("#/modules/auth/auth-api.server");
			const result = await signIn("user@example.com", "password123");

			expect(result.success).toBe(true);
			expect(result.token).toBe("jwt-token-123");
			expect(result.user.id).toBe(42);
			expect(result.user.email).toBe("user@example.com");
			expect(result.user.nickname).toBe("John");
			expect(result.user.roles).toEqual(["admin", "editor"]);
		});

		it("deve normalizar roles de objetos para strings", async () => {
			mockPost.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						token: "jwt-token",
						id: 1,
						email: "user@example.com",
						nickname: null,
						snippet: null,
						roles: [{ name: "super-admin" }],
					},
				},
			});

			const { signIn } = await import("#/modules/auth/auth-api.server");
			const result = await signIn("user@example.com", "password");

			expect(result.user.roles).toEqual(["super-admin"]);
		});

		it("deve lidar com roles que não são objetos (fallback para array vazio)", async () => {
			mockPost.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						token: "jwt-token",
						id: 1,
						email: "user@example.com",
						nickname: null,
						snippet: null,
						roles: ["string-role", 42, null],
					},
				},
			});

			const { signIn } = await import("#/modules/auth/auth-api.server");
			const result = await signIn("user@example.com", "password");

			expect(result.user.roles).toEqual([]);
		});

		it("deve enviar X-Authenticator: basic header", async () => {
			mockPost.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						token: "jwt-token",
						id: 1,
						email: "user@example.com",
						nickname: null,
						snippet: null,
						roles: [],
					},
				},
			});

			const { signIn } = await import("#/modules/auth/auth-api.server");
			await signIn("user@example.com", "password");

			expect(mockPost).toHaveBeenCalledTimes(1);
			expect(mockPost.mock.calls[0][0]).toBe("/auth:signIn");
			expect(mockPost.mock.calls[0][1]).toEqual({
				email: "user@example.com",
				password: "password",
			});
			expect(mockPost.mock.calls[0][2].headers).toEqual({
				"X-Authenticator": "basic",
			});
		});

		it("deve lançar AuthError com INVALID_CREDENTIALS em 401", async () => {
			const error = new Error("Unauthorized");
			Object.assign(error, {
				isAxiosError: true,
				response: { status: 401, data: null },
			});

			mockPost.mockRejectedValue(error);

			const { signIn } = await import("#/modules/auth/auth-api.server");

			await expect(
				signIn("user@example.com", "wrong-password"),
			).rejects.toEqual({
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			});
		});

		it("deve lançar AuthError com NETWORK_ERROR em erro de rede", async () => {
			const error = new Error("Network Error");
			Object.assign(error, {
				isAxiosError: true,
				code: "ERR_NETWORK",
				response: undefined,
			});

			mockPost.mockRejectedValue(error);

			const { signIn } = await import("#/modules/auth/auth-api.server");

			await expect(signIn("user@example.com", "password")).rejects.toEqual({
				code: "NETWORK_ERROR",
				message: "Erro de conexão com o servidor",
			});
		});

		it("deve lançar AuthError com UNKNOWN para erros inesperados", async () => {
			mockPost.mockRejectedValue(new Error("something unexpected"));

			const { signIn } = await import("#/modules/auth/auth-api.server");

			await expect(signIn("user@example.com", "password")).rejects.toEqual({
				code: "UNKNOWN",
				message: "Erro inesperado durante a autenticação",
			});
		});
	});

	// ── checkSession ─────────────────────────────────────────────────

	describe("checkSession", () => {
		it("deve validar sessão com sucesso e retornar usuário", async () => {
			mockGet.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						id: 42,
						email: "user@example.com",
						username: "johndoe",
						nickname: "John",
						snippet: "john",
						roles: [{ name: "admin" }],
					},
				},
			});

			const { checkSession } = await import("#/modules/auth/auth-api.server");
			const result = await checkSession("valid-token");

			expect(result.success).toBe(true);
			expect(result.user.id).toBe(42);
			expect(result.user.email).toBe("user@example.com");
			expect(result.user.username).toBe("johndoe");
			expect(result.user.roles).toEqual(["admin"]);
		});

		it("deve enviar Authorization header e Cache-Control: no-store", async () => {
			mockGet.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						id: 1,
						email: "user@example.com",
						username: null,
						nickname: null,
						snippet: null,
						roles: [],
					},
				},
			});

			const { checkSession } = await import("#/modules/auth/auth-api.server");
			await checkSession("my-token");

			expect(mockGet).toHaveBeenCalledTimes(1);
			expect(mockGet.mock.calls[0][0]).toBe("/auth:check");
			expect(mockGet.mock.calls[0][1].headers).toEqual({
				Authorization: "Bearer my-token",
				"Cache-Control": "no-store",
			});
		});

		it("deve lançar AuthError com SESSION_EXPIRED em 401", async () => {
			const error = new Error("Unauthorized");
			Object.assign(error, {
				isAxiosError: true,
				response: { status: 401, data: null },
			});

			mockGet.mockRejectedValue(error);

			const { checkSession } = await import("#/modules/auth/auth-api.server");

			await expect(checkSession("expired-token")).rejects.toEqual({
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			});
		});

		it("deve aplicar defaults para campos nullable", async () => {
			mockGet.mockResolvedValue({
				data: {
					data: 1,
					meta: {
						id: 1,
						email: "user@example.com",
						roles: [],
					},
				},
			});

			const { checkSession } = await import("#/modules/auth/auth-api.server");
			const result = await checkSession("token");

			expect(result.user.username).toBeNull();
			expect(result.user.nickname).toBeNull();
		});
	});

	// ── signOut ──────────────────────────────────────────────────────

	describe("signOut", () => {
		it("deve retornar true quando sign-out succeeds", async () => {
			mockPost.mockResolvedValue({ data: {} });

			const { signOut } = await import("#/modules/auth/auth-api.server");
			const result = await signOut("valid-token");

			expect(result).toBe(true);
		});

		it("deve enviar Authorization header", async () => {
			mockPost.mockResolvedValue({ data: {} });

			const { signOut } = await import("#/modules/auth/auth-api.server");
			await signOut("my-token");

			expect(mockPost).toHaveBeenCalledTimes(1);
			expect(mockPost.mock.calls[0][0]).toBe("/auth:signOut");
			expect(mockPost.mock.calls[0][2].headers).toEqual({
				Authorization: "Bearer my-token",
			});
		});

		it("deve retornar false quando ocorre erro", async () => {
			const error = new Error("Server Error");
			Object.assign(error, {
				isAxiosError: true,
				response: { status: 500 },
			});

			mockPost.mockRejectedValue(error);

			const { signOut } = await import("#/modules/auth/auth-api.server");
			const result = await signOut("token");

			expect(result).toBe(false);
		});
	});
});
