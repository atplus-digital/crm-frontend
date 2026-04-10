import { QueryClient } from "@tanstack/react-query";
import { reset } from "#/modules/auth";

let isRedirecting = false;

export function getQueryContext() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5, // 5 minutes
				retry: (failureCount, error: any) => {
					// Don't retry on 401 — token is invalid
					if (error?.status === 401) return false;
					return failureCount < 3;
				},
			},
		},
	});

	// Global error handler for 401 responses
	queryClient.getQueryCache().config.onError = (error: any) => {
		if (error?.status === 401 && !isRedirecting) {
			isRedirecting = true;
			reset();
			queryClient.clear();
			// Use setTimeout to avoid redirect during render
			setTimeout(() => {
				window.location.href = "/login";
				isRedirecting = false;
			}, 0);
		}
	};

	return { queryClient };
}
