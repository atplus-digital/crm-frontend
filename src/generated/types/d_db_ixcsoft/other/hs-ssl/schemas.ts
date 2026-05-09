/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_SSL_TABLE_NAME = "hs_ssl";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_sslBaseSchema = z.object({
	id: z.number(),
	cabunble: z.string(),
	crt: z.string(),
	csr: z.string(),
	diretorio: z.string(),
	email: z.string(),
	id_configuracao: z.number(),
	key: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_sslSchema = hs_sslBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_sslCreateSchema = hs_sslSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_sslUpdateSchema = hs_sslCreateSchema.partial();
