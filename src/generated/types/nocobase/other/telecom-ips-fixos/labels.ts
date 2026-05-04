/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS = {
	"0": "Não",
	"1": "Sim",
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
