/**
 * Acesso ao mapa de relações IXC
 */

import type { RelationInfo } from "../config";
import { IXC_RELATIONS_MAP } from "./relations-data/index";

/**
 * Obtém as relações esperadas para uma collection do IXC
 *
 * Nota: O mapa original usa "nome lógico" como chave (ex: "cidade"),
 * mas o campo real no schema é "relationFieldName" (ex: "f_cidade").
 * Esta função mapeia para usar o campo real como fieldName.
 */
export function getIXCRelations(collectionName: string): RelationInfo[] {
	const relations =
		IXC_RELATIONS_MAP[collectionName as keyof typeof IXC_RELATIONS_MAP];
	if (!relations) return [];

	return Object.entries(relations).map(([_logicalName, rel]) => ({
		fieldName: rel.relationFieldName || _logicalName,
		targetCollection: rel.target,
		type: rel.type as "belongsTo" | "hasMany",
	}));
}

/**
 * Lista todas as collections com relações mapeadas
 */
export function listCollectionsWithRelations(): string[] {
	return Object.keys(IXC_RELATIONS_MAP);
}
