/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOASSINATURATERMO_FIELD_LABELS = {
	assinado: "assinado",
	ativar_contrato: "ativar_contrato",
	id: "id",
	id_cliente_contrato_modelo: "id_cliente_contrato_modelo",
	id_contrato: "id_contrato",
	id_termo: "id_termo",
	token_assinatura_digital: "token_assinatura_digital",
	url_assinatura_digital: "url_assinatura_digital",
} as const;

export const CLIENTECONTRATOASSINATURATERMO_ASSINADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOASSINATURATERMO_ATIVARCONTRATO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_assinatura_termoAssinadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "assinado: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_assinatura_termoAtivarContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "ativar_contrato: valores válidos são [S, N, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoAssinaturaTermoAssinado = z.infer<
	typeof cliente_contrato_assinatura_termoAssinadoSchema
>;

export type ClienteContratoAssinaturaTermoAtivarContrato = z.infer<
	typeof cliente_contrato_assinatura_termoAtivarContratoSchema
>;
