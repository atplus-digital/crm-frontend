/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ONUSAUTORIZACAOMASSALOGS_FIELD_LABELS = {
	concluido_em: "concluido_em",
	id: "id",
	id_autorizacao_massa: "id_autorizacao_massa",
	id_cliente_fibra: "id_cliente_fibra",
	id_ponid: "id_ponid",
	id_script: "id_script",
	iniciado_em: "iniciado_em",
	mac: "mac",
	modelo: "modelo",
	retorno: "retorno",
	status: "status",
} as const;

export const ONUSAUTORIZACAOMASSALOGS_STATUS_LABELS = {
	executando: "executando",
	aguardando: "aguardando",
	falha: "falha",
	sucesso: "sucesso",
	ignorado: "ignorado",
	interrompido: "interrompido",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const onus_autorizacao_massa_logsStatusSchema = z.enum(
	["executando", "aguardando", "falha", "sucesso", "ignorado", "interrompido"],
	{
		error: () => ({
			message:
				"status: valores válidos são [executando, aguardando, falha, sucesso, ignorado, interrompido]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OnusAutorizacaoMassaLogsStatus = z.infer<
	typeof onus_autorizacao_massa_logsStatusSchema
>;
