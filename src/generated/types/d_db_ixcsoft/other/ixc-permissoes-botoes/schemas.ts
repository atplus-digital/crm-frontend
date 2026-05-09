/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	ixc_permissoes_botoesLocalSchema,
	ixc_permissoes_botoesTipoSchema,
} from "./labels";

export const IXC_PERMISSOES_BOTOES_TABLE_NAME = "ixc_permissoes_botoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_permissoes_botoesBaseSchema = z.object({
	id: z.number(),
	botao: z.string(),
	id_tabela: z.number(),
	local: ixc_permissoes_botoesLocalSchema,
	tipo: ixc_permissoes_botoesTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_permissoes_botoesSchema = ixc_permissoes_botoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_permissoes_botoesCreateSchema =
	ixc_permissoes_botoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_permissoes_botoesUpdateSchema =
	ixc_permissoes_botoesCreateSchema.partial();
