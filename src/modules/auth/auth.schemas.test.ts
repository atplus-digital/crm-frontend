import { describe, expect, it } from "vitest";
import {
	authenticatedUserSchema,
	loginSchema,
	nocobaseAuthResponseSchema,
	nocobaseCheckResponseSchema,
	sessionSchema,
} from "#/modules/auth/auth.schemas";

describe("auth.schemas", () => {
	// ── loginSchema ──────────────────────────────────────────────────

	describe("loginSchema", () => {
		it("deve aceitar email válido e senha não-vazia", () => {
			const result = loginSchema.safeParse({
				email: "user@example.com",
				password: "senha123",
			});
			expect(result.success).toBe(true);
		});

		it("deve rejeitar email inválido", () => {
			const result = loginSchema.safeParse({
				email: "invalido",
				password: "senha123",
			});
			expect(result.success).toBe(false);
		});

		it("deve rejeitar senha vazia", () => {
			const result = loginSchema.safeParse({
				email: "user@example.com",
				password: "",
			});
			expect(result.success).toBe(false);
		});

		it("deve rejeitar objeto vazio", () => {
			const result = loginSchema.safeParse({});
			expect(result.success).toBe(false);
		});

		it("deve rejeitar campos ausentes", () => {
			const result = loginSchema.safeParse({ email: "user@example.com" });
			expect(result.success).toBe(false);
		});
	});

	// ── authenticatedUserSchema ──────────────────────────────────────

	describe("authenticatedUserSchema", () => {
		it("deve aceitar usuário com todos os campos obrigatórios", () => {
			const result = authenticatedUserSchema.safeParse({
				id: 1,
				email: "user@example.com",
				roles: ["admin"],
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.username).toBeNull();
				expect(result.data.nickname).toBeNull();
			}
		});

		it("deve aceitar usuário com username e nickname", () => {
			const result = authenticatedUserSchema.safeParse({
				id: 1,
				email: "user@example.com",
				username: "johndoe",
				nickname: "John",
				roles: ["admin", "editor"],
			});
			expect(result.success).toBe(true);
		});

		it("deve aplicar defaults para username e nickname ausentes", () => {
			const result = authenticatedUserSchema.safeParse({
				id: 1,
				email: "user@example.com",
				roles: [],
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.username).toBeNull();
				expect(result.data.nickname).toBeNull();
			}
		});

		it("deve aceitar roles como array de strings", () => {
			const result = authenticatedUserSchema.safeParse({
				id: 1,
				email: "user@example.com",
				roles: ["admin", "user"],
			});
			expect(result.success).toBe(true);
		});

		it("deve rejeitar id não-numérico", () => {
			const result = authenticatedUserSchema.safeParse({
				id: "invalid",
				email: "user@example.com",
				roles: [],
			});
			expect(result.success).toBe(false);
		});

		it("deve rejeitar email inválido", () => {
			const result = authenticatedUserSchema.safeParse({
				id: 1,
				email: "not-an-email",
				roles: [],
			});
			expect(result.success).toBe(false);
		});
	});

	// ── nocobaseAuthResponseSchema ───────────────────────────────────

	describe("nocobaseAuthResponseSchema", () => {
		const validAuthResponse = {
			data: 1,
			meta: {
				token: "jwt-token-abc123",
				id: 1,
				email: "user@example.com",
				nickname: "John",
				snippet: "john",
				roles: [{ name: "admin" }],
			},
		};

		it("deve aceitar resposta válida de signIn", () => {
			const result = nocobaseAuthResponseSchema.safeParse(validAuthResponse);
			expect(result.success).toBe(true);
		});

		it("deve aplicar defaults para nickname e snippet nulos", () => {
			const result = nocobaseAuthResponseSchema.safeParse({
				data: 1,
				meta: {
					token: "jwt-token",
					id: 1,
					email: "user@example.com",
					roles: [],
				},
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.meta.nickname).toBeNull();
				expect(result.data.meta.snippet).toBeNull();
			}
		});

		it("deve aceitar roles como array de unknown", () => {
			const result = nocobaseAuthResponseSchema.safeParse({
				...validAuthResponse,
				meta: {
					...validAuthResponse.meta,
					roles: [{ name: "admin" }, "string-role", 42],
				},
			});
			expect(result.success).toBe(true);
		});

		it("deve rejeitar resposta sem token", () => {
			const result = nocobaseAuthResponseSchema.safeParse({
				data: 1,
				meta: {
					id: 1,
					email: "user@example.com",
					roles: [],
				},
			});
			expect(result.success).toBe(false);
		});
	});

	// ── nocobaseCheckResponseSchema ──────────────────────────────────

	describe("nocobaseCheckResponseSchema", () => {
		const validCheckResponse = {
			data: 1,
			meta: {
				id: 1,
				email: "user@example.com",
				username: "johndoe",
				nickname: "John",
				snippet: "john",
				roles: [{ name: "admin" }],
			},
		};

		it("deve aceitar resposta válida de auth:check", () => {
			const result = nocobaseCheckResponseSchema.safeParse(validCheckResponse);
			expect(result.success).toBe(true);
		});

		it("deve aplicar defaults para username, nickname e snippet nulos", () => {
			const result = nocobaseCheckResponseSchema.safeParse({
				data: 1,
				meta: {
					id: 1,
					email: "user@example.com",
					roles: [],
				},
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.meta.username).toBeNull();
				expect(result.data.meta.nickname).toBeNull();
				expect(result.data.meta.snippet).toBeNull();
			}
		});

		it("deve rejeitar resposta sem id", () => {
			const result = nocobaseCheckResponseSchema.safeParse({
				data: 1,
				meta: {
					email: "user@example.com",
					roles: [],
				},
			});
			expect(result.success).toBe(false);
		});
	});

	// ── sessionSchema ────────────────────────────────────────────────

	describe("sessionSchema", () => {
		it("deve aceitar sessão com token, user e expiresAt", () => {
			const result = sessionSchema.safeParse({
				token: "jwt-token-abc123",
				user: {
					id: 1,
					email: "user@example.com",
					roles: ["admin"],
				},
				expiresAt: new Date(),
			});
			expect(result.success).toBe(true);
		});

		it("deve aceitar sessão sem expiresAt", () => {
			const result = sessionSchema.safeParse({
				token: "jwt-token-abc123",
				user: {
					id: 1,
					email: "user@example.com",
					roles: ["admin"],
				},
			});
			expect(result.success).toBe(true);
		});

		it("deve rejeitar sessão sem token", () => {
			const result = sessionSchema.safeParse({
				user: {
					id: 1,
					email: "user@example.com",
					roles: ["admin"],
				},
			});
			expect(result.success).toBe(false);
		});

		it("deve rejeitar sessão sem user", () => {
			const result = sessionSchema.safeParse({
				token: "jwt-token-abc123",
			});
			expect(result.success).toBe(false);
		});
	});
});
