import type { RelationInfo } from "../@types/generation";
import type { NocoBaseField } from "../@types/nocobase";
import { renderRelationValueType, resolveRelationInterface } from "./relations";

const SYSTEM_FIELDS: Record<string, (field: NocoBaseField) => string> = {
	createdBy: () => "unknown",
	updatedBy: () => "unknown",
	createdById: () => "unknown",
	updatedById: () => "unknown",
	parent: (field) => renderRelationValueType(field.target ?? "", "one"),
	children: (field) => renderRelationValueType(field.target ?? "", "many"),
	storage: () => "Record<string, unknown>",
};

const FIELD_TYPE_MAP: Record<string, string> = {
	string: "string",
	text: "string",
	uid: "string",
	email: "string",
	url: "string",
	phone: "string",
	ipv4: "string",
	ipv6: "string",
	movedTo: "string",
	password: "string",
	dateOnly: "string",
	snowflakeId: "string",
	formula: "string",
	date: "string",
	datetime: "string",
	time: "string",
	year: "string",
	month: "string",
	sequence: "string",
	integer: "number",
	bigInt: "number",
	float: "number",
	decimal: "number",
	sort: "number",
	double: "number",
	timestamp: "number",
	boolean: "boolean",
	json: "Record<string, unknown>",
	object: "Record<string, unknown>",
	jsonb: "Record<string, unknown>",
	array: "unknown[]",
};

export function extractRelationInfo(field: NocoBaseField): RelationInfo | null {
	if (field.name in SYSTEM_FIELDS) {
		return null;
	}

	const relationType = resolveRelationInterface(field.interface);
	if (!relationType) {
		return null;
	}

	return {
		type: relationType,
		targetCollection: field.target ?? "",
	};
}

export function mapFieldType(field: NocoBaseField): string {
	if (field.name in SYSTEM_FIELDS) {
		return SYSTEM_FIELDS[field.name](field);
	}

	if (field.interface === "context") {
		return "unknown";
	}

	if (field.interface === "set") {
		return "Record<string, unknown>";
	}

	return FIELD_TYPE_MAP[field.type] ?? "unknown";
}
