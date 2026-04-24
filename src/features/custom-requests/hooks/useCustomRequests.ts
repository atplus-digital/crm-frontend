import { useMutation, useQuery } from "@tanstack/react-query";
import { getRequestsByCollection, sendRequest } from "../utils/service";
import type { CustomRequestKey } from "../utils/types";

export function useSendRequest() {
	return useMutation({
		mutationFn: ({
			key,
			payload,
			signal,
		}: {
			key: CustomRequestKey;
			payload: unknown;
			signal?: AbortSignal;
		}) => sendRequest(key, { payload, signal } as never),
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

export function useRequest(key: CustomRequestKey) {
	return useQuery({
		queryKey: ["custom-requests", "single", key],
		queryFn: () => {
			const requests = getRequestsByCollection("all");
			return (
				requests.find((r: { key: CustomRequestKey }) => r.key === key) ?? null
			);
		},
		staleTime: 5 * 60 * 1000,
	});
}
