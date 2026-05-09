/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOMODELOIMPRESSAOETIQUETA_CONTROLEIMPRESSAO_LABELS = {
	codigo_patrimonio: "codigo_patrimonio",
	mac: "mac",
	numero_serie: "numero_serie",
	numero_patrimonio: "numero_patrimonio",
} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_EXIBIRDESCRICAOCOMPLETA_LABELS =
	{
		C: "C",
		A: "A",
	} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_MODELOPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_MODELOPADRAOSISTEMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_ORIGEMLOGOIMPRESSAO_LABELS = {
	SES: "SES",
	EMP: "EMP",
	PAT: "PAT",
	P: "P",
} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_TAMANHOETIQUETA_LABELS = {
	"6x2cm": "6x2cm",
	"5x3cm": "5x3cm",
	"10x2.5cm_dupla": "10x2.5cm_dupla",
	personalizado: "personalizado",
} as const;

export const PATRIMONIOMODELOIMPRESSAOETIQUETA_UTLIZARDESCRICAO_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_modelo_impressao_etiquetaControleImpressaoSchema =
	z.enum(["codigo_patrimonio", "mac", "numero_serie", "numero_patrimonio"], {
		error: () => ({
			message:
				"controle_impressao: valores válidos são [codigo_patrimonio, mac, numero_serie, numero_patrimonio]",
		}),
	});

export const patrimonio_modelo_impressao_etiquetaExibirDescricaoCompletaSchema =
	z.enum(["C", "A"], {
		error: () => ({
			message: "exibir_descricao_completa: valores válidos são [C, A]",
		}),
	});

export const patrimonio_modelo_impressao_etiquetaModeloPadraoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "modelo_padrao: valores válidos são [S, N]" }),
	},
);

export const patrimonio_modelo_impressao_etiquetaModeloPadraoSistemaSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "modelo_padrao_sistema: valores válidos são [S, N]",
		}),
	});

export const patrimonio_modelo_impressao_etiquetaOrigemLogoImpressaoSchema =
	z.enum(["SES", "EMP", "PAT", "P"], {
		error: () => ({
			message: "origem_logo_impressao: valores válidos são [SES, EMP, PAT, P]",
		}),
	});

export const patrimonio_modelo_impressao_etiquetaTamanhoEtiquetaSchema = z.enum(
	["6x2cm", "5x3cm", "10x2.5cm_dupla", "personalizado"],
	{
		error: () => ({
			message:
				"tamanho_etiqueta: valores válidos são [6x2cm, 5x3cm, 10x2.5cm_dupla, personalizado]",
		}),
	},
);

export const patrimonio_modelo_impressao_etiquetaUtlizarDescricaoSchema =
	z.enum(["P", "D"], {
		error: () => ({ message: "utlizar_descricao: valores válidos são [P, D]" }),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioModeloImpressaoEtiquetaControleImpressao = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaControleImpressaoSchema
>;

export type PatrimonioModeloImpressaoEtiquetaExibirDescricaoCompleta = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaExibirDescricaoCompletaSchema
>;

export type PatrimonioModeloImpressaoEtiquetaModeloPadrao = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaModeloPadraoSchema
>;

export type PatrimonioModeloImpressaoEtiquetaModeloPadraoSistema = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaModeloPadraoSistemaSchema
>;

export type PatrimonioModeloImpressaoEtiquetaOrigemLogoImpressao = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaOrigemLogoImpressaoSchema
>;

export type PatrimonioModeloImpressaoEtiquetaTamanhoEtiqueta = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaTamanhoEtiquetaSchema
>;

export type PatrimonioModeloImpressaoEtiquetaUtlizarDescricao = z.infer<
	typeof patrimonio_modelo_impressao_etiquetaUtlizarDescricaoSchema
>;
