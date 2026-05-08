/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { acessosBaseSchema } from "../acessos/schemas";
import { sitesBaseSchema } from "../sites/schemas";
import { telecom_anexosBaseSchema } from "../telecom-anexos/schemas";
import { telecom_interfacesBaseSchema } from "../telecom-interfaces/schemas";
import { telecom_racksBaseSchema } from "../telecom-racks/schemas";
import { telecom_recursosBaseSchema } from "../telecom-recursos/schemas";

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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const equipamentosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fwvce6bqigw: z.lazy(() => telecom_anexosBaseSchema.array()),
	f_hcqrd9qhcid: z.lazy(() => acessosBaseSchema.array()),
	f_interfaces: z.lazy(() => telecom_interfacesBaseSchema.array()),
	f_rack: z.lazy(() => telecom_racksBaseSchema.nullable()),
	f_recurso_equipamento_a: z.lazy(() => telecom_recursosBaseSchema.array()),
	f_site: z.lazy(() => sitesBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamentosSchema = equipamentosBaseSchema.extend(
	equipamentosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamentosCreateSchema = equipamentosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_fwvce6bqigw: true,
	f_hcqrd9qhcid: true,
	f_interfaces: true,
	f_rack: true,
	f_recurso_equipamento_a: true,
	f_site: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const equipamentosUpdateSchema = equipamentosCreateSchema.partial();
