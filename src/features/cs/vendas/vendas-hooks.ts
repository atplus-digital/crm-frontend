import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchVendedores } from "./vendas-service";

export const vendedoresQueryOptions = () =>
	queryOptions({
		queryKey: ["cs", "vendas", "vendedores"] as const,
		queryFn: () => fetchVendedores(),
		staleTime: 5 * 60 * 1000,
	});

export function useVendedores() {
	return useQuery(vendedoresQueryOptions());
}
