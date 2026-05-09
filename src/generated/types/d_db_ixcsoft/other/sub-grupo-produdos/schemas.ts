/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { sub_grupo_produdosEcommerceSchema } from "./labels";

export const SUB_GRUPO_PRODUDOS_TABLE_NAME = "sub_grupo_produdos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sub_grupo_produdosBaseSchema = z.object({
	id: z.number(),
	codigo_alternativo: z.string(),
	ecommerce: sub_grupo_produdosEcommerceSchema,
	id_centro_resultado_rel_centro_custo_categoria_padrao: z.number(),
	id_classe_financeira: z.number(),
	id_conta_comodato: z.number(),
	id_conta_despesa: z.number(),
	id_conta_estoque: z.number(),
	id_conta_receita: z.number(),
	id_conta_receita2: z.number(),
	id_grupo: z.number(),
	margem_lucro: z.number(),
	sub_grupo: z.string(),
	tipo_produto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sub_grupo_produdosSchema = sub_grupo_produdosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sub_grupo_produdosCreateSchema = sub_grupo_produdosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sub_grupo_produdosUpdateSchema =
	sub_grupo_produdosCreateSchema.partial();
