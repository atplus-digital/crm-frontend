import type { RelationInfo } from "@scripts/generate-types/src/@types/generation";
import type { DataSourceField } from "@scripts/generate-types/src/@types/script";
import { logger } from "@scripts/generate-types/src/utils/logger";
import { resolveRelationByType, resolveRelationInterface } from "./relations";

/**
 * Padrões de convenção para inferência automática de relações.
 * Ordem importa: padrões mais específicos devem vir primeiro.
 */
const RELATION_NAME_PATTERNS: Array<{
	pattern: RegExp;
	extractTarget: (match: RegExpMatchArray) => string;
	defaultType: "belongsTo" | "hasMany";
}> = [
	// id_cliente → cliente, id_vd_contrato → vd_contrato
	{
		pattern: /^id_([a-z_][a-z0-9_]*)$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
	// cliente_id → cliente (menos comum no IXC)
	{
		pattern: /^([a-z_][a-z0-9_]*)_id$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
	// f_nc_cliente → cliente (padrão NocoBase para relações)
	{
		pattern: /^(?:f_|a_)(?:nc_)?([a-z_][a-z0-9_]*)$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
];

/**
 * Lista negra de campos que parecem relações mas não são.
 * Usado para evitar falsos positivos na inferência.
 */
const FIELD_BLACKLIST = [
	"id",
	"id_hash",
	"id_sessao",
	"id_token",
	"id_cache",
	"id_temp",
	"uuid",
	"guid",
];

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
 * Tenta inferir relação de um campo baseado em convenção de nomes.
 * Retorna null se o campo não seguir padrões conhecidos.
 */
function inferRelationFromFieldName(fieldName: string): RelationInfo | null {
	// Ignorar campos na lista negra
	if (FIELD_BLACKLIST.includes(fieldName.toLowerCase())) {
		return null;
	}

	// Testar contra cada padrão
	for (const {
		pattern,
		extractTarget,
		defaultType,
	} of RELATION_NAME_PATTERNS) {
		const match = fieldName.match(pattern);
		if (match) {
			const inferredTarget = extractTarget(match);

			return {
				type: defaultType,
				targetCollection: inferredTarget,
			};
		}
	}

	return null;
}

/**
 * Extrai informações de relação de um campo.
 * Retorna null para campos escalares de sistema ou campos que não são relações.
 *
 * Prioridade de detecção:
 * 1. Mapeamento manual (relationsMapping)
 * 2. Metadados da API (field.interface, field.type, field.target)
 * 3. Inferência por convenção de nomes
 *
 * @param field Campo do NocoBase
 * @param manualRelations Mapeamento manual opcional
 * @param inferRelationsByName Habilita inferência por convenção de nomes
 * @returns Informações da relação ou null
 */
export function extractRelationInfo(
	field: DataSourceField,
	manualRelations?: Record<
		string,
		{ target: string; type: "belongsTo" | "hasMany" | "m2m" | "hasOne" }
	>,
	inferRelationsByName = false,
): RelationInfo | null {
	// Campos escalares de sistema não devem ser tratados como relações
	if (field.name in SYSTEM_SCALAR_FIELDS) {
		return null;
	}

	// 1. Verificar mapeamento manual primeiro (maior prioridade)
	if (manualRelations?.[field.name]) {
		const manual = manualRelations[field.name];
		return {
			type: manual.type,
			targetCollection: manual.target,
		};
	}

	// 2. Tentar resolver pelos metadados da API
	let relationType = resolveRelationInterface(field.interface);

	if (!relationType) {
		relationType = resolveRelationByType(field.type);
	}

	if (relationType) {
		return {
			type: relationType,
			targetCollection: field.target ?? "",
		};
	}

	// 3. Fallback: inferir por convenção de nomes (se habilitado)
	if (inferRelationsByName) {
		const inferred = inferRelationFromFieldName(field.name);
		if (inferred) {
			return inferred;
		}
	}

	return null;
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
export function mapFieldType(field: DataSourceField): string {
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
	const tsType = FIELD_TYPE_MAP[field.type];
	if (!tsType) {
		logger.warn(
			`Tipo de campo desconhecido: '${field.type}' no campo '${field.name}' — mapeando para 'unknown'`,
		);
		return "unknown";
	}
	return tsType;
}
