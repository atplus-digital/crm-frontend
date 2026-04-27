import type { GeneratedRegistryEntry } from "@scripts/generate-custom-requests/src/@types/generated-registry";

/**
 * Mescla entradas manuais e geradas. Entradas manuais com mesma key
 * sobrescrevem as geradas. Entradas únicas de ambos os lados são mantidas.
 *
 * @param generated - entradas geradas automaticamente pela API
 * @param manual - entradas definidas manualmente pelo desenvolvedor
 * @returns array combinado, ordenado por key
 */
export function mergeRegistries(
	generated: GeneratedRegistryEntry[],
	manual: GeneratedRegistryEntry[],
): GeneratedRegistryEntry[] {
	const manualKeys = new Set(manual.map((e) => e.key));

	// Mantém geradas que não têm override manual
	const filteredGenerated = generated.filter((e) => !manualKeys.has(e.key));

	// Combina e ordena por key
	const merged = [...filteredGenerated, ...manual];
	merged.sort((a, b) => a.key.localeCompare(b.key));

	return merged;
}
