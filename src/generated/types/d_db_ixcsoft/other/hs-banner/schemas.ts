/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_bannerExibirBanerSchema,
	hs_bannerFixoSchema,
	hs_bannerLimitadoSchema,
} from "./labels";

export const HS_BANNER_TABLE_NAME = "hs_banner";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_bannerBaseSchema = z.object({
	id: z.number(),
	altura: z.number(),
	categoria: z.number(),
	cliente: z.number(),
	decricoes_anotacoes: z.string(),
	exibicoes_contratadas: z.number(),
	exibir_baner: hs_bannerExibirBanerSchema,
	fixo: hs_bannerFixoSchema,
	largura: z.number(),
	limitado: hs_bannerLimitadoSchema,
	nome: z.string(),
	ordenar: z.number(),
	seletor_imagem: z.string(),
	tags: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_bannerSchema = hs_bannerBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_bannerCreateSchema = hs_bannerSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_bannerUpdateSchema = hs_bannerCreateSchema.partial();
