export function toPascalCase(name: string): string {
	const withoutPrefix = name.startsWith("t_") ? name.slice(2) : name;
	return withoutPrefix
		.split("_")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}

const VALID_IDENTIFIER = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export function formatKey(name: string): string {
	return VALID_IDENTIFIER.test(name) ? name : `"${name}"`;
}

export function toValidIdentifier(name: string): string {
	if (/^\d/.test(name)) {
		return `_${name}`;
	}
	return name;
}
