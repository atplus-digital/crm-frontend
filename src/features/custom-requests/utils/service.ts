import {
	CustomRequestError,
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
} from "../errors";
import {
	criarContratoIxcSchema,
	n8nComprasSchema,
	qualirunInfoSchema,
} from "./schemas";
import type {
	CustomRequestKey,
	SendRequestOptions,
	SendRequestResult,
	TemplateContext,
} from "./types";

const REGISTRY: Record<
	CustomRequestKey,
	{
		schema:
			| typeof criarContratoIxcSchema
			| typeof qualirunInfoSchema
			| typeof n8nComprasSchema;
		method: "GET" | "POST";
		url: string;
	}
> = {
	criarContratoIxc: {
		schema: criarContratoIxcSchema,
		method: "POST",
		url: "customRequests:send/criarContratoIxc",
	},
	qualirunInfo: {
		schema: qualirunInfoSchema,
		method: "GET",
		url: "customRequests:send/qualirunInfo",
	},
	n8nCompras: {
		schema: n8nComprasSchema,
		method: "POST",
		url: "customRequests:send/n8nCompras",
	},
};

export function validatePayload<K extends CustomRequestKey>(
	key: K,
	payload: unknown,
) {
	const config = REGISTRY[key];
	if (!config) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}
	const result = config.schema.safeParse(payload);
	if (!result.success) {
		throw new CustomRequestValidationError(result.error);
	}
	return result.data;
}

export function buildTemplateContext(
	record: Record<string, unknown>,
	user: { id: number; email: string; username: string },
	time?: string,
): TemplateContext {
	return {
		currentRecord: record,
		currentUser: user,
		currentTime: time ?? new Date().toISOString(),
	};
}

export function interpolateTemplate(
	template: string,
	context: TemplateContext,
): string {
	return template
		.replace(/\{\{currentRecord\.(\w+)\}\}/g, (_, key) =>
			String(context.currentRecord[key] ?? ""),
		)
		.replace(/\{\{currentUser\.(\w+)\}\}/g, (_, key) =>
			String(
				context.currentUser[key as keyof typeof context.currentUser] ?? "",
			),
		)
		.replace(/\{\{currentTime\}\}/g, context.currentTime);
}

export async function sendRequest<K extends CustomRequestKey>(
	key: K,
	options: SendRequestOptions<K>,
): Promise<SendRequestResult<K>> {
	const config = REGISTRY[key];
	if (!config) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}

	const validatedPayload = validatePayload(key, options.payload);

	try {
		const response = await fetch(`/api/${config.url}`, {
			method: config.method,
			headers: {
				"Content-Type": "application/json",
			},
			body:
				config.method === "POST" ? JSON.stringify(validatedPayload) : undefined,
			signal: options.signal,
		});

		if (!response.ok) {
			throw new CustomRequestNetworkError(
				`HTTP ${response.status}: ${response.statusText}`,
				response.status,
			);
		}

		const data = await response.json();
		return { success: true, data } as SendRequestResult<K>;
	} catch (error) {
		if (error instanceof DOMException && error.name === "AbortError") {
			throw new CustomRequestError(
				"Request cancelled",
				CustomRequestErrorCode.UNKNOWN,
			);
		}
		if (error instanceof CustomRequestValidationError) {
			throw error;
		}
		if (error instanceof CustomRequestNetworkError) {
			throw error;
		}
		throw new CustomRequestError(
			error instanceof Error ? error.message : "Unknown error",
			CustomRequestErrorCode.UNKNOWN,
		);
	}
}

export function getRequestConfig<K extends CustomRequestKey>(key: K) {
	const config = REGISTRY[key];
	if (!config) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}
	return {
		key,
		method: config.method,
		url: config.url,
	};
}

export function getRequestsByCollection(_collection: string) {
	return Object.entries(REGISTRY).map(([key, config]) => ({
		key: key as CustomRequestKey,
		method: config.method,
		url: config.url,
	}));
}
