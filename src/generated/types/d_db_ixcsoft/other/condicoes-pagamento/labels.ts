/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONDICOESPAGAMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONDICOESPAGAMENTO_BAIXAPRIMEIRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONDICOESPAGAMENTO_COMENTRADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONDICOESPAGAMENTO_COMPRAVENDA_LABELS = {
	A: "A",
	C: "C",
	V: "V",
} as const;

export const CONDICOESPAGAMENTO_INDPAG_LABELS = {
	0: "0",
	1: "1",
	2: "2",
} as const;

export const CONDICOESPAGAMENTO_PERIODICIDADE_LABELS = {
	T: "T",
	S: "S",
	A: "A",
} as const;

export const CONDICOESPAGAMENTO_TIPO_LABELS = {
	M: "M",
	T: "T",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const condicoes_pagamentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const condicoes_pagamentoBaixaPrimeiraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "baixa_primeira: valores válidos são [S, N]" }),
});

export const condicoes_pagamentoComEntradaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "com_entrada: valores válidos são [S, N]" }),
});

export const condicoes_pagamentoCompraVendaSchema = z.enum(["A", "C", "V"], {
	error: () => ({ message: "compra_venda: valores válidos são [A, C, V]" }),
});

export const condicoes_pagamentoIndPagSchema = z.enum(["0", "1", "2"], {
	error: () => ({ message: "ind_pag: valores válidos são [0, 1, 2]" }),
});

export const condicoes_pagamentoPeriodicidadeSchema = z.enum(["T", "S", "A"], {
	error: () => ({ message: "periodicidade: valores válidos são [T, S, A]" }),
});

export const condicoes_pagamentoTipoSchema = z.enum(["M", "T", "P"], {
	error: () => ({ message: "tipo: valores válidos são [M, T, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CondicoesPagamentoAtivo = z.infer<
	typeof condicoes_pagamentoAtivoSchema
>;

export type CondicoesPagamentoBaixaPrimeira = z.infer<
	typeof condicoes_pagamentoBaixaPrimeiraSchema
>;

export type CondicoesPagamentoComEntrada = z.infer<
	typeof condicoes_pagamentoComEntradaSchema
>;

export type CondicoesPagamentoCompraVenda = z.infer<
	typeof condicoes_pagamentoCompraVendaSchema
>;

export type CondicoesPagamentoIndPag = z.infer<
	typeof condicoes_pagamentoIndPagSchema
>;

export type CondicoesPagamentoPeriodicidade = z.infer<
	typeof condicoes_pagamentoPeriodicidadeSchema
>;

export type CondicoesPagamentoTipo = z.infer<
	typeof condicoes_pagamentoTipoSchema
>;
