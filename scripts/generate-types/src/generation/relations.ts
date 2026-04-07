import type {
	RelationCardinality,
	RelationInterface,
} from "@scripts/generate-types/src/@types/generation";
import { toCollectionBaseTypeName } from "@scripts/generate-types/src/utils/naming";

const RELATION_INTERFACE_MAP: Record<string, RelationInterface> = {
	m2o: "m2o",
	belongsto: "belongsTo",
	o2m: "o2m",
	hasmany: "hasMany",
	m2m: "m2m",
	manytomany: "manyToMany",
	oho: "oho",
	obo: "obo",
	mbm: "mbm",
	belongstoarray: "belongsToArray",
	attachment: "m2m",
};

/**
 * Mapeamento de field.type para RelationInterface como fallback.
 * Usado quando field.interface é null/None mas field.type indica uma relação.
 */
const RELATION_TYPE_MAP: Record<string, RelationInterface> = {
	belongsTo: "belongsTo",
	belongsToArray: "belongsToArray",
	belongsToMany: "m2m",
	hasMany: "hasMany",
	hasOne: "hasOne",
};

export function resolveRelationInterface(
	value: string | null | undefined,
): RelationInterface | null {
	if (!value) {
		return null;
	}

	const normalized = value.trim().toLowerCase();
	return RELATION_INTERFACE_MAP[normalized] ?? null;
}

/**
 * Resolve o tipo de relação pelo field.type como fallback.
 * Usado quando field.interface é null/None mas field.type indica uma relação.
 */
export function resolveRelationByType(
	fieldType: string | null | undefined,
): RelationInterface | null {
	if (!fieldType) {
		return null;
	}

	return RELATION_TYPE_MAP[fieldType] ?? null;
}

export function getRelationCardinality(
	relationType: RelationInterface,
): RelationCardinality {
	switch (relationType) {
		case "o2m":
		case "hasMany":
		case "m2m":
		case "manyToMany":
		case "mbm":
		case "belongsToArray":
			return "many";
		case "m2o":
		case "belongsTo":
		case "oho":
		case "obo":
		case "hasOne":
			return "one";
	}
}

export function renderRelationValueType(
	targetCollection: string,
	cardinality: RelationCardinality,
): string {
	const targetType = targetCollection.trim()
		? toCollectionBaseTypeName(targetCollection)
		: "unknown";

	return cardinality === "many" ? `${targetType}[]` : `${targetType} | null`;
}
