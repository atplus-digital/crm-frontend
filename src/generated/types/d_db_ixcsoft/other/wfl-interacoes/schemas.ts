/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	wfl_interacoesAtivaContratoSchema,
	wfl_interacoesAtivoSchema,
	wfl_interacoesDestinatarioEmailSchema,
	wfl_interacoesDisparaProximaSchema,
	wfl_interacoesGatilhoSchema,
	wfl_interacoesTipoInteracaoSchema,
} from "./labels";

export const WFL_INTERACOES_TABLE_NAME = "wfl_interacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_interacoesBaseSchema = z.object({
	id: z.number(),
	ativa_contrato: wfl_interacoesAtivaContratoSchema,
	ativo: wfl_interacoesAtivoSchema,
	destinatario_email: wfl_interacoesDestinatarioEmailSchema,
	dispara_proxima: wfl_interacoesDisparaProximaSchema,
	email_destino: z.string(),
	gatilho: wfl_interacoesGatilhoSchema,
	id_email: z.number(),
	id_mensagem_omnichannel: z.number(),
	id_sms: z.number(),
	id_tarefa: z.number(),
	id_wfl_param_os: z.number(),
	su_status_evento: z.number(),
	tipo_interacao: wfl_interacoesTipoInteracaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_interacoesSchema = wfl_interacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_interacoesCreateSchema = wfl_interacoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_interacoesUpdateSchema = wfl_interacoesCreateSchema.partial();
