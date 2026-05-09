/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_servicos_altIncluidoPorProrataSchema,
	cliente_contrato_servicos_altOrigemSchema,
	cliente_contrato_servicos_altRepetirSchema,
	cliente_contrato_servicos_altTipoAcresDescSchema,
	cliente_contrato_servicos_altTipoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_SERVICOS_ALT_TABLE_NAME =
	"cliente_contrato_servicos_alt";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_servicos_altBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	id_contrato: z.number(),
	id_produto: z.number(),
	id_produto_contrato_vinc: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.number(),
	incluido_por_prorata: cliente_contrato_servicos_altIncluidoPorProrataSchema,
	origem: cliente_contrato_servicos_altOrigemSchema,
	quantidade: z.number(),
	repetir: cliente_contrato_servicos_altRepetirSchema,
	repetir_qtde: z.number(),
	tipo: cliente_contrato_servicos_altTipoSchema,
	tipo_acres_desc: cliente_contrato_servicos_altTipoAcresDescSchema,
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_servicos_altSchema =
	cliente_contrato_servicos_altBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_altCreateSchema =
	cliente_contrato_servicos_altSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_altUpdateSchema =
	cliente_contrato_servicos_altCreateSchema.partial();
