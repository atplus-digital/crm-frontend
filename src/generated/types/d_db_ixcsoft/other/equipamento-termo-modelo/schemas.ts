/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	equipamento_termo_modeloPadraoSchema,
	equipamento_termo_modeloPadraoSistemaSchema,
	equipamento_termo_modeloStatusSchema,
	equipamento_termo_modeloTermoDeSchema,
} from "./labels";

export const EQUIPAMENTO_TERMO_MODELO_TABLE_NAME = "equipamento_termo_modelo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const equipamento_termo_modeloBaseSchema = z.object({
	id: z.number(),
	modelo: z.string(),
	padrao: equipamento_termo_modeloPadraoSchema,
	padrao_sistema: equipamento_termo_modeloPadraoSistemaSchema,
	status: equipamento_termo_modeloStatusSchema,
	termo_de: equipamento_termo_modeloTermoDeSchema,
	texto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamento_termo_modeloSchema =
	equipamento_termo_modeloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamento_termo_modeloCreateSchema =
	equipamento_termo_modeloSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const equipamento_termo_modeloUpdateSchema =
	equipamento_termo_modeloCreateSchema.partial();
