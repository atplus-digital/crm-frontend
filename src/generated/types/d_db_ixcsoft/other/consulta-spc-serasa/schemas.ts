/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONSULTA_SPC_SERASA_TABLE_NAME = "consulta_spc_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const consulta_spc_serasaBaseSchema = z.object({
	id: z.number(),
	alerta_de_documentos: z.string(),
	cnpj_cpf: z.string(),
	data_hora_consulta: z.string(),
	id_cliente: z.number(),
	id_lead: z.number(),
	intermediador: z.string(),
	pdf: z.string(),
	pendencias_bacen: z.string(),
	pendencias_financeiras: z.string(),
	pendencias_internas: z.string(),
	tabela_origem_id: z.string(),
	tipo_consulta: z.string(),
	total_ocorrencias: z.number(),
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const consulta_spc_serasaSchema = consulta_spc_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const consulta_spc_serasaCreateSchema = consulta_spc_serasaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const consulta_spc_serasaUpdateSchema =
	consulta_spc_serasaCreateSchema.partial();
