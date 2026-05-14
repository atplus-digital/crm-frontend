/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NASCGNAT_FIELD_LABELS = {
	configuracao_cgnat: "configuracao_cgnat",
	id: "id",
	id_integracao_cgnat: "id_integracao_cgnat",
	id_nas: "id_nas",
	interface_wan: "interface_wan",
	ip_final: "ip_final",
	ip_inicial: "ip_inicial",
	ip_privado_por_publico: "ip_privado_por_publico",
	ip_publico: "ip_publico",
	porta_inicial: "porta_inicial",
	portas_por_ip: "portas_por_ip",
	protocolo: "protocolo",
	rede: "rede",
	tipo: "tipo",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const NASCGNAT_PROTOCOLO_LABELS = {
	T: "T",
	TU: "TU",
} as const;

export const NASCGNAT_TIPO_LABELS = {
	V: "V",
	H: "H",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nas_cgnatProtocoloSchema = z.enum(["T", "TU"], {
	error: () => ({ message: "protocolo: valores válidos são [T, TU]" }),
});

export const nas_cgnatTipoSchema = z.enum(["V", "H"], {
	error: () => ({ message: "tipo: valores válidos são [V, H]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NasCgnatProtocolo = z.infer<typeof nas_cgnatProtocoloSchema>;

export type NasCgnatTipo = z.infer<typeof nas_cgnatTipoSchema>;
