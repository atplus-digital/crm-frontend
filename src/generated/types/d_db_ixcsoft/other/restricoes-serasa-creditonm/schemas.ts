/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RESTRICOES_SERASA_CREDITONM_TABLE_NAME =
	"restricoes_serasa_creditonm";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const restricoes_serasa_creditonmBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	intermediador: z.string(),
	tipo_pessoa: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const restricoes_serasa_creditonmSchema =
	restricoes_serasa_creditonmBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const restricoes_serasa_creditonmCreateSchema =
	restricoes_serasa_creditonmSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const restricoes_serasa_creditonmUpdateSchema =
	restricoes_serasa_creditonmCreateSchema.partial();
