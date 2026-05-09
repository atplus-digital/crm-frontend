/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONVENIO_NOTAS_VINCULADAS_TABLE_NAME = "convenio_notas_vinculadas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const convenio_notas_vinculadasBaseSchema = z.object({
	id: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_fn_areceber: z.number(),
	id_geracao_lote_convenio: z.number(),
	id_vd_saida: z.number(),
	modelo_nf: z.string(),
	numero_nf: z.number(),
	valor_financeiro: z.number(),
	valor_saida: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const convenio_notas_vinculadasSchema =
	convenio_notas_vinculadasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const convenio_notas_vinculadasCreateSchema =
	convenio_notas_vinculadasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const convenio_notas_vinculadasUpdateSchema =
	convenio_notas_vinculadasCreateSchema.partial();
