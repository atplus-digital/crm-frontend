/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_digital_historicoAmbienteSchema,
	assinatura_digital_historicoOrigemGeracaoSchema,
	assinatura_digital_historicoStatusSchema,
	assinatura_digital_historicoTipoDocumentoSchema,
} from "./labels";

export const ASSINATURA_DIGITAL_HISTORICO_TABLE_NAME =
	"assinatura_digital_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_digital_historicoBaseSchema = z.object({
	id: z.number(),
	ambiente: assinatura_digital_historicoAmbienteSchema,
	data_assinatura: z.string(),
	data_hora: z.string(),
	descricao: z.string(),
	id_cliente_contrato_assinatura_termo: z.number(),
	id_contrato: z.number(),
	id_integracao: z.number(),
	id_ordem_servico: z.number(),
	id_usuario: z.number(),
	origem_geracao: assinatura_digital_historicoOrigemGeracaoSchema,
	status: assinatura_digital_historicoStatusSchema,
	tipo_documento: assinatura_digital_historicoTipoDocumentoSchema,
	token_documento: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_digital_historicoSchema =
	assinatura_digital_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_digital_historicoCreateSchema =
	assinatura_digital_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_digital_historicoUpdateSchema =
	assinatura_digital_historicoCreateSchema.partial();
