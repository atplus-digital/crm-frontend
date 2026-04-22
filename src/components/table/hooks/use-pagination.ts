import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { useCallback, useState } from "react";
import { resolveStateUpdater } from "#/components/table/hooks/resolve-state-updater";

interface UsePaginationOptions {
	/** Initial page number (1-indexed). Default: 1 */
	initialPage?: number;
	/** Initial page size. Default: 20 */
	initialPageSize?: number;
	/** Callback when page changes */
	onPageChange?: (page: number) => void;
	/** Callback when page size changes */
	onPageSizeChange?: (pageSize: number) => void;
}

interface UsePaginationReturn {
	/** Current pagination state (0-indexed for TanStack Table) */
	pagination: PaginationState;
	/** Set pagination state */
	setPagination: (
		updater: PaginationState | ((old: PaginationState) => PaginationState),
	) => void;
	/** Current page number (1-indexed) */
	page: number;
	/** Current page size */
	pageSize: number;
	/** Pagination change handler for TanStack Table */
	onPaginationChange: OnChangeFn<PaginationState>;
}

/**
 * Hook for managing pagination state with TanStack Table.
 * Provides standardized pagination handling across all table components.
 *
 * @example
 * ```tsx
 * const { pagination, onPaginationChange } = usePagination({
 *   initialPage: 1,
 *   initialPageSize: 20,
 *   onPageChange: (page) => refetch({ page }),
 *   onPageSizeChange: (pageSize) => refetch({ page: 1, pageSize }),
 * });
 *
 * const table = useDataTable({
 *   columns,
 *   data,
 *   pagination,
 *   onPaginationChange,
 * });
 * ```
 */
export function usePagination(
	options: UsePaginationOptions = {},
): UsePaginationReturn {
	const {
		initialPage = 1,
		initialPageSize = 20,
		onPageChange,
		onPageSizeChange,
	} = options;

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: initialPage - 1,
		pageSize: initialPageSize,
	});

	const page = pagination.pageIndex + 1;
	const pageSize = pagination.pageSize;

	const onPaginationChange = useCallback<OnChangeFn<PaginationState>>(
		(updater) => {
			setPagination((previousPagination) => {
				const nextPagination = resolveStateUpdater(updater, previousPagination);

				if (nextPagination.pageIndex !== previousPagination.pageIndex) {
					onPageChange?.(nextPagination.pageIndex + 1);
				}

				if (nextPagination.pageSize !== previousPagination.pageSize) {
					onPageSizeChange?.(nextPagination.pageSize);
				}

				return nextPagination;
			});
		},
		[onPageChange, onPageSizeChange],
	);

	return {
		pagination,
		setPagination,
		page,
		pageSize,
		onPaginationChange,
	};
}
