import type { SortingState } from "@tanstack/react-table";

export function parseSort(sort: string[]): SortingState {
	const field = sort[0];
	if (!field) return [];
	const isDesc = field.startsWith("-");
	const id = isDesc ? field.slice(1) : field;
	return [{ id, desc: isDesc }];
}

export function serializeSort(sorting: SortingState): string {
	const first = sorting[0];
	if (!first) return "";
	return first.desc ? `-${first.id}` : first.id;
}
