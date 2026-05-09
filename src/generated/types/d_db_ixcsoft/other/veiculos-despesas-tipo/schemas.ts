/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	veiculos_despesas_tipoAtivoSchema,
	veiculos_despesas_tipoPadraoSistemaSchema,
} from "./labels";

export const VEICULOS_DESPESAS_TIPO_TABLE_NAME = "veiculos_despesas_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_despesas_tipoBaseSchema = z.object({
	id: z.number(),
	ativo: veiculos_despesas_tipoAtivoSchema,
	atualizado_em: z.string(),
	atualizado_por: z.number(),
	descricao: z.string(),
	observacao: z.string(),
	operador_id: z.number(),
	padrao_sistema: veiculos_despesas_tipoPadraoSistemaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_despesas_tipoSchema = veiculos_despesas_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_despesas_tipoCreateSchema =
	veiculos_despesas_tipoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_despesas_tipoUpdateSchema =
	veiculos_despesas_tipoCreateSchema.partial();
