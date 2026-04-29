/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Acessos } from "../other/acessos";
import type { TelecomAnexos } from "../other/telecom-anexos";
import type { TelecomContratos } from "../other/telecom-contratos";
import type { Users } from "../users";

export const T_SERVICOS_TABLE_NAME = "t_servicos";

export const SERVICOS_STATUS_LABELS = {
	"0": "Cancelado",
	"1": "Aguardando Ativação",
	"2": "Ativo",
} as const;

export const SERVICOS_TIPO_LABELS = {
	"1": "Link IP",
	"2": "PTP",
	"3": "PTMP",
	"4": "OUTRO",
	"5": "Lastmile",
	"6": "Colocation",
} as const;

export type ServicosStatus = keyof typeof SERVICOS_STATUS_LABELS;

export type ServicosTipo = keyof typeof SERVICOS_TIPO_LABELS;

export interface Servicos {
	id: number;
	f_fk_servico_x_contrato: number;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_propriedades: string;
	f_status: ServicosStatus;
	f_tipo: ServicosTipo;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ServicosRelations {
	createdBy?: Users | null;
	f_acessos?: Acessos[];
	f_arquivos?: TelecomAnexos[];
	f_kyyzn4kut6e?: TelecomContratos | null;
	f_rj1pckkkeqi?: Servicos[];
	f_servicos_relacionados?: Servicos[];
	updatedBy?: Users | null;
}

export type ServicosRelationKey = keyof ServicosRelations;
