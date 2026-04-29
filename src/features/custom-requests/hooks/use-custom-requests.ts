import { useMutation, useQuery } from "@tanstack/react-query";
import type { CustomRequestRegistryKey } from "#/generated/custom-requests/merged-registry";
import { customRequestsRegistry } from "#/generated/custom-requests/merged-registry";
import { getRequestsByCollection, sendRequest } from "../utils/service";
import type { CustomRequestEntry } from "../utils/types";

export function useSendRequest() {
	return useMutation({
		mutationFn: ({
			key,
			payload,
			signal,
		}: {
			key: CustomRequestRegistryKey;
			payload: unknown;
			signal?: AbortSignal;
		}) => sendRequest(key, { payload, signal }),
	});
}

export function useRequests() {
	return useQuery({
		queryKey: ["custom-requests", "all"],
		queryFn: () => getRequestsByCollection("all"),
		staleTime: 5 * 60 * 1000,
	});
}

export function useRequestsByCollection(collection: string) {
	return useQuery({
		queryKey: ["custom-requests", "collection", collection],
		queryFn: () => getRequestsByCollection(collection),
		staleTime: 5 * 60 * 1000,
		enabled: collection !== "all",
	});
}

export function useRequest(key: CustomRequestRegistryKey) {
	return useQuery({
		queryKey: ["custom-requests", "single", key],
		queryFn: () => {
			const entry = customRequestsRegistry[key] as
				| CustomRequestEntry
				| undefined;
			return entry ?? null;
		},
		staleTime: 5 * 60 * 1000,
	});
}
