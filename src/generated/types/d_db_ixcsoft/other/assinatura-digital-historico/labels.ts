/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURADIGITALHISTORICO_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const ASSINATURADIGITALHISTORICO_ORIGEMGERACAO_LABELS = {
	CO: "CO",
	OS: "OS",
} as const;

export const ASSINATURADIGITALHISTORICO_STATUS_LABELS = {
	P: "P",
	A: "A",
	S: "S",
	C: "C",
} as const;

export const ASSINATURADIGITALHISTORICO_TIPODOCUMENTO_LABELS = {
	C: "C",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_digital_historicoAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const assinatura_digital_historicoOrigemGeracaoSchema = z.enum(
	["CO", "OS"],
	{
		error: () => ({ message: "origem_geracao: valores válidos são [CO, OS]" }),
	},
);

export const assinatura_digital_historicoStatusSchema = z.enum(
	["P", "A", "S", "C"],
	{
		error: () => ({ message: "status: valores válidos são [P, A, S, C]" }),
	},
);

export const assinatura_digital_historicoTipoDocumentoSchema = z.enum(
	["C", "T"],
	{
		error: () => ({ message: "tipo_documento: valores válidos são [C, T]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaDigitalHistoricoAmbiente = z.infer<
	typeof assinatura_digital_historicoAmbienteSchema
>;

export type AssinaturaDigitalHistoricoOrigemGeracao = z.infer<
	typeof assinatura_digital_historicoOrigemGeracaoSchema
>;

export type AssinaturaDigitalHistoricoStatus = z.infer<
	typeof assinatura_digital_historicoStatusSchema
>;

export type AssinaturaDigitalHistoricoTipoDocumento = z.infer<
	typeof assinatura_digital_historicoTipoDocumentoSchema
>;
