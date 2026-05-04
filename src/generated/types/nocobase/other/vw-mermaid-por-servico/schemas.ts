/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VW_MERMAID_POR_SERVICO_TABLE_NAME = "vw_mermaid_por_servico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vw_mermaid_por_servicoBaseSchema = z.object({
	mermaid_text: z.string(),
	servico_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vw_mermaid_por_servicoSchema = vw_mermaid_por_servicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vw_mermaid_por_servicoCreateSchema = vw_mermaid_por_servicoSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vw_mermaid_por_servicoUpdateSchema =
	vw_mermaid_por_servicoCreateSchema.partial();
