import type { SortingState } from "@tanstack/react-table";
import { useCallback, useMemo } from "react";

interface UseListSortingOptions {
	/** Sort array de strings (ex: ["-createdAt"]) */
	sort: string[];
	/** Callback chamado quando o usuário muda a ordenação */
	onSort: (field: string) => void;
}

interface UseListSortingReturn {
	sorting: SortingState;
	onSortingChange: (
		updater: SortingState | ((old: SortingState) => SortingState),
	) => void;
}

/**
 * Hook compartilhado que converte `sort: string[]` + `onSort: (field: string) => void`
 * em `SortingState` + `onSortingChange` para uso com TanStack Table / DataTableContainer.
 *
 * Elimina o boilerplate de sorting duplicado nas list pages de CS.
 */
export function useListSorting({
	sort,
	onSort,
}: UseListSortingOptions): UseListSortingReturn {
	const sorting = useMemo<SortingState>(() => {
		const field = sort[0];
		if (!field) return [];
		const isDesc = field.startsWith("-");
		const id = isDesc ? field.slice(1) : field;
		return [{ id, desc: isDesc }];
	}, [sort]);

	const onSortingChange = useCallback(
		(updater: SortingState | ((old: SortingState) => SortingState)) => {
			const next = typeof updater === "function" ? updater(sorting) : updater;
			const first = next[0];
			if (!first) {
				onSort("");
				return;
			}
			onSort(first.desc ? `-${first.id}` : first.id);
		},
		[sorting, onSort],
	);

	return { sorting, onSortingChange };
}
