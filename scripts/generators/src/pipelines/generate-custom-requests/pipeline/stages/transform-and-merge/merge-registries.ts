import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { ManualRegistryEntry } from "../../../@types/script-config";

export function mergeRegistries(
	generated: GeneratedRegistryEntry[],
	manual: Array<GeneratedRegistryEntry | ManualRegistryEntry>,
): GeneratedRegistryEntry[] {
	const normalizedManual: GeneratedRegistryEntry[] = manual.map((entry) => ({
		...entry,
		dataSourceKey: entry.dataSourceKey ?? "main",
		payloadData: entry.payloadData ?? null,
	}));

	const manualKeys = new Set(normalizedManual.map((e) => e.key));
	const filteredGenerated = generated.filter((e) => !manualKeys.has(e.key));
	const merged = [...filteredGenerated, ...normalizedManual];
	merged.sort((a, b) => a.key.localeCompare(b.key));

	return merged;
}
