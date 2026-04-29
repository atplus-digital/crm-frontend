/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_QUALIRUN_ASSINATURA_GOV_TABLE_NAME = "t_qualirun_assinatura_gov";

export interface QualirunAssinaturaGov {
	id: number;
	f_fk_negociacoes: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunAssinaturaGovRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type QualirunAssinaturaGovRelationKey =
	keyof QualirunAssinaturaGovRelations;
