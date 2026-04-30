import type { EnumCorrectionRule } from "../../../@types/script";

export function applyEnumCorrections(
	collectionTypes: Record<
		string,
		{ enums: Map<string, Array<{ value: string | number; label: string }>> }
	>,
	enumCorrection: EnumCorrectionRule[] | undefined,
): void {
	if (!enumCorrection) {
		return;
	}

	const byCollection = new Map<string, EnumCorrectionRule[]>();
	for (const rule of enumCorrection) {
		const existing = byCollection.get(rule.collection);
		if (existing) {
			existing.push(rule);
		} else {
			byCollection.set(rule.collection, [rule]);
		}
	}

	for (const [collectionName, collection] of Object.entries(collectionTypes)) {
		const rules = byCollection.get(collectionName);
		if (!rules) {
			continue;
		}

		for (const rule of rules) {
			const enums = collection.enums;
			const options = enums.get(rule.field);

			if (options) {
				for (const option of options) {
					const label = rule.labels[String(option.value)];
					if (label !== undefined) {
						option.label = label;
					}
				}
			} else {
				if (!rule.values || rule.values.length === 0) {
					continue;
				}
				enums.set(
					rule.field,
					rule.values.map((v: string) => ({
						value: v,
						label: rule.labels[v] ?? v,
					})),
				);
			}
		}
	}
}
