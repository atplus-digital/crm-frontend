/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_SERVICOS_ADICIONAIS_CODIGOS_INTEGRADOR_TABLE_NAME =
	"cliente_contrato_servicos_adicionais_codigos_integrador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_servicos_adicionais_codigos_integradorBaseSchema =
	z.object({
		id: z.number(),
		codigo: z.string(),
		descricao: z.string(),
		id_contrato: z.number(),
		id_integrador: z.number(),
	});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_servicos_adicionais_codigos_integradorSchema =
	cliente_contrato_servicos_adicionais_codigos_integradorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_adicionais_codigos_integradorCreateSchema =
	cliente_contrato_servicos_adicionais_codigos_integradorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_adicionais_codigos_integradorUpdateSchema =
	cliente_contrato_servicos_adicionais_codigos_integradorCreateSchema.partial();
