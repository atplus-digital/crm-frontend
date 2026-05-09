/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_MDFE_DOCUMENTOS_TABLE_NAME = "veiculos_mdfe_documentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_mdfe_documentosBaseSchema = z.object({
	id: z.number(),
	descarregamento_cidade: z.number(),
	documento: z.number(),
	id_cliente: z.number(),
	mdfe: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_mdfe_documentosSchema =
	veiculos_mdfe_documentosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_mdfe_documentosCreateSchema =
	veiculos_mdfe_documentosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_mdfe_documentosUpdateSchema =
	veiculos_mdfe_documentosCreateSchema.partial();
