/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TELECOMIPSFIXOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_contrato_ixc: "Contrato IXC",
	f_controle: "Controle",
	f_ip: "Endereço IP",
	f_login: "Login vinculado",
	f_possui_ip_fixo: "Possui IP Fixo no contrato",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS = {
	0: "Não",
	1: "Sim",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const telecom_ips_fixosPossuiIpFixoSchema = z.enum(["0", "1"], {
	error: () => ({ message: "possui_ip_fixo: valores válidos são [Não, Sim]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TelecomIpsFixosPossuiIpFixo = z.infer<
	typeof telecom_ips_fixosPossuiIpFixoSchema
>;
