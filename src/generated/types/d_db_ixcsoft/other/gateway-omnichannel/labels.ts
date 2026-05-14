/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GATEWAYOMNICHANNEL_FIELD_LABELS = {
	descricao: "descricao",
	gateway: "gateway",
	id: "id",
	token: "token",
	url: "url",
	utiliza_fila_mensagens: "utiliza_fila_mensagens",
} as const;

export const GATEWAYOMNICHANNEL_GATEWAY_LABELS = {
	opasuite: "opasuite",
} as const;

export const GATEWAYOMNICHANNEL_UTILIZAFILAMENSAGENS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const gateway_omnichannelGatewaySchema = z.enum(["opasuite"], {
	error: () => ({ message: "gateway: valores válidos são [opasuite]" }),
});

export const gateway_omnichannelUtilizaFilaMensagensSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utiliza_fila_mensagens: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GatewayOmnichannelGateway = z.infer<
	typeof gateway_omnichannelGatewaySchema
>;

export type GatewayOmnichannelUtilizaFilaMensagens = z.infer<
	typeof gateway_omnichannelUtilizaFilaMensagensSchema
>;
