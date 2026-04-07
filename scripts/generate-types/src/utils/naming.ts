const VALID_IDENTIFIER = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export function toPascalCase(name: string): string {
	const withoutPrefix = name.startsWith("t_") ? name.slice(2) : name;
	return withoutPrefix
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}

export function toValidIdentifier(name: string): string {
	const normalized = name.replace(/[^a-zA-Z0-9_$]/g, "_");
	if (!normalized) {
		return "_";
	}

	return /^\d/.test(normalized) ? `_${normalized}` : normalized;
}

export function formatKey(name: string): string {
	return VALID_IDENTIFIER.test(name) ? name : `"${name}"`;
}

export function toCollectionTypeName(collectionName: string): string {
	return toValidIdentifier(toPascalCase(collectionName));
}

export function toCollectionBaseTypeName(collectionName: string): string {
	const normalizedName = collectionName.trim();
	if (!normalizedName) {
		return "unknown";
	}

	return `${toCollectionTypeName(normalizedName)}Base`;
}
