/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const WIZARD_OS_PATRIMONIO_COMODATO_TABLE_NAME =
	"wizard_os_patrimonio_comodato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wizard_os_patrimonio_comodatoBaseSchema = z.object({
	id: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_wizard_os_patrimonio_assunto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wizard_os_patrimonio_comodatoSchema =
	wizard_os_patrimonio_comodatoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wizard_os_patrimonio_comodatoCreateSchema =
	wizard_os_patrimonio_comodatoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wizard_os_patrimonio_comodatoUpdateSchema =
	wizard_os_patrimonio_comodatoCreateSchema.partial();
