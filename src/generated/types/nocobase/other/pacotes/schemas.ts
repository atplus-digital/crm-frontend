/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { produtosBaseSchema } from "../produtos/schemas";
import {
	pacotesAbreAtendimentoSchema,
	pacotesClausulaBonusVelocidadeSchema,
	pacotesPacoteAdicionalSchema,
	pacotesPacotePrincipalSchema,
	pacotesStatusSchema,
	pacotesVenderParaSchema,
} from "./labels";

export const T_PACOTES_TABLE_NAME = "t_pacotes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pacotesBaseSchema = z.object({
	id: z.number(),
	f_fk_desconto_pacotes: z.number(),
	f_fk_id_pacote: z.number(),
	f_abre_atendimento: pacotesAbreAtendimentoSchema,
	f_clausula_bonus_velocidade: pacotesClausulaBonusVelocidadeSchema,
	f_mbps_bonus: z.string(),
	f_mbps_padrao: z.string(),
	f_mbps_total: z.string(),
	f_mensalidade_com_desconto: z.number(),
	f_mensalidade_sem_desconto: z.number(),
	f_nome_pacote: z.string(),
	f_pacote_adicional: pacotesPacoteAdicionalSchema,
	f_pacote_principal: pacotesPacotePrincipalSchema,
	f_status: pacotesStatusSchema,
	f_vender_para: pacotesVenderParaSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const pacotesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_itens_do_pacote: z.lazy(() => produtosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pacotesSchema = pacotesBaseSchema.extend(
	pacotesRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pacotesCreateSchema = pacotesSchema.omit({
	createdAt: true,
	createdBy: true,
	f_itens_do_pacote: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pacotesUpdateSchema = pacotesCreateSchema.partial();
