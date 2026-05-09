/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSINTEGRACOES_METODO_LABELS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH",
	HEAD: "HEAD",
	OPTIONS: "OPTIONS",
	CONNECT: "CONNECT",
	TRACE: "TRACE",
} as const;

export const LOGSINTEGRACOES_TIPOINTEGRACAO_LABELS = {
	MVNO: "MVNO",
	SVA: "SVA",
	VOIP: "VOIP",
	TV: "TV",
	IOT: "IOT",
	AD: "AD",
	AC: "AC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_integracoesMetodoSchema = z.enum(
	[
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH",
		"HEAD",
		"OPTIONS",
		"CONNECT",
		"TRACE",
	],
	{
		error: () => ({
			message:
				"metodo: valores válidos são [GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE]",
		}),
	},
);

export const logs_integracoesTipoIntegracaoSchema = z.enum(
	["MVNO", "SVA", "VOIP", "TV", "IOT", "AD", "AC"],
	{
		error: () => ({
			message:
				"tipo_integracao: valores válidos são [MVNO, SVA, VOIP, TV, IOT, AD, AC]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsIntegracoesMetodo = z.infer<
	typeof logs_integracoesMetodoSchema
>;

export type LogsIntegracoesTipoIntegracao = z.infer<
	typeof logs_integracoesTipoIntegracaoSchema
>;
