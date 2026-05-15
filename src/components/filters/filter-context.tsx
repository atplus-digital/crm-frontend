import type { ReactNode } from "react";
import { createContext, useContext } from "react";

/**
 * Base type for filter objects.
 * Uses `object` instead of `Record<string, unknown>` to accept
 * interfaces without index signatures (e.g., `TrocaTitularidadeFilters`).
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type FilterMap = object;

interface FilterContextValue<TFilters extends FilterMap = FilterMap> {
	onFilter: (filters: TFilters) => void;
	/** When true, "Limpar" resets to defaultFilters; when false, clears all. */
	cleanToDefault: boolean;
	/** Default filter values — used for comparison and reset when cleanToDefault=true. */
	defaultFilters: TFilters;
	/** Returns true when current filters differ from the baseline (defaults or empty). */
	hasActiveFilters: (currentFilters: TFilters) => boolean;
	/** Returns the reset target: defaultFilters when cleanToDefault=true, empty otherwise. */
	getCleanFilters: () => TFilters;
}

const FilterContext = createContext<FilterContextValue<FilterMap> | null>(null);

interface FilterProviderProps<TFilters extends FilterMap = FilterMap> {
	onFilter: (filters: TFilters) => void;
	/** When true, "Limpar" resets to defaultFilters; when false (default), clears all. */
	cleanToDefault?: boolean;
	/** Required when cleanToDefault=true. Used for comparison and as the reset target. */
	defaultFilters?: TFilters;
	children: ReactNode;
}

/**
 * Checks whether two filter values are equal.
 * Handles JSON-stringified arrays (e.g., `"[\"A\"]"`) by parsing and deep-comparing.
 */
function filterValuesEqual(a: unknown, b: unknown): boolean {
	if (a === b) return true;

	if (typeof a === "string" && typeof b === "string") {
		try {
			const parsedA = JSON.parse(a);
			const parsedB = JSON.parse(b);
			if (Array.isArray(parsedA) && Array.isArray(parsedB)) {
				if (parsedA.length !== parsedB.length) return false;
				const sortedA = [...parsedA].sort();
				const sortedB = [...parsedB].sort();
				return sortedA.every((val, i) => val === sortedB[i]);
			}
		} catch {
			// Not JSON — fall through to false
		}
	}

	return false;
}

export function FilterProvider<TFilters extends FilterMap = FilterMap>({
	onFilter,
	cleanToDefault = false,
	defaultFilters,
	children,
}: FilterProviderProps<TFilters>) {
	const resolvedDefaults = (defaultFilters ?? {}) as Record<string, unknown>;

	const hasActiveFilters = (currentFilters: TFilters): boolean => {
		const current = currentFilters as Record<string, unknown>;
		if (cleanToDefault) {
			// Active when any field differs from its default
			return Object.keys(resolvedDefaults).some(
				(key) => !filterValuesEqual(current[key], resolvedDefaults[key]),
			);
		}
		// Active when any field is truthy (non-empty string, non-empty array, etc.)
		return Object.values(current).some((value) => {
			if (value == null || value === "") return false;
			if (Array.isArray(value)) return value.length > 0;
			if (typeof value === "string") {
				try {
					const parsed = JSON.parse(value);
					if (Array.isArray(parsed)) return parsed.length > 0;
				} catch {
					// Not JSON — treat as plain string
				}
			}
			return Boolean(value);
		});
	};

	const getCleanFilters = (): TFilters => {
		if (cleanToDefault) {
			return defaultFilters as TFilters;
		}
		// When cleanToDefault=false, clear all filters to empty
		return {} as TFilters;
	};

	return (
		<FilterContext.Provider
			value={{
				onFilter: onFilter as (filters: FilterMap) => void,
				cleanToDefault,
				defaultFilters: (defaultFilters ?? {}) as FilterMap,
				hasActiveFilters: hasActiveFilters as (current: FilterMap) => boolean,
				getCleanFilters: getCleanFilters as () => FilterMap,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}

export function useFilterContext<TFilters extends FilterMap = FilterMap>() {
	const context = useContext(FilterContext);

	if (!context) {
		throw new Error("useFilterContext must be used within a FilterProvider.");
	}

	return context as unknown as FilterContextValue<TFilters>;
}
