/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	ixc_permissoes_camposTipoESchema,
	ixc_permissoes_camposTipoGSchema,
	ixc_permissoes_camposTipoSchema,
} from "./labels";

export const IXC_PERMISSOES_CAMPOS_TABLE_NAME = "ixc_permissoes_campos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_permissoes_camposBaseSchema = z.object({
	id: z.number(),
	campo: z.string(),
	id_tabela: z.number(),
	tipo: ixc_permissoes_camposTipoSchema,
	tipo_e: ixc_permissoes_camposTipoESchema,
	tipo_g: ixc_permissoes_camposTipoGSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_permissoes_camposSchema = ixc_permissoes_camposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_permissoes_camposCreateSchema =
	ixc_permissoes_camposSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_permissoes_camposUpdateSchema =
	ixc_permissoes_camposCreateSchema.partial();
