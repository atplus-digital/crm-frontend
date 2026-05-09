/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	transportadoraHabilitaEcommerceSchema,
	transportadoraIsentoIcmsSchema,
	transportadoraTipoPessoaSchema,
} from "./labels";

export const TRANSPORTADORA_TABLE_NAME = "transportadora";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transportadoraBaseSchema = z.object({
	id: z.number(),
	api_ecommerce: z.string(),
	cpf_cnpj: z.string(),
	endereco: z.string(),
	habilita_ecommerce: transportadoraHabilitaEcommerceSchema,
	id_cidade: z.number(),
	ie: z.string(),
	isento_icms: transportadoraIsentoIcmsSchema,
	numero: z.string(),
	rntc: z.string(),
	telefone: z.string(),
	tipo_pessoa: transportadoraTipoPessoaSchema,
	transportadora: z.string(),
	veic_principal_placa: z.string(),
	veic_principal_rntc: z.string(),
	veic_principal_uf: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transportadoraSchema = transportadoraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transportadoraCreateSchema = transportadoraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transportadoraUpdateSchema = transportadoraCreateSchema.partial();
