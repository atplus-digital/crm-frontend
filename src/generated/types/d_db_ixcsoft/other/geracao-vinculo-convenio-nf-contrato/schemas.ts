/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema } from "./labels";

export const GERACAO_VINCULO_CONVENIO_NF_CONTRATO_TABLE_NAME =
	"geracao_vinculo_convenio_nf_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_vinculo_convenio_nf_contratoBaseSchema = z.object({
	id: z.number(),
	data_final_geracao: z.string(),
	data_geracao: z.string(),
	data_inicial_geracao: z.string(),
	desc_filtro_geracao: z.string(),
	filial_id: z.number(),
	status_execucao_lote: z.number(),
	status_geracao_lote: z.string(),
	tipo_cobranca: geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema,
	total_registros_vinculados: z.number(),
	vencimento_final_financeiro: z.string(),
	vencimento_inicial_financeiro: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_vinculo_convenio_nf_contratoSchema =
	geracao_vinculo_convenio_nf_contratoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_vinculo_convenio_nf_contratoCreateSchema =
	geracao_vinculo_convenio_nf_contratoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_vinculo_convenio_nf_contratoUpdateSchema =
	geracao_vinculo_convenio_nf_contratoCreateSchema.partial();
