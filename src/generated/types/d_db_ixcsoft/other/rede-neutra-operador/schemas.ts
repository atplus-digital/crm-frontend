/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rede_neutra_operadorAtivoSchema,
	rede_neutra_operadorIntegracaoSchema,
} from "./labels";

export const REDE_NEUTRA_OPERADOR_TABLE_NAME = "rede_neutra_operador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rede_neutra_operadorBaseSchema = z.object({
	id: z.number(),
	api_server: z.string(),
	ativo: rede_neutra_operadorAtivoSchema,
	client_id: z.string(),
	client_secret: z.string(),
	descricao: z.string(),
	integracao: rede_neutra_operadorIntegracaoSchema,
	tenant: z.string(),
	token: z.string(),
	token_generation_date: z.string(),
	url: z.string(),
	url_callback: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rede_neutra_operadorSchema = rede_neutra_operadorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rede_neutra_operadorCreateSchema = rede_neutra_operadorSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rede_neutra_operadorUpdateSchema =
	rede_neutra_operadorCreateSchema.partial();
