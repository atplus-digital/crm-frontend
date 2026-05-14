/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARLOTEPAGAMENTOLOG_FIELD_LABELS = {
	dados: "dados",
	data_criacao: "data_criacao",
	id: "id",
	id_apagar: "id_apagar",
	id_lote_pagamento: "id_lote_pagamento",
	integracao: "integracao",
	log: "log",
	situacao: "situacao",
	status: "status",
} as const;

export const FNAPAGARLOTEPAGAMENTOLOG_SITUACAO_LABELS = {
	COMUNICADO: "COMUNICADO",
	PAGO: "PAGO",
	RECUSADO: "RECUSADO",
	PENDENTE: "PENDENTE",
	ESTORNADO: "ESTORNADO",
} as const;

export const FNAPAGARLOTEPAGAMENTOLOG_STATUS_LABELS = {
	PENDENTE: "PENDENTE",
	SUCESSO: "SUCESSO",
	FALHOU: "FALHOU",
	AGUARDANDO: "AGUARDANDO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_lote_pagamento_logSituacaoSchema = z.enum(
	["COMUNICADO", "PAGO", "RECUSADO", "PENDENTE", "ESTORNADO"],
	{
		error: () => ({
			message:
				"situacao: valores válidos são [COMUNICADO, PAGO, RECUSADO, PENDENTE, ESTORNADO]",
		}),
	},
);

export const fn_apagar_lote_pagamento_logStatusSchema = z.enum(
	["PENDENTE", "SUCESSO", "FALHOU", "AGUARDANDO"],
	{
		error: () => ({
			message:
				"status: valores válidos são [PENDENTE, SUCESSO, FALHOU, AGUARDANDO]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarLotePagamentoLogSituacao = z.infer<
	typeof fn_apagar_lote_pagamento_logSituacaoSchema
>;

export type FnApagarLotePagamentoLogStatus = z.infer<
	typeof fn_apagar_lote_pagamento_logStatusSchema
>;
