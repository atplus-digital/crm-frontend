import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "#/modules/auth/service";
import type { AuthUser } from "#/modules/auth/types";

export function useCurrentUser() {
	return useQuery<AuthUser>({
		queryKey: ["auth", "currentUser"],
		queryFn: checkAuth,
		staleTime: 1000 * 60 * 5, // 5 minutes
		retry: false,
	});
}
