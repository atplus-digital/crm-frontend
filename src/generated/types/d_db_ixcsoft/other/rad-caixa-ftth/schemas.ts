/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rad_caixa_ftthStatusSchema, rad_caixa_ftthTipoSchema } from "./labels";

export const RAD_CAIXA_FTTH_TABLE_NAME = "rad_caixa_ftth";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_caixa_ftthBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	capacidade: z.number(),
	cep: z.string(),
	codigo_estilo_caixa: z.string(),
	descricao: z.string(),
	endereco: z.string(),
	external_id: z.string(),
	id_cidade: z.number(),
	id_diretorio: z.number(),
	id_interface: z.number(),
	id_mini_projeto: z.number(),
	id_projeto: z.number(),
	id_tecnologia: z.number(),
	id_transmissor: z.number(),
	idx: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	numero: z.string(),
	obs_caixa_ftth: z.string(),
	status: rad_caixa_ftthStatusSchema,
	tipo: rad_caixa_ftthTipoSchema,
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_caixa_ftthSchema = rad_caixa_ftthBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_caixa_ftthCreateSchema = rad_caixa_ftthSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_caixa_ftthUpdateSchema = rad_caixa_ftthCreateSchema.partial();
