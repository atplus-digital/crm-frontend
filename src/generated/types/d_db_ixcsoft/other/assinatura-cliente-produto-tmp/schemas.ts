/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_cliente_produto_tmpAtivoSchema,
	assinatura_cliente_produto_tmpSituacaoSchema,
	assinatura_cliente_produto_tmpStatusSchema,
} from "./labels";

export const ASSINATURA_CLIENTE_PRODUTO_TMP_TABLE_NAME =
	"assinatura_cliente_produto_tmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_cliente_produto_tmpBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_cliente_produto_tmpAtivoSchema,
	create_time: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_assinatura_cliente: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	obs: z.string(),
	quantidade: z.number(),
	situacao: assinatura_cliente_produto_tmpSituacaoSchema,
	status: assinatura_cliente_produto_tmpStatusSchema,
	update_time: z.string(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_cliente_produto_tmpSchema =
	assinatura_cliente_produto_tmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_cliente_produto_tmpCreateSchema =
	assinatura_cliente_produto_tmpSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_cliente_produto_tmpUpdateSchema =
	assinatura_cliente_produto_tmpCreateSchema.partial();
