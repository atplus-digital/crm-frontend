/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CUPONSDESCONTO_STATUS_LABELS = {
	"0": "Inativo",
	"1": "Ativo",
} as const;

export const CUPONSDESCONTO_TIPO_LABELS = {
	"1": "Baseado no Endereço",
	"2": "Geral",
	"3": "Upgrade para para contratos abaixo de R$ 100",
	"4": "Contratação de Segundo Plano",
} as const;

export const CUPONSDESCONTO_TIPONEGOCIACAO_LABELS = {
	"1": "Upgrade",
	"2": "Venda Nova",
	S: "Segunda Contratação",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cupons_descontoStatusSchema = z.enum(["0", "1"], {
	error: () => ({ message: "status: valores válidos são [Inativo, Ativo]" }),
});

export const cupons_descontoTipoSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message:
			"tipo: valores válidos são [Baseado no Endereço, Geral, Upgrade para para contratos abaixo de R$ 100, Contratação de Segundo Plano]",
	}),
});

export const cupons_descontoTipoNegociacaoSchema = z.enum(["1", "2", "S"], {
	error: () => ({
		message:
			"tipo_negociacao: valores válidos são [Upgrade, Venda Nova, Segunda Contratação]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CuponsDescontoStatus = z.infer<typeof cupons_descontoStatusSchema>;

export type CuponsDescontoTipo = z.infer<typeof cupons_descontoTipoSchema>;

export type CuponsDescontoTipoNegociacao = z.infer<
	typeof cupons_descontoTipoNegociacaoSchema
>;
