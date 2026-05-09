/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { servidores_externos_radusuariosSessaoAtualSchema } from "./labels";

export const SERVIDORES_EXTERNOS_RADUSUARIOS_TABLE_NAME =
	"servidores_externos_radusuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servidores_externos_radusuariosBaseSchema = z.object({
	id: z.number(),
	id_radusuarios: z.number(),
	id_servidores_externos: z.number(),
	login: z.string(),
	servidores_externos_identificador: z.string(),
	sessao_atual: servidores_externos_radusuariosSessaoAtualSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servidores_externos_radusuariosSchema =
	servidores_externos_radusuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servidores_externos_radusuariosCreateSchema =
	servidores_externos_radusuariosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servidores_externos_radusuariosUpdateSchema =
	servidores_externos_radusuariosCreateSchema.partial();
