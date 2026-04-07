/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type {
	AcessosBase,
	TelecomAnexosBase,
	TelecomContratosBase,
} from "./index";
import type { UsersBase } from "./users";

export interface ServicosBase {
	createdAt: string;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_fk_servico_x_contrato: number;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_propriedades: string;
	f_status: string;
	f_tipo: string;
	f_velocidade: string;
	id: number;
	updatedAt: string;
}

export interface ServicosRelations {
	createdBy?: UsersBase | null;
	f_acessos?: AcessosBase[];
	f_arquivos?: TelecomAnexosBase[];
	f_kyyzn4kut6e?: TelecomContratosBase | null;
	f_rj1pckkkeqi?: ServicosBase[];
	f_servicos_relacionados?: ServicosBase[];
	updatedBy?: UsersBase | null;
}

export type ServicosRelationKey = keyof ServicosRelations;
