/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	patrimonio_movimentacaoIndisponivelSchema,
	patrimonio_movimentacaoTipoMovimentoSchema,
} from "./labels";

export const PATRIMONIO_MOVIMENTACAO_TABLE_NAME = "patrimonio_movimentacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_movimentacaoBaseSchema = z.object({
	id: z.number(),
	cliente_destino: z.number(),
	data_movimentacao: z.string(),
	filial_destino: z.number(),
	finalidade: z.number(),
	id_almoxarifado_destino: z.number(),
	id_almoxarifado_origem: z.number(),
	id_contrato: z.number(),
	id_estrutura: z.number(),
	id_movimento: z.number(),
	id_patrimonio: z.number(),
	id_pedido_os: z.number(),
	indisponivel: patrimonio_movimentacaoIndisponivelSchema,
	motivo: z.string(),
	obs: z.string(),
	observacao: z.string(),
	responsavel: z.number(),
	setor_destino: z.number(),
	tipo_movimento: patrimonio_movimentacaoTipoMovimentoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_movimentacaoSchema = patrimonio_movimentacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_movimentacaoCreateSchema =
	patrimonio_movimentacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_movimentacaoUpdateSchema =
	patrimonio_movimentacaoCreateSchema.partial();
