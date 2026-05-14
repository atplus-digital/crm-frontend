/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OPCOESSMP_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_bonus: "Bonus",
	f_fk_prod_negociacao_opcoes_smp: "f_fk_prod_negociacao_opcoes_smp",
	f_franquia_dados: "Franquia de Dados",
	f_minutos: "Pacote Minutos",
	f_nome_do_plano: "Nome do Plano",
	f_portabilidade: "Portabilidade",
	f_sms: "Pacote SMS",
	f_sva_incluso: "SVA Incluso",
	f_terminal: "Terminal",
	f_valor_smp: "Valor SMP",
	f_valor_sva: "Valor SVA",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const OPCOESSMP_PORTABILIDADE_LABELS = {
	0: "NÃO",
	1: "SIM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const opcoes_smpPortabilidadeSchema = z.enum(["0", "1"], {
	error: () => ({ message: "portabilidade: valores válidos são [NÃO, SIM]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OpcoesSmpPortabilidade = z.infer<
	typeof opcoes_smpPortabilidadeSchema
>;
