/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	lote_importacao_servicos_adicionaisOcultoSchema,
	lote_importacao_servicos_adicionaisStatusSchema,
} from "./labels";

export const LOTE_IMPORTACAO_SERVICOS_ADICIONAIS_TABLE_NAME =
	"lote_importacao_servicos_adicionais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lote_importacao_servicos_adicionaisBaseSchema = z.object({
	id: z.number(),
	codigo: z.number(),
	data_final: z.string(),
	data_inicial: z.string(),
	id_usuario: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
	oculto: lote_importacao_servicos_adicionaisOcultoSchema,
	operador: z.number(),
	quantidade: z.number(),
	status: lote_importacao_servicos_adicionaisStatusSchema,
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lote_importacao_servicos_adicionaisSchema =
	lote_importacao_servicos_adicionaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lote_importacao_servicos_adicionaisCreateSchema =
	lote_importacao_servicos_adicionaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lote_importacao_servicos_adicionaisUpdateSchema =
	lote_importacao_servicos_adicionaisCreateSchema.partial();
