/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINANBACKUP_FIELD_LABELS = {
	conciliado: "conciliado",
	conciliado_extrato: "conciliado_extrato",
	conciliado_fn: "conciliado_fn",
	conta_: "conta_",
	credito: "credito",
	data: "data",
	debito: "debito",
	descontos_adicionais: "descontos_adicionais",
	documento: "documento",
	filial_id: "filial_id",
	fn_movim_finan_id: "fn_movim_finan_id",
	historico: "historico",
	id: "id",
	id_conciliacao_lote: "id_conciliacao_lote",
	id_conta: "id_conta",
	id_movim_finan: "id_movim_finan",
	id_operador: "id_operador",
	id_origem: "id_origem",
	id_receber: "id_receber",
	id_saida: "id_saida",
	pacrescimo: "pacrescimo",
	pdesconto: "pdesconto",
	rotina_origem: "rotina_origem",
	sistema_origem: "sistema_origem",
	tipo_lanc: "tipo_lanc",
	ultima_atualizacao: "ultima_atualizacao",
	vacrescimo: "vacrescimo",
	vdesconto: "vdesconto",
} as const;

export const FNMOVIMFINANBACKUP_CONCILIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNMOVIMFINANBACKUP_TIPOLANC_LABELS = {
	M: "M",
	P: "P",
	R: "R",
	D: "D",
	C: "C",
	AC: "AC",
	AF: "AF",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finan_backupConciliadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conciliado: valores válidos são [S, N]" }),
});

export const fn_movim_finan_backupTipoLancSchema = z.enum(
	["M", "P", "R", "D", "C", "AC", "AF", "T"],
	{
		error: () => ({
			message: "tipo_lanc: valores válidos são [M, P, R, D, C, AC, AF, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanBackupConciliado = z.infer<
	typeof fn_movim_finan_backupConciliadoSchema
>;

export type FnMovimFinanBackupTipoLanc = z.infer<
	typeof fn_movim_finan_backupTipoLancSchema
>;
