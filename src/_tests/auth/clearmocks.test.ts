import { beforeEach, describe, expect, it, vi } from "vitest";

const mockFn = vi.hoisted(() => vi.fn());

vi.mock("#/modules/auth/client", () => ({
	nocobaseClient: {
		auth: {
			signIn: mockFn,
			signOut: vi.fn(),
			lostPassword: vi.fn(),
			resetPassword: vi.fn(),
			token: "",
		},
		request: vi.fn(),
	},
}));

vi.mock("#/modules/auth/store", () => ({
	setToken: vi.fn(),
	setUser: vi.fn(),
	reset: vi.fn(),
}));

vi.mock("#/env", () => ({
	env: { VITE_LOCAL_STORAGE_BASE_KEY: "crm-atplus" },
}));

import { signIn } from "#/modules/auth/service";

describe("clearAllMocks test", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("first test sets resolvedValue", async () => {
		mockFn.mockResolvedValue({ data: { token: "abc", user: { id: 1 } } });
		const result = await signIn({ email: "a@b.c", password: "p" });
		console.log("FIRST result:", JSON.stringify(result));
		expect(result.token).toBe("abc");
	});

	it("second test also sets resolvedValue", async () => {
		mockFn.mockResolvedValue({ data: { token: "def", user: { id: 2 } } });
		const result = await signIn({ email: "a@b.c", password: "p" });
		console.log("SECOND result:", JSON.stringify(result));
		expect(result.token).toBe("def");
	});
});
