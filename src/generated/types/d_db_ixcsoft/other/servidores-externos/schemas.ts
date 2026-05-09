/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	servidores_externosAtivoSchema,
	servidores_externosTipoSchema,
} from "./labels";

export const SERVIDORES_EXTERNOS_TABLE_NAME = "servidores_externos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servidores_externosBaseSchema = z.object({
	id: z.number(),
	ativo: servidores_externosAtivoSchema,
	descricao: z.string(),
	identificador: z.string(),
	prioridade: z.number(),
	ssh_host: z.string(),
	ssh_login: z.string(),
	ssh_porta: z.number(),
	ssh_senha: z.string(),
	tipo: servidores_externosTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servidores_externosSchema = servidores_externosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servidores_externosCreateSchema = servidores_externosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servidores_externosUpdateSchema =
	servidores_externosCreateSchema.partial();
