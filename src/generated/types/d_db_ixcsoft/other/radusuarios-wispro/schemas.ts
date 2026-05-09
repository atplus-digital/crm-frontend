/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radusuarios_wisproModoSchema,
	radusuarios_wisproStatusSchema,
	radusuarios_wisproTipoSchema,
} from "./labels";

export const RADUSUARIOS_WISPRO_TABLE_NAME = "radusuarios_wispro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_wisproBaseSchema = z.object({
	id: z.number(),
	cidade: z.string(),
	cliente_id: z.string(),
	cliente_nome: z.string(),
	external_id: z.string(),
	ftth_porta: z.number(),
	id_caixa_ftth: z.number(),
	id_df_projeto: z.number(),
	id_onu: z.string(),
	info_endereco: z.string(),
	ip: z.string(),
	latitude: z.string(),
	longitude: z.string(),
	mac: z.string(),
	modo: radusuarios_wisproModoSchema,
	numero: z.string(),
	olt: z.string(),
	plano_id: z.string(),
	plano_nome: z.string(),
	pppoe_nome: z.string(),
	pppoe_senha: z.string(),
	provincia: z.string(),
	rua: z.string(),
	servidor: z.string(),
	status: radusuarios_wisproStatusSchema,
	status_iva: z.string(),
	tipo: radusuarios_wisproTipoSchema,
	tipo_fatura: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_wisproSchema = radusuarios_wisproBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_wisproCreateSchema = radusuarios_wisproSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_wisproUpdateSchema =
	radusuarios_wisproCreateSchema.partial();
