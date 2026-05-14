/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEENVIO_FIELD_LABELS = {
	canal: "canal",
	contato: "contato",
	criado_em: "criado_em",
	enviado_a_fila: "enviado_a_fila",
	falha_razao: "falha_razao",
	id: "id",
	id_destinatario: "id_destinatario",
	id_lote_envios: "id_lote_envios",
	processado: "processado",
	status: "status",
	tipo_destinatario: "tipo_destinatario",
	variaveis: "variaveis",
} as const;

export const LOTEENVIO_CANAL_LABELS = {
	E: "E",
	W: "W",
	S: "S",
} as const;

export const LOTEENVIO_STATUS_LABELS = {
	criado: "criado",
	enviado_a_fila: "enviado_a_fila",
	processando: "processando",
	sucesso: "sucesso",
	falha: "falha",
} as const;

export const LOTEENVIO_TIPODESTINATARIO_LABELS = {
	lead: "lead",
	prospeccao: "prospeccao",
	cliente: "cliente",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_envioCanalSchema = z.enum(["E", "W", "S"], {
	error: () => ({ message: "canal: valores válidos são [E, W, S]" }),
});

export const lote_envioStatusSchema = z.enum(
	["criado", "enviado_a_fila", "processando", "sucesso", "falha"],
	{
		error: () => ({
			message:
				"status: valores válidos são [criado, enviado_a_fila, processando, sucesso, falha]",
		}),
	},
);

export const lote_envioTipoDestinatarioSchema = z.enum(
	["lead", "prospeccao", "cliente"],
	{
		error: () => ({
			message:
				"tipo_destinatario: valores válidos são [lead, prospeccao, cliente]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteEnvioCanal = z.infer<typeof lote_envioCanalSchema>;

export type LoteEnvioStatus = z.infer<typeof lote_envioStatusSchema>;

export type LoteEnvioTipoDestinatario = z.infer<
	typeof lote_envioTipoDestinatarioSchema
>;
