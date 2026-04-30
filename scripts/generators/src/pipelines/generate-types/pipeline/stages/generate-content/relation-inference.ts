import type { RelationInfo } from "../../../@types/generation";

/**
 * Padrões de convenção para inferência automática de relações.
 * Ordem importa: padrões mais específicos devem vir primeiro.
 */
const RELATION_NAME_PATTERNS: Array<{
	pattern: RegExp;
	extractTarget: (match: RegExpMatchArray) => string;
	defaultType: "belongsTo" | "hasMany";
}> = [
	{
		pattern: /^id_([a-z_][a-z0-9_]*)$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
	{
		pattern: /^([a-z_][a-z0-9_]*)_id$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
	{
		pattern: /^(?:f_|a_)(?:nc_)?([a-z_][a-z0-9_]*)$/i,
		extractTarget: (match) => match[1],
		defaultType: "belongsTo",
	},
];

const FIELD_BLACKLIST = [
	"id",
	"id_hash",
	"id_sessao",
	"id_token",
	"id_cache",
	"id_temp",
	"uuid",
	"guid",
];

export function inferRelationFromFieldName(
	fieldName: string,
): RelationInfo | null {
	if (FIELD_BLACKLIST.includes(fieldName.toLowerCase())) {
		return null;
	}

	for (const {
		pattern,
		extractTarget,
		defaultType,
	} of RELATION_NAME_PATTERNS) {
		const match = fieldName.match(pattern);
		if (match) {
			return {
				type: defaultType,
				targetCollection: extractTarget(match),
			};
		}
	}

	return null;
}
