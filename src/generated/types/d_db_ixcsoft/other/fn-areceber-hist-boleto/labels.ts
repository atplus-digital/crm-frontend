/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERHISTBOLETO_ENVIADOEMAILMASSAPERIODO_LABELS = {
	E: "E",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema = z.enum(
	["E", "N"],
	{
		error: () => ({
			message: "enviado_email_massa_periodo: valores válidos são [E, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberHistBoletoEnviadoEmailMassaPeriodo = z.infer<
	typeof fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema
>;
