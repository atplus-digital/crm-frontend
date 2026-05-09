/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_neutroAtivoSchema,
	cliente_neutroAutomatizarReservasSchema,
	cliente_neutroInserirAtendimentoSchema,
	cliente_neutroMelhorHorarioReservaSchema,
	cliente_neutroPrioridadeSchema,
	cliente_neutroUsuarioPortalSchema,
} from "./labels";

export const CLIENTE_NEUTRO_TABLE_NAME = "cliente_neutro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_neutroBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_neutroAtivoSchema,
	automatizar_reservas: cliente_neutroAutomatizarReservasSchema,
	chave_assinatura: z.string(),
	client_id: z.string(),
	client_secret: z.string(),
	data_reservada: z.string(),
	descricao: z.string(),
	id_assunto: z.number(),
	id_cliente: z.number(),
	id_colaborador_responsavel: z.number(),
	id_contrato: z.number(),
	id_processo: z.number(),
	inserir_atendimento: cliente_neutroInserirAtendimentoSchema,
	melhor_horario_reserva: cliente_neutroMelhorHorarioReservaSchema,
	mensagem: z.string(),
	prioridade: cliente_neutroPrioridadeSchema,
	redes: z.string(),
	usuario_portal: cliente_neutroUsuarioPortalSchema,
	vlan: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_neutroSchema = cliente_neutroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_neutroCreateSchema = cliente_neutroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_neutroUpdateSchema = cliente_neutroCreateSchema.partial();
