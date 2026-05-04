/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONSULTASPJ_STATUSCONSULTA_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Alertas",
	"9": "Negado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const consultas_pjStatusConsultaSchema = z.enum(["1", "2", "9"], {
	error: () => ({
		message:
			"status_consulta: valores válidos são [Aprovado, Aprovado com Alertas, Negado]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConsultasPjStatusConsulta = z.infer<
	typeof consultas_pjStatusConsultaSchema
>;
