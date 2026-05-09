/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_geracao_faturaStatusSchema,
	cliente_contrato_geracao_faturaTipoContratoSchema,
	cliente_contrato_geracao_faturaTipoPessoaSchema,
} from "./labels";

export const CLIENTE_CONTRATO_GERACAO_FATURA_TABLE_NAME =
	"cliente_contrato_geracao_fatura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_geracao_faturaBaseSchema = z.object({
	id: z.number(),
	ano_referencia: z.number(),
	geracao_ate: z.string(),
	id_carteira_cobranca: z.number(),
	id_cidade: z.number(),
	id_cliente_final: z.number(),
	id_cliente_inicial: z.number(),
	id_contrato_final: z.number(),
	id_contrato_inicial: z.number(),
	id_filial: z.number(),
	id_tipo_cliente: z.number(),
	id_tipo_cobranca: z.number(),
	mes_referencia: z.string(),
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	status: cliente_contrato_geracao_faturaStatusSchema,
	tipo_contrato: cliente_contrato_geracao_faturaTipoContratoSchema,
	tipo_pessoa: cliente_contrato_geracao_faturaTipoPessoaSchema,
	total_faturas_geradas: z.number(),
	total_valor_gerados: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_geracao_faturaSchema =
	cliente_contrato_geracao_faturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_faturaCreateSchema =
	cliente_contrato_geracao_faturaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_faturaUpdateSchema =
	cliente_contrato_geracao_faturaCreateSchema.partial();
