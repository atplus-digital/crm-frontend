/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOMODELO_FIELD_LABELS = {
	adesao_arquivo: "adesao_arquivo",
	cabecalho: "cabecalho",
	cabecalho_padrao: "cabecalho_padrao",
	cliente_contrato_comodato: "cliente_contrato_comodato",
	cliente_contrato_de_permanencia: "cliente_contrato_de_permanencia",
	comodato_arquivo: "comodato_arquivo",
	contrato_arquivo: "contrato_arquivo",
	eh_modelo_termo: "eh_modelo_termo",
	fidelidade: "fidelidade",
	id: "id",
	id_contrato_cliente: "id_contrato_cliente",
	id_contrato_testes: "id_contrato_testes",
	imprimi_roteador: "imprimi_roteador",
	imprimir_comodatos: "imprimir_comodatos",
	imprimir_debito: "imprimir_debito",
	imprimir_login_assinante: "imprimir_login_assinante",
	imprimir_pppoe: "imprimir_pppoe",
	modelo_subcontrato: "modelo_subcontrato",
	nome: "nome",
	permanencia_arquivo: "permanencia_arquivo",
	personalizado_arquivo: "personalizado_arquivo",
	prazo: "prazo",
	status: "status",
	termo_personalizado: "termo_personalizado",
	texto: "texto",
	texto_imobiliaria: "texto_imobiliaria",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const CLIENTECONTRATOMODELO_EHMODELOTERMO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOMODELO_IMPRIMIROTEADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOMODELO_IMPRIMIRCOMODATOS_LABELS = {
	C: "C",
	L: "L",
	T: "T",
} as const;

export const CLIENTECONTRATOMODELO_IMPRIMIRDEBITO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOMODELO_IMPRIMIRLOGINASSINANTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOMODELO_IMPRIMIRPPPOE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOMODELO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_modeloEhModeloTermoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "eh_modelo_termo: valores válidos são [S, N]" }),
});

export const cliente_contrato_modeloImprimiRoteadorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimi_roteador: valores válidos são [S, N]" }),
});

export const cliente_contrato_modeloImprimirComodatosSchema = z.enum(
	["C", "L", "T"],
	{
		error: () => ({
			message: "imprimir_comodatos: valores válidos são [C, L, T]",
		}),
	},
);

export const cliente_contrato_modeloImprimirDebitoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimir_debito: valores válidos são [S, N]" }),
});

export const cliente_contrato_modeloImprimirLoginAssinanteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprimir_login_assinante: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contrato_modeloImprimirPppoeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimir_pppoe: valores válidos são [S, N]" }),
});

export const cliente_contrato_modeloStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoModeloEhModeloTermo = z.infer<
	typeof cliente_contrato_modeloEhModeloTermoSchema
>;

export type ClienteContratoModeloImprimiRoteador = z.infer<
	typeof cliente_contrato_modeloImprimiRoteadorSchema
>;

export type ClienteContratoModeloImprimirComodatos = z.infer<
	typeof cliente_contrato_modeloImprimirComodatosSchema
>;

export type ClienteContratoModeloImprimirDebito = z.infer<
	typeof cliente_contrato_modeloImprimirDebitoSchema
>;

export type ClienteContratoModeloImprimirLoginAssinante = z.infer<
	typeof cliente_contrato_modeloImprimirLoginAssinanteSchema
>;

export type ClienteContratoModeloImprimirPppoe = z.infer<
	typeof cliente_contrato_modeloImprimirPppoeSchema
>;

export type ClienteContratoModeloStatus = z.infer<
	typeof cliente_contrato_modeloStatusSchema
>;
