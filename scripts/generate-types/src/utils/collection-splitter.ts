import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";

export interface SplitResult {
	mainCollections: CollectionTypesMap; // Collections que vão no arquivo principal
	splitCollections: Map<string, CollectionTypesMap>; // Map<collectionName, types>
}

/**
 * Divide as collections em dois grupos:
 * - mainCollections: collections que não estão em splitConfig
 * - splitCollections: Map onde cada chave é uma collection do splitConfig
 *
 * @param allCollections - Todas as collections geradas
 * @param splitConfig - Array com nomes das collections que devem ser separadas
 * @returns SplitResult com as collections divididas
 */
export function splitCollectionsByConfig(
	allCollections: CollectionTypesMap,
	splitConfig: string[],
): SplitResult {
	const mainCollections: CollectionTypesMap = {};
	const splitCollections = new Map<string, CollectionTypesMap>();

	// Se splitConfig estiver vazio, todas vão para main
	if (splitConfig.length === 0) {
		return {
			mainCollections: allCollections,
			splitCollections,
		};
	}

	// Criar Set para lookup rápido
	const splitSet = new Set(splitConfig);

	// Iterar sobre todas as collections
	for (const [collectionName, types] of Object.entries(allCollections)) {
		if (splitSet.has(collectionName)) {
			// Collection está no splitConfig - adiciona ao Map
			splitCollections.set(collectionName, {
				[collectionName]: types,
			});
		} else {
			// Collection não está no splitConfig - adiciona ao main
			mainCollections[collectionName] = types;
		}
	}

	return {
		mainCollections,
		splitCollections,
	};
}
