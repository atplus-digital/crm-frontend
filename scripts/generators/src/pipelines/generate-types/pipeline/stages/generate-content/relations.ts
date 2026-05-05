import type {
	RelationCardinality,
	RelationInterface,
} from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { toCollectionBaseTypeName } from "@scripts/generators/src/pipelines/generate-types/utils/naming";

const RELATION_INTERFACE_MAP: Record<string, RelationInterface> = {
	m2o: "m2o",
	belongsto: "belongsTo",
	createdby: "belongsTo",
	o2m: "o2m",
	hasmany: "hasMany",
	m2m: "m2m",
	manytomany: "manyToMany",
	oho: "oho",
	obo: "obo",
	mbm: "mbm",
	belongstoarray: "belongsToArray",
	attachment: "m2m",
	updatedby: "belongsTo",
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
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const targetType = targetCollection.trim()
		? toCollectionBaseTypeName(targetCollection, baseInterfaceNaming)
		: "unknown";

	return cardinality === "many" ? `${targetType}[]` : `${targetType} | null`;
}

function _toBaseSchemaName(collectionName: string): string {
	const cleanCollectionName = collectionName.replace(/^t_/, "").toLowerCase();
	if (!cleanCollectionName || cleanCollectionName === "t") {
		return _ensureValidIdentifier(`${collectionName.toLowerCase()}BaseSchema`);
	}
	return _ensureValidIdentifier(`${cleanCollectionName}BaseSchema`);
}

function _ensureValidIdentifier(name: string): string {
	if (/^[0-9]/.test(name)) {
		return `_${name}`;
	}
	return name;
}

/**
 * Gera o tipo Zod para um campo de relação.
 * Usa referências a schemas base quando a collection destino está disponível,
 * ou fallbacks para tipos primitivos quando não está.
 *
 * @param targetCollection - Nome da collection de destino
 * @param cardinality - Cardinalidade da relação ("one" ou "many")
 * @param availableCollections - Set com nomes das collections disponíveis no datasource
 * @param sourceCollection - Nome da collection de origem (arquivo atual)
 * @returns String com o tipo Zod (ex: "z.lazy(() => usersBaseSchema.nullable())", "z.number().array()")
 */
export function renderRelationZodType(
	targetCollection: string,
	cardinality: RelationCardinality,
	availableCollections: ReadonlySet<string>,
): string {
	const targetCollectionTrimmed = targetCollection.trim();
	const isAvailable =
		targetCollectionTrimmed !== "" &&
		availableCollections.has(targetCollectionTrimmed);

	if (isAvailable) {
		const targetBaseSchemaName = _toBaseSchemaName(targetCollectionTrimmed);
		const relationType =
			cardinality === "one"
				? `${targetBaseSchemaName}.nullable()`
				: `${targetBaseSchemaName}.array()`;

		// Sempre usa lazy + BaseSchema para evitar ciclos (self e cross-collection).
		return `z.lazy(() => ${relationType})`;
	}

	// Fallback para collections não disponíveis no datasource
	if (cardinality === "one") {
		return "z.number().nullable()";
	}
	return "z.number().array()";
}
