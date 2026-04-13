import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	vi,
} from "vitest";

import type { AuthUser } from "#/modules/auth/types";

const { mockRedirect, mockCheckAuth, mockSetUser, mockReset } = vi.hoisted(
	() => ({
		mockRedirect: vi.fn((options: { to: string; search?: unknown }) => {
			throw new Error(`Redirect to ${options.to}`);
		}),
		mockCheckAuth: vi.fn(),
		mockSetUser: vi.fn(),
		mockReset: vi.fn(),
	}),
);

const { mockAuthStore, mockAuthStoreState } = vi.hoisted(() => {
	const authStoreState: {
		isAuthenticated: boolean;
		token: string | null;
		user: AuthUser | null;
	} = {
		isAuthenticated: false,
		token: null,
		user: null,
	};

	return {
		mockAuthStore: {
			get state() {
				return authStoreState;
			},
		},
		mockAuthStoreState: authStoreState,
	};
});

vi.mock("@tanstack/react-router", () => ({
	redirect: mockRedirect,
}));

vi.mock("#/modules/auth/client", () => ({
	nocobaseClient: {
		auth: {
			token: null,
		},
	},
}));

vi.mock("#/modules/auth/service", () => ({
	checkAuth: mockCheckAuth,
}));

vi.mock("#/modules/auth/store", () => ({
	authStore: mockAuthStore,
	setUser: mockSetUser,
	reset: mockReset,
}));

import {
	isNetworkError,
	requireAuth,
	requireGuest,
	validateTokenOnInit,
} from "#/modules/auth/guard";

beforeAll(() => {
	vi.stubGlobal("window", {});
});

describe("requireAuth", () => {
	beforeEach(() => {
		mockAuthStoreState.isAuthenticated = false;
		mockAuthStoreState.token = null;
		mockAuthStoreState.user = null;
		mockRedirect.mockClear();
	});

	it("returns without throwing when window is undefined (SSR)", () => {
		vi.stubGlobal("window", undefined);

		expect(() => requireAuth("/dashboard")).not.toThrow();

		vi.stubGlobal("window", {});
	});

	it("throws redirect to /login when isAuthenticated is false", () => {
		mockAuthStoreState.isAuthenticated = false;
		mockAuthStoreState.token = "some-token";

		expect(() => requireAuth("/dashboard")).toThrow("Redirect to /login");
		expect(mockRedirect).toHaveBeenCalledWith({
			to: "/login",
			search: { returnTo: "/dashboard" },
		});
	});

	it("throws redirect to /login when token is null", () => {
		mockAuthStoreState.isAuthenticated = true;
		mockAuthStoreState.token = null;

		expect(() => requireAuth("/protected")).toThrow("Redirect to /login");
		expect(mockRedirect).toHaveBeenCalledWith({
			to: "/login",
			search: { returnTo: "/protected" },
		});
	});

	it("does NOT throw when isAuthenticated is true AND token exists", () => {
		mockAuthStoreState.isAuthenticated = true;
		mockAuthStoreState.token = "valid-token";

		expect(() => requireAuth("/dashboard")).not.toThrow();
		expect(mockRedirect).not.toHaveBeenCalled();
	});
});

describe("requireGuest", () => {
	beforeEach(() => {
		mockAuthStoreState.isAuthenticated = false;
		mockAuthStoreState.token = null;
		mockRedirect.mockClear();
	});

	it("returns without throwing when window is undefined (SSR)", () => {
		vi.stubGlobal("window", undefined);

		expect(() => requireGuest()).not.toThrow();

		vi.stubGlobal("window", {});
	});

	it("throws redirect to / when isAuthenticated is true AND token exists", () => {
		mockAuthStoreState.isAuthenticated = true;
		mockAuthStoreState.token = "some-token";

		expect(() => requireGuest()).toThrow("Redirect to /");
		expect(mockRedirect).toHaveBeenCalledWith({ to: "/" });
	});

	it("does NOT throw when isAuthenticated is false", () => {
		mockAuthStoreState.isAuthenticated = false;
		mockAuthStoreState.token = null;

		expect(() => requireGuest()).not.toThrow();
		expect(mockRedirect).not.toHaveBeenCalled();
	});

	it("does NOT throw when token is null even if isAuthenticated is true", () => {
		mockAuthStoreState.isAuthenticated = true;
		mockAuthStoreState.token = null;

		expect(() => requireGuest()).not.toThrow();
		expect(mockRedirect).not.toHaveBeenCalled();
	});
});

describe("validateTokenOnInit", () => {
	beforeEach(() => {
		mockAuthStoreState.token = null;
		mockAuthStoreState.isAuthenticated = false;
		mockAuthStoreState.user = null;
		mockCheckAuth.mockReset();
		mockSetUser.mockReset();
		mockReset.mockReset();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns without calling checkAuth when window is undefined (SSR)", async () => {
		vi.stubGlobal("window", undefined);

		await validateTokenOnInit();

		expect(mockCheckAuth).not.toHaveBeenCalled();

		vi.stubGlobal("window", {});
	});

	it("returns without calling checkAuth when token is null", async () => {
		mockAuthStoreState.token = null;

		await validateTokenOnInit();

		expect(mockCheckAuth).not.toHaveBeenCalled();
	});

	it("calls setUser with the user when token exists and checkAuth succeeds", async () => {
		const mockUser: AuthUser = {
			id: 1,
			email: "test@example.com",
			username: "testuser",
			nickname: "Test",
			appLang: "en",
			phone: "1234567890",
			roles: [],
		};
		mockAuthStoreState.token = "valid-token";
		mockAuthStoreState.isAuthenticated = true;
		mockCheckAuth.mockResolvedValue(mockUser);

		await validateTokenOnInit();

		expect(mockCheckAuth).toHaveBeenCalled();
		expect(mockSetUser).toHaveBeenCalledWith(mockUser);
		expect(mockReset).not.toHaveBeenCalled();
	});

	it("calls reset when token exists and checkAuth throws", async () => {
		mockAuthStoreState.token = "invalid-token";
		mockAuthStoreState.isAuthenticated = true;
		mockCheckAuth.mockRejectedValue(new Error("Token expired"));

		await validateTokenOnInit();

		expect(mockCheckAuth).toHaveBeenCalled();
		expect(mockSetUser).not.toHaveBeenCalled();
		expect(mockReset).toHaveBeenCalled();
	});

	it("does NOT call reset when checkAuth throws a TypeError (network error)", async () => {
		mockAuthStoreState.token = "valid-token";
		mockAuthStoreState.isAuthenticated = true;
		mockCheckAuth.mockRejectedValue(new TypeError("Failed to fetch"));

		await validateTokenOnInit();

		expect(mockCheckAuth).toHaveBeenCalled();
		expect(mockSetUser).not.toHaveBeenCalled();
		expect(mockReset).not.toHaveBeenCalled();
	});

	it("does NOT call reset when checkAuth throws an ECONNREFUSED error", async () => {
		mockAuthStoreState.token = "valid-token";
		mockAuthStoreState.isAuthenticated = true;
		mockCheckAuth.mockRejectedValue(
			new Error(
				"request to /api/auth:check failed, reason: connect ECONNREFUSED 127.0.0.1:13000",
			),
		);

		await validateTokenOnInit();

		expect(mockCheckAuth).toHaveBeenCalled();
		expect(mockReset).not.toHaveBeenCalled();
	});

	it("calls reset when checkAuth throws a 401 auth error", async () => {
		mockAuthStoreState.token = "expired-token";
		mockAuthStoreState.isAuthenticated = true;
		const authError = new Error("Unauthorized");
		Object.defineProperty(authError, "status", { value: 401 });
		mockCheckAuth.mockRejectedValue(authError);

		await validateTokenOnInit();

		expect(mockCheckAuth).toHaveBeenCalled();
		expect(mockReset).toHaveBeenCalled();
	});
});

describe("isNetworkError", () => {
	it("returns true for TypeError", () => {
		expect(isNetworkError(new TypeError("Failed to fetch"))).toBe(true);
	});

	it("returns true for Error with 'fetch' in message", () => {
		expect(isNetworkError(new Error("fetch failed"))).toBe(true);
	});

	it("returns true for Error with 'network' in message", () => {
		expect(isNetworkError(new Error("Network request failed"))).toBe(true);
	});

	it("returns true for Error with 'ECONNREFUSED' in message", () => {
		expect(
			isNetworkError(new Error("connect ECONNREFUSED 127.0.0.1:13000")),
		).toBe(true);
	});

	it("returns true for Error with 'timeout' in message", () => {
		expect(isNetworkError(new Error("Request timeout after 30000ms"))).toBe(
			true,
		);
	});

	it("returns false for auth errors (no network keywords)", () => {
		expect(isNetworkError(new Error("Unauthorized"))).toBe(false);
	});

	it("returns false for generic errors", () => {
		expect(isNetworkError(new Error("Something went wrong"))).toBe(false);
	});

	it("returns false for non-Error values", () => {
		expect(isNetworkError("string error")).toBe(false);
		expect(isNetworkError(42)).toBe(false);
		expect(isNetworkError(null)).toBe(false);
	});
});
