/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	recursos_viagemDestinoViagemSchema,
	recursos_viagemMeioTransporteSchema,
} from "./labels";

export const T_RECURSOS_VIAGEM_TABLE_NAME = "t_recursos_viagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const recursos_viagemBaseSchema = z.object({
	id: z.number(),
	f_fk_recursos_viagem: z.number(),
	f_destino_viagem: recursos_viagemDestinoViagemSchema,
	f_km_percorrido: z.number(),
	f_meio_transporte: recursos_viagemMeioTransporteSchema,
	f_observacoes: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const recursos_viagemRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const recursos_viagemSchema = recursos_viagemBaseSchema.merge(
	recursos_viagemRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const recursos_viagemCreateSchema = recursos_viagemSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const recursos_viagemUpdateSchema =
	recursos_viagemCreateSchema.partial();
