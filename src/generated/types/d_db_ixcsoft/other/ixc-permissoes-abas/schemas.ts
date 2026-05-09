/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ixc_permissoes_abasTipoSchema } from "./labels";

export const IXC_PERMISSOES_ABAS_TABLE_NAME = "ixc_permissoes_abas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_permissoes_abasBaseSchema = z.object({
	id: z.number(),
	aba: z.number(),
	id_tabela: z.number(),
	tipo: ixc_permissoes_abasTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_permissoes_abasSchema = ixc_permissoes_abasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_permissoes_abasCreateSchema = ixc_permissoes_abasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_permissoes_abasUpdateSchema =
	ixc_permissoes_abasCreateSchema.partial();
