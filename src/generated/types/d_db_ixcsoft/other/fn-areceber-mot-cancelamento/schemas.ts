/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_areceber_mot_cancelamentoAtivoSchema,
	fn_areceber_mot_cancelamentoConsiderarChurnSchema,
	fn_areceber_mot_cancelamentoFinalidadeSchema,
	fn_areceber_mot_cancelamentoInadimplenciaSchema,
	fn_areceber_mot_cancelamentoLiberaPeriodoSchema,
	fn_areceber_mot_cancelamentoNaoVencidosInadimplenciaSchema,
} from "./labels";

export const FN_ARECEBER_MOT_CANCELAMENTO_TABLE_NAME =
	"fn_areceber_mot_cancelamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_mot_cancelamentoBaseSchema = z.object({
	id: z.number(),
	ativo: fn_areceber_mot_cancelamentoAtivoSchema,
	considerar_churn: fn_areceber_mot_cancelamentoConsiderarChurnSchema,
	finalidade: fn_areceber_mot_cancelamentoFinalidadeSchema,
	id_conta: z.number(),
	inadimplencia: fn_areceber_mot_cancelamentoInadimplenciaSchema,
	libera_periodo: fn_areceber_mot_cancelamentoLiberaPeriodoSchema,
	motivo: z.string(),
	nao_vencidos_inadimplencia:
		fn_areceber_mot_cancelamentoNaoVencidosInadimplenciaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_mot_cancelamentoSchema =
	fn_areceber_mot_cancelamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_mot_cancelamentoCreateSchema =
	fn_areceber_mot_cancelamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_mot_cancelamentoUpdateSchema =
	fn_areceber_mot_cancelamentoCreateSchema.partial();
