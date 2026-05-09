/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_adm_secaoPrublicadoSchema } from "./labels";

export const HS_ADM_SECAO_TABLE_NAME = "hs_adm_secao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_adm_secaoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
	nivel_acesso: z.number(),
	ordenar: z.number(),
	posicao_imagem: z.string(),
	prublicado: hs_adm_secaoPrublicadoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_adm_secaoSchema = hs_adm_secaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_adm_secaoCreateSchema = hs_adm_secaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_adm_secaoUpdateSchema = hs_adm_secaoCreateSchema.partial();
