/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const ROLES_TABLE_NAME = "roles";

export interface Roles {
	sort: number;
	allowConfigure: boolean;
	allowNewMenu: boolean;
	allowNewMobileMenu: boolean;
	default: boolean;
	description: string;
	hidden: boolean;
	name: string;
	snippets: unknown[];
	strategy: Record<string, unknown>;
	title: string;
}

export interface RolesRelations {
	menuUiSchemas?: unknown[];
	mobileRoutes?: unknown[];
	resources?: unknown[];
	users?: Users[];
}

export type RolesRelationKey = keyof RolesRelations;
