/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radgrupo_planosDomSchema,
	radgrupo_planosFeriadosSchema,
	radgrupo_planosMultiplicadorSchema,
	radgrupo_planosOpcaoSchema,
	radgrupo_planosQuaSchema,
	radgrupo_planosQuiSchema,
	radgrupo_planosSabSchema,
	radgrupo_planosSegSchema,
	radgrupo_planosSexSchema,
	radgrupo_planosTerSchema,
} from "./labels";

export const RADGRUPO_PLANOS_TABLE_NAME = "radgrupo_planos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgrupo_planosBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	dom: radgrupo_planosDomSchema,
	feriados: radgrupo_planosFeriadosSchema,
	horario_final: z.string(),
	horario_inicial: z.string(),
	id_radgrupos: z.number(),
	multiplicador: radgrupo_planosMultiplicadorSchema,
	opcao: radgrupo_planosOpcaoSchema,
	qua: radgrupo_planosQuaSchema,
	qui: radgrupo_planosQuiSchema,
	sab: radgrupo_planosSabSchema,
	seg: radgrupo_planosSegSchema,
	sex: radgrupo_planosSexSchema,
	ter: radgrupo_planosTerSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgrupo_planosSchema = radgrupo_planosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgrupo_planosCreateSchema = radgrupo_planosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgrupo_planosUpdateSchema =
	radgrupo_planosCreateSchema.partial();
