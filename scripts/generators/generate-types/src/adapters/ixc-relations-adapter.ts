import type { RelationsAdapter } from "../@types/script";
import { IXC_RELATIONS_MAP } from "./ixc-relations-data";

export function createIXCRelationsAdapter(): RelationsAdapter {
	return {
		name: "IXC Relations Mapper",
		async fetchRelations(
			collectionName: string,
		): Promise<
			Record<string, { target: string; type: "belongsTo" | "hasMany" }>
		> {
			const collectionRelations = IXC_RELATIONS_MAP[collectionName] ?? {};

			// Converter para o formato esperado pelo gerador
			// Chave: nome do campo de relação (f_*), não o campo scalar (id_*)
			const result: Record<
				string,
				{ target: string; type: "belongsTo" | "hasMany" }
			> = {};

			for (const [, relation] of Object.entries(collectionRelations)) {
				const relationFieldName =
					relation.relationFieldName ?? `f_${relation.target}`;
				result[relationFieldName] = {
					target: relation.target,
					type: relation.type,
				};
			}

			return result;
		},
	};
}
