/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	wfl_parametro_ossAbreDuplicadaAreceberSchema,
	wfl_parametro_ossAbreDuplicadaClienteSchema,
	wfl_parametro_ossAbreDuplicadaContratoSchema,
	wfl_parametro_ossConsideraContratoInativoSchema,
	wfl_parametro_ossConsideraContratoNegativadoSchema,
	wfl_parametro_ossConsideraFinalizadaSchema,
	wfl_parametro_ossPrioridadeSchema,
} from "./labels";

export const WFL_PARAMETRO_OSS_TABLE_NAME = "wfl_parametro_oss";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_parametro_ossBaseSchema = z.object({
	id: z.number(),
	abre_duplicada_areceber: wfl_parametro_ossAbreDuplicadaAreceberSchema,
	abre_duplicada_cliente: wfl_parametro_ossAbreDuplicadaClienteSchema,
	abre_duplicada_contrato: wfl_parametro_ossAbreDuplicadaContratoSchema,
	considera_contrato_inativo: wfl_parametro_ossConsideraContratoInativoSchema,
	considera_contrato_negativado:
		wfl_parametro_ossConsideraContratoNegativadoSchema,
	considera_finalizada: wfl_parametro_ossConsideraFinalizadaSchema,
	descricao: z.string(),
	id_assunto: z.number(),
	id_setor: z.number(),
	id_tecnico: z.number(),
	id_wfl_processo: z.number(),
	prioridade: wfl_parametro_ossPrioridadeSchema,
	processo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_parametro_ossSchema = wfl_parametro_ossBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_parametro_ossCreateSchema = wfl_parametro_ossSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_parametro_ossUpdateSchema =
	wfl_parametro_ossCreateSchema.partial();
