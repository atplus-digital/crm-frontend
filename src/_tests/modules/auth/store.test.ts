import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthUser } from "#/modules/auth/types";

vi.mock("#/modules/auth/client", () => ({
	nocobaseClient: {
		auth: {
			token: null,
		},
	},
}));

import { authStore, reset, setToken, setUser } from "#/modules/auth/store";

const INITIAL_STATE = {
	user: null,
	token: null,
	isAuthenticated: false,
} satisfies typeof authStore.state;

const MOCK_USER: AuthUser = {
	id: 1,
	email: "test@example.com",
	username: "testuser",
	nickname: "Test",
	phone: "1234567890",
	roles: [],
};

function resetStoreToInitial(): void {
	authStore.setState(() => ({ ...INITIAL_STATE }));
}

describe("authStore", () => {
	beforeEach(() => {
		resetStoreToInitial();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("initial state", () => {
		it("has null user", () => {
			expect(authStore.state.user).toBeNull();
		});

		it("has null token", () => {
			expect(authStore.state.token).toBeNull();
		});

		it("has isAuthenticated false", () => {
			expect(authStore.state.isAuthenticated).toBe(false);
		});
	});

	describe("setUser", () => {
		it("sets a user in the store", () => {
			setUser(MOCK_USER);

			expect(authStore.state.user).toEqual(MOCK_USER);
			expect(authStore.state.token).toBeNull();
			expect(authStore.state.isAuthenticated).toBe(false);
		});

		it("clears user when null is passed", () => {
			setUser(MOCK_USER);
			expect(authStore.state.user).toEqual(MOCK_USER);

			setUser(null);

			expect(authStore.state.user).toBeNull();
		});

		it("preserves other state fields when setting user", () => {
			setToken("some-token");

			setUser(MOCK_USER);

			expect(authStore.state.user).toEqual(MOCK_USER);
			expect(authStore.state.token).toBe("some-token");
		});
	});

	describe("setToken", () => {
		it("sets token and isAuthenticated to true", () => {
			setToken("abc123");

			expect(authStore.state.token).toBe("abc123");
			expect(authStore.state.isAuthenticated).toBe(true);
		});

		it("sets isAuthenticated to false when token is null", () => {
			setToken("abc123");
			expect(authStore.state.isAuthenticated).toBe(true);

			setToken(null);

			expect(authStore.state.isAuthenticated).toBe(false);
			expect(authStore.state.token).toBeNull();
		});

		it("preserves other state fields when setting token", () => {
			setUser(MOCK_USER);

			setToken("abc123");

			expect(authStore.state.user).toEqual(MOCK_USER);
			expect(authStore.state.token).toBe("abc123");
		});

		it("overwrites previous token", () => {
			setToken("first-token");
			setToken("second-token");

			expect(authStore.state.token).toBe("second-token");
		});
	});

	describe("reset", () => {
		it("clears all state to initial values", () => {
			setUser(MOCK_USER);
			setToken("abc123");

			reset();

			expect(authStore.state.user).toBeNull();
			expect(authStore.state.token).toBeNull();
			expect(authStore.state.isAuthenticated).toBe(false);
		});

		it("resets even when store was never modified", () => {
			reset();

			expect(authStore.state.user).toBeNull();
			expect(authStore.state.token).toBeNull();
			expect(authStore.state.isAuthenticated).toBe(false);
		});
	});
});
