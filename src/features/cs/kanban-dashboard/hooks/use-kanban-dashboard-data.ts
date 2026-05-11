import { useQueries } from "@tanstack/react-query";
import type { KanbanDashboardCard, KanbanDashboardFilters } from "../types";
import {
	normalizeNegociacao,
	normalizeSuspensaoContrato,
	normalizeTrocaEndereco,
	normalizeTrocaTitularidade,
} from "./normalizers";
import {
	negociacoesQueryOptions,
	suspensaoContratoQueryOptions,
	trocaEnderecoQueryOptions,
	trocaTitularidadeQueryOptions,
} from "./query-options";

// ---------------------------------------------------------------------------
// Main hook — parallel fetch + normalization
// ---------------------------------------------------------------------------

const EMPTY_FILTERS: KanbanDashboardFilters = {};

export function useKanbanDashboardData(filters: KanbanDashboardFilters = {}) {
	const activeFilters = filters ?? EMPTY_FILTERS;

	// Always fetch all 4 collections - filtering is done client-side based on sourceCollections
	const [ttResult, teResult, scResult, negResult] = useQueries({
		queries: [
			trocaTitularidadeQueryOptions(activeFilters),
			trocaEnderecoQueryOptions(activeFilters),
			suspensaoContratoQueryOptions(activeFilters),
			negociacoesQueryOptions(activeFilters),
		],
	});

	const isLoading =
		ttResult.isLoading ||
		teResult.isLoading ||
		scResult.isLoading ||
		negResult.isLoading;

	const errors = [
		ttResult.error,
		teResult.error,
		scResult.error,
		negResult.error,
	].filter((e) => e !== null && e !== undefined);
	const error =
		errors.length === 4 ? errors[0] : errors.length > 0 ? errors[0] : null;

	const cards: KanbanDashboardCard[] = [];

	// Determine which collections to include based on sourceCollections filter
	const selectedCollections = activeFilters.sourceCollections;
	const showNegociacoes =
		!selectedCollections ||
		selectedCollections.length === 0 ||
		selectedCollections.includes("neg");

	// Client-side filter: sourceCollections (array filter) based on what's selected
	if (
		activeFilters.sourceCollections &&
		activeFilters.sourceCollections.length > 0
	) {
		const selectedSet = new Set(activeFilters.sourceCollections);

		if (ttResult.data && selectedSet.has("tt")) {
			cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
		}

		if (teResult.data && selectedSet.has("te")) {
			cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
		}

		if (scResult.data && selectedSet.has("sc")) {
			cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
		}

		// Include neg cards only if "neg" is selected
		if (showNegociacoes && negResult.data) {
			cards.push(...negResult.data.data.map(normalizeNegociacao));
		}
	} else {
		// No sourceCollections filter — include all tt, te, sc, and neg cards
		if (ttResult.data) {
			cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
		}

		if (teResult.data) {
			cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
		}

		if (scResult.data) {
			cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
		}

		if (negResult.data) {
			cards.push(...negResult.data.data.map(normalizeNegociacao));
		}
	}

	const sortField = activeFilters.sortField;

	// Apply client-side sorting after combining all collections
	let sortedCards = cards;
	if (
		sortField &&
		(sortField === "responsibleName_asc" ||
			sortField === "responsibleName_desc")
	) {
		sortedCards = sortCardsClientSide(cards, sortField);
	}

	return { cards: sortedCards, isLoading, error };
}

// ---------------------------------------------------------------------------
// Client-side sorting — applies after combining all collections
// Handles responsibleName sorting which requires normalized card data
// ---------------------------------------------------------------------------

function sortCardsClientSide(
	cards: KanbanDashboardCard[],
	sortField: NonNullable<KanbanDashboardFilters["sortField"]>,
): KanbanDashboardCard[] {
	// For createdAt sorting, server-side already handles it
	// For displayName sorting, server-side already handles it per collection
	// Only client-side sort needed is for responsibleName which requires
	// accessing the normalized card's responsibleName field
	if (
		sortField === "responsibleName_asc" ||
		sortField === "responsibleName_desc"
	) {
		return [...cards].sort((a, b) => {
			const aName = a.responsibleName ?? "";
			const bName = b.responsibleName ?? "";
			if (sortField === "responsibleName_asc") {
				return (
					aName.localeCompare(bName) ||
					a.displayName.localeCompare(b.displayName)
				);
			}
			return (
				bName.localeCompare(aName) || b.displayName.localeCompare(a.displayName)
			);
		});
	}

	// For other sort fields, server-side already sorted correctly
	// Just maintain the order as returned from server
	return cards;
}
