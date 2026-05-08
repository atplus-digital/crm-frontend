/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ufBaseSchema } from "../uf/schemas";
import { cidadeOrigemSchema } from "./labels";

export const CIDADE_TABLE_NAME = "cidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cidadeBaseSchema = z.object({
	id: z.number(),
	api_id: z.number(),
	cod_cidade_nfse_forquilhinha_sc: z.string(),
	cod_ibge: z.number(),
	cod_siafi: z.string(),
	codigo: z.string(),
	distrito_cod: z.string(),
	distrito_desc: z.string(),
	latitude: z.string(),
	longitude: z.string(),
	nome: z.string(),
	origem: cidadeOrigemSchema,
	regiao: z.string(),
	uf: z.number(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const cidadeRelationSchema = z.object({
	f_uf: z.lazy(() => ufBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cidadeSchema = cidadeBaseSchema.extend(cidadeRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cidadeCreateSchema = cidadeSchema.omit({
	f_uf: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cidadeUpdateSchema = cidadeCreateSchema.partial();
