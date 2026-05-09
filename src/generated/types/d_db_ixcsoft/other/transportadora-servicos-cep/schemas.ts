/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TRANSPORTADORA_SERVICOS_CEP_TABLE_NAME =
	"transportadora_servicos_cep";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transportadora_servicos_cepBaseSchema = z.object({
	id: z.number(),
	cep: z.string(),
	descricao: z.string(),
	id_transportadora: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transportadora_servicos_cepSchema =
	transportadora_servicos_cepBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transportadora_servicos_cepCreateSchema =
	transportadora_servicos_cepSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transportadora_servicos_cepUpdateSchema =
	transportadora_servicos_cepCreateSchema.partial();
