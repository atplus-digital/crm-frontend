/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BAIXASSERASA_FIELD_LABELS = {
	codigo: "codigo",
	descricao: "descricao",
	id: "id",
	intermediador: "intermediador",
} as const;

export const BAIXASSERASA_INTERMEDIADOR_LABELS = {
	SOA: "SOA",
	CONNECT: "CONNECT",
	CREDITONM: "CREDITONM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const baixas_serasaIntermediadorSchema = z.enum(
	["SOA", "CONNECT", "CREDITONM"],
	{
		error: () => ({
			message: "intermediador: valores válidos são [SOA, CONNECT, CREDITONM]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BaixasSerasaIntermediador = z.infer<
	typeof baixas_serasaIntermediadorSchema
>;
