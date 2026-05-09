/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	alt_plano_produto_servicoGerarProrataServAdicSchema,
	alt_plano_produto_servicoTipoSchema,
} from "./labels";

export const ALT_PLANO_PRODUTO_SERVICO_TABLE_NAME = "alt_plano_produto_servico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_plano_produto_servicoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	gerar_prorata_serv_adic: alt_plano_produto_servicoGerarProrataServAdicSchema,
	id_cliente_contrato_alt_plano: z.number(),
	id_contrato: z.number(),
	id_plano: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	id_vd_contrato: z.number(),
	id_vd_contrato_produtos: z.number(),
	obs: z.string(),
	qtde: z.number(),
	tipo: alt_plano_produto_servicoTipoSchema,
	valor: z.number(),
	valor_ate_vencimento: z.number(),
	valor_desconto_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_plano_produto_servicoSchema =
	alt_plano_produto_servicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_plano_produto_servicoCreateSchema =
	alt_plano_produto_servicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_plano_produto_servicoUpdateSchema =
	alt_plano_produto_servicoCreateSchema.partial();
