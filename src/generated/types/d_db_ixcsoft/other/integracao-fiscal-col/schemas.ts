/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	integracao_fiscal_colAmbienteSchema,
	integracao_fiscal_colEnviaEmailSiigoSchema,
	integracao_fiscal_colIntegracaoSchema,
} from "./labels";

export const INTEGRACAO_FISCAL_COL_TABLE_NAME = "integracao_fiscal_col";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracao_fiscal_colBaseSchema = z.object({
	id: z.number(),
	access_key: z.string(),
	ambiente: integracao_fiscal_colAmbienteSchema,
	descricao_vendor_col: z.string(),
	envia_email_siigo: integracao_fiscal_colEnviaEmailSiigoSchema,
	id_vendor_col: z.number(),
	integracao: integracao_fiscal_colIntegracaoSchema,
	modelo_fatura: z.string(),
	modelo_nota_credito: z.string(),
	observacoes: z.string(),
	usuario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracao_fiscal_colSchema = integracao_fiscal_colBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracao_fiscal_colCreateSchema =
	integracao_fiscal_colSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracao_fiscal_colUpdateSchema =
	integracao_fiscal_colCreateSchema.partial();
