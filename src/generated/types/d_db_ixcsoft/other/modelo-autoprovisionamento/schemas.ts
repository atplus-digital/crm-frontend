/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	modelo_autoprovisionamentoAtivoSchema,
	modelo_autoprovisionamentoTipoSchema,
} from "./labels";

export const MODELO_AUTOPROVISIONAMENTO_TABLE_NAME =
	"modelo_autoprovisionamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const modelo_autoprovisionamentoBaseSchema = z.object({
	id: z.number(),
	ativo: modelo_autoprovisionamentoAtivoSchema,
	dispositivos_vinculados: z.number(),
	id_hardware: z.number(),
	id_perfil: z.number(),
	id_transmissor: z.number(),
	tipo: modelo_autoprovisionamentoTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const modelo_autoprovisionamentoSchema =
	modelo_autoprovisionamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const modelo_autoprovisionamentoCreateSchema =
	modelo_autoprovisionamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const modelo_autoprovisionamentoUpdateSchema =
	modelo_autoprovisionamentoCreateSchema.partial();
