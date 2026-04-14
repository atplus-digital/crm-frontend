import type {
	CollectionTypesMap,
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generate-types/src/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generate-types/src/@types/script";
import {
	formatKey,
	toCollectionBaseTypeName,
	toCollectionTypeName,
	toValidIdentifier,
} from "@scripts/generate-types/src/utils/naming";
import { getRelationCardinality, renderRelationValueType } from "./relations";

function _sortMapEntries<T>(map: Map<string, T>): [string, T][] {
	return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
}

/**
 * Padrões para categorização de campos na ordenação customizada.
 */
const SORT_PATTERNS = {
	/** Chaves primárias e de identificação (id, sort, uid, etc.) */
	ID: /^(id|sort|uid)$/i,
	/** Chaves estrangeiras de relação (f_fk_*) */
	FK: /^f_fk_/i,
	/** Identificadores técnicos (f_id_*_ixc) */
	TECH_ID: /^f_id_.*_ixc$/i,
	/** Campos de auditoria - atualização (updatedBy, updatedAt) */
	AUDIT_UPDATE: /^updated(byid|at)$/i,
	/** Campos de auditoria - criação (createdBy, createdAt) */
	AUDIT_CREATE: /^created(byid|at)$/i,
} as const;

type FieldCategory =
	| "id"
	| "fk"
	| "tech_id"
	| "audit_update"
	| "audit_create"
	| "other";

/**
 * Categoriza um campo para fins de ordenação.
 *
 * Ordem de prioridade:
 * 1. id (campos primários)
 * 2. fk (chaves estrangeiras f_fk_*)
 * 3. tech_id (identificadores técnicos f_id_*_ixc)
 * 4. other (demais propriedades)
 * 5. audit_update (updatedById, updatedAt)
 * 6. audit_create (createdById, createdAt)
 */
function _categorizeField(fieldName: string): FieldCategory {
	const name = fieldName;
	if (SORT_PATTERNS.ID.test(name)) return "id";
	if (SORT_PATTERNS.FK.test(name)) return "fk";
	if (SORT_PATTERNS.TECH_ID.test(name)) return "tech_id";
	if (SORT_PATTERNS.AUDIT_UPDATE.test(name)) return "audit_update";
	if (SORT_PATTERNS.AUDIT_CREATE.test(name)) return "audit_create";
	return "other";
}

/** Ordem de prioridade para cada categoria (menor = aparece primeiro) */
const CATEGORY_ORDER: Record<FieldCategory, number> = {
	id: 0,
	fk: 1,
	tech_id: 2,
	other: 3,
	audit_update: 4,
	audit_create: 5,
};

/**
 * Ordena entries do Map de scalars com ordem customizada:
 * id → f_fk_* → f_id_*_ixc → demais → updatedBy/At → createdBy/At
 * Dentro de cada categoria, mantém ordem alfabética.
 */
function _sortScalarEntries<T>(map: Map<string, T>): [string, T][] {
	return Array.from(map.entries()).sort(([a], [b]) => {
		const catA = _categorizeField(a);
		const catB = _categorizeField(b);
		const orderDiff = CATEGORY_ORDER[catA] - CATEGORY_ORDER[catB];
		if (orderDiff !== 0) return orderDiff;
		return a.localeCompare(b);
	});
}

function _renderRelationFieldType(
	relation: RelationInfo,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return renderRelationValueType(
		relation.targetCollection,
		getRelationCardinality(relation.type),
		baseInterfaceNaming,
	);
}

function _toCollectionSourceConstName(collectionName: string): string {
	const normalized = collectionName
		.trim()
		.toUpperCase()
		.replace(/[^A-Z0-9_$]+/g, "_")
		.replace(/^_+|_+$/g, "");
	const identifier = toValidIdentifier(normalized || "UNKNOWN");
	return `${identifier}_TABLE_NAME`;
}

/**
 * Gera o header do arquivo TypeScript gerado.
 */
export function generateFileHeader(): string {
	return `/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
`;
}

/**
 * Gera a interface Base de uma collection (apenas campos escalares/FKs).
 */
export function generateCollectionBaseInterface(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const lines: string[] = [];
	const scalarEntries = _sortScalarEntries(types.scalars);
	const typeName = toCollectionBaseTypeName(
		collectionName,
		baseInterfaceNaming,
	);

	lines.push(`export interface ${typeName} {`);
	for (const [fieldName, fieldType] of scalarEntries) {
		lines.push(`\t${formatKey(fieldName)}: ${fieldType};`);
	}
	lines.push("}");

	return lines.join("\n");
}

/**
 * Gera a interface Relations de uma collection.
 */
export function generateCollectionRelationsInterface(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const lines: string[] = [];
	const relationEntries = _sortMapEntries(types.relations);
	const typeName = toCollectionTypeName(collectionName);

	if (relationEntries.length === 0) {
		lines.push(`export type ${typeName}Relations = Record<string, never>;`);
	} else {
		lines.push(`export interface ${typeName}Relations {`);
		for (const [fieldName, relation] of relationEntries) {
			lines.push(
				`\t${formatKey(fieldName)}?: ${_renderRelationFieldType(relation, baseInterfaceNaming)};`,
			);
		}
		lines.push("}");
	}

	return lines.join("\n");
}

/**
 * Gera o tipo RelationKey de uma collection.
 */
export function generateCollectionRelationKeyType(
	collectionName: string,
): string {
	const typeName = toCollectionTypeName(collectionName);
	const relationKeyLine = `export type ${typeName}RelationKey = keyof ${typeName}Relations;`;

	if (relationKeyLine.length <= 80) {
		return relationKeyLine;
	}

	const lines: string[] = [];
	lines.push(`export type ${typeName}RelationKey =`);
	lines.push(`\tkeyof ${typeName}Relations;`);
	return lines.join("\n");
}

/**
 * Gera a definição completa de tipos para uma collection.
 * Inclui: Base interface + Relations interface + RelationKey type
 */
export function generateCollectionTypes(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
): string {
	const lines: string[] = [];

	if (includeSourceTableConst) {
		lines.push(
			`export const ${_toCollectionSourceConstName(collectionName)} = "${collectionName}";`,
		);
		lines.push("");
	}

	lines.push(
		generateCollectionBaseInterface(collectionName, types, baseInterfaceNaming),
	);
	lines.push("");
	lines.push(
		generateCollectionRelationsInterface(
			collectionName,
			types,
			baseInterfaceNaming,
		),
	);
	lines.push("");
	lines.push(generateCollectionRelationKeyType(collectionName));

	return lines.join("\n");
}

/**
 * Gera conteúdo TypeScript para um subset de collections.
 * Permite gerar múltiplos arquivos com diferentes collections.
 */
export function generateContentForCollections(
	collections: CollectionTypesMap,
	includeHeader = true,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
): string {
	const lines: string[] = [];

	if (includeHeader) {
		lines.push(generateFileHeader());
	}

	const sortedCollections = Object.entries(collections).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [collectionName, types] of sortedCollections) {
		lines.push(
			generateCollectionTypes(
				collectionName,
				types,
				baseInterfaceNaming,
				includeSourceTableConst,
			),
		);
		lines.push("");
	}

	return lines.join("\n");
}

/**
 * Gera múltiplos arquivos TypeScript, um por collection.
 * Retorna Map<collectionName, content>
 */
export function generateSplitFiles(
	splitCollections: Map<string, CollectionTypesMap>,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [fileName, collections] of splitCollections) {
		const content = generateContentForCollections(
			collections,
			true,
			baseInterfaceNaming,
			true,
		);
		result.set(fileName, content);
	}

	return result;
}

/**
 * @deprecated Use generateContentForCollections instead
 */
export function generateTypeDefinitions(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return generateContentForCollections(
		collectionTypes,
		false,
		baseInterfaceNaming,
	);
}

/**
 * Gera conteúdo TypeScript completo com header.
 */
export function generateContent(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return generateContentForCollections(
		collectionTypes,
		true,
		baseInterfaceNaming,
	);
}
