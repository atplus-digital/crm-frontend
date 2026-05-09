/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	mk_interfacesInterfaceRadiusSchema,
	mk_interfacesSincronizadoSchema,
} from "./labels";

export const MK_INTERFACES_TABLE_NAME = "mk_interfaces";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const mk_interfacesBaseSchema = z.object({
	id: z.number(),
	comment: z.string(),
	disabled: z.string(),
	dynamic: z.string(),
	id_concentrador: z.number(),
	id_interface: z.number(),
	interface_radius: mk_interfacesInterfaceRadiusSchema,
	mac: z.string(),
	mtu: z.number(),
	name: z.string(),
	running: z.string(),
	sincronizado: mk_interfacesSincronizadoSchema,
	slave: z.string(),
	type: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const mk_interfacesSchema = mk_interfacesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const mk_interfacesCreateSchema = mk_interfacesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const mk_interfacesUpdateSchema = mk_interfacesCreateSchema.partial();
