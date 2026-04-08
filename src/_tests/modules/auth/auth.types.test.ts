import { describe, expect, it } from "vitest";
import type { AuthenticatedUser } from "#/modules/auth/auth.types";
import { hasRole, hasSnippet } from "#/modules/auth/auth.types";

describe("auth.types", () => {
	// ── hasRole ──────────────────────────────────────────────────────

	describe("hasRole", () => {
		const userWithRoles: AuthenticatedUser = {
			id: 1,
			email: "admin@example.com",
			username: null,
			nickname: null,
			roles: ["admin", "editor"],
		};

		it("deve retornar true quando o usuário tem a role exata", () => {
			expect(hasRole(userWithRoles, "admin")).toBe(true);
			expect(hasRole(userWithRoles, "editor")).toBe(true);
		});

		it("deve retornar false quando o usuário não tem a role", () => {
			expect(hasRole(userWithRoles, "viewer")).toBe(false);
			expect(hasRole(userWithRoles, "Admin")).toBe(false);
		});

		it("deve ser case-sensitive", () => {
			expect(hasRole(userWithRoles, "Admin")).toBe(false);
			expect(hasRole(userWithRoles, "ADMIN")).toBe(false);
		});

		it("deve funcionar com usuário sem roles", () => {
			const userWithoutRoles: AuthenticatedUser = {
				id: 2,
				email: "user@example.com",
				username: null,
				nickname: null,
				roles: [],
			};
			expect(hasRole(userWithoutRoles, "admin")).toBe(false);
		});
	});

	// ── hasSnippet ───────────────────────────────────────────────────

	describe("hasSnippet", () => {
		const userWithRoles: AuthenticatedUser = {
			id: 1,
			email: "admin@example.com",
			username: null,
			nickname: null,
			roles: ["super-admin", "content-editor", "viewer"],
		};

		it("deve retornar true quando alguma role contém o snippet", () => {
			expect(hasSnippet(userWithRoles, "admin")).toBe(true);
			expect(hasSnippet(userWithRoles, "editor")).toBe(true);
			expect(hasSnippet(userWithRoles, "view")).toBe(true);
		});

		it("deve ser case-insensitive", () => {
			expect(hasSnippet(userWithRoles, "ADMIN")).toBe(true);
			expect(hasSnippet(userWithRoles, "Super")).toBe(true);
			expect(hasSnippet(userWithRoles, "CONTENT")).toBe(true);
		});

		it("deve retornar false quando nenhuma role contém o snippet", () => {
			expect(hasSnippet(userWithRoles, "manager")).toBe(false);
			expect(hasSnippet(userWithRoles, "xyz")).toBe(false);
		});

		it("deve funcionar com snippet vazio (match qualquer role)", () => {
			expect(hasSnippet(userWithRoles, "")).toBe(true);
		});

		it("deve funcionar com usuário sem roles", () => {
			const userWithoutRoles: AuthenticatedUser = {
				id: 2,
				email: "user@example.com",
				username: null,
				nickname: null,
				roles: [],
			};
			expect(hasSnippet(userWithoutRoles, "admin")).toBe(false);
		});
	});
});
