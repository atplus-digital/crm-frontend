/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Equipamentos } from "../other/equipamentos";
import type { FornecedoresTelecom } from "../other/fornecedores-telecom";
import type { Sites } from "../other/sites";
import type { TelecomAnexos } from "../other/telecom-anexos";
import type { TelecomColocationOpcoes } from "../other/telecom-colocation-opcoes";
import type { TelecomInterfaces } from "../other/telecom-interfaces";
import type { TelecomOpcoesL2l } from "../other/telecom-opcoes-l2l";
import type { TelecomRacks } from "../other/telecom-racks";
import type { TelecomTransitoOpcoes } from "../other/telecom-transito-opcoes";
import type { Users } from "../users";

export const T_TELECOM_RECURSOS_TABLE_NAME = "t_telecom_recursos";

export const TELECOMRECURSOS_FINALIDADE_LABELS = {
	"3": "Insumo para Serviço",
	"2": "Serviço",
	"4": "Facilidade",
	"1": "Acesso",
} as const;

export const TELECOMRECURSOS_STATUS_LABELS = {
	"1": "Planejado",
	"2": "Ativo",
	"3": "Desativado",
} as const;

export const TELECOMRECURSOS_TIPO_LABELS = {
	"1": "L2 - PTP",
	"13": "L3 - PTP",
	"6": "L2 - P2MP",
	"4": "L2 - Last Mile",
	"2": "L3 - Link IP",
	"7": "L3 - Banda Larga",
	"5": "L1 - Fibra Apagada",
	"8": "L1 - Canal DWDM",
	"3": "Colocation",
	"9": "VPN",
	"10": "Trunk Flex",
	"11": "Transito IP Internet ",
	"12": "Transito IP CDN",
	"14": "Contrato",
} as const;

export type TelecomRecursosFinalidade =
	keyof typeof TELECOMRECURSOS_FINALIDADE_LABELS;

export type TelecomRecursosStatus = keyof typeof TELECOMRECURSOS_STATUS_LABELS;

export type TelecomRecursosTipo = keyof typeof TELECOMRECURSOS_TIPO_LABELS;

export interface TelecomRecursos {
	id: number;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: number;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_2ew016ynyo6: number;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_detalhes: string;
	f_finalidade: TelecomRecursosFinalidade;
	f_id_produto: string;
	f_nome: string;
	f_status: TelecomRecursosStatus;
	f_tipo: TelecomRecursosTipo;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomRecursosRelations {
	children?: TelecomRecursos[];
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_cliente?: FornecedoresTelecom | null;
	f_equipamento_a?: Equipamentos | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_interface_ponta_a?: TelecomInterfaces[];
	f_interface_ponta_b?: TelecomInterfaces[];
	f_opcoes_colocation?: TelecomColocationOpcoes | null;
	f_opcoes_l2l?: TelecomOpcoesL2l | null;
	f_opcoes_link_ip?: TelecomTransitoOpcoes | null;
	f_rack_a?: TelecomRacks | null;
	f_rack_b?: TelecomRacks | null;
	f_site_a?: Sites | null;
	f_site_b?: Sites | null;
	parent?: TelecomRecursos | null;
	updatedBy?: Users | null;
}

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;
