/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const XML_NFSE_TABLE_NAME = "xml_nfse";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const xml_nfseBaseSchema = z.object({
	id: z.number(),
	id_saida: z.number(),
	xml: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const xml_nfseSchema = xml_nfseBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const xml_nfseCreateSchema = xml_nfseSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const xml_nfseUpdateSchema = xml_nfseCreateSchema.partial();
