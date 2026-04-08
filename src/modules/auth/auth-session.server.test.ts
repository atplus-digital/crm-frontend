import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ── Mocks for @tanstack/start-server-core ──────────────────────────

const mockGetCookie = vi.fn<() => string | undefined>();
const mockSetCookie = vi.fn();
const mockDeleteCookie = vi.fn();
const mockGetRequestProtocol = vi.fn<() => "http" | "https">();

vi.mock("@tanstack/start-server-core", () => ({
	getCookie: mockGetCookie,
	setCookie: mockSetCookie,
	deleteCookie: mockDeleteCookie,
	getRequestProtocol: mockGetRequestProtocol,
}));

// ── Tests ───────────────────────────────────────────────────────────

describe("auth-session.server", () => {
	beforeEach(() => {
		vi.resetModules();
		vi.clearAllMocks();
		mockGetRequestProtocol.mockReturnValue("https");
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	// ── createSession ────────────────────────────────────────────────

	describe("createSession", () => {
		it("deve chamar setCookie com cookie cifrado e assinado", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("my-secret-token");

			expect(mockSetCookie).toHaveBeenCalledTimes(1);
			const [name, value, options] = mockSetCookie.mock.calls[0];

			expect(name).toBe("crm_session");
			expect(typeof value).toBe("string");
			expect(value.length).toBeGreaterThan(0);
			expect(options).toMatchObject({
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				secure: true,
			});
		});

		it("deve incluir maxAge quando expiresInMs é fornecido", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("my-secret-token", 3600_000); // 1 hour

			const [, , options] = mockSetCookie.mock.calls[0];
			expect(options.maxAge).toBe(3600);
		});

		it("deve aplicar fallback de 8 horas quando expiresInMs não é fornecido", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("my-secret-token");

			const [, , options] = mockSetCookie.mock.calls[0];
			expect(options.maxAge).toBe(8 * 60 * 60);
		});

		it("deve usar secure=false em protocolo HTTP", async () => {
			mockGetRequestProtocol.mockReturnValue("http");

			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("my-secret-token");

			const [, , options] = mockSetCookie.mock.calls[0];
			expect(options.secure).toBe(false);
		});

		it("deve usar secure=true em protocolo HTTPS", async () => {
			mockGetRequestProtocol.mockReturnValue("https");

			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("my-secret-token");

			const [, , options] = mockSetCookie.mock.calls[0];
			expect(options.secure).toBe(true);
		});

		it("deve produzir valores diferentes para tokens diferentes", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			createSession("token-a");
			const valueA = mockSetCookie.mock.calls[0][1];

			createSession("token-b");
			const valueB = mockSetCookie.mock.calls[1][1];

			expect(valueA).not.toBe(valueB);
		});
	});

	// ── getSession ───────────────────────────────────────────────────

	describe("getSession", () => {
		it("deve retornar undefined quando o cookie não existe", async () => {
			mockGetCookie.mockReturnValue(undefined);

			const { getSession } = await import("#/modules/auth/auth-session.server");

			expect(getSession()).toBeUndefined();
		});

		it("deve retornar undefined quando o cookie está vazio", async () => {
			mockGetCookie.mockReturnValue("");

			const { getSession } = await import("#/modules/auth/auth-session.server");

			expect(getSession()).toBeUndefined();
		});

		it("deve retornar o token original quando o cookie é válido", async () => {
			// Primeiro cria a sessão para obter o cookie
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);
			createSession("my-original-token");

			const cookieValue = mockSetCookie.mock.calls[0][1];

			// Agora configura o mock para retornar o cookie e lê a sessão
			mockGetCookie.mockReturnValue(cookieValue);

			const { getSession } = await import("#/modules/auth/auth-session.server");

			expect(getSession()).toBe("my-original-token");
		});

		it("deve retornar undefined quando a assinatura foi alterada (tampered)", async () => {
			const { createSession } = await import(
				"#/modules/auth/auth-session.server"
			);
			createSession("my-original-token");

			const cookieValue = mockSetCookie.mock.calls[0][1];
			// Altera a assinatura (última parte após o último ponto)
			const tamperedValue = `${cookieValue.slice(0, -10)}tampered!`;

			mockGetCookie.mockReturnValue(tamperedValue);

			const { getSession } = await import("#/modules/auth/auth-session.server");

			expect(getSession()).toBeUndefined();
		});

		it("deve retornar undefined quando o formato do cookie é inválido", async () => {
			mockGetCookie.mockReturnValue("not-a-valid-cookie");

			const { getSession } = await import("#/modules/auth/auth-session.server");

			expect(getSession()).toBeUndefined();
		});
	});

	// ── removeSession ────────────────────────────────────────────────

	describe("removeSession", () => {
		it("deve chamar deleteCookie com o nome correto", async () => {
			const { removeSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			removeSession();

			expect(mockDeleteCookie).toHaveBeenCalledTimes(1);
			const [name, options] = mockDeleteCookie.mock.calls[0];
			expect(name).toBe("crm_session");
			expect(options).toMatchObject({
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				secure: true,
			});
		});
	});

	// ── Integration: round-trip ──────────────────────────────────────

	describe("round-trip", () => {
		it("deve criar, ler e remover sessão corretamente", async () => {
			const { createSession, getSession, removeSession } = await import(
				"#/modules/auth/auth-session.server"
			);

			// Sem cookie → sem sessão
			mockGetCookie.mockReturnValue(undefined);
			expect(getSession()).toBeUndefined();

			// Cria sessão
			createSession("round-trip-token");
			const cookieValue = mockSetCookie.mock.calls[0][1];
			mockGetCookie.mockReturnValue(cookieValue);

			// Lê sessão
			expect(getSession()).toBe("round-trip-token");

			// Remove sessão
			removeSession();
			mockGetCookie.mockReturnValue(undefined);
			expect(getSession()).toBeUndefined();
		});
	});
});
