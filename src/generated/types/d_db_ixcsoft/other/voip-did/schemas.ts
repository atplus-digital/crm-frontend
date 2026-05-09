/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_DID_TABLE_NAME = "voip_did";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_didBaseSchema = z.object({
	id: z.number(),
	aceita_abc: z.number(),
	cidade: z.number(),
	credential_summit: z.string(),
	gateway: z.string(),
	id_plataforma: z.string(),
	id_voip_sippeers: z.number(),
	numero_binagem: z.string(),
	porta_summit: z.number(),
	prioridade_summit: z.number(),
	terminal_summit: z.number(),
	valor_cliente: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_didSchema = voip_didBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_didCreateSchema = voip_didSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_didUpdateSchema = voip_didCreateSchema.partial();
