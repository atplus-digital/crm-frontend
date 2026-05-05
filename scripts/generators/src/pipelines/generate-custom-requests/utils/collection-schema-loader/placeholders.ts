import type { CollectionSchemaMapping } from "../../@types/collection-schema";

export interface PlaceholderFields {
	$nForm: Set<string>;
	$nPopupRecord: Set<string>;
	$nSelectedRecord: Set<string>;
	currentRecord: Set<string>;
	currentUser: Set<string>;
	[key: string]: Set<string>;
}

export function extractPlaceholderFields(
	payloadData: Record<string, unknown> | null,
): PlaceholderFields {
	const fields: PlaceholderFields = {
		$nForm: new Set(),
		$nPopupRecord: new Set(),
		$nSelectedRecord: new Set(),
		currentRecord: new Set(),
		currentUser: new Set(),
	};

	if (!payloadData) return fields;

	const placeholderPattern =
		/\{\{(\$nForm|\$nPopupRecord|\$nSelectedRecord|currentRecord|currentUser)(\.([^}]+))?\}\}/g;

	for (const [_key, value] of Object.entries(payloadData)) {
		if (typeof value !== "string") continue;

		while (true) {
			const match = placeholderPattern.exec(value);
			if (!match) {
				break;
			}

			const placeholder = match[1] as keyof PlaceholderFields;
			const field = match[3];

			if (!fields[placeholder]) {
				fields[placeholder] = new Set();
			}

			const placeholderFields = fields[placeholder];
			if (placeholderFields) {
				placeholderFields.add(field ?? "*");
			}
		}
	}

	return fields;
}

export function generateSchemaPickCode(
	schemaInfo: CollectionSchemaMapping,
	fields: Set<string>,
): string {
	if (fields.has("*")) {
		return schemaInfo.schemaName;
	}

	const topLevelFields = new Set<string>();
	const nestedFields = new Map<string, string[]>();

	for (const field of fields) {
		if (field.includes(".")) {
			const [prefix, ...rest] = field.split(".");
			if (!nestedFields.has(prefix)) {
				nestedFields.set(prefix, []);
			}
			const prefixedFields = nestedFields.get(prefix);
			if (prefixedFields) {
				prefixedFields.push(rest.join("."));
			}
			topLevelFields.add(prefix);
		} else {
			topLevelFields.add(field);
		}
	}

	const allFields = Array.from(topLevelFields)
		.sort()
		.map((fieldName) => {
			const objectKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(fieldName)
				? fieldName
				: JSON.stringify(fieldName);
			const existsInCollection =
				!schemaInfo.availableFields ||
				schemaInfo.availableFields.has(fieldName);

			if (!existsInCollection) {
				return `//    ${objectKey}: true, ! Não Existe na collection`;
			}

			return `    ${objectKey}: true,`;
		})
		.join("\n");

	return `${schemaInfo.schemaName}.pick({\n${allFields}\n  })`;
}
