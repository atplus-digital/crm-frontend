/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { equipamento_funcionarioStatusSchema } from "./labels";

export const EQUIPAMENTO_FUNCIONARIO_TABLE_NAME = "equipamento_funcionario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const equipamento_funcionarioBaseSchema = z.object({
	id: z.number(),
	data_descarte: z.string(),
	data_devolucao: z.string(),
	data_emprestimo: z.string(),
	id_funcionario: z.number(),
	id_movimento_produtos_devolveu: z.number(),
	id_movimento_produtos_emprestou: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_usuario_emprestou: z.number(),
	impresso_devolucao: z.string(),
	impresso_emprestimo: z.string(),
	observacao: z.string(),
	qtde_saida: z.number(),
	status: equipamento_funcionarioStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamento_funcionarioSchema = equipamento_funcionarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamento_funcionarioCreateSchema =
	equipamento_funcionarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const equipamento_funcionarioUpdateSchema =
	equipamento_funcionarioCreateSchema.partial();
