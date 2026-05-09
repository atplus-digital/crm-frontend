/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_servicos_adicionais_integradorPlataformaIntegracaoSchema } from "./labels";

export const CLIENTE_CONTRATO_SERVICOS_ADICIONAIS_INTEGRADOR_TABLE_NAME =
	"cliente_contrato_servicos_adicionais_integrador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_servicos_adicionais_integradorBaseSchema =
	z.object({
		id: z.number(),
		aviso_email: z.number(),
		aviso_email_excedido: z.number(),
		aviso_limite: z.number(),
		descricao: z.string(),
		nome: z.string(),
		plataforma_integracao:
			cliente_contrato_servicos_adicionais_integradorPlataformaIntegracaoSchema,
	});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_servicos_adicionais_integradorSchema =
	cliente_contrato_servicos_adicionais_integradorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_adicionais_integradorCreateSchema =
	cliente_contrato_servicos_adicionais_integradorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_servicos_adicionais_integradorUpdateSchema =
	cliente_contrato_servicos_adicionais_integradorCreateSchema.partial();
