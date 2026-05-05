/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { telecom_ips_fixosPossuiIpFixoSchema } from "./labels";

export const T_TELECOM_IPS_FIXOS_TABLE_NAME = "t_telecom_ips_fixos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_ips_fixosBaseSchema = z.object({
	id: z.number(),
	f_contrato_ixc: z.string(),
	f_controle: z.string(),
	f_ip: z.string(),
	f_login: z.string(),
	f_possui_ip_fixo: telecom_ips_fixosPossuiIpFixoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_ips_fixosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_ips_fixosSchema = telecom_ips_fixosBaseSchema.extend(
	telecom_ips_fixosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_ips_fixosCreateSchema = telecom_ips_fixosSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_ips_fixosUpdateSchema =
	telecom_ips_fixosCreateSchema.partial();
