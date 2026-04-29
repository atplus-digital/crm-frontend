/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_DEMANDAS_VIABILIDADES_TABLE_NAME = "t_demandas_viabilidades";

export const DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS = {
	"1": "Rede Própria",
	"2": "Ultima Milha de Terceiros",
} as const;

export const DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS = {
	"1": "Link Dedicado",
	"2": "E-Line",
} as const;

export const DEMANDASVIABILIDADES_STATUS_LABELS = {
	"1": "Aguardando",
	"2": "Viável",
	"3": "Não Viável",
} as const;

export type DemandasViabilidadesFormaAtendimento =
	keyof typeof DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS;

export type DemandasViabilidadesServicoPretendido =
	keyof typeof DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS;

export type DemandasViabilidadesStatus =
	keyof typeof DEMANDASVIABILIDADES_STATUS_LABELS;

export interface DemandasViabilidades {
	id: number;
	f_fk_viabilidades: number;
	f_custo_recorrente: number;
	f_endereco: string;
	f_forma_atendimento: DemandasViabilidadesFormaAtendimento;
	f_localizacao: string;
	f_servico_pretendido: DemandasViabilidadesServicoPretendido;
	f_status: DemandasViabilidadesStatus;
	f_valor_investimento: number;
	f_velocidade_pretendida: string;
	updatedAt: string;
	createdAt: string;
}

export interface DemandasViabilidadesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;
