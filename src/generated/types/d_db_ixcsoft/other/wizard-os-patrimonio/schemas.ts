/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const WIZARD_OS_PATRIMONIO_TABLE_NAME = "wizard_os_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wizard_os_patrimonioBaseSchema = z.object({
	id: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_wizard_os_patrimonio_assunto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wizard_os_patrimonioSchema = wizard_os_patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wizard_os_patrimonioCreateSchema = wizard_os_patrimonioSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wizard_os_patrimonioUpdateSchema =
	wizard_os_patrimonioCreateSchema.partial();
