/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLASS_TRIB_NAT_OPERACAO_TABLE_NAME = "class_trib_nat_operacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const class_trib_nat_operacaoBaseSchema = z.object({
	id: z.number(),
	cod_natureza_operacao: z.string(),
	descricao_nat_operacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const class_trib_nat_operacaoSchema = class_trib_nat_operacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const class_trib_nat_operacaoCreateSchema =
	class_trib_nat_operacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const class_trib_nat_operacaoUpdateSchema =
	class_trib_nat_operacaoCreateSchema.partial();
