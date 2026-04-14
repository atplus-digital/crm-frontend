import { createLogger } from "#/lib/logger";
import {
	resetPermissions,
	setPermissionsFromRoles,
} from "#/modules/permissions";
import { nocobaseRepository } from "#/modules/repositories";
import { authStore, reset, setToken, setUser } from "./store";
import type {
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
	UpdateProfilePayload,
} from "./types";
import { AuthValidationError, authResponseSchema } from "./types";

const log = createLogger("auth");

export async function signIn(
	credentials: LoginCredentials,
): Promise<{ token: string; user: AuthUser }> {
	log.info("Sign in attempt", { email: credentials.email });
	const rawResponse = await nocobaseRepository.signIn(credentials);
	const responseData = rawResponse.data?.data;
	const parsed = authResponseSchema.safeParse(responseData);

	if (!parsed.success) {
		log.error("Auth response validation failed", { error: parsed.error });
		throw new AuthValidationError(
			"Resposta de autenticação inválida",
			parsed.error,
		);
	}
	const { token, user } = parsed.data;

	setToken(token);
	setUser(user);
	setPermissionsFromRoles(user.roles);
	log.info("Sign in successful");

	return { token, user };
}

export async function signOut(): Promise<void> {
	log.info("Signing out");
	try {
		await nocobaseRepository.signOut();
	} catch (err) {
		log.warn("Sign out API call failed, continuing with local cleanup", {
			error: err instanceof Error ? err.message : String(err),
		});
	} finally {
		nocobaseRepository.clearToken();
		reset();
		resetPermissions();
		log.info("Sign out complete");
	}
}

export async function checkAuth(): Promise<AuthUser> {
	log.debug("Checking auth status");
	const user = await nocobaseRepository.checkAuth<AuthUser>();
	setUser(user);
	setPermissionsFromRoles(user.roles);
	log.debug("Auth check successful");
	return user;
}

export async function requestPasswordReset(email: string): Promise<void> {
	log.info("Password reset requested", { email });
	const payload: ResetPasswordRequest = { email };

	await nocobaseRepository.request({
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
	log.info("Password reset email sent");
}

export async function confirmPasswordReset(
	data: ResetPasswordConfirm,
): Promise<void> {
	log.info("Password reset confirmation attempt");
	await nocobaseRepository.request({
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
	log.info("Password reset confirmed successfully");
}

export async function updateProfile(
	payload: UpdateProfilePayload,
): Promise<AuthUser> {
	const userId = authStore.state.user?.id;
	if (!userId) {
		log.error("Profile update failed: no authenticated user found");
		throw new Error("Usuário autenticado não encontrado");
	}

	log.info("Profile update attempt", { userId });
	await nocobaseRepository.request({
		url: "users:update",
		method: "POST",
		params: {
			filterByTk: userId,
			whitelist: "email,nickname,phone",
		},
		data: {
			email: payload.email.trim(),
			nickname: payload.nickname.trim(),
			phone: payload.phone.trim(),
		},
	});
	log.info("Profile updated successfully");

	return checkAuth();
}
