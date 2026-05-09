/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	reserva_rede_neutraStatusSchema,
	reserva_rede_neutraSubstatusSchema,
	reserva_rede_neutraTipoSchema,
} from "./labels";

export const RESERVA_REDE_NEUTRA_TABLE_NAME = "reserva_rede_neutra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const reserva_rede_neutraBaseSchema = z.object({
	id: z.number(),
	caixa_ftth: z.string(),
	complemento: z.string(),
	data_reserva: z.string(),
	endereco: z.string(),
	external_id: z.string(),
	id_cliente_neutro: z.number(),
	id_onu: z.number(),
	id_operador_neutro: z.number(),
	mensagem: z.string(),
	onu_mac: z.string(),
	plano: z.number(),
	porta_ftth: z.number(),
	resource_id: z.string(),
	status: reserva_rede_neutraStatusSchema,
	substatus: reserva_rede_neutraSubstatusSchema,
	tenant_id: z.string(),
	tipo: reserva_rede_neutraTipoSchema,
	ultima_atualizacao_status: z.string(),
	url_callback: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const reserva_rede_neutraSchema = reserva_rede_neutraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const reserva_rede_neutraCreateSchema = reserva_rede_neutraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const reserva_rede_neutraUpdateSchema =
	reserva_rede_neutraCreateSchema.partial();
