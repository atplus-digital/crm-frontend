/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	produtos_ixc_mvnoAtivoSchema,
	produtos_ixc_mvnoTipoReferenciaSchema,
} from "./labels";

export const PRODUTOS_IXC_MVNO_TABLE_NAME = "produtos_ixc_mvno";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_ixc_mvnoBaseSchema = z.object({
	id: z.number(),
	ativo: produtos_ixc_mvnoAtivoSchema,
	id_assinatura_integracao: z.number(),
	id_integracao: z.number(),
	id_plano_integracao: z.string(),
	id_plano_integracao_add: z.string(),
	id_produto_ixc: z.number(),
	tipo_referencia: produtos_ixc_mvnoTipoReferenciaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_ixc_mvnoSchema = produtos_ixc_mvnoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_ixc_mvnoCreateSchema = produtos_ixc_mvnoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_ixc_mvnoUpdateSchema =
	produtos_ixc_mvnoCreateSchema.partial();
