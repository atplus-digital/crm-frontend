/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTENEUTRO_FIELD_LABELS = {
	ativo: "ativo",
	automatizar_reservas: "automatizar_reservas",
	chave_assinatura: "chave_assinatura",
	client_id: "client_id",
	client_secret: "client_secret",
	data_reservada: "data_reservada",
	descricao: "descricao",
	id: "id",
	id_assunto: "id_assunto",
	id_cliente: "id_cliente",
	id_colaborador_responsavel: "id_colaborador_responsavel",
	id_contrato: "id_contrato",
	id_processo: "id_processo",
	inserir_atendimento: "inserir_atendimento",
	melhor_horario_reserva: "melhor_horario_reserva",
	mensagem: "mensagem",
	prioridade: "prioridade",
	redes: "redes",
	usuario_portal: "usuario_portal",
	vlan: "vlan",
} as const;

export const CLIENTENEUTRO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTENEUTRO_AUTOMATIZARRESERVAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTENEUTRO_INSERIRATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTENEUTRO_MELHORHORARIORESERVA_LABELS = {
	M: "M",
	T: "T",
	N: "N",
	Q: "Q",
} as const;

export const CLIENTENEUTRO_PRIORIDADE_LABELS = {
	B: "B",
	N: "N",
	A: "A",
	C: "C",
} as const;

export const CLIENTENEUTRO_USUARIOPORTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_neutroAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const cliente_neutroAutomatizarReservasSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "automatizar_reservas: valores válidos são [S, N]",
	}),
});

export const cliente_neutroInserirAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_atendimento: valores válidos são [S, N]" }),
});

export const cliente_neutroMelhorHorarioReservaSchema = z.enum(
	["M", "T", "N", "Q"],
	{
		error: () => ({
			message: "melhor_horario_reserva: valores válidos são [M, T, N, Q]",
		}),
	},
);

export const cliente_neutroPrioridadeSchema = z.enum(["B", "N", "A", "C"], {
	error: () => ({ message: "prioridade: valores válidos são [B, N, A, C]" }),
});

export const cliente_neutroUsuarioPortalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usuario_portal: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteNeutroAtivo = z.infer<typeof cliente_neutroAtivoSchema>;

export type ClienteNeutroAutomatizarReservas = z.infer<
	typeof cliente_neutroAutomatizarReservasSchema
>;

export type ClienteNeutroInserirAtendimento = z.infer<
	typeof cliente_neutroInserirAtendimentoSchema
>;

export type ClienteNeutroMelhorHorarioReserva = z.infer<
	typeof cliente_neutroMelhorHorarioReservaSchema
>;

export type ClienteNeutroPrioridade = z.infer<
	typeof cliente_neutroPrioridadeSchema
>;

export type ClienteNeutroUsuarioPortal = z.infer<
	typeof cliente_neutroUsuarioPortalSchema
>;
