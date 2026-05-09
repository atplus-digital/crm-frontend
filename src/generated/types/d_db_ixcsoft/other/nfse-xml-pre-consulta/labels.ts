/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NFSEXMLPRECONSULTA_COMUNICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NFSEXMLPRECONSULTA_CONSULTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nfse_xml_pre_consultaComunicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicado: valores válidos são [S, N]" }),
});

export const nfse_xml_pre_consultaConsultadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "consultado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NfseXmlPreConsultaComunicado = z.infer<
	typeof nfse_xml_pre_consultaComunicadoSchema
>;

export type NfseXmlPreConsultaConsultado = z.infer<
	typeof nfse_xml_pre_consultaConsultadoSchema
>;
