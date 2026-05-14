/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DADOSADICIONAISCLIENTECONTRATO_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_forma_de_pagamento: "Forma de pagamento preferida",
	f_id_cliente_contrato: "ID Contrato",
	f_origem_cliente: "Origem do Cliente",
	f_perfil_de_uso: "Perfil de uso",
	f_pessoas_na_residencia: "Num Pessoas na Residência",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS = {
	carne: "Carnê",
	boleto: "Boleto",
	recorrencia: "Recorrência",
} as const;

export const DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS = {
	trabalho: "Trabalho",
	estudo: "Estudo",
	jogos: "Jogos",
	streaming: "Streaming",
	pesquisa: "Pesquisa (Google)",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const dados_adicionais_cliente_contratoFormaDePagamentoSchema = z.enum(
	["carne", "boleto", "recorrencia"],
	{
		error: () => ({
			message:
				"forma_de_pagamento: valores válidos são [Carnê, Boleto, Recorrência]",
		}),
	},
);

export const dados_adicionais_cliente_contratoPerfilDeUsoSchema = z.enum(
	["trabalho", "estudo", "jogos", "streaming", "pesquisa"],
	{
		error: () => ({
			message:
				"perfil_de_uso: valores válidos são [Trabalho, Estudo, Jogos, Streaming, Pesquisa (Google)]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DadosAdicionaisClienteContratoFormaDePagamento = z.infer<
	typeof dados_adicionais_cliente_contratoFormaDePagamentoSchema
>;

export type DadosAdicionaisClienteContratoPerfilDeUso = z.infer<
	typeof dados_adicionais_cliente_contratoPerfilDeUsoSchema
>;
