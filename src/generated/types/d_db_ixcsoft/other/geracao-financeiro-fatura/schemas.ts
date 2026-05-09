/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	geracao_financeiro_faturaStatusSchema,
	geracao_financeiro_faturaTipoContratoSchema,
	geracao_financeiro_faturaTipoPessoaSchema,
} from "./labels";

export const GERACAO_FINANCEIRO_FATURA_TABLE_NAME = "geracao_financeiro_fatura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_financeiro_faturaBaseSchema = z.object({
	id: z.number(),
	ano_referencia: z.number(),
	cidade: z.number(),
	geracao_ate: z.string(),
	id_carteira_cobranca: z.number(),
	id_cliente_final: z.number(),
	id_cliente_inicial: z.number(),
	id_contrato_final: z.number(),
	id_contrato_inicial: z.number(),
	id_filial: z.number(),
	id_geracao_lote_agrup_finan: z.number(),
	mes_referencia: z.string(),
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	status: geracao_financeiro_faturaStatusSchema,
	tipo_cliente: z.number(),
	tipo_cobranca: z.number(),
	tipo_contrato: geracao_financeiro_faturaTipoContratoSchema,
	tipo_pessoa: geracao_financeiro_faturaTipoPessoaSchema,
	total_boletos_gerados: z.number(),
	total_valor_gerados: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_financeiro_faturaSchema =
	geracao_financeiro_faturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_financeiro_faturaCreateSchema =
	geracao_financeiro_faturaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_financeiro_faturaUpdateSchema =
	geracao_financeiro_faturaCreateSchema.partial();
