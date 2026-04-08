import axios from "axios";
import { env } from "#/env";
import type {
	AuthenticatedUser,
	NocoBaseAuthResponse,
	NocoBaseCheckResponse,
} from "#/modules/auth/auth.schemas";
import {
	nocobaseAuthResponseSchema,
	nocobaseCheckResponseSchema,
} from "#/modules/auth/auth.schemas";

// ── Constants ────────────────────────────────────────────────────────────

const AUTHENTICATOR = "basic";

// ── Axios instance (server-only, no token persistence) ───────────────────

const api = axios.create({
	baseURL: env.CRM_NOCOBASE_URL,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json",
	},
});

// ── Error normalization ──────────────────────────────────────────────────

export interface AuthError {
	code: "INVALID_CREDENTIALS" | "SESSION_EXPIRED" | "NETWORK_ERROR" | "UNKNOWN";
	message: string;
}

function normalizeError(error: unknown): AuthError {
	if (axios.isAxiosError(error)) {
		const status = error.response?.status;

		if (status === 401) {
			return {
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			};
		}

		const detail =
			(error.response?.data as Record<string, unknown>)?.errors ?? null;

		if (Array.isArray(detail) && detail.length > 0) {
			return {
				code: "INVALID_CREDENTIALS",
				message: "Credenciais inválidas",
			};
		}

		if (error.code === "ECONNABORTED" || error.code === "ERR_NETWORK") {
			return {
				code: "NETWORK_ERROR",
				message: "Erro de conexão com o servidor",
			};
		}

		return {
			code: "UNKNOWN",
			message: "Erro ao autenticar. Tente novamente.",
		};
	}

	return {
		code: "UNKNOWN",
		message: "Erro inesperado durante a autenticação",
	};
}

// ── NocoBase response → normalized user ──────────────────────────────────

function normalizeUser(raw: {
	id: number;
	email: string;
	username?: string | null;
	nickname?: string | null;
	roles: unknown[];
}): AuthenticatedUser {
	const roles: string[] = Array.isArray(raw.roles)
		? raw.roles
				.filter(
					(r): r is { name: string } =>
						typeof r === "object" && r !== null && "name" in r,
				)
				.map((r) => String(r.name))
		: [];

	return {
		id: raw.id,
		email: raw.email,
		username: raw.username ?? null,
		nickname: raw.nickname ?? null,
		roles,
	};
}

// ── Public API ───────────────────────────────────────────────────────────

export interface SignInResult {
	success: true;
	token: string;
	user: AuthenticatedUser;
}

export interface CheckSessionResult {
	success: true;
	user: AuthenticatedUser;
}

/**
 * Signs in a user against NocoBase using email + password.
 *
 * Sends `X-Authenticator: basic` header as required by NocoBase's
 * password authenticator. The returned token is NOT persisted —
 * callers (server functions) handle cookie storage.
 *
 * Response data is handled with no-store semantics (not cached).
 *
 * @throws {AuthError} On invalid credentials or network errors
 */
export async function signIn(
	email: string,
	password: string,
): Promise<SignInResult> {
	try {
		const response = await api.post<NocoBaseAuthResponse>(
			"/auth:signIn",
			{ email, password },
			{
				headers: {
					"X-Authenticator": AUTHENTICATOR,
				},
			},
		);

		const parsed = nocobaseAuthResponseSchema.parse(response.data);

		return {
			success: true,
			token: parsed.meta.token,
			user: normalizeUser({
				id: parsed.meta.id,
				email: parsed.meta.email,
				nickname: parsed.meta.nickname,
				roles: parsed.meta.roles,
			}),
		};
	} catch (error) {
		throw normalizeError(error);
	}
}

/**
 * Validates an existing session by calling NocoBase's auth:check.
 *
 * The token is attached to the request headers for this call only
 * and is NOT persisted in the axios instance.
 *
 * @throws {AuthError} On 401 (expired/invalid token) or network errors
 */
export async function checkSession(token: string): Promise<CheckSessionResult> {
	try {
		const response = await api.get<NocoBaseCheckResponse>("/auth:check", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Cache-Control": "no-store",
			},
		});

		const parsed = nocobaseCheckResponseSchema.parse(response.data);

		return {
			success: true,
			user: normalizeUser({
				id: parsed.meta.id,
				email: parsed.meta.email,
				username: parsed.meta.username,
				nickname: parsed.meta.nickname,
				roles: parsed.meta.roles,
			}),
		};
	} catch (error) {
		throw normalizeError(error);
	}
}

/**
 * Signs out the current user by calling NocoBase's auth:signOut.
 *
 * The token is attached to the request headers for this call only.
 * Regardless of the NocoBase response, callers should still clear
 * the local session cookie.
 *
 * @returns true if sign-out succeeded, false otherwise (errors are swallowed)
 */
export async function signOut(token: string): Promise<boolean> {
	try {
		await api.post(
			"/auth:signOut",
			{},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return true;
	} catch {
		return false;
	}
}
