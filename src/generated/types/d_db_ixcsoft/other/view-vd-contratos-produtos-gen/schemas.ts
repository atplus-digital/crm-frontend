/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { view_vd_contratos_produtos_genTipoSchema } from "./labels";

export const VIEW_VD_CONTRATOS_PRODUTOS_GEN_TABLE_NAME =
	"view_vd_contratos_produtos_gen";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_vd_contratos_produtos_genBaseSchema = z.object({
	id: z.number(),
	cliente_contrato_id: z.number(),
	descricao: z.string(),
	id_contrato: z.number(),
	id_plano: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.number(),
	id_vd_contrato: z.number(),
	logins_simultaneos: z.number(),
	qtde: z.number(),
	tipo: view_vd_contratos_produtos_genTipoSchema,
	tipo_produtos_plano: z.string(),
	valor_acrescimo: z.number(),
	valor_ate_vencimento: z.number(),
	valor_bruto: z.number(),
	valor_desconto: z.number(),
	valor_liquido: z.number(),
	valor_unit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_vd_contratos_produtos_genSchema =
	view_vd_contratos_produtos_genBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_vd_contratos_produtos_genCreateSchema =
	view_vd_contratos_produtos_genSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_vd_contratos_produtos_genUpdateSchema =
	view_vd_contratos_produtos_genCreateSchema.partial();
