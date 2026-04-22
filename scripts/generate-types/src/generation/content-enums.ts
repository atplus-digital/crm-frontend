import type {
	EnumOption,
	GeneratedTypes,
} from "@scripts/generate-types/src/@types/generation";
import {
	removeAccents,
	toCollectionTypeName,
} from "@scripts/generate-types/src/utils/naming";

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
export function getScalarFieldType(
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
