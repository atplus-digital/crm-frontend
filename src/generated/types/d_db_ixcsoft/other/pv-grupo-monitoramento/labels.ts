/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PVGRUPOMONITORAMENTO_ENVIARNOTIFICACAOAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pv_grupo_monitoramentoEnviarNotificacaoAppSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_notificacao_app: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PvGrupoMonitoramentoEnviarNotificacaoApp = z.infer<
	typeof pv_grupo_monitoramentoEnviarNotificacaoAppSchema
>;
