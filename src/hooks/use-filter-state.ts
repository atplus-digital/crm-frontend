import { useCallback, useMemo, useState } from "react";

/**
 * Hook genérico para gerenciar estado de filtros de forma padronizada.
 *
 * @example
 * ```tsx
 * interface NegociacaoFilters {
 *   status?: NegociacaoStatus;
 *   substatus?: string;
 *   titulo?: string;
 *   cpfCnpj?: string;
 *   criadoEmInicio?: string;
 *   criadoEmFim?: string;
 * }
 *
 * function NegociacoesLista() {
 *   const { filters, setFilter, setFilters, clearFilters, hasFilters } = useFilterState<NegociacaoFilters>(
 *     {},
 *     (appliedFilters) => {
 *       // Callback chamado quando aplica filtro (ex: recarregar dados)
 *       console.log("Filtros aplicados:", appliedFilters);
 *     }
 *   );
 *
 *   return (
 *     <div>
 *       <Input
 *         value={filters.titulo || ""}
 *         onChange={(e) => setFilter("titulo", e.target.value)}
 *       />
 *       <Button onClick={clearFilters} disabled={!hasFilters}>
 *         Limpar filtros
 *       </Button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useFilterState<T extends Record<string, unknown>>(
	initialState: T = {} as T,
	onFilter?: (filters: T) => void,
) {
	const [filters, setFiltersState] = useState<T>(initialState);

	/**
	 * Atualiza um único campo do filtro
	 */
	const setFilter = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
		setFiltersState((prev) => ({ ...prev, [key]: value }));
	}, []);

	/**
	 * Atualiza múltiplos campos do filtro de uma vez
	 */
	const setFilters = useCallback((newFilters: Partial<T>) => {
		setFiltersState((prev) => ({ ...prev, ...newFilters }));
	}, []);

	/**
	 * Limpa todos os filtros e reseta para o estado inicial
	 */
	const clearFilters = useCallback(() => {
		setFiltersState(initialState);
		onFilter?.(initialState);
	}, [initialState, onFilter]);

	/**
	 * Aplica os filtros atuais (chama o callback onFilter)
	 */
	const applyFilters = useCallback(() => {
		onFilter?.(filters);
	}, [filters, onFilter]);

	/**
	 * Verifica se há filtros ativos (diferente do estado inicial)
	 */
	const hasFilters = useMemo(() => {
		return Object.values(filters).some((value) => {
			if (value === undefined || value === null) return false;
			if (typeof value === "string") return value.trim() !== "";
			if (Array.isArray(value)) return value.length > 0;
			return true;
		});
	}, [filters]);

	/**
	 * Alias para hasFilters (compatibilidade com FilterActions)
	 */
	const canClear = hasFilters;

	return {
		filters,
		setFilter,
		setFilters,
		clearFilters,
		applyFilters,
		hasFilters,
		canClear,
	};
}
