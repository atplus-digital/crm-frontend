import type { ReactNode } from "react";
import { useRef } from "react";
import { FilterActions } from "./filter-actions";
import type { FilterMap } from "./filter-context";
import { useFilterContext } from "./filter-context";
import { FilterLayout } from "./filter-layout";
import { flushFilters } from "./flush-filters";

interface FilterBarContainerProps<TFilters extends FilterMap = FilterMap> {
	/** Campos de filtro (FilterSelectField, FilterInputField, FilterDateField, etc.) */
	children: ReactNode;
	/** Filtros atuais — usado para determinar se o botão "Limpar" fica ativo */
	filters: TFilters;
	/** Chamado quando o usuário clica em "Filtrar" */
	onApply: () => void;
}

/**
 * Container compartilhado para barras de filtro.
 *
 * Encapsula o boilerplate de `useRef` + `flushFilters` + `FilterLayout` + `FilterActions`
 * que estava duplicado em todos os filter bars de CS.
 *
 * O botão "Limpar" é controlado automaticamente pelo `FilterProvider`:
 * - `cleanToDefault=true`: ativo quando filtros atuais ≠ defaultFilters
 * - `cleanToDefault=false`: ativo quando qualquer filtro tem valor não-vazio
 *
 * @example
 * ```tsx
 * <FilterProvider
 *   onFilter={handleFilter}
 *   cleanToDefault
 *   defaultFilters={DEFAULT_FILTERS}
 * >
 *   <FilterBarContainer
 *     filters={filters}
 *     onApply={() => onFilter(filters)}
 *   >
 *     <FilterSelectField ... />
 *     <FilterInputField ... />
 *   </FilterBarContainer>
 * </FilterProvider>
 * ```
 */
export function FilterBarContainer<TFilters extends FilterMap = FilterMap>({
	children,
	filters,
	onApply,
}: FilterBarContainerProps<TFilters>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { hasActiveFilters, getCleanFilters, onFilter } =
		useFilterContext<TFilters>();

	const canClear = hasActiveFilters(filters);

	return (
		<div ref={containerRef}>
			<FilterLayout
				actions={
					<FilterActions
						onApply={() => {
							flushFilters(containerRef.current);
							onApply();
						}}
						onClear={() => onFilter(getCleanFilters())}
						canClear={canClear}
						clearVariant="ghost"
					/>
				}
			>
				{children}
			</FilterLayout>
		</div>
	);
}
