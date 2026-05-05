/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { f_funcionariosBaseSchema } from "../funcionarios/schemas";
import {
	patrimonioEstadoUsoSchema,
	patrimonioTipoPatrimonioSchema,
} from "./labels";

export const T_PATRIMONIO_TABLE_NAME = "t_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonioBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_id_tecnico_ixc: z.number(),
	f_armazenamento: z.string(),
	f_estado_uso: patrimonioEstadoUsoSchema,
	f_modelo: z.string(),
	f_nome_patrimonio: z.string(),
	f_numero_serie: z.string(),
	f_processador: z.string(),
	f_quantidade: z.number(),
	f_ram: z.string(),
	f_so: z.string(),
	f_tipo_patrimonio: patrimonioTipoPatrimonioSchema,
	f_valor_patrimonio: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const patrimonioRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonioSchema = patrimonioBaseSchema.extend(
	patrimonioRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonioCreateSchema = patrimonioSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonioUpdateSchema = patrimonioCreateSchema.partial();
