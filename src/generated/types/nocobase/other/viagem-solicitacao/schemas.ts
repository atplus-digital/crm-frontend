/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import {
	viagem_solicitacaoDestinoViagemSchema,
	viagem_solicitacaoDiariaSchema,
	viagem_solicitacaoFaseSchema,
	viagem_solicitacaoMeioTransporteSchema,
} from "./labels";

export const T_VIAGEM_SOLICITACAO_TABLE_NAME = "t_viagem_solicitacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const viagem_solicitacaoBaseSchema = z.object({
	id: z.number(),
	f_fk_solicitacao_viagem: z.number(),
	f_colaborador_beneficiado: z.string(),
	f_data_retorno: z.string(),
	f_data_viagem: z.string(),
	f_destino_viagem: viagem_solicitacaoDestinoViagemSchema,
	f_diaria: viagem_solicitacaoDiariaSchema,
	f_fase: viagem_solicitacaoFaseSchema,
	f_kaban_viagem: z.number(),
	f_meio_transporte: viagem_solicitacaoMeioTransporteSchema,
	f_observacoes: z.string(),
	f_percorrido: z.number(),
	f_quantidade_dias: z.string(),
	f_sub_total: z.string(),
	f_total_pagar: z.number(),
	f_valor_cobrado: z.number(),
	f_valor_diaria: z.number(),
	f_valor_pedagio: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const viagem_solicitacaoRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_anexos: z.number().array(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const viagem_solicitacaoSchema = viagem_solicitacaoBaseSchema.extend(
	viagem_solicitacaoRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const viagem_solicitacaoCreateSchema = viagem_solicitacaoSchema.omit({
	createdAt: true,
	createdBy: true,
	f_anexos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const viagem_solicitacaoUpdateSchema =
	viagem_solicitacaoCreateSchema.partial();
