import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customRequestsRegistry } from "../registry";
import type { CustomRequestKey, SendCustomRequestResult } from "../types";
import {
	getRequestsByCollection,
	type SendCustomRequestOptions,
	sendCustomRequest,
} from "../utils/service";

interface UseCollectionRequestsResult {
	requests: Array<{ key: CustomRequestKey; name: string; collection: string }>;
	isLoading: boolean;
	error: Error | null;
}

export function useCollectionRequests(
	collectionName: string,
): UseCollectionRequestsResult {
	const { data, isLoading, error } = useQuery({
		queryKey: ["customRequests", "collection", collectionName] as const,
		queryFn: () => {
			if (!collectionName) return [];
			const keys = getRequestsByCollection(collectionName);
			return keys.map((key) => {
				const config = customRequestsRegistry[key];
				return {
					key,
					name: config.name,
					collection: config.collection,
				};
			});
		},
		enabled: Boolean(collectionName),
		staleTime: 5 * 60 * 1000, // 5 minutes
	});

	return {
		requests: data ?? [],
		isLoading,
		error: error as Error | null,
	};
}

interface UseSendCustomRequestResult<TData = unknown> {
	send: (
		key: CustomRequestKey,
		options?: SendCustomRequestOptions<CustomRequestKey>,
	) => Promise<SendCustomRequestResult<TData>>;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
	data: SendCustomRequestResult<TData> | null;
	reset: () => void;
}

export function useSendCustomRequest<
	TData = unknown,
>(): UseSendCustomRequestResult<TData> {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async ({
			key,
			options,
		}: {
			key: CustomRequestKey;
			options?: SendCustomRequestOptions<CustomRequestKey>;
		}) => {
			return sendCustomRequest(key, options) as Promise<
				SendCustomRequestResult<TData>
			>;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["custom-requests"] });
		},
	});

	return {
		send: async (key, options) => {
			return mutation.mutateAsync({
				key,
				options,
			});
		},
		isLoading: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
		data: (mutation.data ?? null) as SendCustomRequestResult<TData> | null,
		reset: mutation.reset,
	};
}

interface UseAllCustomRequestsResult {
	requests: Array<{
		key: CustomRequestKey;
		name: string;
		collection: string;
		method: string;
		url: string;
	}>;
	isLoading: boolean;
	error: Error | null;
}

export function useAllCustomRequests(): UseAllCustomRequestsResult {
	const { data, isLoading, error } = useQuery({
		queryKey: ["customRequests", "all"],
		queryFn: () => {
			return Object.keys(customRequestsRegistry).map((key) => {
				const config = customRequestsRegistry[key as CustomRequestKey];
				return {
					key: key as CustomRequestKey,
					name: config.name,
					collection: config.collection,
					method: config.options.method,
					url: config.options.url,
				};
			});
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
	});

	return {
		requests: data ?? [],
		isLoading,
		error: error as Error | null,
	};
}

export function useCustomRequests() {
	throw new Error("Not implemented");
}
