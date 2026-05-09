/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { tabela_cod_classificao_trib_cbs_ibsTipoAliquotaSchema } from "./labels";

export const TABELA_COD_CLASSIFICAO_TRIB_CBS_IBS_TABLE_NAME =
	"tabela_cod_classificao_trib_cbs_ibs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tabela_cod_classificao_trib_cbs_ibsBaseSchema = z.object({
	id: z.number(),
	class_trib: z.string(),
	cst_ibs_cbs: z.string(),
	descricao_class_trib: z.string(),
	descricao_cst_ibs_cbs: z.string(),
	percent_reducao: z.number(),
	reforma_trib: z.string(),
	tipo_aliquota: tabela_cod_classificao_trib_cbs_ibsTipoAliquotaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tabela_cod_classificao_trib_cbs_ibsSchema =
	tabela_cod_classificao_trib_cbs_ibsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tabela_cod_classificao_trib_cbs_ibsCreateSchema =
	tabela_cod_classificao_trib_cbs_ibsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tabela_cod_classificao_trib_cbs_ibsUpdateSchema =
	tabela_cod_classificao_trib_cbs_ibsCreateSchema.partial();
