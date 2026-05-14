/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOINFOADICVOIP_FIELD_LABELS = {
	ativo: "ativo",
	fim_vigencia: "fim_vigencia",
	id: "id",
	id_contrato: "id_contrato",
	inicio_vigencia: "inicio_vigencia",
	portabilidade: "portabilidade",
	range_final: "range_final",
	range_inicial: "range_inicial",
} as const;

export const CLIENTECONTRATOINFOADICVOIP_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOINFOADICVOIP_PORTABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_info_adic_voipAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const cliente_contrato_info_adic_voipPortabilidadeSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "portabilidade: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoInfoAdicVoipAtivo = z.infer<
	typeof cliente_contrato_info_adic_voipAtivoSchema
>;

export type ClienteContratoInfoAdicVoipPortabilidade = z.infer<
	typeof cliente_contrato_info_adic_voipPortabilidadeSchema
>;
