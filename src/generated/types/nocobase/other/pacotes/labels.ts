/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PACOTES_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_abre_atendimento: "Abre Atendimento",
	f_clausula_bonus_velocidade: "Cláusula Bônus de Velocidade?",
	f_fk_desconto_pacotes: "f_fk_desconto_pacotes",
	f_fk_id_pacote: "f_fk_id_pacote",
	f_itens_do_pacote: "Itens do Pacote",
	f_mbps_bonus: "MBPS Bônus",
	f_mbps_padrao: "MBPS Padrão",
	f_mbps_total: "MBPS Total",
	f_mensalidade_com_desconto: "Total Mensalidade com Desconto",
	f_mensalidade_sem_desconto: "Total Mensalidade sem Desconto",
	f_nome_pacote: "Pacote",
	f_pacote_adicional: "Pacote Adicional?",
	f_pacote_principal: "Pacote principal?",
	f_status: "Status",
	f_vender_para: "Tipo de Pessoa",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const PACOTES_ABREATENDIMENTO_LABELS = {
	0: "NAO",
	1: "SIM",
} as const;

export const PACOTES_CLAUSULABONUSVELOCIDADE_LABELS = {
	Nao: "Nao",
	Sim: "Sim",
} as const;

export const PACOTES_PACOTEADICIONAL_LABELS = {
	0: "NAO",
	1: "SIM",
} as const;

export const PACOTES_PACOTEPRINCIPAL_LABELS = {
	0: "NAO",
	1: "SIM",
} as const;

export const PACOTES_STATUS_LABELS = {
	1: "Ativo",
	2: "Inativo",
} as const;

export const PACOTES_VENDERPARA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pacotesAbreAtendimentoSchema = z.enum(["0", "1"], {
	error: () => ({
		message: "abre_atendimento: valores válidos são [NAO, SIM]",
	}),
});

export const pacotesClausulaBonusVelocidadeSchema = z.enum(["Nao", "Sim"], {
	error: () => ({
		message: "clausula_bonus_velocidade: valores válidos são [Nao, Sim]",
	}),
});

export const pacotesPacoteAdicionalSchema = z.enum(["0", "1"], {
	error: () => ({
		message: "pacote_adicional: valores válidos são [NAO, SIM]",
	}),
});

export const pacotesPacotePrincipalSchema = z.enum(["0", "1"], {
	error: () => ({
		message: "pacote_principal: valores válidos são [NAO, SIM]",
	}),
});

export const pacotesStatusSchema = z.enum(["1", "2"], {
	error: () => ({ message: "status: valores válidos são [Ativo, Inativo]" }),
});

export const pacotesVenderParaSchema = z.enum(["PF", "PJ"], {
	error: () => ({
		message:
			"vender_para: valores válidos são [Pessoa Física, Pessoa Jurídica]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PacotesAbreAtendimento = z.infer<
	typeof pacotesAbreAtendimentoSchema
>;

export type PacotesClausulaBonusVelocidade = z.infer<
	typeof pacotesClausulaBonusVelocidadeSchema
>;

export type PacotesPacoteAdicional = z.infer<
	typeof pacotesPacoteAdicionalSchema
>;

export type PacotesPacotePrincipal = z.infer<
	typeof pacotesPacotePrincipalSchema
>;

export type PacotesStatus = z.infer<typeof pacotesStatusSchema>;

export type PacotesVenderPara = z.infer<typeof pacotesVenderParaSchema>;
