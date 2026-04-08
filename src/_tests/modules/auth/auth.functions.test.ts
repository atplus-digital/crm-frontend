import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ── Mocks ────────────────────────────────────────────────────────────

const mockGetCookie = vi.fn<() => string | undefined>();
const mockSetCookie = vi.fn();
const mockDeleteCookie = vi.fn();
const mockGetRequestProtocol = vi.fn<() => "http" | "https">();
const mockGetRequestHeader = vi.fn<() => string | undefined>();

vi.mock("@tanstack/start-server-core", () => ({
	getCookie: mockGetCookie,
	setCookie: mockSetCookie,
	deleteCookie: mockDeleteCookie,
	getRequestProtocol: mockGetRequestProtocol,
}));

vi.mock("@tanstack/react-start/server", () => ({
	getRequestHeader: mockGetRequestHeader,
}));

const mockSignInApi = vi.fn();
const mockCheckSessionApi = vi.fn();
const mockSignOutApi = vi.fn();

vi.mock("#/modules/auth/auth-api.server", () => ({
	signIn: mockSignInApi,
	checkSession: mockCheckSessionApi,
	signOut: mockSignOutApi,
}));

vi.mock("#/env", () => ({
	env: {
		SERVER_URL: "https://server.example.com",
		CRM_NOCOBASE_URL: "https://nocobase.example.com/api",
		AUTH_SESSION_SECRET: "mock-auth-session-secret-at-least-32-chars",
	},
}));

// Mock createServerFn to directly invoke the handler
vi.mock("@tanstack/react-start", () => ({
	createServerFn: (_opts: { method: string; inputValidator?: unknown }) => {
		const api = {
			inputValidator: (_validator: unknown) => api,
			handler: (fn: (ctx: { data?: unknown }) => Promise<unknown>) => {
				return async (ctx: { data?: unknown }) => {
					return fn(ctx);
				};
			},
		};
		return api;
	},
}));

// ── Tests ───────────────────────────────────────────────────────────

describe("auth.functions", () => {
	beforeEach(() => {
		vi.resetModules();
		vi.clearAllMocks();
		mockGetRequestProtocol.mockReturnValue("https");
		mockGetRequestHeader.mockReturnValue("https://server.example.com");
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	// ── getCurrentUser ───────────────────────────────────────────────

	describe("getCurrentUser", () => {
		it("deve retornar undefined quando não há cookie de sessão", async () => {
			mockGetCookie.mockReturnValue(undefined);

			const { getCurrentUser } = await import("#/modules/auth/auth.functions");
			const result = await getCurrentUser();

			expect(result).toBeUndefined();
			expect(mockCheckSessionApi).not.toHaveBeenCalled();
		});

		it("deve retornar usuário quando sessão é válida", async () => {
			// Primeiro cria uma sessão para obter o cookie
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);
			createSession("valid-token");
			const cookieValue = mockSetCookie.mock.calls[0][1];

			mockGetCookie.mockReturnValue(cookieValue);
			mockCheckSessionApi.mockResolvedValue({
				success: true,
				user: {
					id: 1,
					email: "user@example.com",
					username: "johndoe",
					nickname: "John",
					roles: ["admin"],
				},
			});

			const { getCurrentUser } = await import("#/modules/auth/auth.functions");
			const result = await getCurrentUser();

			expect(result).toBeDefined();
			expect(result?.id).toBe(1);
			expect(result?.email).toBe("user@example.com");
			expect(result?.roles).toEqual(["admin"]);
			expect(mockCheckSessionApi).toHaveBeenCalledWith("valid-token");
		});

		it("deve remover cookie e retornar undefined quando auth:check retorna 401", async () => {
			// Cria sessão
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);
			createSession("expired-token");
			const cookieValue = mockSetCookie.mock.calls[0][1];

			mockGetCookie.mockReturnValue(cookieValue);
			mockCheckSessionApi.mockRejectedValue({
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			});

			const { getCurrentUser } = await import("#/modules/auth/auth.functions");
			const result = await getCurrentUser();

			expect(result).toBeUndefined();
			expect(mockCheckSessionApi).toHaveBeenCalledWith("expired-token");
			expect(mockDeleteCookie).toHaveBeenCalledWith(
				"crm_session",
				expect.objectContaining({
					httpOnly: true,
					sameSite: "lax",
					path: "/",
				}),
			);
		});

		it("deve remover cookie e retornar undefined quando auth:check retorna erro de rede", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);
			createSession("valid-token");
			const cookieValue = mockSetCookie.mock.calls[0][1];

			mockGetCookie.mockReturnValue(cookieValue);
			mockCheckSessionApi.mockRejectedValue({
				code: "NETWORK_ERROR",
				message: "Erro de conexão",
			});

			const { getCurrentUser } = await import("#/modules/auth/auth.functions");
			const result = await getCurrentUser();

			expect(result).toBeUndefined();
			expect(mockDeleteCookie).toHaveBeenCalled();
		});

		it("deve remover cookie e retornar undefined quando token é inválido/tampered", async () => {
			// Cookie com formato inválido (não foi criado pelo createSession)
			mockGetCookie.mockReturnValue("invalid-cookie-value");

			const { getCurrentUser } = await import("#/modules/auth/auth.functions");
			const result = await getCurrentUser();

			expect(result).toBeUndefined();
			expect(mockCheckSessionApi).not.toHaveBeenCalled();
		});
	});

	// ── signIn (server function) ─────────────────────────────────────

	describe("signIn", () => {
		it("deve autenticar e retornar usuário em sucesso", async () => {
			mockSignInApi.mockResolvedValue({
				success: true,
				token: "jwt-token-123",
				user: {
					id: 1,
					email: "user@example.com",
					username: "johndoe",
					nickname: "John",
					roles: ["admin"],
				},
			});

			const { signIn } = await import("#/modules/auth/auth.functions");
			const result = await signIn({
				data: { email: "user@example.com", password: "pass123" },
			});

			expect(result.user).toBeDefined();
			expect(result.user?.email).toBe("user@example.com");
			expect(result.error).toBeUndefined();
			expect(mockSetCookie).toHaveBeenCalled(); // Cookie criado
		});

		it("deve retornar erro genérico em falha de autenticação", async () => {
			mockSignInApi.mockRejectedValue({
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			});

			const { signIn } = await import("#/modules/auth/auth.functions");
			const result = await signIn({
				data: { email: "user@example.com", password: "wrong" },
			});

			expect(result.error).toBeDefined();
			expect(result.user).toBeUndefined();
			expect(result.error).toBe("Email ou senha inválidos. Tente novamente.");
		});

		it("deve retornar erro genérico quando Origin é inválido (CSRF)", async () => {
			mockGetRequestHeader.mockReturnValue("https://evil.com");

			const { signIn } = await import("#/modules/auth/auth.functions");
			const result = await signIn({
				data: { email: "user@example.com", password: "pass123" },
			});

			expect(result.error).toBeDefined();
			expect(mockSignInApi).not.toHaveBeenCalled();
		});
	});

	// ── signOut (server function) ────────────────────────────────────

	describe("signOut", () => {
		it("deve limpar cookie e retornar sucesso", async () => {
			mockSignOutApi.mockResolvedValue(true);

			const { signOut } = await import("#/modules/auth/auth.functions");
			const result = await signOut({ data: undefined });

			expect(result.success).toBe(true);
			expect(mockDeleteCookie).toHaveBeenCalled();
		});

		it("deve limpar cookie mesmo quando NocoBase sign-out falha", async () => {
			mockSignOutApi.mockRejectedValue(new Error("Network error"));

			const { signOut } = await import("#/modules/auth/auth.functions");
			const result = await signOut({ data: undefined });

			expect(result.success).toBe(true);
			expect(mockDeleteCookie).toHaveBeenCalled();
		});

		it("deve retornar false quando Origin é inválido (CSRF)", async () => {
			mockGetRequestHeader.mockReturnValue("https://evil.com");

			const { signOut } = await import("#/modules/auth/auth.functions");
			const result = await signOut({ data: undefined });

			expect(result.success).toBe(false);
			expect(mockDeleteCookie).not.toHaveBeenCalled();
		});
	});
});
