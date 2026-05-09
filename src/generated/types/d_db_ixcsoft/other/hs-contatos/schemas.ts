/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_contatosPublicadoSchema } from "./labels";

export const HS_CONTATOS_TABLE_NAME = "hs_contatos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_contatosBaseSchema = z.object({
	id: z.number(),
	cargo: z.string(),
	celular: z.string(),
	cidade: z.number(),
	email: z.string(),
	estado: z.number(),
	fax: z.string(),
	id_categoria: z.number(),
	inforcoes_adcionais: z.string(),
	nivel_acesso: z.string(),
	nome: z.string(),
	ordernar: z.number(),
	publicado: hs_contatosPublicadoSchema,
	rua: z.string(),
	telefone: z.string(),
	url_site: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_contatosSchema = hs_contatosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_contatosCreateSchema = hs_contatosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_contatosUpdateSchema = hs_contatosCreateSchema.partial();
