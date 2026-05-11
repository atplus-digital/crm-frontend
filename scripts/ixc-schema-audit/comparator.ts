/**
 * Compara CollectionSchema do IXC (ground truth) com NocoBase (gerado)
 *
 * 3 eixos:
 * 1. Scalars - tipo bate, campo ausente de um lado
 * 2. Enums - valor/label ausente, label diferente
 * 3. Relations - target ausente, target diferente
 */

import type {
	CollectionSchema,
	CollectionDiff,
	DiffItem,
	ScalarType,
	EnumOption,
} from "./config";

interface RelationInfo {
	target: string;
	type: string;
}

/**
 * Normaliza nome de campo para comparação (case-insensitive, remove underscore/traço)
 */
function normalizeFieldName(name: string): string {
	return name.toLowerCase().replace(/[-_]/g, "");
}

/**
 * Cria mapa com chaves normalizadas, mantendo valor original
 */
function createNormalizedMap<T>(
	original: Map<string, T>,
): Map<string, { originalName: string; value: T }> {
	const normalized = new Map<string, { originalName: string; value: T }>();

	for (const [key, val] of original) {
		const normKey = normalizeFieldName(key);
		if (!normalized.has(normKey)) {
			normalized.set(normKey, { originalName: key, value: val });
		}
	}

	return normalized;
}

function compareScalars(
	ixc: Map<string, ScalarType>,
	nocobase: Map<string, ScalarType>,
	includeMatches: boolean,
): { diffs: DiffItem<ScalarType>[]; matches: number } {
	const diffs: DiffItem<ScalarType>[] = [];
	let matches = 0;

	const ixcNorm = createNormalizedMap(ixc);
	const nbNorm = createNormalizedMap(nocobase);

	// Check IXC fields
	for (const [normKey, { originalName, value: ixcType }] of ixcNorm) {
		if (!nbNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "ixc_only",
				ixcValue: ixcType,
			});
		} else {
			const nbEntry = nbNorm.get(normKey)!;
			const nbType = nbEntry.value;
			if (ixcType !== nbType) {
				diffs.push({
					fieldName: originalName,
					side: "both_different",
					ixcValue: ixcType,
					nocobaseValue: nbType,
				});
			} else if (includeMatches) {
				diffs.push({
					fieldName: originalName,
					side: "match",
					ixcValue: ixcType,
					nocobaseValue: nbType,
				});
				matches++;
			} else {
				matches++;
			}
		}
	}

	// Check NocoBase-only fields
	for (const [normKey, { originalName, value: nbType }] of nbNorm) {
		if (!ixcNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "nocobase_only",
				nocobaseValue: nbType,
			});
		}
	}

	return { diffs, matches };
}

function enumOptionsEqual(a: EnumOption[], b: EnumOption[]): boolean {
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (a[i].value !== b[i].value || a[i].label !== b[i].label) {
			return false;
		}
	}

	return true;
}

function compareEnums(
	ixc: Map<string, EnumOption[]>,
	nocobase: Map<string, EnumOption[]>,
	includeMatches: boolean,
): { diffs: DiffItem<EnumOption[]>[]; matches: number } {
	const diffs: DiffItem<EnumOption[]>[] = [];
	let matches = 0;

	const ixcNorm = createNormalizedMap(ixc);
	const nbNorm = createNormalizedMap(nocobase);

	for (const [normKey, { originalName, value: ixcOpts }] of ixcNorm) {
		if (!nbNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "ixc_only",
				ixcValue: ixcOpts,
			});
		} else {
			const nbEntry = nbNorm.get(normKey)!;
			const nbOpts = nbEntry.value;
			if (!enumOptionsEqual(ixcOpts, nbOpts)) {
				diffs.push({
					fieldName: originalName,
					side: "both_different",
					ixcValue: ixcOpts,
					nocobaseValue: nbOpts,
				});
			} else if (includeMatches) {
				diffs.push({
					fieldName: originalName,
					side: "match",
					ixcValue: ixcOpts,
					nocobaseValue: nbOpts,
				});
				matches++;
			} else {
				matches++;
			}
		}
	}

	for (const [normKey, { originalName, value: nbOpts }] of nbNorm) {
		if (!ixcNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "nocobase_only",
				nocobaseValue: nbOpts,
			});
		}
	}

	return { diffs, matches };
}

function relationsEqual(a: RelationInfo, b: RelationInfo): boolean {
	// Normalize target names for comparison (case-insensitive)
	return (
		a.target.toLowerCase() === b.target.toLowerCase() && a.type === b.type
	);
}

function compareRelations(
	ixc: Map<string, RelationInfo>,
	nocobase: Map<string, RelationInfo>,
	includeMatches: boolean,
): { diffs: DiffItem<RelationInfo>[]; matches: number } {
	const diffs: DiffItem<RelationInfo>[] = [];
	let matches = 0;

	const ixcNorm = createNormalizedMap(ixc);
	const nbNorm = createNormalizedMap(nocobase);

	for (const [normKey, { originalName, value: ixcRel }] of ixcNorm) {
		if (!nbNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "ixc_only",
				ixcValue: ixcRel,
			});
		} else {
			const nbEntry = nbNorm.get(normKey)!;
			const nbRel = nbEntry.value;
			if (!relationsEqual(ixcRel, nbRel)) {
				diffs.push({
					fieldName: originalName,
					side: "both_different",
					ixcValue: ixcRel,
					nocobaseValue: nbRel,
				});
			} else if (includeMatches) {
				diffs.push({
					fieldName: originalName,
					side: "match",
					ixcValue: ixcRel,
					nocobaseValue: nbRel,
				});
				matches++;
			} else {
				matches++;
			}
		}
	}

	for (const [normKey, { originalName, value: nbRel }] of nbNorm) {
		if (!ixcNorm.has(normKey)) {
			diffs.push({
				fieldName: originalName,
				side: "nocobase_only",
				nocobaseValue: nbRel,
			});
		}
	}

	return { diffs, matches };
}

export function compareCollections(
	ixcSchema: CollectionSchema,
	nocobaseSchema: CollectionSchema,
	includeMatches: boolean = false,
): CollectionDiff {
	const { diffs: scalarDiffs } = compareScalars(
		ixcSchema.scalars,
		nocobaseSchema.scalars,
		includeMatches,
	);
	const { diffs: enumDiffs } = compareEnums(
		ixcSchema.enums,
		nocobaseSchema.enums,
		includeMatches,
	);
	const { diffs: relationDiffs } = compareRelations(
		ixcSchema.relations as unknown as Map<string, RelationInfo>,
		nocobaseSchema.relations as unknown as Map<string, RelationInfo>,
		includeMatches,
	);

	// Count only actual diffs (excluding matches)
	const actualScalarDiffs = scalarDiffs.filter((d) => d.side !== "match");
	const actualEnumDiffs = enumDiffs.filter((d) => d.side !== "match");
	const actualRelationDiffs = relationDiffs.filter((d) => d.side !== "match");

	const diffCount =
		actualScalarDiffs.length + actualEnumDiffs.length + actualRelationDiffs.length;

	const ixcTotalFields =
		ixcSchema.scalars.size + ixcSchema.enums.size + ixcSchema.relations.size;
	const nocobaseTotalFields =
		nocobaseSchema.scalars.size +
		nocobaseSchema.enums.size +
		nocobaseSchema.relations.size;

	return {
		collectionName: ixcSchema.collectionName,
		scalars: includeMatches ? scalarDiffs : actualScalarDiffs,
		enums: includeMatches ? enumDiffs : actualEnumDiffs,
		relations: includeMatches ? relationDiffs : actualRelationDiffs,
		diffCount,
		metadata: {
			ixcTotalFields,
			nocobaseTotalFields,
			ixcRawFieldNames: [
				...ixcSchema.scalars.keys(),
				...ixcSchema.enums.keys(),
				...ixcSchema.relations.keys(),
			],
			nocobaseRawFieldNames: [
				...nocobaseSchema.scalars.keys(),
				...nocobaseSchema.enums.keys(),
				...nocobaseSchema.relations.keys(),
			],
		},
	};
}
