/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_oss_chamado_mensagemFinalizaProcessoSchema,
	su_oss_chamado_mensagemGeraComissaoSchema,
	su_oss_chamado_mensagemOrigemRegistroSchema,
	su_oss_chamado_mensagemStatusSchema,
	su_oss_chamado_mensagemTipoCobrancaSchema,
} from "./labels";

export const SU_OSS_CHAMADO_MENSAGEM_TABLE_NAME = "su_oss_chamado_mensagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_mensagemBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_final: z.string(),
	data_inicio: z.string(),
	finaliza_processo: su_oss_chamado_mensagemFinalizaProcessoSchema,
	gera_comissao: su_oss_chamado_mensagemGeraComissaoSchema,
	gps_time: z.string(),
	historico: z.string(),
	id_chamado: z.number(),
	id_compromisso: z.number(),
	id_diagnostico_especifico: z.number(),
	id_equipe: z.number(),
	id_evento: z.number(),
	id_evento_status: z.number(),
	id_operador: z.number(),
	id_proxima_tarefa: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_tecnico: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	mensagem: z.string(),
	origem_registro: su_oss_chamado_mensagemOrigemRegistroSchema,
	status: su_oss_chamado_mensagemStatusSchema,
	tipo_cobranca: su_oss_chamado_mensagemTipoCobrancaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_mensagemSchema = su_oss_chamado_mensagemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_mensagemCreateSchema =
	su_oss_chamado_mensagemSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_mensagemUpdateSchema =
	su_oss_chamado_mensagemCreateSchema.partial();
