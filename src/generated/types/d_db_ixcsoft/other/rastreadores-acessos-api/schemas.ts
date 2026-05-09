/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rastreadores_acessos_apiStatusSchema,
	rastreadores_acessos_apiTipoAutenticacaoSchema,
} from "./labels";

export const RASTREADORES_ACESSOS_API_TABLE_NAME = "rastreadores_acessos_api";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rastreadores_acessos_apiBaseSchema = z.object({
	id: z.number(),
	api_key: z.string(),
	fornecedor_api: z.string(),
	senha: z.string(),
	status: rastreadores_acessos_apiStatusSchema,
	tipo_autenticacao: rastreadores_acessos_apiTipoAutenticacaoSchema,
	tipo_busca: z.string(),
	token: z.string(),
	url_autenticacao: z.string(),
	url_busca_posicao: z.string(),
	usuario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rastreadores_acessos_apiSchema =
	rastreadores_acessos_apiBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rastreadores_acessos_apiCreateSchema =
	rastreadores_acessos_apiSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rastreadores_acessos_apiUpdateSchema =
	rastreadores_acessos_apiCreateSchema.partial();
