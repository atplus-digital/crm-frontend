/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PVMONITORAMENTOHOSTS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PVMONITORAMENTOHOSTS_PROTOCOLO_LABELS = {
	ipv4: "ipv4",
	ipv6: "ipv6",
} as const;

export const PVMONITORAMENTOHOSTS_STATUS_LABELS = {
	O: "O",
	B: "B",
	R: "R",
	RU: "RU",
	P: "P",
	OF: "OF",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pv_monitoramento_hostsAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const pv_monitoramento_hostsProtocoloSchema = z.enum(["ipv4", "ipv6"], {
	error: () => ({ message: "protocolo: valores válidos são [ipv4, ipv6]" }),
});

export const pv_monitoramento_hostsStatusSchema = z.enum(
	["O", "B", "R", "RU", "P", "OF"],
	{
		error: () => ({
			message: "status: valores válidos são [O, B, R, RU, P, OF]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PvMonitoramentoHostsAtivo = z.infer<
	typeof pv_monitoramento_hostsAtivoSchema
>;

export type PvMonitoramentoHostsProtocolo = z.infer<
	typeof pv_monitoramento_hostsProtocoloSchema
>;

export type PvMonitoramentoHostsStatus = z.infer<
	typeof pv_monitoramento_hostsStatusSchema
>;
