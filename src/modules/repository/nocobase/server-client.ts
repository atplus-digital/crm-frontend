import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { env } from "#/env";
import { getSession } from "#/modules/auth/auth-session.server";

// ── Constants ────────────────────────────────────────────────────────

/** Default request timeout in milliseconds */
const DEFAULT_TIMEOUT = 15000;

// ── Error types ──────────────────────────────────────────────────────

export interface NocoBaseClientError {
	code:
		| "UNAUTHENTICATED"
		| "FORBIDDEN"
		| "NOT_FOUND"
		| "VALIDATION_ERROR"
		| "NETWORK_ERROR"
		| "SERVER_ERROR"
		| "UNKNOWN";
	message: string;
	status?: number;
}

/**
 * Error thrown when there is no active session (no token available).
 */
export class UnauthenticatedError extends Error {
	constructor(
		message = "Sessão não encontrada. O usuário não está autenticado.",
	) {
		super(message);
		this.name = "UnauthenticatedError";
	}
}

// ── Error normalization ──────────────────────────────────────────────

function normalizeError(error: unknown): NocoBaseClientError {
	if (axios.isAxiosError(error)) {
		const status = error.response?.status;

		if (status === 401) {
			return {
				code: "UNAUTHENTICATED",
				message: "Sessão expirada ou inválida",
				status,
			};
		}

		if (status === 403) {
			return {
				code: "FORBIDDEN",
				message: "Acesso negado",
				status,
			};
		}

		if (status === 404) {
			return {
				code: "NOT_FOUND",
				message: "Recurso não encontrado",
				status,
			};
		}

		if (status === 422 || status === 400) {
			return {
				code: "VALIDATION_ERROR",
				message: "Dados inválidos na requisição",
				status,
			};
		}

		if (status !== undefined && status >= 500) {
			return {
				code: "SERVER_ERROR",
				message: "Erro interno do servidor",
				status,
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
			message: "Erro inesperado na requisição",
			status,
		};
	}

	return {
		code: "UNKNOWN",
		message: "Erro inesperado durante a requisição",
	};
}

// ── Axios instance factory ───────────────────────────────────────────

/**
 * Creates a new axios instance configured for authenticated NocoBase API calls.
 *
 * The instance is created per-request (or per-function-call) to avoid
 * persisting tokens across unrelated requests. This ensures each call
 * reads the current session state at invocation time.
 *
 * Authorization is performed by attaching the Bearer token from the
 * user's server-side session (crm_session cookie). The actual permission
 * check happens on the NocoBase backend — this wrapper only forwards
 * the user's identity.
 */
function createAuthenticatedClient(token: string): AxiosInstance {
	return axios.create({
		baseURL: env.CRM_NOCOBASE_URL,
		timeout: DEFAULT_TIMEOUT,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
}

// ── Internal: resolve token or throw ─────────────────────────────────

/**
 * Reads the current session token from the server-side cookie.
 * Throws UnauthenticatedError if no valid session exists.
 */
function requireToken(): string {
	const token = getSession();
	if (!token) {
		throw new UnauthenticatedError();
	}
	return token;
}

// ── Public API ───────────────────────────────────────────────────────

/**
 * Server-only NocoBase API client that uses the authenticated user's session.
 *
 * **Important**: This client reads the user token from the server-side
 * session cookie (handled by `getSession()` from `auth-session.server.ts`).
 * It does NOT rely on any automation token or browser-stored credential.
 *
 * **Authorization**: This wrapper only forwards the user's identity to NocoBase.
 * All real authorization decisions (role checks, permissions, data scoping)
 * continue to be enforced by the NocoBase backend. Never use client-side
 * role information from this wrapper for authorization purposes.
 *
 * **Usage**: Import and call methods directly in server functions or route loaders.
 * Each call reads the session fresh, so expired/invalid sessions are caught early.
 */
export const nocobaseClient = {
	/**
	 * Performs an authenticated GET request to the NocoBase API.
	 *
	 * @param path - API path relative to CRM_NOCOBASE_URL (e.g. "/collections")
	 * @param config - Optional axios request config overrides
	 * @returns Parsed response data
	 * @throws {UnauthenticatedError} If no active session exists
	 * @throws {NocoBaseClientError} For API errors (403, 404, 500, etc.)
	 */
	async get<T = unknown>(
		path: string,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const token = requireToken();
		const client = createAuthenticatedClient(token);

		try {
			const response = await client.get<T>(path, config);
			return response.data;
		} catch (error) {
			if (error instanceof UnauthenticatedError) throw error;
			throw normalizeError(error);
		}
	},

	/**
	 * Performs an authenticated POST request to the NocoBase API.
	 *
	 * @param path - API path relative to CRM_NOCOBASE_URL
	 * @param data - Request body
	 * @param config - Optional axios request config overrides
	 * @returns Parsed response data
	 * @throws {UnauthenticatedError} If no active session exists
	 * @throws {NocoBaseClientError} For API errors
	 */
	async post<T = unknown>(
		path: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const token = requireToken();
		const client = createAuthenticatedClient(token);

		try {
			const response = await client.post<T>(path, data, config);
			return response.data;
		} catch (error) {
			if (error instanceof UnauthenticatedError) throw error;
			throw normalizeError(error);
		}
	},

	/**
	 * Performs an authenticated PUT request to the NocoBase API.
	 *
	 * @param path - API path relative to CRM_NOCOBASE_URL
	 * @param data - Request body
	 * @param config - Optional axios request config overrides
	 * @returns Parsed response data
	 * @throws {UnauthenticatedError} If no active session exists
	 * @throws {NocoBaseClientError} For API errors
	 */
	async put<T = unknown>(
		path: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const token = requireToken();
		const client = createAuthenticatedClient(token);

		try {
			const response = await client.put<T>(path, data, config);
			return response.data;
		} catch (error) {
			if (error instanceof UnauthenticatedError) throw error;
			throw normalizeError(error);
		}
	},

	/**
	 * Performs an authenticated PATCH request to the NocoBase API.
	 *
	 * @param path - API path relative to CRM_NOCOBASE_URL
	 * @param data - Request body
	 * @param config - Optional axios request config overrides
	 * @returns Parsed response data
	 * @throws {UnauthenticatedError} If no active session exists
	 * @throws {NocoBaseClientError} For API errors
	 */
	async patch<T = unknown>(
		path: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const token = requireToken();
		const client = createAuthenticatedClient(token);

		try {
			const response = await client.patch<T>(path, data, config);
			return response.data;
		} catch (error) {
			if (error instanceof UnauthenticatedError) throw error;
			throw normalizeError(error);
		}
	},

	/**
	 * Performs an authenticated DELETE request to the NocoBase API.
	 *
	 * @param path - API path relative to CRM_NOCOBASE_URL
	 * @param config - Optional axios request config overrides
	 * @returns Parsed response data
	 * @throws {UnauthenticatedError} If no active session exists
	 * @throws {NocoBaseClientError} For API errors
	 */
	async delete<T = unknown>(
		path: string,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const token = requireToken();
		const client = createAuthenticatedClient(token);

		try {
			const response = await client.delete<T>(path, config);
			return response.data;
		} catch (error) {
			if (error instanceof UnauthenticatedError) throw error;
			throw normalizeError(error);
		}
	},
} as const;
