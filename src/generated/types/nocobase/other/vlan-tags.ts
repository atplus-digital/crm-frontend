/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_VLAN_TAGS_TABLE_NAME = "t_vlan_tags";

export interface VlanTags {
	id: number;
	f_tag: string;
	updatedAt: string;
	createdAt: string;
}

export interface VlanTagsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type VlanTagsRelationKey = keyof VlanTagsRelations;
