import type {
	CollectionTypesMap,
	EnumOption,
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
import { removeAccents } from "./enum-inference";
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
 * Converte valor de enum em nome válido para TypeScript enum member.
 * Regras: deve começar com letra/underline, conter apenas letras, números e underline.
 */
function toEnumMemberName(value: string | number): string {
	const raw = value.toString();
	const withoutAccents = removeAccents(raw);
	const sanitized = withoutAccents
		.replace(/[^a-zA-Z0-9]/g, "_")
		.replace(/_+/g, "_")
		.replace(/^_|_$/g, "");

	const parts = sanitized.split("_").filter((part) => part.length > 0);

	if (parts.length === 0) {
		return "Unknown";
	}

	const pascal = parts
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("");

	if (/^\d/.test(pascal) || pascal.length === 0) {
		return `Value${pascal || "Unknown"}`;
	}

	return pascal;
}

/**
 * Gera type alias para um campo enum usando keyof typeof.
 * Padrão moderno: type inferido do objeto constante de labels.
 * Ex: export type PessoasStatus = keyof typeof STATUS_LABELS;
 */
export function generateEnumDefinition(
	collectionName: string,
	fieldName: string,
	_enumOptions: EnumOption[],
): string {
	const fieldNameWithoutPrefix = fieldName.replace(/^[tf]_/, "");
	const enumName = `${toCollectionTypeName(collectionName)}${toEnumMemberName(fieldNameWithoutPrefix)}`;
	const mapName = `${toCollectionTypeName(collectionName).toUpperCase()}_${toEnumMemberName(fieldNameWithoutPrefix).toUpperCase()}_LABELS`;

	return `export type ${enumName} = keyof typeof ${mapName};`;
}

/**
 * Verifica se uma string pode ser usada como key de objeto sem quotes.
 * Para keys de objeto TypeScript, strings numéricas puras são válidas.
 * Regras: letras/números/underscore, OU apenas números (sem leading zeros).
 */
function isValidObjectKey(str: string): boolean {
	// Strings numéricas puras SEM leading zeros são válidas
	if (/^[1-9]\d*$|^0$/.test(str)) {
		return true;
	}
	// Identifiers TypeScript tradicionais
	return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str);
}

/**
 * Gera o objeto constante de labels com as const.
 * Padrão moderno: objeto constante como single source of truth.
 * Preserva valores originais da API como keys quando são identifiers válidos.
 * Ex: export const STATUS_LABELS = { ativo: "Ativo", inativo: "Inativo" } as const;
 */
export function generateEnumLabelMap(
	collectionName: string,
	fieldName: string,
	enumOptions: EnumOption[],
): string {
	const seenValues = new Set<string | number>();
	const seenMemberNames = new Set<string>();
	const dedupedOptions = enumOptions
		.filter((opt) => {
			if (seenValues.has(opt.value)) {
				return false;
			}
			seenValues.add(opt.value);
			return true;
		})
		.filter((opt) => {
			// Check if value can be used as-is or needs transformation
			const valueStr = String(opt.value);
			const needsTransformation = !isValidObjectKey(valueStr);
			const memberName = needsTransformation
				? toEnumMemberName(opt.value)
				: valueStr;

			if (seenMemberNames.has(memberName)) {
				return false;
			}
			seenMemberNames.add(memberName);
			return true;
		});

	const fieldNameWithoutPrefix = fieldName.replace(/^[tf]_/, "");

	const entries = dedupedOptions
		.map((opt) => {
			const valueStr = String(opt.value);
			const needsTransformation = !isValidObjectKey(valueStr);
			const memberName = needsTransformation
				? toEnumMemberName(opt.value)
				: valueStr;
			const label = JSON.stringify(opt.label);

			// Always quote keys to ensure they are treated as string literals, not numbers
			// This prevents TypeScript from inferring 'number' type for numeric keys
			const keyName = `"${memberName}"`;

			return `\t${keyName}: ${label}`;
		})
		.join(",\n");

	const mapName = `${toCollectionTypeName(collectionName).toUpperCase()}_${toEnumMemberName(fieldNameWithoutPrefix).toUpperCase()}_LABELS`;

	return `export const ${mapName} = {\n${entries}\n} as const;`;
}

/**
 * Gera todos os enums de uma collection.
 */
export function generateCollectionEnums(
	collectionName: string,
	types: GeneratedTypes,
): string {
	if (types.enums.size === 0) {
		return "";
	}

	const lines: string[] = [];
	const sortedEnums = Array.from(types.enums.entries()).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [fieldName, enumOptions] of sortedEnums) {
		lines.push(generateEnumDefinition(collectionName, fieldName, enumOptions));
	}

	return lines.join("\n\n");
}

/**
 * Gera todos os mapas de labels de enums de uma collection.
 */
export function generateCollectionEnumMaps(
	collectionName: string,
	types: GeneratedTypes,
): string {
	if (types.enums.size === 0) {
		return "";
	}

	const lines: string[] = [];
	const sortedEnums = Array.from(types.enums.entries()).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [fieldName, enumOptions] of sortedEnums) {
		lines.push(generateEnumLabelMap(collectionName, fieldName, enumOptions));
	}

	return lines.join("\n\n");
}

/**
 * Gera o tipo para um campo escalar, usando enum se disponível.
 */
function getScalarFieldType(
	fieldName: string,
	fieldType: string,
	types: GeneratedTypes,
	collectionName: string,
): string {
	if (types.enums.has(fieldName)) {
		const fieldNameWithoutPrefix = fieldName.replace(/^[tf]_/, "");
		const enumName = `${toCollectionTypeName(collectionName)}${toEnumMemberName(fieldNameWithoutPrefix)}`;
		return enumName;
	}

	return fieldType;
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
		const actualType = getScalarFieldType(
			fieldName,
			fieldType,
			types,
			collectionName,
		);
		lines.push(`\t${formatKey(fieldName)}: ${actualType};`);
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
 * Ordem: Constantes de labels → Type aliases → Interfaces → Types auxiliares
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

	// 1. Enum maps (labels) PRIMEIRO - constantes que servem como base para os types
	if (types.enums.size > 0) {
		lines.push(generateCollectionEnumMaps(collectionName, types));
		lines.push("");
	}

	// 2. Type aliases (inferidos de keyof typeof LABELS)
	if (types.enums.size > 0) {
		lines.push(generateCollectionEnums(collectionName, types));
		lines.push("");
	}

	// 3. Interface Base
	lines.push(
		generateCollectionBaseInterface(collectionName, types, baseInterfaceNaming),
	);
	lines.push("");

	// 4. Relations
	lines.push(
		generateCollectionRelationsInterface(
			collectionName,
			types,
			baseInterfaceNaming,
		),
	);
	lines.push("");

	// 5. RelationKey type
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
