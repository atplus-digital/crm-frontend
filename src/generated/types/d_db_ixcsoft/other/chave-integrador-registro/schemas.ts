/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHAVE_INTEGRADOR_REGISTRO_TABLE_NAME = "chave_integrador_registro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_integrador_registroBaseSchema = z.object({
	id: z.number(),
	id_chave_integrador: z.number(),
	mes_referencia: z.string(),
	produto_integrador_ref: z.string(),
	quantidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_integrador_registroSchema =
	chave_integrador_registroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_integrador_registroCreateSchema =
	chave_integrador_registroSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_integrador_registroUpdateSchema =
	chave_integrador_registroCreateSchema.partial();
