/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_movim_finan_liquidacoesTipoLiquidacaoSchema } from "./labels";

export const FN_MOVIM_FINAN_LIQUIDACOES_TABLE_NAME =
	"fn_movim_finan_liquidacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_movim_finan_liquidacoesBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	id_adto_cliente: z.number(),
	id_fn_movim_finan: z.number(),
	obs: z.string(),
	tipo_liquidacao: fn_movim_finan_liquidacoesTipoLiquidacaoSchema,
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_movim_finan_liquidacoesSchema =
	fn_movim_finan_liquidacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_movim_finan_liquidacoesCreateSchema =
	fn_movim_finan_liquidacoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_movim_finan_liquidacoesUpdateSchema =
	fn_movim_finan_liquidacoesCreateSchema.partial();
