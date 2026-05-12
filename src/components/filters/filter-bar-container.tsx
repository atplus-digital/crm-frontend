import type { ReactNode } from "react";
import { useRef } from "react";
import { FilterActions } from "./filter-actions";
import { FilterLayout } from "./filter-layout";
import { flushFilters } from "./flush-filters";

interface FilterBarContainerProps {
	/** Campos de filtro (FilterSelectField, FilterInputField, FilterDateField, etc.) */
	children: ReactNode;
	/** Chamado quando o usuário clica em "Filtrar" */
	onApply: () => void;
	/** Chamado quando o usuário clica em "Limpar" */
	onClear: () => void;
	/** Controla se o botão "Limpar" está habilitado */
	canClear: boolean;
}

/**
 * Container compartilhado para barras de filtro.
 *
 * Encapsula o boilerplate de `useRef` + `flushFilters` + `FilterLayout` + `FilterActions`
 * que estava duplicado em todos os filter bars de CS.
 *
 * @example
 * ```tsx
 * <FilterBarContainer
 *   onApply={() => onFilter(filters)}
 *   onClear={() => onFilter({})}
 *   canClear={Boolean(hasFilters)}
 * >
 *   <FilterSelectField ... />
 *   <FilterInputField ... />
 * </FilterBarContainer>
 * ```
 */
export function FilterBarContainer({
	children,
	onApply,
	onClear,
	canClear,
}: FilterBarContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={containerRef}>
			<FilterLayout
				actions={
					<FilterActions
						onApply={() => {
							flushFilters(containerRef.current);
							onApply();
						}}
						onClear={onClear}
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
