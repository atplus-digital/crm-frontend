/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACAOSERASA_INTERMEDIADOR_LABELS = {
	SOA: "SOA",
	CONNECT: "CONNECT",
	CREDITONM: "CREDITONM",
} as const;

export const INTEGRACAOSERASA_PLANOCONSULTACONNECT_LABELS = {
	TOP: "TOP",
	LIGHT: "LIGHT",
	AMBOS: "AMBOS",
	BASICA: "BASICA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracao_serasaIntermediadorSchema = z.enum(
	["SOA", "CONNECT", "CREDITONM"],
	{
		error: () => ({
			message: "intermediador: valores válidos são [SOA, CONNECT, CREDITONM]",
		}),
	},
);

export const integracao_serasaPlanoConsultaConnectSchema = z.enum(
	["TOP", "LIGHT", "AMBOS", "BASICA"],
	{
		error: () => ({
			message:
				"plano_consulta_connect: valores válidos são [TOP, LIGHT, AMBOS, BASICA]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracaoSerasaIntermediador = z.infer<
	typeof integracao_serasaIntermediadorSchema
>;

export type IntegracaoSerasaPlanoConsultaConnect = z.infer<
	typeof integracao_serasaPlanoConsultaConnectSchema
>;
