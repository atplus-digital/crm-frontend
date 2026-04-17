import type { RelationInfo } from "@scripts/generate-types/src/@types/generation";
import type { NocoBaseField } from "@scripts/generate-types/src/@types/nocobase";
import { resolveRelationByType, resolveRelationInterface } from "./relations";

/**
 * Campos escalares de sistema do NocoBase com mapeamento fixo.
 * Esses campos aparecem no payload mas não devem entrar no fluxo de relações.
 */
const SYSTEM_SCALAR_FIELDS: Record<string, () => string> = {
	// Chaves de auditoria são expostas como números no payload,
	// embora o schema de fields as reporte como `context`.
	createdById: () => "number | null",
	updatedById: () => "number | null",
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
	context: "unknown",

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
	snowflakeId: "number",
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
	// Campos escalares de sistema não devem ser tratados como relações
	if (field.name in SYSTEM_SCALAR_FIELDS) {
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
 * Extrai valores únicos de um array de enum options.
 * Remove duplicatas e retorna array de valores normalizados.
 */
function extractEnumValues(
	enumOptions: Array<{ value: string | number; label: string }> | undefined,
): Array<string | number> {
	if (!enumOptions || enumOptions.length === 0) {
		return [];
	}

	const uniqueValues = Array.from(new Set(enumOptions.map((opt) => opt.value)));

	return uniqueValues;
}

/**
 * Gera tipo TypeScript para campos com enum (select, radio, checkbox, etc).
 * Retorna união de literais string: "valor1" | "valor2" | "valor3"
 */
function buildEnumType(
	enumOptions: Array<{ value: string | number; label: string }>,
): string {
	const values = extractEnumValues(enumOptions);

	if (values.length === 0) {
		return "string";
	}

	return values
		.map((v) => (typeof v === "string" ? `"${v}"` : String(v)))
		.join(" | ");
}

/**
 * Mapeia um campo do NocoBase para tipo TypeScript.
 * Prioridade: SYSTEM_FIELDS > ENUM (uiSchema) > interfaces especiais > FIELD_TYPE_MAP.
 *
 * @param field Campo do NocoBase
 * @returns Tipo TypeScript correspondente
 */
export function mapFieldType(field: NocoBaseField): string {
	// 1. Campos de sistema têm mapeamento fixo
	if (field.name in SYSTEM_SCALAR_FIELDS) {
		return SYSTEM_SCALAR_FIELDS[field.name]();
	}

	// 2. CAMPOS COM ENUM (select, radioGroup, checkboxGroup, multipleSelect)
	// Prioridade máxima: se tem uiSchema.enum, gera união de literais
	if (field.uiSchema?.enum && field.uiSchema.enum.length > 0) {
		return buildEnumType(field.uiSchema.enum);
	}

	// 3. Interfaces especiais que precisam tratamento custom
	if (field.interface === "context" || field.type === "context") {
		return "unknown";
	}

	if (field.interface === "set") {
		return "unknown[]";
	}

	// 4. Mapeia pelo field type ou retorna unknown se não reconhecido
	return FIELD_TYPE_MAP[field.type] ?? "unknown";
}
