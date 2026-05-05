/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TELECOMINTERFACES_CONFIGURACAO_LABELS = {
	1: "Acesso",
	2: "Tronco",
	3: "Hibrida",
} as const;

export const TELECOMINTERFACES_TIPO_LABELS = {
	1: "SFP",
	3: "METALICA",
	2: "SFP+",
	4: "QSFP",
	5: "VLAN",
	6: "VPN",
	7: "ETH-TRUNK (LAG)",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const telecom_interfacesConfiguracaoSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "configuracao: valores válidos são [Acesso, Tronco, Hibrida]",
	}),
});

export const telecom_interfacesTipoSchema = z.enum(
	["1", "3", "2", "4", "5", "6", "7"],
	{
		error: () => ({
			message:
				"tipo: valores válidos são [SFP, METALICA, SFP+, QSFP, VLAN, VPN, ETH-TRUNK (LAG)]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TelecomInterfacesConfiguracao = z.infer<
	typeof telecom_interfacesConfiguracaoSchema
>;

export type TelecomInterfacesTipo = z.infer<
	typeof telecom_interfacesTipoSchema
>;
