/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_oss_kit_equipamentoAdicionalMensalidadeSchema,
	su_oss_kit_equipamentoComodatoSchema,
	su_oss_kit_equipamentoRepetirSchema,
	su_oss_kit_equipamentoTipoItemSchema,
} from "./labels";

export const SU_OSS_KIT_EQUIPAMENTO_TABLE_NAME = "su_oss_kit_equipamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_kit_equipamentoBaseSchema = z.object({
	id: z.number(),
	adicional_mensalidade: su_oss_kit_equipamentoAdicionalMensalidadeSchema,
	comodato: su_oss_kit_equipamentoComodatoSchema,
	id_oss_kit: z.number(),
	id_produto: z.number(),
	id_su_oss_assunto: z.number(),
	qtde: z.number(),
	repetir: su_oss_kit_equipamentoRepetirSchema,
	repetir_qtde: z.number(),
	repetir_valor_unit: z.number(),
	tipo_item: su_oss_kit_equipamentoTipoItemSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_kit_equipamentoSchema = su_oss_kit_equipamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_kit_equipamentoCreateSchema =
	su_oss_kit_equipamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_kit_equipamentoUpdateSchema =
	su_oss_kit_equipamentoCreateSchema.partial();
