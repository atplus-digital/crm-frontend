import type {
	RelationCardinality,
	RelationInterface,
} from "../@types/generation";
import { toCollectionBaseTypeName } from "../utils/naming";

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
