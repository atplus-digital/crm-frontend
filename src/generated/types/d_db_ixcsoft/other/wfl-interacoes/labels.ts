/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLINTERACOES_ATIVACONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLINTERACOES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLINTERACOES_DESTINATARIOEMAIL_LABELS = {
	C: "C",
	P: "P",
} as const;

export const WFLINTERACOES_DISPARAPROXIMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLINTERACOES_GATILHO_LABELS = {
	Abertura: "Abertura",
	Conclusao: "Conclusao",
	Tempo: "Tempo",
} as const;

export const WFLINTERACOES_TIPOINTERACAO_LABELS = {
	AC: "AC",
	SMS: "SMS",
	EMAIL: "EMAIL",
	OMNI: "OMNI",
	OS: "OS",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_interacoesAtivaContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativa_contrato: valores válidos são [S, N]" }),
});

export const wfl_interacoesAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const wfl_interacoesDestinatarioEmailSchema = z.enum(["C", "P"], {
	error: () => ({ message: "destinatario_email: valores válidos são [C, P]" }),
});

export const wfl_interacoesDisparaProximaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "dispara_proxima: valores válidos são [S, N]" }),
});

export const wfl_interacoesGatilhoSchema = z.enum(
	["Abertura", "Conclusao", "Tempo"],
	{
		error: () => ({
			message: "gatilho: valores válidos são [Abertura, Conclusao, Tempo]",
		}),
	},
);

export const wfl_interacoesTipoInteracaoSchema = z.enum(
	["AC", "SMS", "EMAIL", "OMNI", "OS"],
	{
		error: () => ({
			message: "tipo_interacao: valores válidos são [AC, SMS, EMAIL, OMNI, OS]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflInteracoesAtivaContrato = z.infer<
	typeof wfl_interacoesAtivaContratoSchema
>;

export type WflInteracoesAtivo = z.infer<typeof wfl_interacoesAtivoSchema>;

export type WflInteracoesDestinatarioEmail = z.infer<
	typeof wfl_interacoesDestinatarioEmailSchema
>;

export type WflInteracoesDisparaProxima = z.infer<
	typeof wfl_interacoesDisparaProximaSchema
>;

export type WflInteracoesGatilho = z.infer<typeof wfl_interacoesGatilhoSchema>;

export type WflInteracoesTipoInteracao = z.infer<
	typeof wfl_interacoesTipoInteracaoSchema
>;
