/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VEICULOSDESPESASTIPO_FIELD_LABELS = {
	ativo: "ativo",
	atualizado_em: "atualizado_em",
	atualizado_por: "atualizado_por",
	descricao: "descricao",
	id: "id",
	observacao: "observacao",
	operador_id: "operador_id",
	padrao_sistema: "padrao_sistema",
} as const;

export const VEICULOSDESPESASTIPO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VEICULOSDESPESASTIPO_PADRAOSISTEMA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const veiculos_despesas_tipoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const veiculos_despesas_tipoPadraoSistemaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao_sistema: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VeiculosDespesasTipoAtivo = z.infer<
	typeof veiculos_despesas_tipoAtivoSchema
>;

export type VeiculosDespesasTipoPadraoSistema = z.infer<
	typeof veiculos_despesas_tipoPadraoSistemaSchema
>;
