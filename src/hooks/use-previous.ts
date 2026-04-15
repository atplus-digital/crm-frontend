import { useEffect, useRef } from "react";

/**
 * Hook to keep track of the previous value of a variable.
 * Useful for stale-while-loading patterns in tables with pagination.
 *
 * @example
 * ```tsx
 * const { data, isFetching } = useQuery({...});
 * const previousData = usePrevious(data);
 *
 * // During page change: shows previousData while isFetching=true
 * <DataTableWithPagination
 *   data={data}
 *   staleData={previousData}
 *   isLoading={isFetching}
 * />
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T | undefined>(undefined);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}
