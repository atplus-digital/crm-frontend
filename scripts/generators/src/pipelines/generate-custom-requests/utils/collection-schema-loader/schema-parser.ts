import { snakeToCamelCase, snakeToPascalCase } from "./case-utils";

export interface ExtractedSchemaNames {
	schemaName: string;
	baseSchemaName: string;
}

export function extractSchemaNames(
	collectionName: string,
	fileContent: string,
): ExtractedSchemaNames | null {
	const pascalName = snakeToPascalCase(collectionName);
	const snakeName = collectionName;
	const camelName = snakeToCamelCase(collectionName);

	let schemaName: string | null = null;

	const pascalSchemaMatch = fileContent.match(
		new RegExp(`export\\s+const\\s+(${pascalName}Schema)\\s*=`),
	);
	if (pascalSchemaMatch) {
		schemaName = pascalSchemaMatch[1];
	}

	if (!schemaName) {
		const snakeSchemaMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${snakeName}Schema)\\s*=`),
		);
		if (snakeSchemaMatch) {
			schemaName = snakeSchemaMatch[1];
		}
	}

	let baseSchemaName: string | null = null;

	const pascalBaseMatch = fileContent.match(
		new RegExp(`export\\s+const\\s+(${pascalName}BaseSchema)\\s*=`),
	);
	if (pascalBaseMatch) {
		baseSchemaName = pascalBaseMatch[1];
	}

	if (!baseSchemaName) {
		const snakeBaseMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${snakeName}BaseSchema)\\s*=`),
		);
		if (snakeBaseMatch) {
			baseSchemaName = snakeBaseMatch[1];
		}
	}

	if (!baseSchemaName) {
		const camelBaseMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${camelName}BaseSchema)\\s*=`),
		);
		if (camelBaseMatch) {
			baseSchemaName = camelBaseMatch[1];
		}
	}

	if (!schemaName) {
		return null;
	}

	return {
		schemaName,
		baseSchemaName: baseSchemaName ?? `${camelName}BaseSchema`,
	};
}

export function extractSchemaFieldNames(fileContent: string): Set<string> {
	const fields = new Set<string>();
	const schemaObjectPattern =
		/export\s+const\s+([A-Za-z0-9_]+)\s*=\s*z\.object\(\{([\s\S]*?)\}\s*\);/g;

	while (true) {
		const schemaMatch = schemaObjectPattern.exec(fileContent);
		if (!schemaMatch) {
			break;
		}

		const schemaVarName = schemaMatch[1];
		if (
			!schemaVarName.endsWith("BaseSchema") &&
			!schemaVarName.endsWith("RelationSchema")
		) {
			continue;
		}

		const schemaBody = schemaMatch[2];
		const fieldPattern =
			/^\s*(?:(["'])([^"']+)\1|([A-Za-z_$][A-Za-z0-9_$]*))\s*:/gm;

		while (true) {
			const fieldMatch = fieldPattern.exec(schemaBody);
			if (!fieldMatch) {
				break;
			}

			const fieldName = fieldMatch[2] ?? fieldMatch[3];
			if (fieldName) {
				fields.add(fieldName);
			}
		}
	}

	return fields;
}
