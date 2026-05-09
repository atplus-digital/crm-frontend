/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_produtos_reajuste_valorStatusInternetSchema,
	cliente_contrato_produtos_reajuste_valorStatusSchema,
	cliente_contrato_produtos_reajuste_valorTipoServicoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_PRODUTOS_REAJUSTE_VALOR_TABLE_NAME =
	"cliente_contrato_produtos_reajuste_valor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_produtos_reajuste_valorBaseSchema = z.object({
	id: z.number(),
	carteira_cobranca: z.number(),
	cidade: z.number(),
	cliente: z.number(),
	condominio: z.number(),
	contrato: z.number(),
	data_ativacao_final: z.string(),
	data_ativacao_inicial: z.string(),
	data_base_final: z.string(),
	data_base_inicial: z.string(),
	data_expiracao_fin: z.string(),
	data_expiracao_ini: z.string(),
	data_renovacao_final: z.string(),
	data_renovacao_inicial: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_filial: z.number(),
	mes_ativacao: z.number(),
	percentual: z.number(),
	plano_venda: z.number(),
	status: cliente_contrato_produtos_reajuste_valorStatusSchema,
	status_internet: cliente_contrato_produtos_reajuste_valorStatusInternetSchema,
	tipo_cliente: z.number(),
	tipo_cobranca: z.number(),
	tipo_servico: cliente_contrato_produtos_reajuste_valorTipoServicoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_produtos_reajuste_valorSchema =
	cliente_contrato_produtos_reajuste_valorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_produtos_reajuste_valorCreateSchema =
	cliente_contrato_produtos_reajuste_valorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_produtos_reajuste_valorUpdateSchema =
	cliente_contrato_produtos_reajuste_valorCreateSchema.partial();
