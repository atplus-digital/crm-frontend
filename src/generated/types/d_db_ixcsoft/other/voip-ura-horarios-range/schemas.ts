/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	voip_ura_horarios_rangeDomSchema,
	voip_ura_horarios_rangeFeriadosSchema,
	voip_ura_horarios_rangeQuaSchema,
	voip_ura_horarios_rangeQuiSchema,
	voip_ura_horarios_rangeSabSchema,
	voip_ura_horarios_rangeSegSchema,
	voip_ura_horarios_rangeSexSchema,
	voip_ura_horarios_rangeTerSchema,
} from "./labels";

export const VOIP_URA_HORARIOS_RANGE_TABLE_NAME = "voip_ura_horarios_range";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ura_horarios_rangeBaseSchema = z.object({
	id: z.number(),
	dom: voip_ura_horarios_rangeDomSchema,
	feriados: voip_ura_horarios_rangeFeriadosSchema,
	fim: z.string(),
	id_horarios: z.number(),
	inicio: z.string(),
	qua: voip_ura_horarios_rangeQuaSchema,
	qui: voip_ura_horarios_rangeQuiSchema,
	sab: voip_ura_horarios_rangeSabSchema,
	seg: voip_ura_horarios_rangeSegSchema,
	sex: voip_ura_horarios_rangeSexSchema,
	ter: voip_ura_horarios_rangeTerSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ura_horarios_rangeSchema = voip_ura_horarios_rangeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ura_horarios_rangeCreateSchema =
	voip_ura_horarios_rangeSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ura_horarios_rangeUpdateSchema =
	voip_ura_horarios_rangeCreateSchema.partial();
