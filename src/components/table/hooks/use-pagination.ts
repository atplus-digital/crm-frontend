import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { useCallback, useEffect, useRef, useState } from "react";
import { resolveStateUpdater } from "#/components/table/hooks/resolve-state-updater";

interface UsePaginationOptions {
	/** Initial page number (1-indexed). Default: 1 */
	initialPage?: number;
	/** Initial page size. Default: 15 */
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
		initialPageSize = 15,
		onPageChange,
		onPageSizeChange,
	} = options;

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: initialPage - 1,
		pageSize: initialPageSize,
	});
	const previousPaginationRef = useRef<PaginationState>(pagination);
	const previousExternalStateRef = useRef({
		initialPage,
		initialPageSize,
	});
	const syncingFromExternalRef = useRef(false);

	const page = pagination.pageIndex + 1;
	const pageSize = pagination.pageSize;

	useEffect(() => {
		const previousExternalState = previousExternalStateRef.current;
		const externalStateChanged =
			previousExternalState.initialPage !== initialPage ||
			previousExternalState.initialPageSize !== initialPageSize;

		previousExternalStateRef.current = {
			initialPage,
			initialPageSize,
		};

		if (!externalStateChanged) {
			return;
		}

		const nextPageIndex = Math.max(0, initialPage - 1);
		const nextPageSize = Math.max(1, initialPageSize);
		setPagination((currentPagination) => {
			if (
				currentPagination.pageIndex === nextPageIndex &&
				currentPagination.pageSize === nextPageSize
			) {
				return currentPagination;
			}

			syncingFromExternalRef.current = true;
			return {
				pageIndex: nextPageIndex,
				pageSize: nextPageSize,
			};
		});
	}, [initialPage, initialPageSize]);

	useEffect(() => {
		const previousPagination = previousPaginationRef.current;

		if (
			previousPagination.pageIndex === pagination.pageIndex &&
			previousPagination.pageSize === pagination.pageSize
		) {
			return;
		}

		previousPaginationRef.current = pagination;

		if (syncingFromExternalRef.current) {
			syncingFromExternalRef.current = false;
			return;
		}

		if (pagination.pageIndex !== previousPagination.pageIndex) {
			onPageChange?.(pagination.pageIndex + 1);
		}

		if (pagination.pageSize !== previousPagination.pageSize) {
			onPageSizeChange?.(pagination.pageSize);
		}
	}, [onPageChange, onPageSizeChange, pagination]);

	const onPaginationChange = useCallback<OnChangeFn<PaginationState>>(
		(updater) => {
			setPagination((previousPagination) =>
				resolveStateUpdater(updater, previousPagination),
			);
		},
		[],
	);

	return {
		pagination,
		setPagination,
		page,
		pageSize,
		onPaginationChange,
	};
}
