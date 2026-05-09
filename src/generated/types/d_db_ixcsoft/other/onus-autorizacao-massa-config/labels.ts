/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ONUSAUTORIZACAOMASSACONFIG_STATUS_LABELS = {
	executando: "executando",
	aguardando: "aguardando",
	falha: "falha",
	sucesso: "sucesso",
	interrompido: "interrompido",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const onus_autorizacao_massa_configStatusSchema = z.enum(
	["executando", "aguardando", "falha", "sucesso", "interrompido"],
	{
		error: () => ({
			message:
				"status: valores válidos são [executando, aguardando, falha, sucesso, interrompido]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OnusAutorizacaoMassaConfigStatus = z.infer<
	typeof onus_autorizacao_massa_configStatusSchema
>;
