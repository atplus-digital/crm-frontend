import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export interface FilterContextValue<
	TFilters extends Record<string, unknown> = Record<string, unknown>,
> {
	onFilter: (filters: TFilters) => void;
}

const FilterContext = createContext<FilterContextValue<
	Record<string, unknown>
> | null>(null);

interface FilterProviderProps<
	TFilters extends Record<string, unknown> = Record<string, unknown>,
> {
	onFilter: (filters: TFilters) => void;
	children: ReactNode;
}

export function FilterProvider<TFilters extends Record<string, unknown>>({
	onFilter,
	children,
}: FilterProviderProps<TFilters>) {
	return (
		<FilterContext.Provider
			value={{
				onFilter: onFilter as (filters: Record<string, unknown>) => void,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}

export function useFilterContext<
	TFilters extends Record<string, unknown> = Record<string, unknown>,
>() {
	const context = useContext(FilterContext);

	if (!context) {
		throw new Error("useFilterContext must be used within a FilterProvider.");
	}

	return context as FilterContextValue<TFilters>;
}
