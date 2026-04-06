import { toPascalCase } from "./naming";
import type {
	NocoBaseCollection,
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseField,
} from "./types";

export async function fetchCollections(): Promise<NocoBaseCollection[]> {
	const baseUrl = process.env.CRM_NOCOBASE_URL;
	const token = process.env.CRM_NOCOBASE_TOKEN;

	console.log(`📡 Conectando a: ${baseUrl}`);

	const response = await fetch(`${baseUrl}/collections:list?paginate=false`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error(
			`Falha ao buscar collections: ${response.status} ${response.statusText}`,
		);
	}

	const json = (await response.json()) as NocoBaseCollectionsListResponse;

	console.log(`📋 Encontradas ${json.data.length} collections`);

	return json.data;
}

export async function fetchCollectionFields(
	baseUrl: string,
	token: string,
	collectionName: string,
): Promise<NocoBaseField[]> {
	const params = new URLSearchParams({
		appends: "fields",
		filterByTk: collectionName,
	});

	const response = await fetch(`${baseUrl}/collections:get?${params}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error(
			`Falha ao buscar fields da collection ${collectionName}: ${response.status} ${response.statusText}`,
		);
	}

	const json = (await response.json()) as NocoBaseCollectionResponse;
	return json.data.fields;
}

export function isRelation(field: NocoBaseField): boolean {
	const relInterfaces = ["belongsTo", "hasMany", "belongsToMany"];
	return relInterfaces.includes(field.interface);
}

export function mapFieldType(
	field: NocoBaseField,
	_collectionName: string,
	_allCollections: string[],
): string {
	const interface_type = field.interface;

	switch (interface_type) {
		case "belongsTo":
			if (field.target) {
				const targetName = toPascalCase(field.target);
				return `${targetName}Base | null`;
			}
			return "unknown | null";
		case "hasMany":
			if (field.target) {
				const targetName = toPascalCase(field.target);
				return `${targetName}Base[]`;
			}
			return "unknown[]";
		case "belongsToMany":
			if (field.target) {
				const targetName = toPascalCase(field.target);
				return `${targetName}Base[]`;
			}
			return "unknown[]";
		default: {
			switch (field.type) {
				case "string":
				case "text":
				case "uid":
				case "email":
				case "url":
				case "phone":
				case "ipv4":
				case "ipv6":
				case "movedTo":
					return "string";
				case "integer":
				case "bigInt":
				case "float":
				case "decimal":
					return "number";
				case "boolean":
					return "boolean";
				case "date":
				case "datetime":
				case "time":
				case "year":
				case "month":
				case "timestamp":
					return "string";
				case "json":
				case "object":
					return "Record<string, unknown>";
				case "array":
					return "unknown[]";
				default:
					return "unknown";
			}
		}
	}
}
