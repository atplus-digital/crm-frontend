import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { parseAsInteger, useQueryState } from "nuqs";
import { useCallback, useRef } from "react";

interface UseSearchParamsPaginationOptions {
	pageKey?: string;
	pageSizeKey?: string;
	defaultPage?: number;
	defaultPageSize?: number;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
	onPageChangeComplete?: () => void;
}

interface UseSearchParamsPaginationReturn {
	pagination: PaginationState;
	setPagination: (
		updater: PaginationState | ((old: PaginationState) => PaginationState),
	) => void;
	page: number;
	pageSize: number;
	onPaginationChange: OnChangeFn<PaginationState>;
	isPageChanging: boolean;
	markPageChangeComplete: () => void;
}

export function useSearchParamsPagination(
	options: UseSearchParamsPaginationOptions = {},
): UseSearchParamsPaginationReturn {
	const {
		pageKey = "page",
		pageSizeKey = "pageSize",
		defaultPage = 1,
		defaultPageSize = 20,
		onPageChange,
		onPageSizeChange,
		onPageChangeComplete,
	} = options;

	const [page, setPage] = useQueryState(
		pageKey,
		parseAsInteger.withDefault(defaultPage),
	);
	const [pageSize, setPageSize] = useQueryState(
		pageSizeKey,
		parseAsInteger.withDefault(defaultPageSize),
	);

	const isPageChangingRef = useRef(false);
	const paginationRef = useRef<PaginationState>({
		pageIndex: (page ?? defaultPage) - 1,
		pageSize: pageSize ?? defaultPageSize,
	});

	const pagination: PaginationState = {
		pageIndex: (page ?? defaultPage) - 1,
		pageSize: pageSize ?? defaultPageSize,
	};

	// Keep ref in sync
	paginationRef.current = pagination;

	const markPageChangeComplete = useCallback(() => {
		isPageChangingRef.current = false;
		onPageChangeComplete?.();
	}, [onPageChangeComplete]);

	const setPagination = useCallback(
		(
			updater: PaginationState | ((old: PaginationState) => PaginationState),
		) => {
			const currentPagination = paginationRef.current;
			const newPagination =
				typeof updater === "function" ? updater(currentPagination) : updater;

			const newPageIndex = newPagination.pageIndex;
			const newPageSize = newPagination.pageSize;

			if (newPageIndex !== currentPagination.pageIndex) {
				const newPage = newPageIndex + 1;
				isPageChangingRef.current = true;
				onPageChange?.(newPage);
			}

			if (newPageSize !== currentPagination.pageSize) {
				isPageChangingRef.current = true;
				onPageSizeChange?.(newPageSize);
			}

			setPage(newPageIndex + 1);
			setPageSize(newPageSize);
		},
		[onPageChange, onPageSizeChange, setPage, setPageSize],
	);

	const onPaginationChange: OnChangeFn<PaginationState> = useCallback(
		(updater) => {
			setPagination(updater);
		},
		[setPagination],
	);

	return {
		pagination,
		setPagination,
		page: page ?? defaultPage,
		pageSize: pageSize ?? defaultPageSize,
		onPaginationChange,
		isPageChanging: isPageChangingRef.current,
		markPageChangeComplete,
	};
}
