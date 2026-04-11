import { nocobaseClient } from "./client";
import { reset, setToken, setUser } from "./store";
import {
	AuthValidationError,
	authResponseSchema,
	checkAuthResponseSchema,
} from "./types";
import type {
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
} from "./types";

export async function signIn(
	credentials: LoginCredentials,
): Promise<{ token: string; user: AuthUser }> {
	const rawResponse = await nocobaseClient.auth.signIn(credentials);
	const responseData = rawResponse.data?.data ?? rawResponse.data;
	const parsed = authResponseSchema.safeParse({ data: responseData });
	if (!parsed.success) {
		throw new AuthValidationError(
			"Resposta de autenticação inválida",
			parsed.error,
		);
	}
	const { token, user } = parsed.data.data;

	setToken(token);
	setUser(user);

	return { token, user };
}

export async function signOut(): Promise<void> {
	try {
		await nocobaseClient.auth.signOut();
	} catch {
		// Best-effort — API call may fail if token expired
	} finally {
		nocobaseClient.auth.token = "";
		reset();
	}
}

export async function checkAuth(): Promise<AuthUser> {
	const response = await nocobaseClient.request({
		url: "auth:check",
		method: "GET",
	});
	const responseData = response.data?.data ?? response.data;
	const parsed = checkAuthResponseSchema.safeParse(responseData);
	if (!parsed.success) {
		throw new AuthValidationError(
			"Resposta de verificação de autenticação inválida",
			parsed.error,
		);
	}
	const user = parsed.data;
	setUser(user);
	return user;
}

export async function requestPasswordReset(email: string): Promise<void> {
	const payload: ResetPasswordRequest = { email };
	await nocobaseClient.auth.lostPassword(payload);
}

export async function confirmPasswordReset(
	data: ResetPasswordConfirm,
): Promise<void> {
	await nocobaseClient.auth.resetPassword({
		token: data.token,
		password: data.password,
	});
}
