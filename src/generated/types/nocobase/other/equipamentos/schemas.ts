/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_EQUIPAMENTOS_TABLE_NAME = "t_equipamentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const equipamentosBaseSchema = z.object({
	id: z.number(),
	f_fk_ativo_rack: z.number(),
	f_fk_equipamentos_anexos: z.number(),
	f_fk_equipamentos_interfaces: z.number(),
	f_34u76klwxoj: z.number(),
	f_modelo: z.string(),
	f_nome: z.string(),
	f_observacoes: z.string(),
	f_sigla: z.string(),
	f_sn: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const equipamentosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_fwvce6bqigw: z.number().array(),
	f_hcqrd9qhcid: z.number().array(),
	f_interfaces: z.number().array(),
	f_rack: z.number().nullable(),
	f_recurso_equipamento_a: z.number().array(),
	f_site: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamentosSchema = equipamentosBaseSchema.merge(
	equipamentosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamentosCreateSchema = equipamentosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_fwvce6bqigw: true,
	f_hcqrd9qhcid: true,
	f_interfaces: true,
	f_rack: true,
	f_recurso_equipamento_a: true,
	f_site: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const equipamentosUpdateSchema = equipamentosCreateSchema.partial();
