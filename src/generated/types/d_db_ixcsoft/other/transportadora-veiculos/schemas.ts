/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { transportadora_veiculosPadraoSchema } from "./labels";

export const TRANSPORTADORA_VEICULOS_TABLE_NAME = "transportadora_veiculos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transportadora_veiculosBaseSchema = z.object({
	id: z.number(),
	balsa: z.string(),
	descricao: z.string(),
	id_transportadora: z.number(),
	padrao: transportadora_veiculosPadraoSchema,
	placa: z.string(),
	rntc: z.string(),
	uf: z.string(),
	vagao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transportadora_veiculosSchema = transportadora_veiculosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transportadora_veiculosCreateSchema =
	transportadora_veiculosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transportadora_veiculosUpdateSchema =
	transportadora_veiculosCreateSchema.partial();
