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

function compareScalars(
	ixc: Map<string, ScalarType>,
	nocobase: Map<string, ScalarType>,
): DiffItem<ScalarType>[] {
	const diffs: DiffItem<ScalarType>[] = [];

	for (const [fieldName, ixcType] of ixc) {
		if (!nocobase.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "ixc_only",
				ixcValue: ixcType,
			});
		} else {
			const nbType = nocobase.get(fieldName)!;
			if (ixcType !== nbType) {
				diffs.push({
					fieldName,
					side: "both_different",
					ixcValue: ixcType,
					nocobaseValue: nbType,
				});
			}
		}
	}

	for (const [fieldName, nbType] of nocobase) {
		if (!ixc.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "nocobase_only",
				nocobaseValue: nbType,
			});
		}
	}

	return diffs;
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
): DiffItem<EnumOption[]>[] {
	const diffs: DiffItem<EnumOption[]>[] = [];

	for (const [fieldName, ixcOpts] of ixc) {
		if (!nocobase.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "ixc_only",
				ixcValue: ixcOpts,
			});
		} else {
			const nbOpts = nocobase.get(fieldName)!;
			if (!enumOptionsEqual(ixcOpts, nbOpts)) {
				diffs.push({
					fieldName,
					side: "both_different",
					ixcValue: ixcOpts,
					nocobaseValue: nbOpts,
				});
			}
		}
	}

	for (const [fieldName, nbOpts] of nocobase) {
		if (!ixc.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "nocobase_only",
				nocobaseValue: nbOpts,
			});
		}
	}

	return diffs;
}

function relationsEqual(a: RelationInfo, b: RelationInfo): boolean {
	return a.target === b.target && a.type === b.type;
}

function compareRelations(
	ixc: Map<string, RelationInfo>,
	nocobase: Map<string, RelationInfo>,
): DiffItem<RelationInfo>[] {
	const diffs: DiffItem<RelationInfo>[] = [];

	for (const [fieldName, ixcRel] of ixc) {
		if (!nocobase.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "ixc_only",
				ixcValue: ixcRel,
			});
		} else {
			const nbRel = nocobase.get(fieldName)!;
			if (!relationsEqual(ixcRel, nbRel)) {
				diffs.push({
					fieldName,
					side: "both_different",
					ixcValue: ixcRel,
					nocobaseValue: nbRel,
				});
			}
		}
	}

	for (const [fieldName, nbRel] of nocobase) {
		if (!ixc.has(fieldName)) {
			diffs.push({
				fieldName,
				side: "nocobase_only",
				nocobaseValue: nbRel,
			});
		}
	}

	return diffs;
}

export function compareCollections(
	ixcSchema: CollectionSchema,
	nocobaseSchema: CollectionSchema,
): CollectionDiff {
	const scalarDiffs = compareScalars(ixcSchema.scalars, nocobaseSchema.scalars);
	const enumDiffs = compareEnums(ixcSchema.enums, nocobaseSchema.enums);
	const relationDiffs = compareRelations(
		ixcSchema.relations as unknown as Map<string, RelationInfo>,
		nocobaseSchema.relations as unknown as Map<string, RelationInfo>,
	);

	const diffCount = scalarDiffs.length + enumDiffs.length + relationDiffs.length;

	return {
		collectionName: ixcSchema.collectionName,
		scalars: scalarDiffs,
		enums: enumDiffs,
		relations: relationDiffs,
		diffCount,
	};
}
