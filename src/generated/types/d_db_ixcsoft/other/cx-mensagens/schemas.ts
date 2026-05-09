/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CX_MENSAGENS_TABLE_NAME = "cx_mensagens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cx_mensagensBaseSchema = z.object({
	id: z.number(),
	caixa_id: z.number(),
	callerid: z.string(),
	context: z.string(),
	dir: z.string(),
	duration: z.string(),
	flag: z.string(),
	macrocontext: z.string(),
	mailboxcontext: z.string(),
	mailboxuser: z.string(),
	msgnum: z.number(),
	origtime: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cx_mensagensSchema = cx_mensagensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cx_mensagensCreateSchema = cx_mensagensSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cx_mensagensUpdateSchema = cx_mensagensCreateSchema.partial();
