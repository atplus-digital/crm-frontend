import { isDev } from "#/env";
import {
	resetPermissions,
	setPermissionsFromRoles,
} from "#/modules/permissions";
import { nocobaseClient } from "./client";
import { reset, setToken, setUser } from "./store";
import type {
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
} from "./types";
import {
	AuthValidationError,
	authResponseSchema,
	authUserSchema,
} from "./types";

export async function signIn(
	credentials: LoginCredentials,
): Promise<{ token: string; user: AuthUser }> {
	const rawResponse = await nocobaseClient.auth.signIn(credentials);
	const responseData = rawResponse.data?.data;
	const parsed = authResponseSchema.safeParse(responseData);

	if (!parsed.success) {
		console.log({ rawResponse, responseData, parsed });
		throw new AuthValidationError(
			"Resposta de autenticação inválida",
			parsed.error,
		);
	}
	const { token, user } = parsed.data;

	setToken(token);
	setUser(user);
	setPermissionsFromRoles(user.roles);

	return { token, user };
}

export async function signOut(): Promise<void> {
	try {
		await nocobaseClient.auth.signOut();
	} catch (err) {
		if (isDev) {
			console.warn(
				"[auth] signOut API call failed:",
				err instanceof Error ? err.message : String(err),
			);
		}
	} finally {
		nocobaseClient.auth.token = "";
		reset();
		resetPermissions();
	}
}

export async function checkAuth(): Promise<AuthUser> {
	const response = await nocobaseClient.request({
		url: "auth:check",
		method: "GET",
	});
	const responseData = response.data?.data ?? response.data;
	const parsed = authUserSchema.safeParse(responseData);
	if (!parsed.success) {
		throw new AuthValidationError(
			"Resposta de verificação de autenticação inválida",
			parsed.error,
		);
	}
	const user = parsed.data;
	setUser(user);
	setPermissionsFromRoles(user.roles);
	return user;
}

export async function requestPasswordReset(email: string): Promise<void> {
	const payload: ResetPasswordRequest = { email };

	await nocobaseClient.request({
		url: "auth:lostPassword",
		method: "POST",
		data: {
			...payload,
			baseURL: window.location.origin,
		},
		headers: {
			"X-Authenticator": "basic",
		},
	});
}

export async function confirmPasswordReset(
	data: ResetPasswordConfirm,
): Promise<void> {
	await nocobaseClient.request({
		url: "auth:resetPassword",
		method: "POST",
		data: {
			token: data.token,
			password: data.password,
		},
		headers: {
			"X-Authenticator": "basic",
		},
	});
}
