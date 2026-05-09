/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSUTICKET_IDTICKETORIGEM_LABELS = {
	A: "A",
	H: "H",
	I: "I",
} as const;

export const RELATORIOSUTICKET_RELACIONADOOSS_LABELS = {
	A: "A",
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUTICKET_TIPO_LABELS = {
	A: "A",
	C: "C",
	E: "E",
} as const;

export const RELATORIOSUTICKET_TIPODATACRIACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUTICKET_TIPODATARESERVADA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUTICKET_TIPODATAULTIMAALTERACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_su_ticketIdTicketOrigemSchema = z.enum(["A", "H", "I"], {
	error: () => ({ message: "id_ticket_origem: valores válidos são [A, H, I]" }),
});

export const relatorio_su_ticketRelacionadoOssSchema = z.enum(["A", "S", "N"], {
	error: () => ({ message: "relacionado_oss: valores válidos são [A, S, N]" }),
});

export const relatorio_su_ticketTipoSchema = z.enum(["A", "C", "E"], {
	error: () => ({ message: "tipo: valores válidos são [A, C, E]" }),
});

export const relatorio_su_ticketTipoDataCriacaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_criacao: valores válidos são [D, P]" }),
});

export const relatorio_su_ticketTipoDataReservadaSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_reservada: valores válidos são [D, P]" }),
});

export const relatorio_su_ticketTipoDataUltimaAlteracaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_ultima_alteracao: valores válidos são [D, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioSuTicketIdTicketOrigem = z.infer<
	typeof relatorio_su_ticketIdTicketOrigemSchema
>;

export type RelatorioSuTicketRelacionadoOss = z.infer<
	typeof relatorio_su_ticketRelacionadoOssSchema
>;

export type RelatorioSuTicketTipo = z.infer<
	typeof relatorio_su_ticketTipoSchema
>;

export type RelatorioSuTicketTipoDataCriacao = z.infer<
	typeof relatorio_su_ticketTipoDataCriacaoSchema
>;

export type RelatorioSuTicketTipoDataReservada = z.infer<
	typeof relatorio_su_ticketTipoDataReservadaSchema
>;

export type RelatorioSuTicketTipoDataUltimaAlteracao = z.infer<
	typeof relatorio_su_ticketTipoDataUltimaAlteracaoSchema
>;
