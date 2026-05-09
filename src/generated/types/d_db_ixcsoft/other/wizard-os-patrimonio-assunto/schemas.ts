/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const WIZARD_OS_PATRIMONIO_ASSUNTO_TABLE_NAME =
	"wizard_os_patrimonio_assunto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wizard_os_patrimonio_assuntoBaseSchema = z.object({
	id: z.number(),
	id_os: z.number(),
	status: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wizard_os_patrimonio_assuntoSchema =
	wizard_os_patrimonio_assuntoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wizard_os_patrimonio_assuntoCreateSchema =
	wizard_os_patrimonio_assuntoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wizard_os_patrimonio_assuntoUpdateSchema =
	wizard_os_patrimonio_assuntoCreateSchema.partial();
