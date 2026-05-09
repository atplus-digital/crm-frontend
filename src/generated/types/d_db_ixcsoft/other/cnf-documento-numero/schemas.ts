/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cnf_documento_numeroContadorFuncoesSicrediSchema,
	cnf_documento_numeroControlaMensalSchema,
	cnf_documento_numeroTipoFiscalCarteiraSchema,
} from "./labels";

export const CNF_DOCUMENTO_NUMERO_TABLE_NAME = "cnf_documento_numero";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_documento_numeroBaseSchema = z.object({
	id: z.number(),
	contador: z.number(),
	contador_carteira: z.string(),
	contador_funcoes_sicredi: cnf_documento_numeroContadorFuncoesSicrediSchema,
	controla_mensal: cnf_documento_numeroControlaMensalSchema,
	descricao: z.string(),
	filial_id: z.number(),
	filial_id_nome: z.string(),
	modelo: z.string(),
	numeracao_lote: z.number(),
	prefixo_nosso_numero: z.number(),
	serie: z.string(),
	timbrado: z.string(),
	tipo_fiscal_carteira: cnf_documento_numeroTipoFiscalCarteiraSchema,
	vigencia_fim: z.string(),
	vigencia_inicio: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_documento_numeroSchema = cnf_documento_numeroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_documento_numeroCreateSchema = cnf_documento_numeroSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_documento_numeroUpdateSchema =
	cnf_documento_numeroCreateSchema.partial();
