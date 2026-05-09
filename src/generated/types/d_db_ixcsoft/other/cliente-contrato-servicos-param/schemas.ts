/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_servicos_paramAcaoTipoSchema,
	cliente_contrato_servicos_paramRepetirSchema,
	cliente_contrato_servicos_paramTipoDaSchema,
	cliente_contrato_servicos_paramTipoDescontoSchema,
	cliente_contrato_servicos_paramTipoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_SERVICOS_PARAM_TABLE_NAME =
	"cliente_contrato_servicos_param";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_servicos_paramBaseSchema = z.object({
	id: z.number(),
	acao_tipo: cliente_contrato_servicos_paramAcaoTipoSchema,
	cidade: z.number(),
	data: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_produto: z.number(),
	id_unidade: z.number(),
	percentual: z.number(),
	repetir: cliente_contrato_servicos_paramRepetirSchema,
	repetir_qtde: z.number(),
	tipo: cliente_contrato_servicos_paramTipoSchema,
	tipo_da: cliente_contrato_servicos_paramTipoDaSchema,
	tipo_desconto: cliente_contrato_servicos_paramTipoDescontoSchema,
	uf: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_servicos_paramSchema =
	cliente_contrato_servicos_paramBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_paramCreateSchema =
	cliente_contrato_servicos_paramSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_paramUpdateSchema =
	cliente_contrato_servicos_paramCreateSchema.partial();
