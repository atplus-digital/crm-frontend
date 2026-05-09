/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_su_ticketIdTicketOrigemSchema,
	relatorio_su_ticketRelacionadoOssSchema,
	relatorio_su_ticketTipoDataCriacaoSchema,
	relatorio_su_ticketTipoDataReservadaSchema,
	relatorio_su_ticketTipoDataUltimaAlteracaoSchema,
	relatorio_su_ticketTipoSchema,
} from "./labels";

export const RELATORIO_SU_TICKET_TABLE_NAME = "relatorio_su_ticket";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_su_ticketBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_criacao_final: z.string(),
	data_criacao_inicial: z.string(),
	data_criacao_periodo: z.string(),
	data_reservada_final: z.string(),
	data_reservada_inicial: z.string(),
	data_reservada_periodo: z.string(),
	data_ultima_alteracao_final: z.string(),
	data_ultima_alteracao_inicial: z.string(),
	data_ultima_alteracao_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_assunto: z.number(),
	id_canal_atendimento: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_estrutura: z.number(),
	id_evento_status_processo: z.number(),
	id_filial: z.number(),
	id_login: z.number(),
	id_responsavel_tecnico: z.number(),
	id_su_diagnostico: z.number(),
	id_ticket_origem: relatorio_su_ticketIdTicketOrigemSchema,
	id_ticket_setor: z.number(),
	id_usuario_abertura: z.number(),
	id_usuarios: z.number(),
	id_wfl_processo: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relacionado_oss: relatorio_su_ticketRelacionadoOssSchema,
	relatorio: z.string(),
	tipo: relatorio_su_ticketTipoSchema,
	tipo_data_criacao: relatorio_su_ticketTipoDataCriacaoSchema,
	tipo_data_reservada: relatorio_su_ticketTipoDataReservadaSchema,
	tipo_data_ultima_alteracao: relatorio_su_ticketTipoDataUltimaAlteracaoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_su_ticketSchema = relatorio_su_ticketBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_su_ticketCreateSchema = relatorio_su_ticketSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_su_ticketUpdateSchema =
	relatorio_su_ticketCreateSchema.partial();
