/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_movim_finan_backupConciliadoSchema,
	fn_movim_finan_backupTipoLancSchema,
} from "./labels";

export const FN_MOVIM_FINAN_BACKUP_TABLE_NAME = "fn_movim_finan_backup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_movim_finan_backupBaseSchema = z.object({
	id: z.number(),
	conciliado: fn_movim_finan_backupConciliadoSchema,
	conciliado_extrato: z.string(),
	conciliado_fn: z.string(),
	conta_: z.number(),
	credito: z.number(),
	data: z.string(),
	debito: z.number(),
	descontos_adicionais: z.number(),
	documento: z.string(),
	filial_id: z.number(),
	fn_movim_finan_id: z.number(),
	historico: z.string(),
	id_conciliacao_lote: z.number(),
	id_conta: z.number(),
	id_movim_finan: z.number(),
	id_operador: z.number(),
	id_origem: z.number(),
	id_receber: z.number(),
	id_saida: z.number(),
	pacrescimo: z.number(),
	pdesconto: z.number(),
	rotina_origem: z.string(),
	sistema_origem: z.number(),
	tipo_lanc: fn_movim_finan_backupTipoLancSchema,
	ultima_atualizacao: z.string(),
	vacrescimo: z.number(),
	vdesconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_movim_finan_backupSchema = fn_movim_finan_backupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_movim_finan_backupCreateSchema =
	fn_movim_finan_backupSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_movim_finan_backupUpdateSchema =
	fn_movim_finan_backupCreateSchema.partial();
