export function fileNameToCollectionName(fileName: string): string {
	return fileName.replace(/\.ts$/, "").replace(/-/g, "_");
}

export function snakeToPascalCase(str: string): string {
	return str
		.split("_")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("");
}

export function snakeToCamelCase(str: string): string {
	const pascal = snakeToPascalCase(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}
