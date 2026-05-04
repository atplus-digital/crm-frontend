/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	registros_de_contatoCategoriaSchema,
	registros_de_contatoNotaTecnicoSchema,
	registros_de_contatoNotaVendasSchema,
} from "./labels";

export const T_REGISTROS_DE_CONTATO_TABLE_NAME = "t_registros_de_contato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const registros_de_contatoBaseSchema = z.object({
	id: z.number(),
	f_fk_id_contrato: z.number(),
	f_categoria: registros_de_contatoCategoriaSchema,
	f_encaminhamento_pendencia: z.string(),
	f_feedback_observacao: z.string(),
	f_ha_pendencia: z.boolean(),
	f_nota_tecnico: registros_de_contatoNotaTecnicoSchema,
	f_nota_vendas: registros_de_contatoNotaVendasSchema,
	f_resumo_contato: z.string(),
	f_titulo: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const registros_de_contatoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const registros_de_contatoSchema = registros_de_contatoBaseSchema.merge(
	registros_de_contatoRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const registros_de_contatoCreateSchema = registros_de_contatoSchema.omit(
	{
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const registros_de_contatoUpdateSchema =
	registros_de_contatoCreateSchema.partial();
