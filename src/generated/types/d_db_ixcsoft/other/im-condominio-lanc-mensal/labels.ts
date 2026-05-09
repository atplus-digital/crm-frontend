/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IMCONDOMINIOLANCMENSAL_MES_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	"09": "09",
	10: "10",
	11: "11",
	12: "12",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const im_condominio_lanc_mensalMesSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
	{
		error: () => ({
			message:
				"mes: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ImCondominioLancMensalMes = z.infer<
	typeof im_condominio_lanc_mensalMesSchema
>;
