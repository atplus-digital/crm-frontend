/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NAS_CGNAT_IP_PORTAS_TABLE_NAME = "nas_cgnat_ip_portas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_cgnat_ip_portasBaseSchema = z.object({
	id: z.number(),
	id_nas_cgnat: z.number(),
	ip_privado: z.string(),
	ip_publico: z.string(),
	porta_final: z.number(),
	porta_inicial: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_cgnat_ip_portasSchema = nas_cgnat_ip_portasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_cgnat_ip_portasCreateSchema = nas_cgnat_ip_portasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_cgnat_ip_portasUpdateSchema =
	nas_cgnat_ip_portasCreateSchema.partial();
