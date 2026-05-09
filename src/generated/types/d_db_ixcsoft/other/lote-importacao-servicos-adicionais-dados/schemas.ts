/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { lote_importacao_servicos_adicionais_dadosRepetirSchema } from "./labels";

export const LOTE_IMPORTACAO_SERVICOS_ADICIONAIS_DADOS_TABLE_NAME =
	"lote_importacao_servicos_adicionais_dados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lote_importacao_servicos_adicionais_dadosBaseSchema = z.object({
	id: z.number(),
	cnpj_cpf: z.string(),
	contador: z.number(),
	data: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_lote: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.number(),
	observacao: z.string(),
	quantidade: z.number(),
	repetir: lote_importacao_servicos_adicionais_dadosRepetirSchema,
	repetir_qtde: z.number(),
	valor_total: z.number(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lote_importacao_servicos_adicionais_dadosSchema =
	lote_importacao_servicos_adicionais_dadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lote_importacao_servicos_adicionais_dadosCreateSchema =
	lote_importacao_servicos_adicionais_dadosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lote_importacao_servicos_adicionais_dadosUpdateSchema =
	lote_importacao_servicos_adicionais_dadosCreateSchema.partial();
