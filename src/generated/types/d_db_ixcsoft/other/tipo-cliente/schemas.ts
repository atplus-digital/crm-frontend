/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	tipo_clienteAtivoSchema,
	tipo_clienteContribuinteIcmsSchema,
	tipo_clienteTipoAssinanteSchema,
	tipo_clienteTipoClienteScmSchema,
} from "./labels";

export const TIPO_CLIENTE_TABLE_NAME = "tipo_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tipo_clienteBaseSchema = z.object({
	id: z.number(),
	ativo: tipo_clienteAtivoSchema,
	contribuinte_icms: tipo_clienteContribuinteIcmsSchema,
	tipo_assinante: tipo_clienteTipoAssinanteSchema,
	tipo_cliente: z.string(),
	tipo_cliente_scm: tipo_clienteTipoClienteScmSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tipo_clienteSchema = tipo_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tipo_clienteCreateSchema = tipo_clienteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tipo_clienteUpdateSchema = tipo_clienteCreateSchema.partial();
