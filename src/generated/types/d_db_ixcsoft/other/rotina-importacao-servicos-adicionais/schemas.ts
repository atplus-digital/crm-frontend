/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rotina_importacao_servicos_adicionaisStatusSchema } from "./labels";

export const ROTINA_IMPORTACAO_SERVICOS_ADICIONAIS_TABLE_NAME =
	"rotina_importacao_servicos_adicionais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rotina_importacao_servicos_adicionaisBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data: z.string(),
	id_integrador: z.number(),
	mes_referencia: z.string(),
	multiplicador: z.number(),
	produto: z.number(),
	quantidade_cobrancas: z.number(),
	status: rotina_importacao_servicos_adicionaisStatusSchema,
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rotina_importacao_servicos_adicionaisSchema =
	rotina_importacao_servicos_adicionaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rotina_importacao_servicos_adicionaisCreateSchema =
	rotina_importacao_servicos_adicionaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rotina_importacao_servicos_adicionaisUpdateSchema =
	rotina_importacao_servicos_adicionaisCreateSchema.partial();
