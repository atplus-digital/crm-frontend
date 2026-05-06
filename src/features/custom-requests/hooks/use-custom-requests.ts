import { useMutation } from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";
import type { z } from "zod";
import { authStore } from "#/features/auth";
import {
	type CustomRequestRegistryKey,
	customRequestsRegistry,
} from "#/generated/custom-requests/generated-registry";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";
import { sendRequest } from "../utils/service";

const log = createLogger("use-custom-requests:resolveCurrentUserData");

type RequestIdentifierForKey<K extends CustomRequestRegistryKey> =
	| K
	| (typeof customRequestsRegistry)[K]["name"]
	| `${(typeof customRequestsRegistry)[K]["collection"]}.${(typeof customRequestsRegistry)[K]["name"]}`
	| `${(typeof customRequestsRegistry)[K]["dataSourceKey"]}.${(typeof customRequestsRegistry)[K]["collection"]}.${(typeof customRequestsRegistry)[K]["name"]}`;
export type CustomRequestIdentifier = {
	[K in CustomRequestRegistryKey]: RequestIdentifierForKey<K>;
}[CustomRequestRegistryKey];
type RequestKeyFromIdentifier<I extends CustomRequestIdentifier> = {
	[K in CustomRequestRegistryKey]: I extends RequestIdentifierForKey<K>
		? K
		: never;
}[CustomRequestRegistryKey];
type PayloadByRequestKey<K extends CustomRequestRegistryKey> = z.input<
	(typeof customRequestsRegistry)[K]["payloadSchema"]
>;
type PayloadWithOptionalCurrentUser<T> = T extends {
	currentUser: infer TCurrentUser;
}
	? Omit<T, "currentUser"> & { currentUser?: TCurrentUser }
	: T;
export type CustomRequestPayload<I extends CustomRequestIdentifier> =
	PayloadWithOptionalCurrentUser<
		PayloadByRequestKey<RequestKeyFromIdentifier<I>>
	>;
type UseCustomRequestMutationInput<I extends CustomRequestIdentifier> = {
	payload: CustomRequestPayload<I>;
	signal?: AbortSignal;
};

function resolveRequestKey(identifier: CustomRequestIdentifier) {
	if (identifier in customRequestsRegistry) {
		return identifier as CustomRequestRegistryKey;
	}

	for (const [key, entry] of Object.entries(customRequestsRegistry)) {
		if (entry.name === identifier) {
			return key as CustomRequestRegistryKey;
		}

		const collectionNameIdentifier = `${entry.collection}.${entry.name}`;
		if (collectionNameIdentifier === identifier) {
			return key as CustomRequestRegistryKey;
		}

		const fullyQualifiedIdentifier = `${entry.dataSourceKey}.${entry.collection}.${entry.name}`;
		if (fullyQualifiedIdentifier === identifier) {
			return key as CustomRequestRegistryKey;
		}
	}

	return null;
}

function hasCurrentUserTemplate(value: unknown): boolean {
	if (typeof value === "string") {
		return value.includes("{{currentUser.");
	}

	if (Array.isArray(value)) {
		return value.some(hasCurrentUserTemplate);
	}

	if (value && typeof value === "object") {
		return Object.values(value).some(hasCurrentUserTemplate);
	}

	return false;
}

export function useCustomRequest<I extends CustomRequestIdentifier>(
	identifier: I,
) {
	const key = useMemo(() => resolveRequestKey(identifier), [identifier]);
	const entry = useMemo(
		() => (key ? customRequestsRegistry[key] : null),
		[key],
	);
	const currentUserCacheRef = useRef<{
		userId: number | null;
		data: unknown;
	}>({
		userId: null,
		data: null,
	});
	const requestUsesCurrentUser = useMemo(
		() => hasCurrentUserTemplate(entry?.payloadData),
		[entry],
	);

	const resolveCurrentUserData = useCallback(async () => {
		const authUser = authStore.state.user;
		if (!authUser?.id) {
			throw new Error(
				"Nenhum usuário autenticado disponível para preencher currentUser.",
			);
		}

		if (
			currentUserCacheRef.current.userId === authUser.id &&
			currentUserCacheRef.current.data !== null
		) {
			return currentUserCacheRef.current.data;
		}

		try {
			const fullCurrentUser = await nocobaseRepository.get(
				"users",
				authUser.id,
			);
			currentUserCacheRef.current = {
				userId: authUser.id,
				data: fullCurrentUser,
			};
			return fullCurrentUser;
		} catch (error) {
			log.warn(
				"Failed to resolve currentUser data from NocoBase, falling back to auth store",
				error,
			);
			currentUserCacheRef.current = {
				userId: authUser.id,
				data: authUser,
			};
			return authUser;
		}
	}, []);

	return useMutation({
		mutationFn: async ({
			payload,
			signal,
		}: UseCustomRequestMutationInput<I>) => {
			if (!key || !entry) {
				throw new Error(
					`Custom request not found for identifier: ${identifier}`,
				);
			}

			const canInjectFromPayload =
				payload && typeof payload === "object" && !Array.isArray(payload);
			const payloadAsObject = canInjectFromPayload
				? (payload as Record<string, unknown>)
				: null;
			const hasManualCurrentUser =
				payloadAsObject !== null &&
				"currentUser" in payloadAsObject &&
				payloadAsObject.currentUser != null;

			let finalPayload: unknown = payload;

			if (requestUsesCurrentUser && !hasManualCurrentUser) {
				const currentUser = await resolveCurrentUserData();
				finalPayload =
					payloadAsObject !== null
						? { ...payloadAsObject, currentUser }
						: { currentUser };
			}

			return sendRequest(key, { payload: finalPayload, signal });
		},
	});
}
