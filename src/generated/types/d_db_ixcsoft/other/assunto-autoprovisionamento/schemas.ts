/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ASSUNTO_AUTOPROVISIONAMENTO_TABLE_NAME =
	"assunto_autoprovisionamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assunto_autoprovisionamentoBaseSchema = z.object({
	id: z.number(),
	id_config_autoprovisionamento: z.number(),
	id_oss_assunto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assunto_autoprovisionamentoSchema =
	assunto_autoprovisionamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assunto_autoprovisionamentoCreateSchema =
	assunto_autoprovisionamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assunto_autoprovisionamentoUpdateSchema =
	assunto_autoprovisionamentoCreateSchema.partial();
