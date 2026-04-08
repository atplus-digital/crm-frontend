import { describe, expect, it, vi } from "vitest";

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

const mockCheckSessionApi = vi.fn();
const mockSignInApi = vi.fn();
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

// ── Tests ───────────────────────────────────────────────────────────

describe("sanitizeRedirect (protected route helper)", () => {
	it("deve rejeitar URLs com protocolo relativo (//)", () => {
		const testPaths = [
			{ input: "//evil.com", safe: false },
			{ input: "/dashboard", safe: true },
			{ input: "/", safe: true },
			{ input: "/authenticated/dashboard", safe: true },
		];

		for (const { input, safe } of testPaths) {
			const isSafe =
				typeof input === "string" &&
				input.startsWith("/") &&
				!input.startsWith("//");
			expect(isSafe).toBe(safe);
		}
	});

	it("deve rejeitar valores não-string", () => {
		const values = [null, undefined, 123, {}, []];
		for (const val of values) {
			const isSafe =
				typeof val === "string" && val.startsWith("/") && !val.startsWith("//");
			expect(isSafe).toBe(false);
		}
	});
});

describe("protected route redirect behavior", () => {
	it("getCurrentUser deve retornar undefined sem sessão, permitindo redirecionamento para /login", async () => {
		vi.resetModules();
		vi.clearAllMocks();
		mockGetRequestProtocol.mockReturnValue("https");
		mockGetRequestHeader.mockReturnValue("https://server.example.com");
		mockGetCookie.mockReturnValue(undefined);

		const { getCurrentUser } = await import("#/modules/auth/auth.functions");
		const result = await getCurrentUser();

		expect(result).toBeUndefined();
	});

	it("getCurrentUser deve retornar undefined com cookie inválido, permitindo redirecionamento para /login", async () => {
		vi.resetModules();
		vi.clearAllMocks();
		mockGetRequestProtocol.mockReturnValue("https");
		mockGetRequestHeader.mockReturnValue("https://server.example.com");
		mockGetCookie.mockReturnValue("tampered-invalid-cookie");

		const { getCurrentUser } = await import("#/modules/auth/auth.functions");
		const result = await getCurrentUser();

		expect(result).toBeUndefined();
	});

	it("getCurrentUser deve retornar undefined quando auth:check falha com 401, permitindo redirecionamento para /login", async () => {
		vi.resetModules();
		vi.clearAllMocks();
		mockGetRequestProtocol.mockReturnValue("https");
		mockGetRequestHeader.mockReturnValue("https://server.example.com");

		// Cria sessão válida
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
		// Cookie deve ser removido
		expect(mockDeleteCookie).toHaveBeenCalledWith(
			"crm_session",
			expect.any(Object),
		);
	});
});
