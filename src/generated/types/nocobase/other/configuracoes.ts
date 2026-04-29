/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_CONFIGURACOES_TABLE_NAME = "t_configuracoes";

export const CONFIGURACOES_ESCOPO_LABELS = {
	IXC: "IXCSoft",
	GERAL: "GERAL",
	SPC: "SPCBRASIL",
	ZAPSIGN: "ZAPSIGN",
} as const;

export type ConfiguracoesEscopo = keyof typeof CONFIGURACOES_ESCOPO_LABELS;

export interface Configuracoes {
	id: number;
	f_chave: string;
	f_descricao: string;
	f_escopo: ConfiguracoesEscopo;
	f_nome: string;
	f_valor: string;
	updatedAt: string;
	createdAt: string;
}

export interface ConfiguracoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;
