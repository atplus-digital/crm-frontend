/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONVERTERCSTCFOPENTRADAXML_REGIMETRIBUTARIO_LABELS = {
	simples: "simples",
	normal: "normal",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const converter_cst_cfop_entrada_xmlRegimeTributarioSchema = z.enum(
	["simples", "normal"],
	{
		error: () => ({
			message: "regime_tributario: valores válidos são [simples, normal]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConverterCstCfopEntradaXmlRegimeTributario = z.infer<
	typeof converter_cst_cfop_entrada_xmlRegimeTributarioSchema
>;
