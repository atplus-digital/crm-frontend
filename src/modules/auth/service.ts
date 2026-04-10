import { nocobaseClient } from "./client";
import { reset, setToken, setUser } from "./store";
import type {
	AuthResponse,
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
} from "./types";

export async function signIn(
	credentials: LoginCredentials,
): Promise<{ token: string; user: AuthUser }> {
	const response = (await nocobaseClient.auth.signIn(
		credentials,
	)) as AuthResponse;
	const { token, user } = response.data;

	nocobaseClient.auth.token = token;
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
	const user = response.data?.data ?? response.data;
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
