/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUTICKETSETOR_FIELD_LABELS = {
	ativo: "ativo",
	email: "email",
	exige_vinculo_produto: "exige_vinculo_produto",
	id: "id",
	mostra_hotsite: "mostra_hotsite",
	ordem: "ordem",
	presta_atendimento: "presta_atendimento",
	setor: "setor",
} as const;

export const SUTICKETSETOR_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUTICKETSETOR_EXIGEVINCULOPRODUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUTICKETSETOR_MOSTRAHOTSITE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUTICKETSETOR_PRESTAATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_ticket_setorAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const su_ticket_setorExigeVinculoProdutoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_vinculo_produto: valores válidos são [S, N]",
	}),
});

export const su_ticket_setorMostraHotsiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostra_hotsite: valores válidos são [S, N]" }),
});

export const su_ticket_setorPrestaAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "presta_atendimento: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuTicketSetorAtivo = z.infer<typeof su_ticket_setorAtivoSchema>;

export type SuTicketSetorExigeVinculoProduto = z.infer<
	typeof su_ticket_setorExigeVinculoProdutoSchema
>;

export type SuTicketSetorMostraHotsite = z.infer<
	typeof su_ticket_setorMostraHotsiteSchema
>;

export type SuTicketSetorPrestaAtendimento = z.infer<
	typeof su_ticket_setorPrestaAtendimentoSchema
>;
