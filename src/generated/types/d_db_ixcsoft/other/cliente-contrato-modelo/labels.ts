/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
