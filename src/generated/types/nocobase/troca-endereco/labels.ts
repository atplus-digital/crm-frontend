/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TROCAENDERECO_STATUS_LABELS = {
	1: "Atendimento Gerado",
	2: "Atendimento Concluído",
	3: "Atendimento para Campo",
	4: "Atendimento para CR",
	0: "Erro na Integração",
} as const;

export const TROCAENDERECO_TAXAINSTALACAO_LABELS = {
	0: "Não",
	1: "R$ 80,00 à vista",
	2: "R$ 80,00 em 2 vezes",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const troca_enderecoStatusSchema = z.enum(["1", "2", "3", "4", "0"], {
	error: () => ({
		message:
			"status: valores válidos são [Atendimento Gerado, Atendimento Concluído, Atendimento para Campo, Atendimento para CR, Erro na Integração]",
	}),
});

export const troca_enderecoTaxaInstalacaoSchema = z.enum(["0", "1", "2"], {
	error: () => ({
		message:
			"taxa_instalacao: valores válidos são [Não, R$ 80,00 à vista, R$ 80,00 em 2 vezes]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TrocaEnderecoStatus = z.infer<typeof troca_enderecoStatusSchema>;

export type TrocaEnderecoTaxaInstalacao = z.infer<
	typeof troca_enderecoTaxaInstalacaoSchema
>;
