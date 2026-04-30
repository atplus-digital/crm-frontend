import type { EnumAdapterFieldEnum } from "../@types/script";

export interface ParsedField {
	name: string;
	valoresDisponiveis?: string;
}

export function parseWikiText(
	rawHtml: string,
): Record<string, EnumAdapterFieldEnum> {
	const fields = parseFieldsFromHtml(rawHtml);
	const enums: Record<string, EnumAdapterFieldEnum> = {};

	for (const field of fields) {
		if (!field.valoresDisponiveis) continue;

		const { values, labels } = parseEnumValues(field.valoresDisponiveis);
		if (values.length < 2) continue;

		enums[field.name] = { values, labels };
	}

	return enums;
}

export function parseFieldsFromHtml(rawHtml: string): ParsedField[] {
	const fields: ParsedField[] = [];

	const h3Regex = /<h3[^>]*\bclick_campos[^>]*>([^<]+)<\/h3>/gi;
	const h3Matches = [...rawHtml.matchAll(h3Regex)].map((m) => ({
		name: m[1].trim(),
		index: m.index,
	}));

	for (let i = 0; i < h3Matches.length; i++) {
		const { name, index: blockStart } = h3Matches[i];
		const blockEnd =
			i + 1 < h3Matches.length ? h3Matches[i + 1].index : rawHtml.length;
		const block = rawHtml.slice(blockStart, blockEnd);

		const dadosIdx = block.indexOf("Dados t");
		if (dadosIdx < 0) continue;

		const valoresIdx = block.indexOf("Valores dispon", dadosIdx);
		if (valoresIdx < 0) continue;

		const liStart = block.lastIndexOf("<li", valoresIdx);
		const liEnd = block.indexOf("</li>", valoresIdx);
		if (liStart < 0 || liEnd < 0) continue;

		const liContent = block.slice(liStart, liEnd + 5);

		const valoresRaw = liContent
			.replace(/<br\s*\/?>/gi, "\n")
			.replace(/<\/?[^>]+>/g, "")
			.replace(/&nbsp;/g, " ")
			.trim();

		if (!valoresRaw) continue;

		fields.push({ name, valoresDisponiveis: valoresRaw });
	}

	return fields;
}

export function parseEnumValues(raw: string): EnumAdapterFieldEnum {
	const labels: Record<string, string> = {};
	const values: string[] = [];

	const cleaned = raw.replace(/^Valores disponíveis:\s*/i, "").trim();
	const lines = cleaned.split(/\n+/);

	for (const line of lines) {
		const eqIndex = line.indexOf("=");
		if (eqIndex === -1) continue;

		const value = line.slice(0, eqIndex).trim();
		const label = line.slice(eqIndex + 1).trim();

		if (!value) continue;

		values.push(value);
		labels[value] = decodeHtmlEntities(label);
	}

	return { values, labels };
}

export function decodeHtmlEntities(text: string): string {
	return text
		.replace(/&nbsp;/gi, " ")
		.replace(/&amp;/gi, "&")
		.replace(/&lt;/gi, "<")
		.replace(/&gt;/gi, ">")
		.trim();
}
