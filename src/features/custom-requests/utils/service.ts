import { customRequestsRegistry } from "#/generated/custom-requests/generated-registry";
import {
	CustomRequestError,
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
} from "../errors";
import type {
	CustomRequestEntry,
	SendRequestOptions,
	SendRequestResult,
	TemplateContext,
} from "./types";

const customRequestsRegistryByKey = customRequestsRegistry as Record<
	string,
	CustomRequestEntry
>;

export function validatePayload(key: string, payload: unknown) {
	const entry = customRequestsRegistryByKey[key];
	if (!entry) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}
	const result = entry.payloadSchema.safeParse(payload);
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

export async function sendRequest(
	key: string,
	options: SendRequestOptions,
): Promise<SendRequestResult> {
	const entry = customRequestsRegistryByKey[key];
	if (!entry) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}

	const validatedPayload = validatePayload(key, options.payload);

	try {
		const response = await fetch(`/api/${entry.url}`, {
			method: entry.method,
			headers: {
				"Content-Type": "application/json",
			},
			body:
				entry.method === "POST" ? JSON.stringify(validatedPayload) : undefined,
			signal: options.signal,
		});

		if (!response.ok) {
			throw new CustomRequestNetworkError(
				`HTTP ${response.status}: ${response.statusText}`,
				response.status,
			);
		}

		const data = await response.json();
		return { success: true, data };
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

export function getRequestConfig(key: string) {
	const entry = customRequestsRegistryByKey[key];
	if (!entry) {
		throw new CustomRequestError(
			`Unknown request key: ${key}`,
			CustomRequestErrorCode.NOT_FOUND,
		);
	}
	return {
		key,
		method: entry.method,
		url: entry.url,
	};
}

export function getRequestsByCollection(_collection: string) {
	return Object.entries(customRequestsRegistry).map(([key, entry]) => ({
		key,
		method: entry.method,
		url: entry.url,
	}));
}
