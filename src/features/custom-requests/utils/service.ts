import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";
import { customRequestsRegistry } from "../registry";
import type { CustomRequestPayloads } from "../schemas";
import type { CustomRequestKey, SendCustomRequestResult } from "../types";
import {
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
	mapZodErrorToPortuguese,
} from "./errors";

const log = createLogger("services:custom-requests");

export interface SendCustomRequestOptions<TKey extends CustomRequestKey> {
	payload?: CustomRequestPayloads[TKey];
	params?: Record<string, unknown>;
}

/**
 * Send a custom request by key, with Zod payload validation.
 *
 * @example
 * const result = await sendCustomRequest("37yaihkravc", {
 *   payload: { id_contrato: 123, id_vendedor: "ABC" }
 * });
 * if (result.success) {
 *   console.log("Contrato criado:", result.data);
 * } else {
 *   console.error("Erro:", result.error);
 * }
 */
export async function sendCustomRequest<TKey extends CustomRequestKey>(
	key: TKey,
	options?: SendCustomRequestOptions<TKey>,
): Promise<SendCustomRequestResult> {
	const config = customRequestsRegistry[key];

	log.info("Sending custom request", {
		key,
		name: config.name,
		collection: config.collection,
		url: config.options.url,
		method: config.options.method,
	});

	// 1. Validate payload with Zod schema
	if (options?.payload !== undefined) {
		const parseResult = config.payloadSchema.safeParse(options.payload);
		if (!parseResult.success) {
			const message = mapZodErrorToPortuguese(parseResult.error);
			log.warn("Payload validation failed", { key, message });
			throw new CustomRequestValidationError(
				`Payload inválido: ${message}`,
				CustomRequestErrorCode.VALIDATION_ERROR,
				parseResult.error,
			);
		}
	}

	// 2. Call NocoBase API
	try {
		const url = `customRequests:send/${key}`;
		const response = await nocobaseRepository.request<unknown>({
			url,
			method: config.options.method,
			data: options?.payload,
			params: options?.params,
		});

		log.info("Custom request succeeded", {
			key,
			collection: config.collection,
		});
		return { success: true, data: response };
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Custom request failed", { key, error: message });

		if (
			error instanceof CustomRequestValidationError ||
			error instanceof CustomRequestNetworkError
		) {
			throw error;
		}

		throw new CustomRequestNetworkError(
			`Erro de rede: ${message}`,
			CustomRequestErrorCode.NETWORK_ERROR,
		);
	}
}

/**
 * Get all request keys that target a specific collection.
 */
export function getRequestsByCollection(
	collection: string,
): CustomRequestKey[] {
	return Object.keys(customRequestsRegistry).filter(
		(key: string) =>
			customRequestsRegistry[key as CustomRequestKey].collection === collection,
	) as CustomRequestKey[];
}

/**
 * Get the configuration for a specific request key.
 */
export function getCustomRequestConfig<TKey extends CustomRequestKey>(
	key: TKey,
) {
	return customRequestsRegistry[key];
}
