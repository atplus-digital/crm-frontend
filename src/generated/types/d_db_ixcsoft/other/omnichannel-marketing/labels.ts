/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OMNICHANNELMARKETING_ENVIARTEMPLATEATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const OMNICHANNELMARKETING_TIPO_LABELS = {
	omnichannel: "omnichannel",
	assinatura_digital: "assinatura_digital",
	notificacao_iniciar_deslocamento: "notificacao_iniciar_deslocamento",
	process: "process",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const omnichannel_marketingEnviarTemplateAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_template_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const omnichannel_marketingTipoSchema = z.enum(
	[
		"omnichannel",
		"assinatura_digital",
		"notificacao_iniciar_deslocamento",
		"process",
	],
	{
		error: () => ({
			message:
				"tipo: valores válidos são [omnichannel, assinatura_digital, notificacao_iniciar_deslocamento, process]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OmnichannelMarketingEnviarTemplateAtendimento = z.infer<
	typeof omnichannel_marketingEnviarTemplateAtendimentoSchema
>;

export type OmnichannelMarketingTipo = z.infer<
	typeof omnichannel_marketingTipoSchema
>;
