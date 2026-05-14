/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNEXTRATOBACKUP_FIELD_LABELS = {
	conciliado: "conciliado",
	conciliado_extrato: "conciliado_extrato",
	conciliado_financeiro: "conciliado_financeiro",
	credito: "credito",
	data: "data",
	debito: "debito",
	documento: "documento",
	fn_extrato_id: "fn_extrato_id",
	id: "id",
	id_conciliacao_lote: "id_conciliacao_lote",
	id_conta: "id_conta",
	id_extrato: "id_extrato",
	ids_financeiro: "ids_financeiro",
	rotina_origem: "rotina_origem",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const FNEXTRATOBACKUP_CONCILIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_extrato_backupConciliadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conciliado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnExtratoBackupConciliado = z.infer<
	typeof fn_extrato_backupConciliadoSchema
>;
