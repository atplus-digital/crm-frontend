/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RAD_DNS_TABLE_NAME = "rad_dns";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dnsBaseSchema = z.object({
	id: z.number(),
	dns_descricao: z.string(),
	dns_primario: z.string(),
	dns_primario_v6: z.string(),
	dns_secundario: z.string(),
	dns_secundario_v6: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dnsSchema = rad_dnsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dnsCreateSchema = rad_dnsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dnsUpdateSchema = rad_dnsCreateSchema.partial();
