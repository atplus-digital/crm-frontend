/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Negociacoes } from "../negociacoes";
import type { Users } from "../users";

export const T_APROVACAO_CPF_TABLE_NAME = "t_aprovacao_cpf";

export interface AprovacaoCpf {
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

export interface AprovacaoCpfRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AprovacaoCpfRelationKey = keyof AprovacaoCpfRelations;
