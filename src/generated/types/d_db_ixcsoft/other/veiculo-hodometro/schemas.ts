/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULO_HODOMETRO_TABLE_NAME = "veiculo_hodometro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculo_hodometroBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	km_final: z.number(),
	km_final_hora: z.string(),
	km_inicial: z.number(),
	km_inicial_hora: z.string(),
	responsavel_atualizacao: z.number(),
	tecnico: z.number(),
	ultima_atualizacao: z.string(),
	veiculo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculo_hodometroSchema = veiculo_hodometroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculo_hodometroCreateSchema = veiculo_hodometroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculo_hodometroUpdateSchema =
	veiculo_hodometroCreateSchema.partial();
