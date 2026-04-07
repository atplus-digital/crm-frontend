import type { RelationInfo } from "@scripts/generate-types/src/@types/generation";
import type { NocoBaseField } from "@scripts/generate-types/src/@types/nocobase";
import { toCollectionBaseTypeName } from "@scripts/generate-types/src/utils/naming";
import {
	renderRelationValueType,
	resolveRelationByType,
	resolveRelationInterface,
} from "./relations";

/**
 * Campos de sistema do NocoBase com mapeamento fixo.
 * Baseado em análise de 110 collections (2026-04-07).
 */
const SYSTEM_FIELDS: Record<string, (field: NocoBaseField) => string> = {
	// Auditoria - 88 collections (100% consistente -> users)
	// Relações belongsTo que sempre apontam para collection "users"
	createdBy: () => `${toCollectionBaseTypeName("users")} | null`,
	updatedBy: () => `${toCollectionBaseTypeName("users")} | null`,

	// Foreign keys de auditoria - 2 collections
	// Campos numéricos que referenciam users.id
	createdById: () => "number | null",
	updatedById: () => "number | null",

	// Hierarquia - self-reference (parent/children)
	// Usado em collections como t_telecom_recursos, t_telecom_interfaces, departments, etc
	parent: (field) => renderRelationValueType(field.target ?? "", "one"),
	children: (field) => renderRelationValueType(field.target ?? "", "many"),

	// Metadata - armazenamento genérico
	storage: () => "Record<string, unknown>",
};

/**
 * Mapeamento de field types do NocoBase para tipos TypeScript.
 * Organizado alfabeticamente para melhor manutenibilidade.
 */
const FIELD_TYPE_MAP: Record<string, string> = {
	// Array types
	array: "string[]",

	// Boolean
	boolean: "boolean",

	// Date/Time types (representados como string no JSON)
	date: "string",
	dateOnly: "string",
	datetime: "string",
	month: "string",
	time: "string",
	year: "string",

	// Numeric types
	bigInt: "number",
	decimal: "number",
	double: "number",
	float: "number",
	integer: "number",
	sort: "number",
	timestamp: "number",

	// Object/JSON types
	json: "Record<string, unknown>",
	jsonb: "Record<string, unknown>",
	object: "Record<string, unknown>",

	// Set type (NocoBase internal - stores arrays/sets as JSON)
	set: "unknown[]",

	// String types
	email: "string",
	formula: "string",
	ipv4: "string",
	ipv6: "string",
	lineString: "string",
	movedTo: "string",
	nanoid: "string",
	password: "string",
	phone: "string",
	point: "string",
	sequence: "string",
	snowflakeId: "string",
	string: "string",
	text: "string",
	uid: "string",
	url: "string",
};

/**
 * Extrai informações de relação de um campo.
 * Retorna null para campos de sistema ou campos que não são relações.
 *
 * @param field Campo do NocoBase
 * @returns Informações da relação ou null
 */
export function extractRelationInfo(field: NocoBaseField): RelationInfo | null {
	// Campos de sistema não são relações customizadas
	if (field.name in SYSTEM_FIELDS) {
		return null;
	}

	// Resolve o tipo de relação baseado na interface (m2o, o2m, m2m, etc)
	let relationType = resolveRelationInterface(field.interface);

	// Fallback: resolver pelo field.type quando interface é null/None
	// Ex: roles.menuUiSchemas (type=belongsToMany, interface=None)
	// Ex: t_solicitacao_compras.f_anexos (type=belongsToMany, interface=attachment)
	if (!relationType) {
		relationType = resolveRelationByType(field.type);
	}

	if (!relationType) {
		return null;
	}

	return {
		type: relationType,
		targetCollection: field.target ?? "",
	};
}

/**
 * Mapeia um campo do NocoBase para tipo TypeScript.
 * Prioridade: SYSTEM_FIELDS > interfaces especiais > FIELD_TYPE_MAP.
 *
 * @param field Campo do NocoBase
 * @returns Tipo TypeScript correspondente
 */
export function mapFieldType(field: NocoBaseField): string {
	// 1. Campos de sistema têm mapeamento fixo
	if (field.name in SYSTEM_FIELDS) {
		return SYSTEM_FIELDS[field.name](field);
	}

	// 2. Interfaces especiais que precisam tratamento custom
	if (field.interface === "context") {
		return "unknown";
	}

	if (field.interface === "set") {
		return "unknown[]";
	}

	// 3. Mapeia pelo field type ou retorna unknown se não reconhecido
	return FIELD_TYPE_MAP[field.type] ?? "unknown";
}
