/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { server_interfacesTipoSchema } from "./labels";

export const SERVER_INTERFACES_TABLE_NAME = "server_interfaces";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const server_interfacesBaseSchema = z.object({
	id: z.number(),
	broadcast: z.string(),
	descricao: z.string(),
	dns: z.string(),
	gateway: z.string(),
	interface: z.string(),
	ip: z.string(),
	mac: z.string(),
	mascara: z.string(),
	rede: z.string(),
	tipo: server_interfacesTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const server_interfacesSchema = server_interfacesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const server_interfacesCreateSchema = server_interfacesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const server_interfacesUpdateSchema =
	server_interfacesCreateSchema.partial();
