import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { reset } from "#/features/auth";
import { extractNocoBaseError } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

function isUnauthorizedError(
	error: unknown,
): error is { status?: number; response?: { status?: number } } {
	if (!error || typeof error !== "object") {
		return false;
	}

	const candidate = error as {
		status?: number;
		response?: { status?: number };
	};
	return candidate.status === 401 || candidate.response?.status === 401;
}

export function getQueryContext() {
	let isRedirecting = false;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 30, // 30 seconds
				retry: (failureCount, error: unknown) => {
					// Don't retry on 401 — token is invalid
					if (isUnauthorizedError(error)) return false;
					return failureCount < 3;
				},
			},
		},
	});

	// Global error handler for 401 responses
	queryClient.getQueryCache().config.onError = (error: unknown) => {
		if (isUnauthorizedError(error) && !isRedirecting) {
			isRedirecting = true;
			reset();
			queryClient.clear();
			// Use setTimeout to avoid redirect during render
			setTimeout(() => {
				window.location.href = routePaths.login;
				isRedirecting = false;
			}, 0);
		} else {
			toast.error(extractNocoBaseError(error));
		}
	};

	return { queryClient };
}
