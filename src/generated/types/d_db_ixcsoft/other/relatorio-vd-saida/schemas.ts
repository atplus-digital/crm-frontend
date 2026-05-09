/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_vd_saidaTipoDataEmissaoSchema,
	relatorio_vd_saidaTipoDataSaidaSchema,
} from "./labels";

export const RELATORIO_VD_SAIDA_TABLE_NAME = "relatorio_vd_saida";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_vd_saidaBaseSchema = z.object({
	id: z.number(),
	apartamento: z.string(),
	bairro: z.string(),
	bloco: z.string(),
	cfop: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_emissao_fin: z.string(),
	data_emissao_ini: z.string(),
	data_emissao_periodo: z.string(),
	data_saida_periodo: z.string(),
	data_saida_periodo_fin: z.string(),
	data_saida_periodo_ini: z.string(),
	data_ultima_impres: z.string(),
	endereco: z.string(),
	id_assunto: z.number(),
	id_cidade: z.number(),
	id_cliente: z.number(),
	id_condicao_pagamento: z.number(),
	id_condominio: z.number(),
	id_filial: z.number(),
	id_tipo_documento: z.number(),
	impresso_por: z.number(),
	modelo_nf: z.string(),
	nome: z.string(),
	relatorio: z.string(),
	status_nf: z.string(),
	tipo_data_emissao: relatorio_vd_saidaTipoDataEmissaoSchema,
	tipo_data_saida: relatorio_vd_saidaTipoDataSaidaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_vd_saidaSchema = relatorio_vd_saidaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_vd_saidaCreateSchema = relatorio_vd_saidaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_vd_saidaUpdateSchema =
	relatorio_vd_saidaCreateSchema.partial();
