/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_areceber_backupPrevisaoSchema,
	fn_areceber_backupStatusSchema,
	fn_areceber_backupTipoRecebimentoSchema,
} from "./labels";

export const FN_ARECEBER_BACKUP_TABLE_NAME = "fn_areceber_backup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_backupBaseSchema = z.object({
	id: z.number(),
	data_emissao: z.string(),
	data_vencimento: z.string(),
	documento: z.string(),
	filial_id: z.number(),
	fn_areceber_id: z.number(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_conta: z.number(),
	id_contrato: z.number(),
	id_saida: z.number(),
	pagamento_data: z.string(),
	pagamento_valor: z.number(),
	previsao: fn_areceber_backupPrevisaoSchema,
	rotina_origem: z.string(),
	status: fn_areceber_backupStatusSchema,
	tipo_recebimento: fn_areceber_backupTipoRecebimentoSchema,
	ultima_atualizacao: z.string(),
	valor: z.number(),
	valor_aberto: z.number(),
	valor_recebido: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_backupSchema = fn_areceber_backupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_backupCreateSchema = fn_areceber_backupSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_backupUpdateSchema =
	fn_areceber_backupCreateSchema.partial();
