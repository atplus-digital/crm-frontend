import { beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthUser } from "#/modules/auth/types";
import { AuthValidationError } from "#/modules/auth/types";

const { mockAuth, mockRequest, mockSetToken, mockSetUser, mockReset } =
	vi.hoisted(() => ({
		mockAuth: {
			signIn: vi.fn(),
			signOut: vi.fn(),
			lostPassword: vi.fn(),
			resetPassword: vi.fn(),
			token: "",
		},
		mockRequest: vi.fn(),
		mockSetToken: vi.fn(),
		mockSetUser: vi.fn(),
		mockReset: vi.fn(),
	}));

vi.mock("#/modules/auth/client", () => ({
	nocobaseClient: {
		auth: mockAuth,
		request: mockRequest,
	},
}));

vi.mock("#/modules/auth/store", () => ({
	setToken: mockSetToken,
	setUser: mockSetUser,
	reset: mockReset,
}));

vi.mock("#/env", () => ({
	env: {
		VITE_LOCAL_STORAGE_BASE_KEY: "crm-atplus",
	},
}));

import { nocobaseClient } from "#/modules/auth/client";
import {
	checkAuth,
	confirmPasswordReset,
	requestPasswordReset,
	signIn,
	signOut,
} from "#/modules/auth/service";

const MOCK_USER: AuthUser = {
	id: 1,
	email: "test@example.com",
	username: "testuser",
	nickname: "Test",
	appLang: "en",
	phone: "1234567890",
	roles: [],
};

describe("auth service", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		nocobaseClient.auth.token = "";
	});

	describe("signIn", () => {
		it("calls client.auth.signIn with credentials", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { data: { token: "abc123", user: MOCK_USER } },
			});

			await signIn({ email: "test@example.com", password: "pass123" });

			expect(mockAuth.signIn).toHaveBeenCalledWith({
				email: "test@example.com",
				password: "pass123",
			});
		});

		it("calls setToken and setUser from store", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { data: { token: "abc123", user: MOCK_USER } },
			});

			await signIn({ email: "test@example.com", password: "pass123" });

			expect(mockSetToken).toHaveBeenCalledWith("abc123");
			expect(mockSetUser).toHaveBeenCalledWith(MOCK_USER);
		});

		it("returns { token, user }", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { data: { token: "abc123", user: MOCK_USER } },
			});

			const result = await signIn({
				email: "test@example.com",
				password: "pass123",
			});

			expect(result).toEqual({ token: "abc123", user: MOCK_USER });
		});

		it("falls back to response.data when data.data is undefined", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { token: "fallback-token", user: MOCK_USER },
			});

			const result = await signIn({
				email: "test@example.com",
				password: "pass123",
			});

			expect(result).toEqual({ token: "fallback-token", user: MOCK_USER });
			expect(mockSetToken).toHaveBeenCalledWith("fallback-token");
			expect(mockSetUser).toHaveBeenCalledWith(MOCK_USER);
		});

		it("propagates API errors", async () => {
			const error = new Error("Invalid credentials");
			mockAuth.signIn.mockRejectedValue(error);

			await expect(
				signIn({ email: "test@example.com", password: "wrong" }),
			).rejects.toThrow("Invalid credentials");
		});

		it("throws AuthValidationError when response has no token", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { data: { user: MOCK_USER } },
			});

			await expect(
				signIn({ email: "test@example.com", password: "pass123" }),
			).rejects.toThrow(AuthValidationError);
		});

		it("throws AuthValidationError when response has no user", async () => {
			mockAuth.signIn.mockResolvedValue({
				data: { data: { token: "abc123" } },
			});

			await expect(
				signIn({ email: "test@example.com", password: "pass123" }),
			).rejects.toThrow(AuthValidationError);
		});

		it("throws AuthValidationError for malformed response", async () => {
			mockAuth.signIn.mockResolvedValue({ data: "not-an-object" });

			await expect(
				signIn({ email: "test@example.com", password: "pass123" }),
			).rejects.toThrow(AuthValidationError);
		});
	});

	describe("signOut", () => {
		it("calls client.auth.signOut", async () => {
			mockAuth.signOut.mockResolvedValue(undefined);
			await signOut();

			expect(mockAuth.signOut).toHaveBeenCalled();
		});

		it("clears token and calls reset on success", async () => {
			nocobaseClient.auth.token = "existing-token";
			mockAuth.signOut.mockResolvedValue(undefined);

			await signOut();

			expect(nocobaseClient.auth.token).toBe("");
			expect(mockReset).toHaveBeenCalled();
		});

		it("still clears token and calls reset when API fails", async () => {
			nocobaseClient.auth.token = "existing-token";
			mockAuth.signOut.mockRejectedValue(new Error("Network error"));

			await signOut();

			expect(nocobaseClient.auth.token).toBe("");
			expect(mockReset).toHaveBeenCalled();
		});

		it("swallows API errors", async () => {
			mockAuth.signOut.mockRejectedValue(new Error("Token expired"));

			await expect(signOut()).resolves.toBeUndefined();
		});
	});

	describe("checkAuth", () => {
		it("calls client.request with { url: 'auth:check', method: 'GET' }", async () => {
			mockRequest.mockResolvedValue({
				data: { data: MOCK_USER },
			});

			await checkAuth();

			expect(mockRequest).toHaveBeenCalledWith({
				url: "auth:check",
				method: "GET",
			});
		});

		it("extracts user from response.data.data (double nesting)", async () => {
			mockRequest.mockResolvedValue({
				data: { data: MOCK_USER },
			});

			const result = await checkAuth();

			expect(mockSetUser).toHaveBeenCalledWith(MOCK_USER);
			expect(result).toEqual(MOCK_USER);
		});

		it("falls back to response.data when data.data is undefined", async () => {
			mockRequest.mockResolvedValue({
				data: MOCK_USER,
			});

			const result = await checkAuth();

			expect(mockSetUser).toHaveBeenCalledWith(MOCK_USER);
			expect(result).toEqual(MOCK_USER);
		});

		it("throws AuthValidationError for null data.data", async () => {
			mockRequest.mockResolvedValue({
				data: { data: null },
			});

			await expect(checkAuth()).rejects.toThrow(AuthValidationError);
		});

		it("throws AuthValidationError for malformed response", async () => {
			mockRequest.mockResolvedValue({
				data: "not-a-user-object",
			});

			await expect(checkAuth()).rejects.toThrow(AuthValidationError);
		});
	});

	describe("requestPasswordReset", () => {
		it("calls client.auth.lostPassword with { email }", async () => {
			mockAuth.lostPassword.mockResolvedValue(undefined);

			await requestPasswordReset("user@example.com");

			expect(mockAuth.lostPassword).toHaveBeenCalledWith({
				email: "user@example.com",
			});
		});
	});

	describe("confirmPasswordReset", () => {
		it("calls client.auth.resetPassword with { token, password } only", async () => {
			mockAuth.resetPassword.mockResolvedValue(undefined);

			await confirmPasswordReset({
				token: "reset-token",
				password: "newpass123",
				confirmPassword: "newpass123",
			});

			expect(mockAuth.resetPassword).toHaveBeenCalledWith({
				token: "reset-token",
				password: "newpass123",
			});
		});
	});
});
