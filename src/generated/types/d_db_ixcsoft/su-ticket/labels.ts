/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUTICKET_IDTICKETORIGEM_LABELS = {
	I: "Interna",
	H: "Hotsite",
} as const;

export const SUTICKET_INTERACAOPENDENTE_LABELS = {
	E: "Externa",
	I: "Interna",
	N: "Nenhuma",
	A: "Ambos",
} as const;

export const SUTICKET_MELHORHORARIORESERVA_LABELS = {
	M: "Manhã",
	T: "Tarde",
	N: "Noite",
	Q: "Qualquer",
} as const;

export const SUTICKET_ORIGEMENDERECO_LABELS = {
	C: "Cliente",
	L: "Login",
	CC: "Contrato",
	M: "Manual",
} as const;

export const SUTICKET_ORIGEMENDERECOESTRUTURA_LABELS = {
	E: "Estrutura",
	M: "Manual",
} as const;

export const SUTICKET_PRIORIDADE_LABELS = {
	B: "Baixa",
	M: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const SUTICKET_SUSTATUS_LABELS = {
	N: "Novo",
	P: "Pendente",
	EP: "Em progresso",
	S: "Solucionado",
	C: "Cancelado",
} as const;

export const SUTICKET_TIPO_LABELS = {
	C: "Cliente",
	E: "Estrutura própria",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_ticketIdTicketOrigemSchema = z.enum(["I", "H"], {
	error: () => ({
		message: "id_ticket_origem: valores válidos são [Interna, Hotsite]",
	}),
});

export const su_ticketInteracaoPendenteSchema = z.enum(["E", "I", "N", "A"], {
	error: () => ({
		message:
			"interacao_pendente: valores válidos são [Externa, Interna, Nenhuma, Ambos]",
	}),
});

export const su_ticketMelhorHorarioReservaSchema = z.enum(
	["M", "T", "N", "Q"],
	{
		error: () => ({
			message:
				"melhor_horario_reserva: valores válidos são [Manhã, Tarde, Noite, Qualquer]",
		}),
	},
);

export const su_ticketOrigemEnderecoSchema = z.enum(["C", "L", "CC", "M"], {
	error: () => ({
		message:
			"origem_endereco: valores válidos são [Cliente, Login, Contrato, Manual]",
	}),
});

export const su_ticketOrigemEnderecoEstruturaSchema = z.enum(["E", "M"], {
	error: () => ({
		message:
			"origem_endereco_estrutura: valores válidos são [Estrutura, Manual]",
	}),
});

export const su_ticketPrioridadeSchema = z.enum(["B", "M", "A", "C"], {
	error: () => ({
		message: "prioridade: valores válidos são [Baixa, Normal, Alta, Crítica]",
	}),
});

export const su_ticketSuStatusSchema = z.enum(["N", "P", "EP", "S", "C"], {
	error: () => ({
		message:
			"su_status: valores válidos são [Novo, Pendente, Em progresso, Solucionado, Cancelado]",
	}),
});

export const su_ticketTipoSchema = z.enum(["C", "E"], {
	error: () => ({
		message: "tipo: valores válidos são [Cliente, Estrutura própria]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuTicketIdTicketOrigem = z.infer<
	typeof su_ticketIdTicketOrigemSchema
>;

export type SuTicketInteracaoPendente = z.infer<
	typeof su_ticketInteracaoPendenteSchema
>;

export type SuTicketMelhorHorarioReserva = z.infer<
	typeof su_ticketMelhorHorarioReservaSchema
>;

export type SuTicketOrigemEndereco = z.infer<
	typeof su_ticketOrigemEnderecoSchema
>;

export type SuTicketOrigemEnderecoEstrutura = z.infer<
	typeof su_ticketOrigemEnderecoEstruturaSchema
>;

export type SuTicketPrioridade = z.infer<typeof su_ticketPrioridadeSchema>;

export type SuTicketSuStatus = z.infer<typeof su_ticketSuStatusSchema>;

export type SuTicketTipo = z.infer<typeof su_ticketTipoSchema>;
