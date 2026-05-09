/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	veiculos_mdfeModalSchema,
	veiculos_mdfeStatusSchema,
	veiculos_mdfeTpemitSchema,
	veiculos_mdfeTptranspSchema,
} from "./labels";

export const VEICULOS_MDFE_TABLE_NAME = "veiculos_mdfe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_mdfeBaseSchema = z.object({
	id: z.number(),
	chave: z.string(),
	cidade_carregamento: z.number(),
	cmdf: z.string(),
	dhemi: z.string(),
	dhiniviagem: z.string(),
	documento_id: z.number(),
	filial_id: z.number(),
	modal: veiculos_mdfeModalSchema,
	modelo: z.string(),
	nmdf: z.number(),
	obs: z.string(),
	serie: z.string(),
	status: veiculos_mdfeStatusSchema,
	tpemit: veiculos_mdfeTpemitSchema,
	tptransp: veiculos_mdfeTptranspSchema,
	uf_final: z.number(),
	veiculo_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_mdfeSchema = veiculos_mdfeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_mdfeCreateSchema = veiculos_mdfeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_mdfeUpdateSchema = veiculos_mdfeCreateSchema.partial();
