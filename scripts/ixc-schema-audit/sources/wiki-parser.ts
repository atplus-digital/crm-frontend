/**
 * Parse do HTML da Wiki API do IXC
 *
 * O HTML tem estrutura:
 * <div class="spectrum-Well">
 *   <h3>nome_do_campo</h3>
 *   <div style="display:none;">
 *     Dados técnicos com:
 *     - "Tipo de campo: X"
 *     - "Valores disponíveis: A = Label A\nB = Label B"
 */

import type { EnumOption, ScalarType } from "../config";

export interface WikiField {
	fieldName: string;
	fieldType: string;
	isRequired: boolean;
	maxLength?: number;
	enumOptions?: EnumOption[];
}

const TYPE_MAP: Record<string, ScalarType> = {
	"Campo de texto": "string",
	"Campo de área": "string",
	"Campo de busca avançada": "number",
	"Campo monetário": "number",
	"Campo numérico": "number",
	"Campo de data": "string",
	"Campo de data e hora": "string",
	"Campo de senha": "string",
	"Campo de e-mail": "string",
	"Botão de seleção": "string",
	"Campo de seleção": "string",
	"Campo de seleção múltipla": "string",
	Arquivo: "string",
	"Editor HTML": "string",
	Cor: "string",
	"Busca Avançada": "number",
	"Check Box": "boolean",
};

function parseEnumValues(valuesStr: string): EnumOption[] {
	const lines = valuesStr
		.split(/<br\s*\/?>|\n/)
		.map((l) => l.trim())
		.filter((l) => l && l.includes("="));

	const results: EnumOption[] = [];

	for (const line of lines) {
		const eqIndex = line.indexOf("=");
		if (eqIndex === -1) continue;

		const value = line.slice(0, eqIndex).trim();
		const label = line.slice(eqIndex + 1).trim();

		const numValue = Number(value);
		if (!isNaN(numValue) && numValue.toString() === value) {
			results.push({ value: numValue, label });
		} else {
			results.push({ value, label });
		}
	}

	return results;
}

export function parseWikiHtml(html: string): WikiField[] {
	const fields: WikiField[] = [];

	const h3Pattern =
		/<h3[^>]*>([^<]*)<\/h3>[\s\S]*?<div[^>]*style="[^"]*display\s*:\s*none[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;

	while (true) {
		const match = h3Pattern.exec(html);
		if (!match) break;

		const fieldName = match[1].trim();
		const detailsHtml = match[2];

		if (!fieldName) continue;

		const field: WikiField = {
			fieldName,
			fieldType: "",
			isRequired: false,
		};

		const typeMatch = detailsHtml.match(/Tipo de campo:\s*([^<\n]+)/i);
		if (typeMatch) {
			field.fieldType = typeMatch[1].trim();
		}

		field.isRequired =
			detailsHtml.includes("Campo obrigat") && detailsHtml.includes(": Sim");

		const lenMatch = detailsHtml.match(
			/(?:max\.|máx\.|Quant\.|quantidade).*?caracteres?:?\s*(\d+)/i,
		);
		if (lenMatch) {
			field.maxLength = parseInt(lenMatch[1], 10);
		}

		if (
			field.fieldType === "Botão de seleção" ||
			field.fieldType === "Campo de seleção" ||
			field.fieldType === "Campo de seleção múltipla"
		) {
			const valuesPattern =
				/Valores disponíveis[:\s]*<br\s*\/?>\s*([\s\S]*?)(?:<(?:\/ul|\/div|\/li)[\s>]|$)/i;
			const valuesMatch = detailsHtml.match(valuesPattern);

			if (valuesMatch) {
				field.enumOptions = parseEnumValues(valuesMatch[1]);
			} else {
				const valuesPattern2 =
					/Valores disponíveis[:\s]*([\s\S]{1,500}?)(?:<(?:ul|div|b)[\s>]|\s{2,}|$)/i;
				const valuesMatch2 = detailsHtml.match(valuesPattern2);
				if (valuesMatch2 && valuesMatch2[1].includes("=")) {
					field.enumOptions = parseEnumValues(valuesMatch2[1]);
				}
			}
		}

		fields.push(field);
	}

	return fields;
}

export function wikiFieldToType(field: WikiField): {
	scalarType: ScalarType;
	isEnum: boolean;
	enumOptions?: EnumOption[];
} {
	if (field.enumOptions && field.enumOptions.length > 0) {
		const firstVal = field.enumOptions[0].value;
		const scalarType: ScalarType =
			typeof firstVal === "number" ? "number" : "string";

		return {
			scalarType,
			isEnum: true,
			enumOptions: field.enumOptions,
		};
	}

	const mapped = TYPE_MAP[field.fieldType] ?? "string";

	return {
		scalarType: mapped,
		isEnum: false,
	};
}
