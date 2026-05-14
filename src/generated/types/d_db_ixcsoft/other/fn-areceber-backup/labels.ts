/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERBACKUP_FIELD_LABELS = {
	data_emissao: "data_emissao",
	data_vencimento: "data_vencimento",
	documento: "documento",
	filial_id: "filial_id",
	fn_areceber_id: "fn_areceber_id",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cliente: "id_cliente",
	id_conta: "id_conta",
	id_contrato: "id_contrato",
	id_saida: "id_saida",
	pagamento_data: "pagamento_data",
	pagamento_valor: "pagamento_valor",
	previsao: "previsao",
	rotina_origem: "rotina_origem",
	status: "status",
	tipo_recebimento: "tipo_recebimento",
	ultima_atualizacao: "ultima_atualizacao",
	valor: "valor",
	valor_aberto: "valor_aberto",
	valor_recebido: "valor_recebido",
} as const;

export const FNARECEBERBACKUP_PREVISAO_LABELS = {
	N: "N",
	S: "S",
	M: "M",
} as const;

export const FNARECEBERBACKUP_STATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

export const FNARECEBERBACKUP_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	Cartão: "Cartão",
	Dinheiro: "Dinheiro",
	Depósito: "Depósito",
	Gateway: "Gateway",
	Débito: "Débito",
	Fatura: "Fatura",
	ArrecadacaoRecebimento: "ArrecadacaoRecebimento",
	Transferencia: "Transferencia",
	Pix: "Pix",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_backupPrevisaoSchema = z.enum(["N", "S", "M"], {
	error: () => ({ message: "previsao: valores válidos são [N, S, M]" }),
});

export const fn_areceber_backupStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({ message: "status: valores válidos são [A, R, P, C]" }),
});

export const fn_areceber_backupTipoRecebimentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"Cartão",
		"Dinheiro",
		"Depósito",
		"Gateway",
		"Débito",
		"Fatura",
		"ArrecadacaoRecebimento",
		"Transferencia",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [Boleto, Cheque, Cartão, Dinheiro, Depósito, Gateway, Débito, Fatura, ArrecadacaoRecebimento, Transferencia, Pix]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberBackupPrevisao = z.infer<
	typeof fn_areceber_backupPrevisaoSchema
>;

export type FnAreceberBackupStatus = z.infer<
	typeof fn_areceber_backupStatusSchema
>;

export type FnAreceberBackupTipoRecebimento = z.infer<
	typeof fn_areceber_backupTipoRecebimentoSchema
>;
