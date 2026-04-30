/**
 * Escapa caracteres especiais para uso em strings JavaScript/TypeScript literais.
 */
export function escapeString(str: string): string {
	return str
		.replace(/\\/g, "\\\\")
		.replace(/"/g, '\\"')
		.replace(/\n/g, "\\n")
		.replace(/\r/g, "\\r")
		.replace(/\t/g, "\\t");
}

/**
 * Serializa dados de payload para string de código TypeScript.
 * - null ou objeto vazio → "null"
 * - objeto com dados → JSON.stringify com indentação de 2 espaços
 */
export function serializePayloadData(
	data: Record<string, unknown> | null,
): string {
	if (!data || Object.keys(data).length === 0) {
		return "null";
	}
	return JSON.stringify(data, null, 2);
}
