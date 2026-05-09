/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { nas_cgnatProtocoloSchema, nas_cgnatTipoSchema } from "./labels";

export const NAS_CGNAT_TABLE_NAME = "nas_cgnat";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_cgnatBaseSchema = z.object({
	id: z.number(),
	configuracao_cgnat: z.string(),
	id_integracao_cgnat: z.number(),
	id_nas: z.number(),
	interface_wan: z.string(),
	ip_final: z.string(),
	ip_inicial: z.string(),
	ip_privado_por_publico: z.number(),
	ip_publico: z.string(),
	porta_inicial: z.number(),
	portas_por_ip: z.number(),
	protocolo: nas_cgnatProtocoloSchema,
	rede: z.string(),
	tipo: nas_cgnatTipoSchema,
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_cgnatSchema = nas_cgnatBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_cgnatCreateSchema = nas_cgnatSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_cgnatUpdateSchema = nas_cgnatCreateSchema.partial();
