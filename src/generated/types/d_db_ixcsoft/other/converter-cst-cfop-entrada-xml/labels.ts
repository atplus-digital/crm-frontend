/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONVERTERCSTCFOPENTRADAXML_FIELD_LABELS = {
	cfop_entrada: "cfop_entrada",
	cfop_saida: "cfop_saida",
	csosn_entrada: "csosn_entrada",
	csosn_saida: "csosn_saida",
	cst_entrada: "cst_entrada",
	cst_saida: "cst_saida",
	descricao: "descricao",
	id: "id",
	regime_tributario: "regime_tributario",
} as const;

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
