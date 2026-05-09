/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOENVIOEMAILPARAMETRO_FORMATOARQUIVO_LABELS = {
	PDF: "PDF",
	CSV: "CSV",
	AMB: "AMB",
} as const;

export const RELATORIOENVIOEMAILPARAMETRO_OPCMESROTINA_LABELS = {
	T: "T",
	P: "P",
} as const;

export const RELATORIOENVIOEMAILPARAMETRO_TIPOENVIO_LABELS = {
	T: "T",
	S: "S",
	M: "M",
	MP: "MP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_envio_email_parametroFormatoArquivoSchema = z.enum(
	["PDF", "CSV", "AMB"],
	{
		error: () => ({
			message: "formato_arquivo: valores válidos são [PDF, CSV, AMB]",
		}),
	},
);

export const relatorio_envio_email_parametroOpcMesRotinaSchema = z.enum(
	["T", "P"],
	{
		error: () => ({ message: "opc_mes_rotina: valores válidos são [T, P]" }),
	},
);

export const relatorio_envio_email_parametroTipoEnvioSchema = z.enum(
	["T", "S", "M", "MP"],
	{
		error: () => ({ message: "tipo_envio: valores válidos são [T, S, M, MP]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioEnvioEmailParametroFormatoArquivo = z.infer<
	typeof relatorio_envio_email_parametroFormatoArquivoSchema
>;

export type RelatorioEnvioEmailParametroOpcMesRotina = z.infer<
	typeof relatorio_envio_email_parametroOpcMesRotinaSchema
>;

export type RelatorioEnvioEmailParametroTipoEnvio = z.infer<
	typeof relatorio_envio_email_parametroTipoEnvioSchema
>;
