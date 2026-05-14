/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEENVIOS_FIELD_LABELS = {
	assunto_email: "assunto_email",
	criado_em: "criado_em",
	descricao: "descricao",
	df_elemento_id: "df_elemento_id",
	gateway_omnichannel_id: "gateway_omnichannel_id",
	id: "id",
	id_funcionario: "id_funcionario",
	omnichannel_template_id: "omnichannel_template_id",
	origem_envio: "origem_envio",
	reenviado: "reenviado",
	sms_id: "sms_id",
	smtp_id: "smtp_id",
	template_email: "template_email",
	template_sms: "template_sms",
	template_whatsapp: "template_whatsapp",
	total_envios: "total_envios",
} as const;

export const LOTEENVIOS_ORIGEMENVIO_LABELS = {
	mapa: "mapa",
	kanban: "kanban",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_enviosOrigemEnvioSchema = z.enum(["mapa", "kanban"], {
	error: () => ({
		message: "origem_envio: valores válidos são [mapa, kanban]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteEnviosOrigemEnvio = z.infer<
	typeof lote_enviosOrigemEnvioSchema
>;
