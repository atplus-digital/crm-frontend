/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { ComentariosSuspensaoDeContrato } from "./comentarios-suspensao-de-contrato";
import type { Empresas } from "./empresas";
import type { Contratos } from "./index";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export const T_SUSPENSAO_CONTRATO_TABLE_NAME = "t_suspensao_contrato";

export const SUSPENSAOCONTRATO_STATUS_LABELS = {
	"0": "Nova Solicitação",
	"1": "Aguardando Assinatura",
	"2": "Assinatura Concluída",
	"3": "Concluído",
	"4": "Cancelado",
} as const;

export type SuspensaoContratoStatus =
	keyof typeof SUSPENSAOCONTRATO_STATUS_LABELS;

export interface SuspensaoContrato {
	id: number;
	f_fk_pessoas: number;
	f_fk_pessoas_pj: number;
	f_fk_responsavel: number;
	f_cpf: string;
	f_dias_suspensao: string;
	f_email: string;
	f_final_suspensao: string;
	f_id_contrato: string;
	f_inicio_suspensao: string;
	f_link_assinatura: string;
	f_status: SuspensaoContratoStatus;
	f_telefone: string;
	f_teste: number;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface SuspensaoContratoRelations {
	createdBy?: Users | null;
	f_comentarios?: ComentariosSuspensaoDeContrato[];
	f_contratos?: Contratos[];
	f_pessoas?: Pessoas | null;
	f_pessoas_pj?: Empresas | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;
