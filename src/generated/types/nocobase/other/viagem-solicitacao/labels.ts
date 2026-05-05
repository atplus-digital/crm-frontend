/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS = {
	"Bocaina do Sul": "Bocaina do Sul",
	"Campo Belo do Sul": "Campo Belo do Sul",
	"Capão Alto": "Capão Alto",
	"Cerro Negro": "Cerro Negro",
	"Correia Pinto": "Correia Pinto",
	Curitibanos: "Curitibanos",
	Florianópolis: "Florianópolis",
	Painel: "Painel",
	Outros: "Outros",
} as const;

export const VIAGEMSOLICITACAO_DIARIA_LABELS = {
	5: "8h",
	10: "Acima de 8h",
} as const;

export const VIAGEMSOLICITACAO_FASE_LABELS = {
	"Caixa de Entrada": "Caixa de Entrada",
	"Processamento Financeiro": "Processamento Financeiro",
	Concluído: "Concluído",
	Arquivado: "Arquivado",
} as const;

export const VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS = {
	"Kwid ATPlus": "Kwid ATPlus",
	"Fiorino ATPlus": "Fiorino ATPlus",
	"Fiorino Fhortec": "Fiorino Fhortec",
	"Uno ATPlus": "Uno ATPlus",
	"Carro Particular": "Carro Particular",
	Outro: "Outro",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const viagem_solicitacaoDestinoViagemSchema = z.enum(
	[
		"Bocaina do Sul",
		"Campo Belo do Sul",
		"Capão Alto",
		"Cerro Negro",
		"Correia Pinto",
		"Curitibanos",
		"Florianópolis",
		"Painel",
		"Outros",
	],
	{
		error: () => ({
			message:
				"destino_viagem: valores válidos são [Bocaina do Sul, Campo Belo do Sul, Capão Alto, Cerro Negro, Correia Pinto, Curitibanos, Florianópolis, Painel, Outros]",
		}),
	},
);

export const viagem_solicitacaoDiariaSchema = z.enum(["5", "10"], {
	error: () => ({ message: "diaria: valores válidos são [8h, Acima de 8h]" }),
});

export const viagem_solicitacaoFaseSchema = z.enum(
	["Caixa de Entrada", "Processamento Financeiro", "Concluído", "Arquivado"],
	{
		error: () => ({
			message:
				"fase: valores válidos são [Caixa de Entrada, Processamento Financeiro, Concluído, Arquivado]",
		}),
	},
);

export const viagem_solicitacaoMeioTransporteSchema = z.enum(
	[
		"Kwid ATPlus",
		"Fiorino ATPlus",
		"Fiorino Fhortec",
		"Uno ATPlus",
		"Carro Particular",
		"Outro",
	],
	{
		error: () => ({
			message:
				"meio_transporte: valores válidos são [Kwid ATPlus, Fiorino ATPlus, Fiorino Fhortec, Uno ATPlus, Carro Particular, Outro]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViagemSolicitacaoDestinoViagem = z.infer<
	typeof viagem_solicitacaoDestinoViagemSchema
>;

export type ViagemSolicitacaoDiaria = z.infer<
	typeof viagem_solicitacaoDiariaSchema
>;

export type ViagemSolicitacaoFase = z.infer<
	typeof viagem_solicitacaoFaseSchema
>;

export type ViagemSolicitacaoMeioTransporte = z.infer<
	typeof viagem_solicitacaoMeioTransporteSchema
>;
